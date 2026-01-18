# Supabase Email Confirmation Setup

## Issue: Signup Not Redirecting to Dashboard

If signup doesn't automatically log you in and redirect, it's likely because **email confirmation is enabled** in your Supabase project.

## Solution Options

### Option 1: Disable Email Confirmation (Recommended for Development)

1. Go to Supabase Dashboard
2. Navigate to: **Authentication** → **Settings** → **Email Auth**
3. Find **"Enable email confirmations"**
4. **Disable** it (toggle off)
5. Save changes

**Result**: Users will be automatically logged in after signup and redirected to dashboard.

### Option 2: Keep Email Confirmation Enabled

If you want to keep email confirmation enabled:

1. After signup, users will receive a confirmation email
2. They must click the confirmation link before they can log in
3. Update the signup page to show a message like:
   ```tsx
   "Account created! Please check your email to confirm your account before logging in."
   ```

## Admin Login

If you've added an admin user directly in Supabase:

1. **Make sure the user exists in the `users` table** with `role = 'admin'`
2. The user should be in `auth.users` (created via Supabase Auth)
3. Login should work automatically - the `login()` function fetches the role from the database

### To Create Admin User in Supabase:

1. **Via Supabase Dashboard**:
   - Go to **Authentication** → **Users**
   - Click **"Add user"** → **"Create new user"**
   - Enter email and password
   - Create the user

2. **Add to `users` table**:
   - Go to **Table Editor** → `users` table
   - Insert a new row:
     - `id`: Copy the UUID from `auth.users` table
     - `email`: Same email as auth user
     - `name`: Admin name
     - `role`: `'admin'`
     - `business_name`: (can be null for admin)

3. **Test Login**:
   - Use the email and password you set
   - Should redirect to `/dashboard/admin`

## Troubleshooting

### Signup redirects but user not logged in:
- Check if email confirmation is enabled
- Check browser console for errors
- Verify Supabase environment variables are set correctly

### Admin login not working:
- Verify user exists in both `auth.users` and `public.users` tables
- Check that `role` is set to `'admin'` (not `'Admin'` or `'ADMIN'`)
- Check browser console for errors
- Verify the email/password are correct

### "User profile not found" error:
- The user exists in `auth.users` but not in `public.users` table
- Create the corresponding row in `public.users` table with matching `id`
