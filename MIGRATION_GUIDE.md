# Migration Guide: localStorage to Supabase

## Step-by-Step Migration

### Phase 1: Setup (Do Once)

1. **Create Supabase Project**
   - Follow BACKEND_INTEGRATION_GUIDE.md
   - Get API keys
   - Run database schema

2. **Install Dependencies**
   ```bash
   npm install @supabase/supabase-js
   ```

3. **Add Environment Variables**
   - Create `.env.local`
   - Add Supabase URL and keys

### Phase 2: Update Authentication

**File: `lib/auth.ts`**

Replace localStorage-based auth with Supabase:

```typescript
import { supabase } from './supabase'
import type { User } from './types'

export async function login(email: string, password: string): Promise<User | null> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) {
    console.error('Login error:', error)
    return null
  }
  
  // Fetch user profile
  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', data.user.id)
    .single()
  
  return profile as User
}

export async function logout(): Promise<void> {
  await supabase.auth.signOut()
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null
  
  const profile = await getUserProfile(user.id)
  return profile as User | null
}
```

### Phase 3: Update Data Operations

**Example: Documents**

Replace:
```typescript
// OLD: localStorage
const documents = JSON.parse(localStorage.getItem('documents') || '[]')
```

With:
```typescript
// NEW: Supabase
const { data: documents } = await supabase
  .from('documents')
  .select('*')
  .eq('user_id', userId)
  .order('uploaded_at', { ascending: false })
```

### Phase 4: File Uploads

**Update `app/dashboard/client/documents/page.tsx`:**

```typescript
const handleFileUpload = async (type: string, file: File) => {
  const user = await getCurrentUser()
  if (!user) return

  // Upload to Supabase Storage
  const fileExt = file.name.split('.').pop()
  const fileName = `${user.id}/${Date.now()}.${fileExt}`
  
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from('documents')
    .upload(fileName, file)
  
  if (uploadError) {
    alert('Upload failed: ' + uploadError.message)
    return
  }
  
  // Get public URL
  const { data: { publicUrl } } = supabase.storage
    .from('documents')
    .getPublicUrl(fileName)
  
  // Save document record
  const { data: doc, error: docError } = await supabase
    .from('documents')
    .insert({
      user_id: user.id,
      type,
      file_name: file.name,
      file_url: publicUrl,
      file_size: file.size,
      status: 'uploaded',
    })
    .select()
    .single()
  
  if (docError) {
    alert('Failed to save document record')
    return
  }
  
  // Update UI
  setDocuments([doc, ...documents])
}
```

### Phase 5: Real-time Notifications

**Update `components/dashboard/NotificationBell.tsx`:**

```typescript
useEffect(() => {
  const user = getCurrentUser()
  if (!user) return

  // Subscribe to real-time notifications
  const channel = supabase
    .channel(`notifications:${user.id}`)
    .on('postgres_changes', {
      event: 'INSERT',
      schema: 'public',
      table: 'notifications',
      filter: `user_id=eq.${user.id}`,
    }, (payload) => {
      // Add new notification
      setNotifications((prev) => [payload.new as Notification, ...prev])
      setUnreadCount((prev) => prev + 1)
    })
    .subscribe()

  // Load initial notifications
  loadNotifications()

  return () => {
    supabase.removeChannel(channel)
  }
}, [])
```

### Phase 6: Service Requests

**Update `app/dashboard/client/requests/page.tsx`:**

```typescript
const handleSubmit = async () => {
  const user = await getCurrentUser()
  if (!user) return

  const { data, error } = await supabase
    .from('service_requests')
    .insert({
      user_id: user.id,
      client_name: user.name,
      business_name: user.business_name || '',
      ...newRequest,
      status: 'pending',
    })
    .select()
    .single()
  
  if (error) {
    alert('Failed to submit request: ' + error.message)
    return
  }
  
  setRequests([data, ...requests])
  setShowNewRequestForm(false)
}
```

### Phase 7: Settings

**Update `app/dashboard/admin/settings/page.tsx`:**

```typescript
const handleSave = async () => {
  const { data, error } = await supabase
    .from('site_settings')
    .upsert({
      is_open: settings.isOpen,
      open_message: settings.openMessage,
      closed_message: settings.closedMessage,
      updated_by: user?.id,
    })
    .select()
    .single()
  
  if (error) {
    alert('Failed to save settings')
    return
  }
  
  setSaved(true)
}
```

## Testing Checklist

- [ ] User registration works
- [ ] User login works
- [ ] User logout works
- [ ] Documents upload to Supabase Storage
- [ ] Documents list loads from database
- [ ] Service requests create and list
- [ ] Admin can view all client data
- [ ] Real-time notifications work
- [ ] Settings save and load
- [ ] RLS policies prevent unauthorized access

## Rollback Plan

If issues occur:
1. Keep localStorage code as fallback
2. Add feature flag: `USE_SUPABASE=true`
3. Gradually migrate features one by one

## Performance Tips

1. **Use Indexes**: Already included in schema
2. **Pagination**: Add `.range()` for large lists
3. **Caching**: Use React Query or SWR
4. **Optimistic Updates**: Update UI before API response

## Security Checklist

- [ ] RLS policies enabled on all tables
- [ ] Service role key never exposed to client
- [ ] File uploads validated (type, size)
- [ ] SQL injection prevented (Supabase handles this)
- [ ] CORS configured correctly
- [ ] Environment variables secured
