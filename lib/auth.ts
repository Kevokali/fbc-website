// Supabase-based authentication utilities
import { supabase, getCurrentSupabaseUser, getUserProfile } from './supabase'
import type { User, UserRole } from './types'

/**
 * Login with email and password
 * @param email User email
 * @param password User password
 * @returns User object if successful, null otherwise
 */
export async function login(email: string, password: string): Promise<User | null> {
  try {
    // Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      console.error('Login error:', authError.message)
      return null
    }

    if (!authData.user) {
      return null
    }

    // Fetch user profile from database
    const profile = await getUserProfile(authData.user.id)
    
    if (!profile) {
      console.error('User profile not found')
      return null
    }

    // Map database profile to User type
    const user: User = {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      role: profile.role as UserRole,
      businessName: profile.business_name || undefined,
      assignedStaff: profile.assigned_staff || undefined,
    }

    return user
  } catch (error) {
    console.error('Login error:', error)
    return null
  }
}

/**
 * Sign up new user (client registration)
 * @param userData User registration data
 * @returns User object if successful, throws error otherwise
 */
export async function signup(userData: {
  email: string
  password: string
  name: string
  businessName: string
  registrationNo: string
  kraPin: string
  businessType: string
  taxObligations: any
  contactPerson: any
}): Promise<User> {
  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    })

    if (authError) {
      throw new Error(authError.message)
    }

    if (!authData.user) {
      throw new Error('Failed to create user')
    }

    // Create user profile in database
    const { data: profile, error: profileError } = await supabase
      .from('users')
      .insert({
        id: authData.user.id,
        email: userData.email,
        name: userData.name,
        role: 'client',
        business_name: userData.businessName,
      })
      .select()
      .single()

    if (profileError) {
      // If profile creation fails, log error (can't delete user from client-side)
      console.error('Profile creation error:', profileError)
      throw new Error(profileError.message)
    }

    // Create business profile
    const { error: businessError } = await supabase
      .from('business_profiles')
      .insert({
        user_id: authData.user.id,
        business_name: userData.businessName,
        registration_no: userData.registrationNo,
        kra_pin: userData.kraPin,
        business_type: userData.businessType,
        tax_obligations: userData.taxObligations,
        contact_person: userData.contactPerson,
      })

    if (businessError) {
      console.error('Business profile creation error:', businessError)
      // Don't throw - user is created, business profile can be added later
    }

    // Check if email confirmation is required
    // If user needs to confirm email, authData.session will be null
    if (!authData.session) {
      // Email confirmation required - user will need to confirm email before logging in
      // But we still return the user object for UI purposes
      const user: User = {
        id: profile.id,
        email: profile.email,
        name: profile.name,
        role: profile.role as UserRole,
        businessName: profile.business_name || undefined,
        assignedStaff: profile.assigned_staff || undefined,
      }
      return user
    }

    // Return user object (user is automatically logged in if email confirmation is disabled)
    const user: User = {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      role: profile.role as UserRole,
      businessName: profile.business_name || undefined,
      assignedStaff: profile.assigned_staff || undefined,
    }

    return user
  } catch (error) {
    console.error('Signup error:', error)
    throw error
  }
}

/**
 * Logout current user
 */
export async function logout(): Promise<void> {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Logout error:', error)
    }
  } catch (error) {
    console.error('Logout error:', error)
  }
}

/**
 * Get current authenticated user
 * @returns User object if authenticated, null otherwise
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    // Get Supabase auth user
    const supabaseUser = await getCurrentSupabaseUser()
    if (!supabaseUser) {
      return null
    }

    // Get user profile from database
    const profile = await getUserProfile(supabaseUser.id)
    if (!profile) {
      return null
    }

    // Map to User type
    const user: User = {
      id: profile.id,
      email: profile.email,
      name: profile.name,
      role: profile.role as UserRole,
      businessName: profile.business_name || undefined,
      assignedStaff: profile.assigned_staff || undefined,
    }

    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

/**
 * Check if user is authenticated
 * @returns true if authenticated, false otherwise
 */
export async function isAuthenticated(): Promise<boolean> {
  try {
    const user = await getCurrentUser()
    return user !== null
  } catch (error) {
    return false
  }
}

/**
 * Require authentication and optionally check role
 * @param role Optional role to check
 * @returns User if authenticated and role matches, null otherwise
 */
export async function requireAuth(role?: UserRole): Promise<User | null> {
  const user = await getCurrentUser()
  if (!user) {
    return null
  }
  if (role && user.role !== role) {
    return null
  }
  return user
}

/**
 * Reset password (send reset email)
 * @param email User email
 */
export async function resetPassword(email: string): Promise<void> {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    console.error('Password reset error:', error)
    throw error
  }
}

/**
 * Update password
 * @param newPassword New password
 */
export async function updatePassword(newPassword: string): Promise<void> {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) {
      throw new Error(error.message)
    }
  } catch (error) {
    console.error('Password update error:', error)
    throw error
  }
}
