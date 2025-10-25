# AirFresh Marketing Website - Image Requirements Guide

This guide outlines all the images needed from your Google Drive folder to complete the website implementation.

## <¯ Quick Summary
- **Total Images Needed:** ~50+ images
- **Target File Size:** <100KB per image (optimized)
- **Recommended Dimensions:** 1200x800px minimum
- **Formats:** JPG or PNG (will be auto-converted to WebP/AVIF by Next.js)

---

## =Á Required Image Directories

### 1. Testimonials (`public/images/testimonials/`)
Location-specific photos of actual brand ambassadors and clients:

```
aimee-ambassador.jpg              - Aimee from LA/NYC events
kristin-quinn.jpg                 - Kristin Quinn headshot
anonymous-review.jpg              - Generic professional headshot for anonymous review
```

**Requirements:**
- Professional headshots or event photos
- 400x400px minimum (square format preferred)
- Clear, well-lit faces
- <50KB file size

---

### 2. City Pages (`public/images/cities/`)
Localized images showing actual AirFresh Marketing campaigns in each city:

```
new-york-activation.jpg           - Times Square or Union Square brand activation
los-angeles-sampling.jpg          - Venice Beach or Hollywood Blvd sampling
chicago-event.jpg                 - Millennium Park or Navy Pier event
miami-beach.jpg                   - South Beach or Wynwood activation
denver-downtown.jpg               - 16th Street Mall or Red Rocks event
san-francisco-activation.jpg      - Union Square or Fisherman's Wharf
austin-sxsw.jpg                   - SXSW festival activation
atlanta-activation.jpg            - BeltLine or Mercedes-Benz Stadium event
```

**Requirements:**
- Wide-angle shots showing brand ambassadors in action
- City landmarks visible when possible
- 1200x800px minimum (landscape orientation)
- Bright, energetic atmosphere
- <100KB file size

**Alt Text Examples (already implemented):**
- "New York experiential marketing activation with brand ambassadors in Times Square"
- "Los Angeles experiential product sampling at Venice Beach and Hollywood"

---

### 3. State Pages (`public/images/states/`)
State-level overview images representing multiple cities:

```
california-events.jpg             - Collage or wide shot from LA/SF events
new-york-events.jpg              - NYC to Buffalo market coverage
texas-events.jpg                 - Austin, Houston, Dallas activations
florida-events.jpg               - Miami to Orlando events
illinois-events.jpg              - Chicago-focused campaigns
colorado-events.jpg              - Denver and ski resort activations
georgia-events.jpg               - Atlanta market activations
washington-events.jpg            - Seattle Pike Place Market or tech events
```

**Requirements:**
- Representative of state's geography/culture
- Can be collages of multiple events
- 1200x800px minimum
- <100KB file size

---

### 4. Client Campaign Photos (`public/images/clients/`)
**EXACT** campaign photos from actual AirFresh Marketing work with these brands:

```
google-activation-exact.jpg              - Google campaign photo (not logo)
adidas-activation-exact.jpg              - Adidas street team in LA
microsoft-activation-exact.jpg           - Microsoft tech conference
lyft-activation-exact.jpg                - Lyft NYC/Philly campaign
clif-bar-activation-exact.jpg           - Clif Bar outdoor sampling Denver
pepsi-activation-exact.jpg               - Pepsi multi-city tour
5-hour-energy-activation-exact.jpg       - 5-hour Energy convention staffing
nfl-activation-exact.jpg                 - NFL Super Bowl fan experience
naked-juice-activation-exact.jpg         - Naked Juice health expo
red-bull-activation-exact.jpg            - Red Bull extreme sports event
premier-protein-activation.jpg           - Premier Protein Southern CA (1,500+ samples)
mac-cosmetics-activation.jpg             - Mac Cosmetics LA/US/Canada (800+ opt-ins)
merrell-activation.jpg                   - Merrell Denver outdoor campaign
future-beauty-labs-activation.jpg        - Future Beauty Labs various locations
```

**Requirements:**
- **CRITICAL:** Must be actual campaign photos, not stock images or logos
- Show brand ambassadors, products, or event setups
- Include branding/signage where visible
- Action shots preferred (people engaging with brand)
- 800x600px minimum
- <80KB file size

