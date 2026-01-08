# Financial Beacon Consulting Website

A professional, responsive Next.js website for Financial Beacon Consulting (FBC), a financial consulting company based in Nairobi, Kenya.

## Features

- **Modern Design**: Clean, minimal, and professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **SEO Optimized**: Comprehensive SEO with meta tags, structured data (JSON-LD), and semantic HTML
- **Performance**: Built with Next.js 14 for optimal performance
- **Accessibility**: Semantic HTML and proper ARIA labels

## Pages & Sections

1. **Homepage / Hero Section**
   - Company name and tagline
   - Professional background image
   - Call-to-action buttons
   - Smooth fade-in animations

2. **About Us Section**
   - Company description
   - Key highlights (Professional, Reliable, Compliant)

3. **Services Section**
   - Business Registration
   - Tax & Statutory Compliance
   - Accounting & Financial Management
   - Audit, Risk & Advisory
   - Trade Finance & Guarantees

4. **Testimonials Section**
   - Client reviews and ratings

5. **FAQ Section**
   - Common questions with expandable answers
   - FAQ schema markup for SEO

6. **Contact Section**
   - Contact information
   - Google Form placeholder
   - Google Maps placeholder
   - Structured data for organization

7. **Footer**
   - Social media links
   - Quick navigation
   - Contact information
   - Copyright notice

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy to production:
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub (if not already done):
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

3. Click "Add New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the project

6. Click "Deploy" - Vercel will build and deploy your site automatically

### Post-Deployment

- Your site will be available at `https://your-project-name.vercel.app`
- You can add a custom domain in the Vercel dashboard under Project Settings → Domains
- Environment variables (if needed) can be added in Project Settings → Environment Variables

## Customization

### Update Contact Information

Edit the contact details in:
- `components/ContactSection.tsx`
- `components/Footer.tsx`
- `app/layout.tsx` (metadata)

### Add Google Form

Replace the placeholder Google Form URL in `components/ContactSection.tsx`:
```tsx
src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
```

### Add Google Maps

Replace the Google Maps placeholder in `components/ContactSection.tsx` with your embed code.

### Update Social Media Links

Edit the social media URLs in `components/Footer.tsx`.

### Customize Colors

Modify the color scheme in `tailwind.config.js` under the `theme.extend.colors` section.

## SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags
- Structured data (JSON-LD) for:
  - Organization
  - Contact information
  - FAQ schema
- Semantic HTML (h1, h2, h3, section, etc.)
- Proper heading hierarchy

## Technologies Used

- **Next.js 14**: React framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **React**: UI library

## License

Copyright © 2024 Financial Beacon Consulting. All rights reserved.
