# 📸 Image Upload Guidelines

## ⚠️ Important File Size Limits

### Current System Limits:

```
Per File:     5MB max    ← Multer enforces this  
Total Request: 30MB max   ← Nginx/Express enforce this
Max Files:     60 files   ← Multer enforces this
```

### What This Means:

✅ **Good Examples:**
- Upload 15 images × 2MB each = 30MB total ✅
- Upload 10 images × 3MB each = 30MB total ✅
- Upload 6 high-quality images × 4.5MB each = 27MB total ✅

❌ **Bad Examples:**
- Upload 1 image × 2.5GB = REJECTED ❌ (exceeds 5MB per file)
- Upload 1 image × 10MB = REJECTED ❌ (exceeds 5MB per file)  
- Upload 20 images × 2MB each = 40MB total = REJECTED ❌ (exceeds 30MB total)

---

## 🎯 Recommended Image Sizes

### Package Images (Main Gallery)
- **Resolution:** 1920×1080 (Full HD) or 1600×900
- **File Size:** 300KB - 2MB per image
- **Format:** JPEG/JPG (best compression)
- **Quality:** 80-85% (sweet spot for web)

### Day Images (Itinerary)
- **Resolution:** 1200×800 or 1024×768
- **File Size:** 200KB - 1MB per image
- **Format:** JPEG/JPG
- **Quality:** 75-80%

### Why Smaller is Better:
1. ✅ Faster page load times for customers
2. ✅ Less mobile data usage
3. ✅ Better SEO (Google ranks faster sites higher)
4. ✅ Lower hosting costs
5. ✅ No upload errors

---

## 🛠️ How to Compress Images

### Option 1: Online Tools (Easiest)

**TinyPNG** (Recommended)
- Website: https://tinypng.com
- Upload: Up to 20 images, max 5MB each
- Result: 60-80% smaller with no visible quality loss
- Free: Yes

**Squoosh** (By Google)
- Website: https://squoosh.app
- Advanced controls for quality/size balance
- Browser-based, no upload to servers
- Free: Yes

**CompressJPEG**
- Website: https://compressjpeg.com
- Bulk compression
- Free: Yes, up to 20 images

### Option 2: Software Tools

**Windows:**
- **IrfanView** (Free)
  - Download: https://www.irfanview.com
  - Batch conversion: File → Batch Conversion
  - Set JPEG quality to 80
  
- **XnConvert** (Free)
  - Download: https://www.xnview.com/en/xnconvert/
  - Powerful batch processing
  - Resize + compress in one go

**Mac:**
- **ImageOptim** (Free)
  - Download: https://imageoptim.com
  - Drag & drop images
  - Automatic optimization

**Cross-Platform:**
- **GIMP** (Free, open-source)
  - Export as JPEG
  - Set quality slider to 80-85
  
- **Adobe Photoshop**
  - File → Export → Save for Web
  - JPEG quality: 60-80

### Option 3: Automated Scripts

**Using ImageMagick (Command Line):**

```bash
# Install ImageMagick
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: apt-get install imagemagick

# Compress single image to 85% quality, max width 1920px
magick input.jpg -resize 1920x1920\> -quality 85 output.jpg

# Batch compress all JPGs in folder
magick mogrify -resize 1920x1920\> -quality 85 *.jpg

# Convert PNG to JPG and compress
magick input.png -quality 85 output.jpg
```

**Using Node.js (sharp library):**

```javascript
// Install: npm install sharp
const sharp = require('sharp');

sharp('input.jpg')
  .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
  .jpeg({ quality: 85, progressive: true })
  .toFile('output.jpg');
```

---

## 🎓 Best Practices

### Before Uploading:

1. **Check Image Dimensions**
   - Right-click image → Properties → Details
   - If > 1920×1080, resize first
   - No need for 4K images (3840×2160) on web

2. **Check File Size**
   - Right-click image → Properties
   - If > 2MB, compress it
   - Target: 500KB-1.5MB for best balance

3. **Use Correct Format**
   - Photos: Use JPEG/JPG ✅
   - Graphics/logos: Use PNG or WebP
   - Avoid: BMP, TIFF (too large)

4. **Name Files Properly**
   - Good: `kashmir-valley-day1.jpg`
   - Bad: `IMG_20240224_153045.jpg`
   - Helps with SEO and organization

### During Upload:

1. **Upload in Batches**
   - Don't upload 50 images at once
   - Do 10-15 at a time
   - Reduces timeout risks

2. **Check Progress**
   - Wait for "Upload successful" message
   - Don't refresh page during upload
   - Check admin panel to verify

3. **Verify Display**
   - View package page after upload
   - Check images load correctly
   - Test on mobile too

---

## 🚨 Common Issues & Solutions

### Issue 1: "File Too Large" Error

**Error:** `LIMIT_FILE_SIZE: File too large`

**Cause:** Image > 5MB

**Solution:**
```
1. Compress image using TinyPNG or similar
2. Or resize to 1920×1080 max
3. Target: < 2MB per image
```

