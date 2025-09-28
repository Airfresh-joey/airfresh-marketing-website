#!/usr/bin/env npx tsx
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import https from 'https';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Map of case study names from CSV to our IDs
const nameToIdMap: Record<string, string> = {
  'Cirque du Soleil': 'cirque-du-soleil',
  'Culinary Dropout': 'culinary-dropout',
  'TED Talk': 'ted-talk',
  'Clarins': 'clarins',
  'PeelzOn': 'peelzon',
  'Solar Company': 'solar-company',
  'Cortie - Digital Yalo': 'cortie-digital',
  'Las Vegas +44 Formula Activation': 'las-vegas-formula',
  'Buffalo Wild Wings': 'buffalo-wild-wings',
  'Waiakea Water': 'waiakea-water',
  'Bond Vet': 'bond-vet',
  'Wagamama': 'wagamama',
  'BYOMA': 'byoma',
  'Brooklyn Magazine': 'brooklyn-magazine',
  'Williams Racing': 'williams-racing',
  'Polaris (NRF)': 'polaris',
  'Car Wash Promotion': 'car-wash',
  'Netflix': 'netflix',
  'Beer Samplings': 'beer-samplings',
  'Katjes': 'katjes',
  'MrBeast': 'mrbeast',
  'Microsoft (NRF)': 'microsoft',
  'Qwuick': 'qwick',
  'Skinny Mixes': 'skinny-mixes',
  'Mac Cosmetics': 'mac-cosmetics',
  '1800 Tequilia': '1800-tequila',
  'Get Neer': 'get-neer',
  'Mejiers': 'meijer'
};

// Google Drive links from CSV
const googleDriveLinks: Record<string, string> = {
  'cirque-du-soleil': 'https://drive.google.com/drive/folders/1iGpR3Ked9i9r9P5aoj0LA2DyyMozbCfF',
  'culinary-dropout': 'https://drive.google.com/drive/folders/1X6ZCgE1j8rhk9m65RLXfZ0FsZjZAfZC7',
  'ted-talk': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'clarins': 'https://drive.google.com/drive/folders/1CQEzIZzsl9pjuHBAdjlq9RIwbRs4etAR',
  'peelzon': 'https://drive.google.com/drive/folders/1iqsXgWKz178-zqWbRJqhff-l_Vds4Hxs',
  'solar-company': 'https://drive.google.com/drive/folders/1lbEFlRPldB20jOdu8dYAmCTu9GsTWUsI',
  'cortie-digital': 'https://drive.google.com/drive/folders/1TIJjjJSnH39AVB9NBSjmEUndXv2sPC8E',
  'las-vegas-formula': 'https://drive.google.com/drive/folders/1aTzRjejThSTFB5g7_d3Y7AR8EmYNUHI4',
  'buffalo-wild-wings': 'https://drive.google.com/drive/folders/1vJCWTW2O6eaVkpkBjGX1vWJkFOLyrnyq',
  'waiakea-water': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'bond-vet': 'https://drive.google.com/drive/folders/1CyEDNF_36_1siTdUChYEhQCQtykn6yAi',
  'wagamama': 'https://drive.google.com/drive/folders/1UJPN2dD94SUdHDsUgICfUfDqUBzOhhRS',
  'byoma': 'https://drive.google.com/drive/folders/1_6AwLOOI-bKa3NeoRI_K8vcfojtLAZRP',
  'williams-racing': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'polaris': 'https://drive.google.com/drive/folders/17dctKgx5PO05_bw5scsdbKXS1olrtwAS',
  'car-wash': 'https://drive.google.com/drive/folders/13fmVFc15G77tH31zEhgUp1fYSrA6fOOD',
  'netflix': 'https://drive.google.com/drive/folders/1KBxdn8Xfhm5MZ8Z_BuICZwRyyctR1hdN',
  'beer-samplings': 'https://drive.google.com/drive/folders/12S5545-sD78eDYSxcC438kra_vTnG7xI',
  'katjes': 'https://drive.google.com/drive/folders/1fdv7i_3kXyDHMJLajR7bG-IDJITcUdyR',
  'mrbeast': 'https://drive.google.com/drive/folders/1jDA_ff4MWc9LlLMx7S65Oru15Yy-VOBc',
  'microsoft': 'https://drive.google.com/drive/folders/1YEVNExT1l9Eiaj9sKmxAuBqkNz8huCiD',
  'qwick': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'skinny-mixes': 'https://drive.google.com/drive/folders/1J5BNDKfyZNo_Y0gR__AbClEJDMelKHwH',
  'mac-cosmetics': 'https://drive.google.com/drive/folders/13-8CKGX1d_CUGcog49Wpx1gH9tmeHiqy',
  '1800-tequila': 'https://drive.google.com/drive/folders/1xnHOkH8vxiwm2OvpZ-xHC1RCa86DGpvb',
  'get-neer': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'meijer': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM',
  'topps-cards': 'https://drive.google.com/drive/folders/1pnMMxwibwuQvjngy0kbQ-AIwVPexB-uM'
};

