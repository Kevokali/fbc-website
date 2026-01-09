# Vercel Deployment Guide for FBC Website

## ✅ Pre-Deployment Checklist

Your website is ready for deployment! The build completed successfully with:
- ✓ All pages compiled
- ✓ No TypeScript errors
- ✓ No ESLint errors
- ✓ All deprecation warnings fixed

## 🚀 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign in with GitHub (if you haven't already)

2. **Import Your Project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed)
   - Add any environment variables if you have them
   - For this project, none are required

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 2-3 minutes)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# For production deployment
vercel --prod
```

## 📋 Important Files for Deployment

### Required Files (Already in place):
- ✅ `package.json` - Dependencies and scripts
- ✅ `next.config.js` - Next.js configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tailwind.config.js` - Tailwind CSS configuration
- ✅ `.gitignore` - Git ignore rules (includes .vercel)

### Public Assets:
- ✅ `public/logo/` - Logo and favicon files
- ✅ `public/team/` - Team photos

## ⚙️ Vercel Configuration

### Automatic Configuration:
Vercel will automatically:
- Detect Next.js framework
- Run `npm install`
- Run `npm run build`
- Deploy the `.next` output

### Build Settings (Auto-detected):
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x (auto-detected)

## 🔧 Post-Deployment

### 1. Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Follow DNS configuration instructions

### 2. Environment Variables (If needed later)
- Go to Project Settings → Environment Variables
- Add any required variables

### 3. Verify Deployment
- Check all pages load correctly
- Test contact forms
- Verify images load
- Check favicon appears

## 📝 Notes

- **Favicon**: Make sure `public/logo/favicon-rounded.png` is committed to your repository
- **Team Photos**: Ensure team photos are in `public/team/` directory
- **Logo**: Ensure logo is in `public/logo/logo.png`

## 🐛 Troubleshooting

### If Build Fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version compatibility

### If Favicon Doesn't Show:
1. Clear browser cache
2. Verify file exists at `/logo/favicon-rounded.png`
3. Check file is committed to repository

### If Images Don't Load:
1. Verify images are in `public/` directory
2. Check image paths in components
3. Ensure images are committed to repository

## ✅ Your Website is Ready!

All systems are go! Your build completed successfully and you're ready to deploy to Vercel.

Good luck with your deployment! 🚀
