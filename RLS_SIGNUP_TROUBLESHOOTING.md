# RLS Signup Troubleshooting Guide

## Error: "new row violates row-level security policy for table users"

This error occurs when the RLS policy doesn't allow users to insert their own profile during signup.

## Solution

### Step 1: Run the RLS Fix SQL

Go to Supabase Dashboard → SQL Editor and run `FIX_RLS_SIGNUP.sql` or `COMPLETE_RLS_FIX.sql`.

### Step 2: Verify Policies Exist

Run this query to check if the INSERT policies exist:

```sql
SELECT policyname, cmd, roles, with_check 
FROM pg_policies 
WHERE tablename = 'users' AND cmd = 'INSERT';
```

You should see:
- `Users can insert own profile` (for authenticated role)
- `Users can insert own profile anon` (for anon role)

### Step 3: Check Policy Details

If policies exist but still not working, check the WITH CHECK clause:

```sql
SELECT policyname, with_check
FROM pg_policies
WHERE tablename = 'users' AND cmd = 'INSERT';
```

Both should have: `auth.uid() = id`

## Common Issues

### Issue 1: Policy doesn't allow anon role
**Solution**: Make sure you have both policies:
- One for `authenticated` role
- One for `anon` role

### Issue 2: Policy order matters
**Solution**: The INSERT policy should be created FIRST, before SELECT/UPDATE policies.

### Issue 3: RLS is enabled but no policies
**Solution**: If RLS is enabled but no policies exist, INSERT will fail. Make sure policies are created.

### Issue 4: auth.uid() is null during signup
**Solution**: This shouldn't happen with Supabase Auth, but if it does, check:
- Email confirmation settings
- Supabase Auth configuration
- Browser console for auth errors

## Testing

After applying the fix:

1. Try creating a new account
2. Check browser console for errors
3. Check Supabase logs for RLS violations
4. Verify the user was created in both `auth.users` and `public.users`

## Alternative: Disable RLS Temporarily (NOT RECOMMENDED)

If you need to test without RLS:

```sql
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;
```

**⚠️ WARNING**: Only use this for testing. Re-enable RLS and add proper policies before production.

## Still Not Working?

1. Check Supabase Dashboard → Authentication → Settings
2. Verify email confirmation settings
3. Check Supabase logs for detailed error messages
4. Ensure `is_admin()` function exists and has proper grants