const targetDir = path.join(__dirname, '../../client/public/images/case-studies');

// Extract folder ID from Google Drive URL
function extractFolderId(url: string): string | null {
  const match = url.match(/folders\/([a-zA-Z0-9-_]+)/);
  return match ? match[1] : null;
}

// Generate direct download links for Google Drive
function generateDirectLinks(folderId: string): string[] {
  // These are potential image IDs that might exist in the folder
  // Since we can't list files without API, we'll try common patterns
  return [
    `https://drive.google.com/uc?export=download&id=${folderId}`,
    `https://drive.google.com/thumbnail?id=${folderId}&sz=w2000`,
    `https://lh3.googleusercontent.com/d/${folderId}=w2000`
  ];
}

// Download image from URL
function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(`  Attempting to download from: ${url}`);
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`  ✓ Downloaded to: ${path.basename(filepath)}`);
          resolve();
        });
      } else if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          file.close();
          fs.unlinkSync(filepath);
          https.get(redirectUrl, (redirectResponse) => {
            if (redirectResponse.statusCode === 200) {
              const newFile = fs.createWriteStream(filepath);
              redirectResponse.pipe(newFile);
              newFile.on('finish', () => {
                newFile.close();
                console.log(`  ✓ Downloaded to: ${path.basename(filepath)}`);
                resolve();
              });
            } else {
              reject(new Error(`Failed with status: ${redirectResponse.statusCode}`));
            }
          }).on('error', reject);
        } else {
          reject(new Error('Redirect without location'));
        }
      } else {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`Failed with status: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlinkSync(filepath);
      reject(err);
    });
  });
}

async function downloadMissingImages() {
  console.log('🚀 Downloading images from Google Drive links in CSV...\n');

  for (const [caseStudyId, driveUrl] of Object.entries(googleDriveLinks)) {
    // Check if we already have images for this case study
    const mainImagePath = path.join(targetDir, `${caseStudyId}.jpg`);

    if (fs.existsSync(mainImagePath)) {
      console.log(`✓ ${caseStudyId}: Already has images, skipping`);
      continue;
    }

    console.log(`\n📸 ${caseStudyId}:`);
    console.log(`  Google Drive URL: ${driveUrl}`);

    const folderId = extractFolderId(driveUrl);
    if (!folderId) {
      console.log(`  ✗ Could not extract folder ID`);
      continue;
    }

    // Try to download using direct links
    const directLinks = generateDirectLinks(folderId);
    let downloaded = false;

    for (let i = 0; i < directLinks.length && !downloaded; i++) {
      try {
        const targetPath = path.join(targetDir, `${caseStudyId}.jpg`);
        await downloadImage(directLinks[i], targetPath);

        // Check if file was actually downloaded and has content
        const stats = fs.statSync(targetPath);
        if (stats.size > 1000) { // At least 1KB
          downloaded = true;
        } else {
          fs.unlinkSync(targetPath);
          console.log(`  ✗ Downloaded file too small, trying next method`);
        }
      } catch (error) {
        console.log(`  ✗ Method ${i + 1} failed`);
      }
    }

    if (!downloaded) {
      console.log(`  ⚠️  Could not download images from Google Drive (may need API key or manual download)`);
    }
  }

  console.log('\n✅ Download process complete!');
  console.log('Note: Some Google Drive folders may require authentication or manual download.');
}

// Run the download
downloadMissingImages().catch(console.error);