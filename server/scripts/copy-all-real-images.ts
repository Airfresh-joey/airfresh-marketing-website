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
  'Buffalo Wild Wings - Nov 2022': 'buffalo-wild-wings',
  'BYOMA - Jun-Aug 2023': 'byoma',
  // Additional unmapped folders
  'Avail': 'avail',
  'Formula 1 Activations - Nov 2024': 'formula-1',
  'Get Neer - March 2025': 'get-neer',
  'IMA Medical Group': 'ima-medical',
  'Meijer - April 2018-Nov 2023': 'meijer',
  'Paradise Body': 'paradise-body',
  'Qwick - March 2023': 'qwick',
  'The Sun Club Golf': 'sun-club-golf',
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

async function copyAllImages() {
  console.log('🚀 Starting comprehensive image copy...\n');
  let totalCopied = 0;

  // Process ALL folders in the directory
  const allFolders = fs.readdirSync(sourceDir).filter(item =>
    fs.statSync(path.join(sourceDir, item)).isDirectory()
  );

  for (const folderName of allFolders) {
    const folderPath = path.join(sourceDir, folderName);

    // Get the case study ID from mapping or create a safe one
    let caseStudyId = folderMapping[folderName];
    if (!caseStudyId) {
      // Create a safe ID from folder name
      caseStudyId = folderName.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
      console.log(`⚠️  Creating ID for unmapped folder: ${folderName} → ${caseStudyId}`);
    }

    // Look for images in all subfolders
    const subFolders = ['Photos', 'Proposals', 'Recap', 'Recaps', '.'];
    let allImages: string[] = [];

    for (const subFolder of subFolders) {
      const searchPath = subFolder === '.' ? folderPath : path.join(folderPath, subFolder);

      if (fs.existsSync(searchPath) && fs.statSync(searchPath).isDirectory()) {
        const files = fs.readdirSync(searchPath).filter(file =>
          /\.(jpg|jpeg|png|webp)$/i.test(file)
        );

        allImages = allImages.concat(files.map(f => path.join(searchPath, f)));
      }
    }

    if (allImages.length === 0) {
      console.log(`⚠️  No images found for: ${folderName}`);
      continue;
    }

    console.log(`📸 ${folderName} → ${caseStudyId}`);
    console.log(`   Found ${allImages.length} images`);

    // Copy ALL images (up to reasonable limit)
    const maxImages = Math.min(allImages.length, 10); // Copy up to 10 images per case study
    for (let i = 0; i < maxImages; i++) {
      const sourceFile = allImages[i];

      // Create filename
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
        totalCopied++;
      } catch (error) {
        console.error(`   ✗ Failed to copy ${targetFilename}:`, error);
      }
    }

    if (allImages.length > maxImages) {
      console.log(`   ℹ️  ${allImages.length - maxImages} more images available but not copied`);
    }
  }

  console.log(`\n✅ Complete! Copied ${totalCopied} total images`);
}

// Run the copy
copyAllImages().catch(console.error);