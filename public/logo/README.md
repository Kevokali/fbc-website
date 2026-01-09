# Logo Placement Instructions

## Where to Add Your Logo

Place your logo file in the `public/logo/` directory with one of these filenames:

### Recommended Files:
1. **`logo.png`** - Main logo (recommended format: PNG with transparent background)
2. **`logo.svg`** - Vector logo (best for scalability)
3. **`logo-white.png`** - White version for dark backgrounds (optional)
4. **`logo-dark.png`** - Dark version for light backgrounds (optional)

## File Specifications

### For Navbar (Top Navigation):
- **Size**: 150-200px width (height will auto-adjust)
- **Format**: PNG or SVG
- **Background**: Transparent preferred
- **Color**: Works on dark blue background

### For Footer:
- **Size**: 150-200px width
- **Format**: PNG or SVG
- **Background**: Transparent preferred
- **Color**: Works on dark blue background

## File Structure

```
public/
  └── logo/
      ├── logo.png          ← Add your main logo here
      ├── logo.svg          ← Or use SVG format
      └── README.md         ← This file
```

## After Adding Your Logo

The logo will automatically appear in:
1. **Navbar** - Top left of every page
2. **Footer** - Top of the footer section
3. **Structured Data** - For SEO (already configured)

## Notes

- If you use `logo.png`, it will be used automatically
- If you use `logo.svg`, update the file extension in the components
- For best results, use a logo with a transparent background
- The logo will be responsive and scale appropriately on mobile devices
