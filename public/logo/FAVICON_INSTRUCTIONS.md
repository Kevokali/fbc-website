# Favicon Setup Instructions

## Current Setup
The website is configured to use your logo as the favicon (browser tab icon).

## Recommended Favicon Files

For best compatibility across all browsers and devices, create these favicon files:

### Required Files:
1. **`favicon.ico`** (16x16, 32x32, 48x48 sizes combined)
   - Place in: `public/favicon.ico`
   - This is the traditional favicon format

2. **`logo.png`** (Already configured)
   - Current location: `public/logo/logo.png`
   - Used for modern browsers
   - Recommended size: 32x32px or 64x64px

### Optional but Recommended:
3. **`apple-touch-icon.png`** (180x180px)
   - Place in: `public/logo/apple-touch-icon.png`
   - For iOS devices (iPhone, iPad)
   - Size: 180x180 pixels

4. **`icon-192.png`** (192x192px)
   - Place in: `public/logo/icon-192.png`
   - For Android devices
   - Size: 192x192 pixels

5. **`icon-512.png`** (512x512px)
   - Place in: `public/logo/icon-512.png`
   - For Android devices and PWA
   - Size: 512x512 pixels

## How to Create Favicon Files

### Option 1: Online Tools
1. Visit https://favicon.io/ or https://realfavicongenerator.net/
2. Upload your logo image
3. Download the generated favicon files
4. Place them in the appropriate directories

### Option 2: Image Editor
1. Resize your logo to the required sizes
2. Save as PNG format
3. For favicon.ico, use an online converter or tool

## File Structure

```
public/
  ├── favicon.ico                    ← Main favicon (if you create it)
  └── logo/
      ├── logo.png                   ← Currently used as favicon
      ├── apple-touch-icon.png       ← iOS icon (optional)
      ├── icon-192.png               ← Android icon (optional)
      ├── icon-512.png               ← PWA icon (optional)
      └── FAVICON_INSTRUCTIONS.md    ← This file
```

## Current Configuration

The website is currently set to use `/logo/logo.png` as the favicon. This works for most modern browsers.

## Testing

After adding your favicon files:
1. Clear your browser cache
2. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Check the browser tab to see your logo

## Notes

- The favicon will appear in browser tabs, bookmarks, and browser history
- Make sure your logo is recognizable at small sizes (16x16 to 32x32 pixels)
- Use a simple, clear version of your logo for best results
- PNG format with transparent background works best
