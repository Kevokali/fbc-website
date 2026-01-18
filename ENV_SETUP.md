# Environment Variables Setup

## ✅ `.gitignore` Status

Your `.gitignore` file already includes `.env*.local` on line 28, so `.env.local` will **automatically be ignored** by Git. No changes needed!

## 📝 Create `.env.local` File

Create a file named `.env.local` in your project root with the following content:

```env
# Supabase Configuration
# Get these values from: Supabase Dashboard → Settings → API
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-secret-key-here

# Google Analytics
NEXT_PUBLIC_GA_ID=G-X712M38L3L

# Optional: Other services (uncomment if needed)
# AWS_S3_BUCKET=your-bucket-name
# AWS_ACCESS_KEY_ID=your-access-key
# AWS_SECRET_ACCESS_KEY=your-secret-key
```

## 🔑 How to Get Supabase Keys

1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project (or create one)
3. Go to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** key → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

## ⚠️ Important Notes

- **Never commit `.env.local` to Git** (already in `.gitignore`)
- **Never share your `SUPABASE_SERVICE_ROLE_KEY`** publicly
- **Restart your dev server** after creating/updating `.env.local`
- Use `.env.local.example` as a template for team members (without real keys)

## 🚀 After Setup

1. Replace placeholder values with your actual Supabase keys
2. Restart your development server: `npm run dev`
3. Test the connection in your app

## 📋 Production Deployment

For production (Vercel, Netlify, etc.):
- Add these same environment variables in your hosting platform's dashboard
- Use the same variable names
- Never commit real keys to Git
