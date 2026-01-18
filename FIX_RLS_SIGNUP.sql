-- Fix RLS Policy for Signup - Run this in Supabase SQL Editor
-- This ensures users can insert their own profile during signup

-- Step 1: Ensure is_admin() function exists
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

-- Step 2: Drop and recreate the INSERT policy with proper permissions
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;

-- This policy allows users to insert their own profile
-- The WITH CHECK ensures auth.uid() matches the id being inserted
-- This is critical for signup to work
CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Also allow anon users to insert (needed during signup flow)
-- This is safe because WITH CHECK ensures they can only insert their own id
CREATE POLICY "Users can insert own profile anon" ON public.users
  FOR INSERT 
  TO anon
  WITH CHECK (auth.uid() = id);

-- Step 3: Verify the policy exists
-- Run this query to check:
-- SELECT policyname, cmd, roles, with_check 
-- FROM pg_policies 
-- WHERE tablename = 'users' AND cmd = 'INSERT';
