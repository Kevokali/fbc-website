-- Complete RLS Fix for Users Table
-- This fixes both infinite recursion and insert policy issues
-- Run this in Supabase SQL Editor AFTER running the main schema

-- ============================================
-- PART 1: Create is_admin() function
-- ============================================
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

-- ============================================
-- PART 2: Drop all existing policies on users table
-- ============================================
DROP POLICY IF EXISTS "Users can view own profile" ON public.users;
DROP POLICY IF EXISTS "Users can update own profile" ON public.users;
DROP POLICY IF EXISTS "Users can insert own profile" ON public.users;
DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
DROP POLICY IF EXISTS "Admins can update all users" ON public.users;
DROP POLICY IF EXISTS "Admins can insert users" ON public.users;

-- ============================================
-- PART 3: Create new policies (in correct order)
-- ============================================

-- CRITICAL: Users must be able to INSERT their own profile during signup
-- This must come FIRST and is the most important policy for signup to work
-- Allow both authenticated and anon users (anon needed during signup flow)
CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT 
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Also allow anon users during signup (safe because WITH CHECK ensures own id only)
CREATE POLICY "Users can insert own profile anon" ON public.users
  FOR INSERT 
  TO anon
  WITH CHECK (auth.uid() = id);

-- Users can view their own profile
CREATE POLICY "Users can view own profile" ON public.users
  FOR SELECT 
  USING (auth.uid() = id);

-- Users can update their own profile
CREATE POLICY "Users can update own profile" ON public.users
  FOR UPDATE 
  USING (auth.uid() = id);

-- Admins can view all users (using function to avoid recursion)
CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT 
  USING (public.is_admin());

-- Admins can update all users
CREATE POLICY "Admins can update all users" ON public.users
  FOR UPDATE 
  USING (public.is_admin());

-- Admins can insert users (for admin-created accounts)
CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT 
  WITH CHECK (public.is_admin());

-- ============================================
-- PART 4: Verify policies
-- ============================================
-- Run this to see all policies on users table:
-- SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
-- FROM pg_policies 
-- WHERE tablename = 'users'
-- ORDER BY policyname;