**From Your Portfolio Data:**
Use images from:
- Premier Protein: Southern CA activations
- Mac Cosmetics: LA/US/Canada/Guam/Puerto Rico events
- Merrell: Denver activations
- Lyft: NY/Philly street teams
- Future Beauty Labs: Various locations

---

## =' Image Optimization Process

### Before Upload:
1. **Resize images** to recommended dimensions (use tools like TinyPNG, ImageOptim, or Photoshop)
2. **Compress** to target file sizes listed above
3. **Rename** files to match exact names shown in this guide
4. **Ensure** images are properly oriented (landscape for cities/states, square for testimonials)

### Optimization Tools:
- **Online:** [TinyPNG](https://tinypng.com), [Squoosh](https://squoosh.app)
- **Mac:** ImageOptim
- **Windows:** FileOptimizer
- **Command Line:** `npm install -g sharp-cli` then `sharp input.jpg -o output.jpg --resize 1200`

### Next.js Auto-Optimization:
The website is configured to automatically:
- Convert images to WebP and AVIF formats
- Generate multiple sizes for responsive loading
- Lazy load images below the fold
- Cache optimized images for 60 seconds minimum

---

## =Ê Implementation Status

###  Completed
- [x] Directory structure created
- [x] Image schema markup implemented (SEO)
- [x] Image optimization configured in Next.js
- [x] Alt text with keywords added to all image references
- [x] Responsive image components set up
- [x] Sitemap with image entries created

### ó Pending (Your Action Required)
- [ ] Download images from Google Drive
- [ ] Optimize and rename images per this guide
- [ ] Upload to respective directories in `public/images/`
- [ ] Verify images display correctly on dev server
- [ ] Test with Google Rich Results Test

---

## =€ Upload Instructions

1. **Download** images from your Google Drive folder:
   `https://drive.google.com/drive/folders/1tIBMb09tD38Yhx7mW6nvhgBetiVPann6?usp=sharing`

2. **Organize** locally by matching the directory structure above

3. **Optimize** each image using the tools mentioned

4. **Upload** to the project:
   ```bash
   # From your local machine, copy to project
   cp -r /path/to/optimized-images/* public/images/
   ```

5. **Test** locally:
   ```bash
   npm run dev
   # Visit http://localhost:3000 and navigate to:
   # - /cities/new-york
   # - /states/ca
   # - Home page (scroll to testimonials and client logos)
   ```

6. **Verify** images load with proper schema:
   - Open browser DevTools > Network tab
   - Confirm images are loading as WebP/AVIF
   - View page source and find ImageObject schema markup

---

## <¨ Content Suggestions

### If You Don't Have Exact Client Photos:
1. **Contact clients** for permission to use campaign photos
2. **Check internal archives** for event photography
3. **Use case study materials** from your portfolio
4. **Professional photography** from past activations

### Placeholder Strategy:
If some images are unavailable, you can:
1. Use your existing case study images from `public/images/case-studies/`
2. Rename and repurpose relevant activation photos
3. Create image collages from multiple events for the same client

---

## =Ý SEO Benefits

Each image includes:
- **ImageObject schema** with contentUrl, name, description, caption
- **Descriptive alt text** with location and service keywords
- **Caption metadata** for Google Images search
- **Sitemap entries** with image tags for crawling

This implementation will:
-  Boost image search rankings
-  Enable rich results in Google Search
-  Improve accessibility scores
-  Enhance local SEO for city/state pages

---

## >ê Testing Checklist

After uploading images:

- [ ] All city pages display hero images correctly
- [ ] All state pages show overview images
- [ ] Testimonials have profile photos
- [ ] Client portfolio shows actual campaign photos (not generic logos)
- [ ] Images load quickly (<2s on 3G)
- [ ] Mobile images are responsive
- [ ] Test with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify schema markup with [Schema Markup Validator](https://validator.schema.org/)

---

## =Þ Need Help?

If you need assistance with:
- Image optimization
- Finding the right photos from Google Drive
- Technical implementation

Let me know and I can provide additional guidance!

---

**Last Updated:** $(date)
**Implementation Phase:** Image Upload Required
**Status:** =á Awaiting Google Drive Assets
