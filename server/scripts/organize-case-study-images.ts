#!/usr/bin/env npx tsx
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map folder names to our case study IDs
const folderMapping: Record<string, string> = {
  'Netflix - Nov 2021': 'netflix',
  'Mr Beast - Las Vegas - Feb 2023': 'mrbeast',
  'Microsoft NRF - Jan 2020': 'microsoft',
  'MAC Cosmetics - April 2019': 'mac-cosmetics',
  '1800 Tequila - Feb 2024': '1800-tequila',
  'Bond Vet - May 2023-Feb 2025': 'bond-vet',
  'Brooklyn Magazine - 2023': 'brooklyn-magazine',
  'Baja Brewing - Jan-Feb 2025': 'beer-samplings',
  'Cirque du Soleil - Sep-Oct 2024': 'cirque-du-soleil',
  'Clarins - Aug - Nov 2024': 'clarins',
  'Wagamama - Nov 2023-March 2024': 'wagamama',
  'Williams Racing-Elevate - Oct 2023-Nov 2024': 'williams-racing',
  'Culinary Dropout - Feb- March 2024': 'culinary-dropout',
  'Ted Talk - Oct 2024': 'ted-talk',
  'Dash Car Wash Promotion - Oct 2024': 'car-wash',
  'Digital Yalo - Cortie-Atlanta Braves - Sep 2024': 'cortie-digital',
  'Katjes - May 2023-May 2024': 'katjes',
  'Las Vegas +44 Formula 1': 'las-vegas-formula',
  'Peelzon - Nov 2023-June 2024': 'peelzon',
  'Polaris - Dec 2024': 'polaris',
  'Moxie-Skinny Mixes - March 2025': 'skinny-mixes',
  'Topps (Digital Trading Card) - Topps Feb 2023': 'topps-cards',
  'Waiakea Water - April 2024': 'waiakea-water',
  'All Solar Energy - May 2024 - Current': 'solar-company',
};

const sourceDir = '/Users/shawn/Downloads/Case Studies 2025';
const targetDir = path.join(__dirname, '../../client/public/images/case-studies');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper function to copy file
function copyFile(source: string, target: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const readStream = fs.createReadStream(source);
    const writeStream = fs.createWriteStream(target);

    readStream.on('error', reject);
    writeStream.on('error', reject);
    writeStream.on('finish', resolve);

    readStream.pipe(writeStream);
  });
}

async function organizeImages() {
  console.log('Starting image organization...\n');

  // Process each mapped folder
  for (const [folderName, caseStudyId] of Object.entries(folderMapping)) {
    const folderPath = path.join(sourceDir, folderName);
    const photosPath = path.join(folderPath, 'Photos');

    if (!fs.existsSync(photosPath)) {
      console.log(`⚠️  No Photos folder found for: ${folderName}`);
      continue;
    }

    // Get all image files
    const files = fs.readdirSync(photosPath).filter(file =>
      /\.(jpg|jpeg|png|webp)$/i.test(file)
    );

    if (files.length === 0) {
      console.log(`⚠️  No images found for: ${folderName}`);
      continue;
    }

    console.log(`📸 ${folderName} → ${caseStudyId}`);
    console.log(`   Found ${files.length} images`);

    // Copy up to 4 images for each case study
    const imagesToCopy = files.slice(0, 4);
    for (let i = 0; i < imagesToCopy.length; i++) {
      const sourceFile = path.join(photosPath, imagesToCopy[i]);

      // Create different filenames for each image
      let targetFilename: string;
      if (i === 0) {
        targetFilename = `${caseStudyId}.jpg`;
      } else {
        targetFilename = `${caseStudyId}-${i + 1}.jpg`;
      }

      const targetFile = path.join(targetDir, targetFilename);

      try {
        await copyFile(sourceFile, targetFile);
        console.log(`   ✓ Copied: ${targetFilename}`);
      } catch (error) {
        console.error(`   ✗ Failed to copy ${targetFilename}:`, error);
      }
    }
  }

  // Check for unmapped folders
  console.log('\n📁 Checking for unmapped folders...');
  const allFolders = fs.readdirSync(sourceDir);
  const unmapped = allFolders.filter(folder =>
    !Object.keys(folderMapping).includes(folder) &&
    fs.statSync(path.join(sourceDir, folder)).isDirectory()
  );

  if (unmapped.length > 0) {
    console.log('Unmapped folders found:');
    unmapped.forEach(folder => console.log(`  - ${folder}`));
  } else {
    console.log('All folders are mapped!');
  }

  console.log('\n✅ Image organization complete!');
}

// Run the organization
organizeImages().catch(console.error);