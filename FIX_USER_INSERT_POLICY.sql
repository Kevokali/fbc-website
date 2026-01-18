-- Fix for "new row violates row-level security policy for table users"
-- This allows users to insert their own profile during signup
-- Run this in Supabase SQL Editor

-- Step 1: Drop existing insert policies if they exist
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Admins can insert users" ON public.users;

-- Step 2: Create policy that allows users to insert their own profile
-- This is critical for signup - users must be able to create their profile
-- The check ensures they can only insert a row where id = auth.uid()
-- IMPORTANT: This policy must exist for signup to work!
CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- Step 3: Also allow admins to insert users (for admin-created accounts)
-- Make sure the is_admin() function exists first (from FIX_RLS_RECURSION.sql)
-- If the function doesn't exist, create it:
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.users
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;

CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT 
  WITH CHECK (public.is_admin());

-- Step 4: Verify the policies are correct
-- You can check by running:
-- SELECT * FROM pg_policies WHERE tablename = 'users';

-- Step 5: Test the policy (optional - for debugging)
-- Try inserting a test user profile to see if it works
-- This should work if you're authenticated and inserting your own id
