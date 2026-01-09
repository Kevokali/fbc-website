# Modern Rounded Favicon Instructions

## Overview
Your website is configured to use a modern, rounded favicon design. Follow these instructions to create your rounded favicon.

## File to Create

**File Name**: `favicon-rounded.png`  
**Location**: `public/logo/favicon-rounded.png`

## Design Specifications

### Modern Rounded Design:
- **Shape**: Rounded square (squircle) or circle
- **Size**: 512x512 pixels (will be resized automatically)
- **Border Radius**: 20-25% for rounded square, or fully circular
- **Background**: 
  - Option 1: Transparent background with your logo
  - Option 2: Solid color background (emerald or deep blue) with rounded corners
  - Option 3: Gradient background with rounded corners
- **Padding**: Add 10-15% padding around your logo for best appearance

### Recommended Styles:

1. **Rounded Square (Squircle)** - Modern iOS-style
   - Border radius: 20-25% of the image size
   - Clean, modern look

2. **Circle** - Classic rounded
   - Fully circular
   - Works great for simple logos

3. **Rounded with Background**
   - Your logo on a colored/gradient rounded background
   - Adds visual interest

## How to Create Your Rounded Favicon

### Option 1: Using Online Tools (Easiest)

1. **Favicon Generator with Rounded Design**:
   - Visit: https://favicon.io/favicon-generator/
   - Upload your logo
   - Select "Rounded" or "Circle" option
   - Download the generated files

2. **RealFaviconGenerator**:
   - Visit: https://realfavicongenerator.net/
   - Upload your logo
   - Choose "iOS" style (rounded corners)
   - Download generated files

### Option 2: Using Image Editor (Photoshop, GIMP, Canva)

1. **Create Rounded Square**:
   ```
   - Create new image: 512x512 pixels
   - Add your logo (centered, with padding)
   - Apply rounded rectangle mask (20-25% radius)
   - Export as PNG with transparent background
   ```

2. **Create Circle**:
   ```
   - Create new image: 512x512 pixels
   - Add your logo (centered, with padding)
   - Apply circular mask
   - Export as PNG with transparent background
   ```

3. **Add Background** (Optional):
   ```
   - Add rounded background layer
   - Use emerald (#2A9D8F) or deep blue (#1B3A57)
   - Or use gradient: emerald to deep blue
   - Place logo on top
   - Apply rounded corners
   ```

### Option 3: Using CSS/Design Tools

**Canva**:
1. Create 512x512 design
2. Add rounded rectangle shape
3. Place your logo inside
4. Download as PNG

**Figma**:
1. Create 512x512 frame
2. Add rounded rectangle (20-25% corner radius)
3. Place logo inside
4. Export as PNG

## Design Tips

### For Best Results:
- ✅ Keep logo simple and recognizable at small sizes
- ✅ Use high contrast colors
- ✅ Add padding around logo (10-15%)
- ✅ Test at 16x16 and 32x32 sizes to ensure readability
- ✅ Use transparent background for flexibility
- ✅ Or use brand colors (emerald/deep blue) for background

### Avoid:
- ❌ Too much detail (won't be visible at small sizes)
- ❌ Low contrast colors
- ❌ Logo touching edges
- ❌ Complex backgrounds

## File Structure

```
public/
  └── logo/
      ├── logo.png                    ← Your main logo
      ├── favicon-rounded.png         ← Rounded favicon (CREATE THIS)
      └── ROUNDED_FAVICON_INSTRUCTIONS.md  ← This file
```

## After Creating the File

1. Save as: `public/logo/favicon-rounded.png`
2. Clear browser cache
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Check browser tab to see your rounded favicon

## Quick Reference

- **File**: `favicon-rounded.png`
- **Size**: 512x512 pixels (recommended)
- **Format**: PNG
- **Shape**: Rounded square (20-25% radius) or circle
- **Background**: Transparent or brand color
- **Location**: `public/logo/favicon-rounded.png`

## Example Design Ideas

1. **Minimal Rounded Square**:
   - White/light logo on emerald rounded square background
   - 20% border radius

2. **Circular with Gradient**:
   - Logo on circular gradient background (emerald to deep blue)
   - Fully circular

3. **Rounded with Shadow**:
   - Logo on rounded square with subtle shadow
   - Modern, elevated look

Your favicon will automatically appear once you add `favicon-rounded.png` to the `public/logo/` folder!
