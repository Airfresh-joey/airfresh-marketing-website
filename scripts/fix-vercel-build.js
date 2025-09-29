#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// This script fixes the Vercel deployment issue with routes-manifest.json
// It ensures the manifest is available in the location Vercel expects

const nextDistDir = path.join(process.cwd(), '.next');
const routesManifestPath = path.join(nextDistDir, 'routes-manifest.json');
const vercelPath = '/vercel/path0/routes-manifest.json';

// Check if we're in Vercel environment
if (process.env.VERCEL) {
  console.log('Running Vercel build fix...');

  // Check if routes-manifest.json exists in .next directory
  if (fs.existsSync(routesManifestPath)) {
    console.log('Found routes-manifest.json in .next directory');

    // Ensure the /vercel/path0 directory exists
    const vercelDir = path.dirname(vercelPath);
    if (!fs.existsSync(vercelDir)) {
      try {
        fs.mkdirSync(vercelDir, { recursive: true });
        console.log(`Created directory: ${vercelDir}`);
      } catch (err) {
        console.log(`Directory ${vercelDir} might already exist or cannot be created`);
      }
    }

    // Try to copy the routes manifest to where Vercel expects it
    try {
      const content = fs.readFileSync(routesManifestPath);
      fs.writeFileSync(vercelPath, content);
      console.log(`Copied routes-manifest.json to ${vercelPath}`);
    } catch (err) {
      console.log(`Could not copy to ${vercelPath}, trying symlink...`);

      // If we can't write there, try creating a symlink
      try {
        if (fs.existsSync(vercelPath)) {
          fs.unlinkSync(vercelPath);
        }
        fs.symlinkSync(routesManifestPath, vercelPath);
        console.log(`Created symlink from ${routesManifestPath} to ${vercelPath}`);
      } catch (symlinkErr) {
        console.log('Could not create symlink either. Build will continue...');
      }
    }
  } else {
    console.log('routes-manifest.json not found in .next directory - this is expected for some builds');
  }
} else {
  console.log('Not in Vercel environment, skipping build fix');
}