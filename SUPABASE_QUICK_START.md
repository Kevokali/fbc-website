# Supabase Quick Start Guide

## Recommendation: **Supabase** ✅

**Why Supabase over raw PostgreSQL:**
- ✅ Built on PostgreSQL (same database, more features)
- ✅ Built-in authentication (perfect for client/admin roles)
- ✅ Real-time subscriptions (for notifications)
- ✅ File storage (for documents)
- ✅ Auto-generated APIs (faster development)
- ✅ Free tier (generous for MVP)
- ✅ Easy to use dashboard
- ✅ Can migrate to raw PostgreSQL later if needed

## Quick Setup (5 Steps)

### 1. Create Supabase Account
- Visit: https://supabase.com
- Sign up (free)
- Create new project
- Choose region closest to Kenya
- Save your database password

### 2. Get API Keys
- Go to: Settings → API
- Copy:
  - Project URL
  - `anon` `public` key
  - `service_role` `secret` key (keep this secret!)

### 3. Install Package
```bash
npm install @supabase/supabase-js
```

### 4. Add Environment Variables
Create `.env.local` in project root:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc... (secret!)
```

### 5. Run Database Schema
- Go to Supabase Dashboard → SQL Editor
- Copy SQL from `BACKEND_INTEGRATION_GUIDE.md`
- Run it to create all tables

## What You Get

### ✅ Authentication
- User signup/login
- Password reset
- Email verification
- Session management

### ✅ Database
- PostgreSQL database
- Auto-generated REST API
- Real-time subscriptions
- Row Level Security (RLS)

### ✅ Storage
- File uploads
- Public/private buckets
- CDN delivery

### ✅ Real-time
- Live notifications
- Live data updates
- WebSocket connections

## Next Steps

1. **Read**: `BACKEND_INTEGRATION_GUIDE.md` - Complete setup guide
2. **Read**: `MIGRATION_GUIDE.md` - How to migrate from localStorage
3. **Update**: Replace localStorage calls with Supabase calls
4. **Test**: Verify all features work with database

## Cost Comparison

**Supabase Free Tier:**
- 500 MB database
- 1 GB file storage
- 50,000 monthly active users
- 2 GB bandwidth

**Raw PostgreSQL:**
- Server costs: $10-50/month
- Need to set up everything manually
- More time to develop

**Recommendation**: Start with Supabase free tier, upgrade when needed.

## Support

- Supabase Docs: https://supabase.com/docs
- Discord Community: https://discord.supabase.com
- GitHub: https://github.com/supabase/supabase
