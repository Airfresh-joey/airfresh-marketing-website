import { googleDriveService } from "../services/google-drive";
import { getAllCaseStudies } from "../portfolio-case-studies";
import fs from "fs";
import path from "path";
import https from "https";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

// Helper function to download an image from URL
function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        // Handle redirect
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          https.get(redirectUrl, (redirectResponse) => {
            redirectResponse.pipe(file);
            file.on("finish", () => {
              file.close();
              resolve();
            });
          }).on("error", reject);
        }
      } else {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      }
    }).on("error", reject);
  });
}

async function downloadGoogleDriveImages() {
  console.log("Starting Google Drive image download...");
  console.log(`API Key present: ${!!process.env.GOOGLE_DRIVE_API_KEY}`);

  const imagesDir = path.join(__dirname, "../../client/public/images/case-studies");

  // Ensure directory exists
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // Debug: Check all case studies
  console.log(`Total case studies: ${portfolioCaseStudies.length}`);

  // Check a few samples for googleDriveUrl
  portfolioCaseStudies.slice(0, 3).forEach(study => {
    console.log(`${study.name}: has googleDriveUrl: ${!!(study as any).googleDriveUrl}`);
  });

  // Process each case study with a Google Drive URL
  const casesWithDrive = portfolioCaseStudies.filter(study => (study as any).googleDriveUrl);

  console.log(`Found ${casesWithDrive.length} case studies with Google Drive URLs`);

  for (const caseStudy of casesWithDrive) {
    console.log(`\nProcessing: ${caseStudy.name}`);

    try {
      // Get images from Google Drive folder
      const imageUrls = await googleDriveService.getImageUrlsFromFolder(
        (caseStudy as any).googleDriveUrl!,
        caseStudy.name
      );

      console.log(`  Found ${imageUrls.length} images`);

      // Download each image
      for (let i = 0; i < imageUrls.length && i < 3; i++) {
        const imageUrl = imageUrls[i];
        const filename = i === 0
          ? `${caseStudy.id}.jpg`
          : `${caseStudy.id}-${i + 1}.jpg`;
        const filepath = path.join(imagesDir, filename);

        // Skip if file already exists
        if (fs.existsSync(filepath)) {
          console.log(`  ✓ ${filename} already exists, skipping`);
          continue;
        }

        try {
          console.log(`  Downloading ${filename}...`);
          await downloadImage(imageUrl, filepath);
          console.log(`  ✓ Downloaded ${filename}`);
        } catch (error) {
          console.error(`  ✗ Failed to download ${filename}:`, error);
        }
      }

    } catch (error) {
      console.error(`Failed to process ${caseStudy.name}:`, error);
    }
  }

  console.log("\nGoogle Drive image download complete!");
}

// Run the download
downloadGoogleDriveImages().catch(console.error);