-- Fix for infinite recursion in RLS policies
-- Run this in Supabase SQL Editor

-- Step 1: Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can view all users" ON public.users;
DROP POLICY IF EXISTS "Admins can view all business profiles" ON public.business_profiles;
DROP POLICY IF EXISTS "Admins can view all documents" ON public.documents;
DROP POLICY IF EXISTS "Admins can view all requests" ON public.service_requests;
DROP POLICY IF EXISTS "Admins can manage site settings" ON public.site_settings;

-- Step 2: Create a security definer function to check if user is admin
-- This function bypasses RLS to check the role
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

-- Step 3: Recreate policies using the function
-- Users table policies
CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (public.is_admin());

CREATE POLICY "Admins can update all users" ON public.users
  FOR UPDATE USING (public.is_admin());

CREATE POLICY "Admins can insert users" ON public.users
  FOR INSERT WITH CHECK (public.is_admin());

-- Business Profiles
CREATE POLICY "Admins can view all business profiles" ON public.business_profiles
  FOR SELECT USING (public.is_admin());

CREATE POLICY "Admins can manage all business profiles" ON public.business_profiles
  FOR ALL USING (public.is_admin());

-- Documents
CREATE POLICY "Admins can view all documents" ON public.documents
  FOR SELECT USING (public.is_admin());

CREATE POLICY "Admins can manage all documents" ON public.documents
  FOR ALL USING (public.is_admin());

-- Service Requests
CREATE POLICY "Admins can view all requests" ON public.service_requests
  FOR SELECT USING (public.is_admin());

CREATE POLICY "Admins can manage all requests" ON public.service_requests
  FOR ALL USING (public.is_admin());

-- Site Settings
CREATE POLICY "Admins can manage site settings" ON public.site_settings
  FOR ALL USING (public.is_admin());

-- Step 4: Also allow users to insert their own profile during signup
-- This is needed so new users can create their profile
CREATE POLICY "Users can insert own profile" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Step 5: Grant execute permission on the function
GRANT EXECUTE ON FUNCTION public.is_admin() TO authenticated;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon;
