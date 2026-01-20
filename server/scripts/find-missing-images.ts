#!/usr/bin/env npx tsx
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sourceDir = '/Users/shawn/Downloads/Case Studies 2025';

// List of folders that reported no images
const missingImageFolders = [
  'All Solar Energy - May 2024 - Current',
  'Avail',
  'Brooklyn Magazine - 2023',
  'Cirque du Soleil - Sep-Oct 2024',
  'Clarins - Aug - Nov 2024',
  'Culinary Dropout - Feb- March 2024',
  'Get Neer - March 2025',
  'IMA Medical Group',
  'Katjes - May 2023-May 2024',
  'Las Vegas +44 Formula 1',
  'MAC Cosmetics - April 2019',
  'Microsoft NRF - Jan 2020',
  'Moxie-Skinny Mixes - March 2025',
  'Mr Beast - Las Vegas - Feb 2023',
  'Netflix - Nov 2021',
  'Paradise Body',
  'Polaris - Dec 2024',
  'Ted Talk - Oct 2024',
  'The Sun Club Golf',
  'Wagamama - Nov 2023-March 2024',
  'Waiakea Water - April 2024'
];

console.log('🔍 Looking for images in alternative locations...\n');

for (const folderName of missingImageFolders) {
  const folderPath = path.join(sourceDir, folderName);

  if (!fs.existsSync(folderPath)) {
    console.log(`❌ Folder not found: ${folderName}`);
    continue;
  }

  console.log(`📁 ${folderName}:`);

  // Search in all subdirectories and the root folder
  function findImages(dir: string, depth = 0): string[] {
    const images: string[] = [];
    if (depth > 2) return images; // Limit depth to avoid too deep recursion

    try {
      const items = fs.readdirSync(dir);

      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);

        if (stat.isDirectory()) {
          // Recursively search subdirectories
          images.push(...findImages(itemPath, depth + 1));
        } else if (/\.(jpg|jpeg|png|webp|gif)$/i.test(item)) {
          // Found an image
          images.push(itemPath);
        }
      }
    } catch (error) {
      // Ignore permission errors
    }

    return images;
  }

  const allImages = findImages(folderPath);

  if (allImages.length > 0) {
    console.log(`   ✅ Found ${allImages.length} images:`);
    // Show where images are located
    const locations = new Set<string>();
    allImages.forEach(img => {
      const relativePath = path.relative(folderPath, path.dirname(img));
      locations.add(relativePath || '(root)');
    });
    locations.forEach(loc => console.log(`      📍 ${loc}`));
  } else {
    console.log(`   ⚠️  No images found anywhere in folder`);
  }
}

console.log('\n✅ Search complete!');