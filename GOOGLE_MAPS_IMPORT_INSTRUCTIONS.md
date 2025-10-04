# How to Import AirFresh Marketing Locations to Google My Maps

This guide will help you create a custom Google Map with all 50+ AirFresh Marketing service locations.

## Step 1: Access Google My Maps
1. Go to https://mymaps.google.com
2. Sign in with your Google account (use your AirFresh Marketing business account)
3. Click **"Create a New Map"**

## Step 2: Import the Location Data
1. In the new map, click on **"Import"** in the left panel under "Untitled layer"
2. Drag and drop the file `airfresh-locations.csv` or click to browse and select it
3. Google will ask which columns contain location information:
   - Select **"Latitude"** and **"Longitude"** as position columns
   - Click **"Continue"**
4. Choose **"Name"** as the marker title
   - Click **"Finish"**

## Step 3: Customize Your Map

### Style the Markers
1. Click on "Uniform style" or "Individual styles" under the layer
2. Choose **"Individual styles"** to customize:
   - Click on any marker color/icon selector
   - Choose **AirFresh brand colors** (cyan/blue)
   - Select an appropriate icon (e.g., office building, location pin)

### Highlight Headquarters
1. Find the "AirFresh Marketing HQ - Denver, CO" marker
2. Click on it to edit
3. Change its icon to be different (e.g., a star or flag)
4. Change color to make it stand out (e.g., gold or a different shade)

### Name Your Map
1. Click on "Untitled map" at the top
2. Rename to: **"AirFresh Marketing - Nationwide Service Locations"**
3. Add description: **"Experiential marketing services in 50+ cities across the United States. Headquarters in Denver, CO."**

## Step 4: Style Map Appearance (Optional)
1. Click on "Base map" in the left panel
2. Choose a style that matches your brand:
   - **"Light"** - Clean, minimal look
   - **"Satellite"** - Aerial view
   - **"Terrain"** - Shows geographic features

## Step 5: Get the Embed Code
1. Click the **"Share"** button in the left panel
2. Click **"Change"** under "Who has access"
3. Select **"Anyone with the link"** or **"Public on the web"**
4. Click **"Done"**
5. In the Share panel, click on the **three dots menu** (⋮)
6. Select **"Embed on my site"**
7. Copy the iframe code that appears

## Step 6: Update Website Files

The iframe URL will look like this:
```html
<iframe src="https://www.google.com/maps/d/embed?mid=YOUR_MAP_ID_HERE" width="640" height="480"></iframe>
```

### Files to Update:

1. **`/app/locations/page.tsx`** (Line ~177)
   - Find: `src="https://www.google.com/maps/d/embed?mid=1example&ehbc=2E312F"`
   - Replace with your actual embed URL

2. **`/app/about/page.tsx`** (Line ~318)
   - Find: `src="https://www.google.com/maps/d/embed?mid=1example&ehbc=2E312F"`
   - Replace with your actual embed URL

## Step 7: Test Your Maps
1. Save the files after updating the URLs
2. View your website at http://localhost:3000/locations
3. View the about page at http://localhost:3000/about
4. Verify the maps load correctly with all locations

## Tips for Best Results

### Visual Consistency
- Use AirFresh brand colors (cyan/blue) for all markers
- Keep the headquarters marker distinct but complementary
- Use consistent icon styles

### Map Features
- Add a legend if using multiple marker types
- Consider adding city boundaries for major markets
- Group nearby locations into regions if desired

### Performance
- The embedded map loads on-demand
- Users can zoom, pan, and click markers for details
- Mobile-responsive by default

## Maintenance

### Adding New Locations
1. Open your Google My Map
2. Click "Add marker" and place on map
3. Or edit the CSV file and re-import

### Updating Descriptions
1. Click on any marker
2. Click the edit icon (pencil)
3. Update name, description, or add photos

### Analytics
- Google My Maps doesn't provide built-in analytics
- Consider adding UTM parameters to contact links in descriptions
- Track engagement through your website analytics

## Alternative: KML File
If you prefer to create a KML file instead of CSV:
1. The provided CSV can be converted to KML
2. Use tools like: https://www.convertcsv.com/csv-to-kml.htm
3. Import the KML file into Google My Maps

## Troubleshooting

**Map not displaying?**
- Check that the map is set to "Public" or "Anyone with the link"
- Verify the iframe URL is complete and correct
- Check browser console for errors

**Markers not showing?**
- Ensure latitude/longitude are in decimal format
- Verify no special characters in the CSV
- Check that columns are properly named

**Need to update locations?**
- Edit `airfresh-locations.csv`
- Delete old layer in Google My Maps
- Import updated CSV

---

**Questions?** Contact your development team or refer to Google My Maps Help: https://support.google.com/mymaps