### Issue 2: "Request Entity Too Large" (413)

**Error:** `413 Content Too Large`

**Cause:** Total upload > 30MB (all files combined)

**Solution:**
```
1. Upload fewer images at once (max 10-12)
2. Or compress all images first
3. Make sure each image is < 2MB
```

### Issue 3: Upload Takes Forever

**Cause:** Images too large or too many

**Solution:**
```
1. Compress images before upload
2. Check internet speed
3. Upload in smaller batches
4. Use wired connection instead of WiFi if possible
```

### Issue 4: Images Look Blurry/Pixelated

**Cause:** Over-compression or too small resolution

**Solution:**
```
1. Keep minimum resolution: 1200×800
2. Don't compress below 70% quality
3. Use 85% quality for best results
4. Start with high-quality source images
```

---

## 📐 Compression Targets by Use Case

### Hero/Featured Images (Homepage)
```
Resolution: 1920×1080
File Size:  500KB - 1.5MB
Quality:    85%
Format:     JPEG
```

### Package Gallery Images
```
Resolution: 1600×900
File Size:  400KB - 1MB  
Quality:    80-85%
Format:     JPEG
```

### Day Itinerary Images
```
Resolution: 1200×800
File Size:  200KB - 800KB
Quality:    75-80%
Format:     JPEG
```

### Mobile Thumbnails (Auto-generated)
```
Resolution: 400×300
File Size:  < 100KB
Quality:    75%
Format:     JPEG
```

---

## 🎬 Quick Compression Workflow

### Recommended Workflow:

```
1. Take/Receive Photos
   ↓
2. Open TinyPNG.com
   ↓
3. Drag & Drop Images
   ↓
4. Wait for Compression (30-60 seconds)
   ↓
5. Download Compressed Images
   ↓
6. Upload to Mendora Admin Panel
   ↓
7. Verify Images Display Correctly
   ✅ Done!
```

**Time:** ~2-3 minutes for 10 images

**Savings:** 60-80% smaller files

**Quality Loss:** Imperceptible to human eye

---

## 🔍 How to Check Image Quality

### Before Uploading:
1. Open compressed image
2. Zoom to 100% (actual size)
3. Check for:
   - ❌ Blocky artifacts
   - ❌ Color banding
   - ❌ Blurriness
   - ✅ Sharp details
   - ✅ Natural colors

### After Uploading:
1. View package page
2. Click to enlarge image
3. View on different devices:
   - Desktop browser
   - Mobile phone
   - Tablet
4. Check loading speed

---

## 📊 File Size Examples

### Before Compression:
```
IMG_001.jpg - 4.2MB (4000×3000, 100% quality) ❌
IMG_002.jpg - 6.8MB (5000×3500, 100% quality) ❌
IMG_003.jpg - 3.1MB (3500×2500, 95% quality)  ❌
```

### After Proper Optimization:
```
kashmir-valley.jpg       - 850KB (1920×1080, 85% quality) ✅
dal-lake-sunset.jpg      - 670KB (1920×1080, 85% quality) ✅
houseboats-morning.jpg   - 920KB (1920×1080, 85% quality) ✅
```

**Result:** 
- From 14.1MB → 2.44MB (83% smaller!)
- Upload time: From 2 minutes → 15 seconds
- No visible quality difference

---

## 🎯 Summary Checklist

Before uploading images, verify:

- [ ] Each image < 5MB (prefer < 2MB)
- [ ] Total upload < 30MB
- [ ] Resolution appropriate (1920×1080 or smaller)
- [ ] Format is JPEG for photos
- [ ] File names are descriptive
- [ ] Images compressed using TinyPNG or similar
- [ ] Quality checked (no artifacts or blurriness)
- [ ] Uploading in reasonable batch size (10-15 max)

**Remember:** Smaller, optimized images = Happier customers + Faster website + No upload errors!

---

## 💡 Pro Tips

1. **Batch Process Everything**
   - Compress all images for a destination at once
   - Use same quality settings for consistency
   - Saves time in the long run

2. **Keep Original Files**
   - Save uncompressed originals in separate folder
   - Use compressed versions for web only
   - Allows re-compression if needed

3. **Test on Slow Connection**
   - Use Chrome DevTools → Network → Slow 3G
   - See actual customer experience
   - Aim for < 3 seconds load time

4. **Automate When Possible**
   - Create compression presets
   - Use batch scripts for regular uploads
   - Set up folders for "to compress" and "ready to upload"

5. **Mobile-First Mindset**
   - Most users view on mobile
   - Mobile data is expensive
   - Smaller files = better mobile experience

---

## 📞 Need Help?

If you're still having issues with image uploads:

1. **Check file size:** Right-click → Properties
2. **Compress using TinyPNG:** https://tinypng.com
3. **Try uploading one image first:** Test before bulk upload
4. **Contact support:** Share error message and file details

**Common support info needed:**
- Original file size
- Compressed file size  
- Number of images trying to upload
- Exact error message
- Browser used (Chrome, Firefox, Safari, etc.)
