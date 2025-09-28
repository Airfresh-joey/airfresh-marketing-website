import drive from '@googleapis/drive';
import { getUnsplashFallbackImage } from './unsplash-fallback';

export interface GoogleDriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  thumbnailLink?: string;
  directLink: string;
}

export class GoogleDriveService {
  private driveClient: any;
  private apiKey: string | undefined;
  private initialized: boolean = false;

  constructor() {
    // Initialization will happen lazily on first use
  }

  private initialize() {
    if (this.initialized) return;

    // Try to get API key from environment variable
    this.apiKey = process.env.GOOGLE_DRIVE_API_KEY;

    if (this.apiKey) {
      console.log('Google Drive API key found, initializing client...');
      this.driveClient = drive.drive({
        version: 'v3',
        auth: this.apiKey
      });
    } else {
      console.log('No Google Drive API key found. Set GOOGLE_DRIVE_API_KEY environment variable for full functionality.');
    }

    this.initialized = true;
  }

  /**
   * Extract folder ID from Google Drive URL
   */
  extractFolderId(folderUrl: string): string | null {
    if (!folderUrl || !folderUrl.includes('drive.google.com')) {
      return null;
    }
    
    const folderIdMatch = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    return folderIdMatch ? folderIdMatch[1] : null;
  }

  /**
   * List image files in a Google Drive folder
   */
  async listImagesInFolder(folderUrl: string, clientName?: string): Promise<GoogleDriveFile[]> {
    this.initialize();
    const folderId = this.extractFolderId(folderUrl);
    
    if (!folderId) {
      console.error('Invalid Google Drive folder URL:', folderUrl);
      return [];
    }

    // If no API key, return mock URLs that might work for public folders
    if (!this.driveClient) {
      console.log(`No API key available, using Unsplash fallback images for: ${clientName || 'unknown client'}`);
      return this.generateFallbackImages(folderId, clientName);
    }

    try {
      console.log(`Fetching images from Google Drive folder: ${folderId}`);
      
      // Query for image files in the folder
      const response = await this.driveClient.files.list({
        q: `'${folderId}' in parents and (mimeType contains 'image/')`,
        fields: 'files(id, name, mimeType, webViewLink, thumbnailLink)',
        pageSize: 20,
        orderBy: 'name'
      });

      if (!response.data.files || response.data.files.length === 0) {
        console.log(`No images found in folder ${folderId}, using Unsplash fallback`);
        return this.generateFallbackImages(folderId, clientName);
      }

      // Convert to our format with direct links
      const images: GoogleDriveFile[] = response.data.files.map((file: any) => ({
        id: file.id,
        name: file.name || 'Untitled',
        mimeType: file.mimeType || 'image/jpeg',
        webViewLink: file.webViewLink,
        thumbnailLink: file.thumbnailLink,
        directLink: `https://drive.google.com/uc?export=view&id=${file.id}`
      }));

      console.log(`Found ${images.length} images in folder ${folderId}`);
      return images;

    } catch (error: any) {
      console.error('Error listing files from Google Drive:', error.message);
      
      // If it's a permission error, the folder might be private
      if (error.code === 403 || error.code === 404) {
        console.log('Folder may be private or inaccessible, using Unsplash fallback');
        return this.generateFallbackImages(folderId, clientName);
      }
      
      return this.generateFallbackImages(folderId, clientName);
    }
  }

  /**
   * Generate fallback image URLs when API is not available or folder is private
   */
  private generateFallbackImages(folderId: string, clientName?: string): GoogleDriveFile[] {
    const fallbackImages: GoogleDriveFile[] = [];
    
    // Use Unsplash images based on client name for better placeholders
    for (let i = 0; i < 4; i++) {
      const imageUrl = clientName 
        ? getUnsplashFallbackImage(clientName, i)
        : this.generatePotentialImageUrl(folderId, i);
      
      fallbackImages.push({
        id: `${folderId}_img_${i + 1}`,
        name: `Image ${i + 1}`,
        mimeType: 'image/jpeg',
        directLink: imageUrl
      });
    }
    
    return fallbackImages;
  }

  /**
   * Generate potential image URLs that might work for public folders
   */
  private generatePotentialImageUrl(folderId: string, index: number): string {
    const patterns = [
      `https://drive.google.com/uc?export=view&id=${folderId}`,
      `https://drive.google.com/thumbnail?id=${folderId}&sz=w1200-h800`,
      `https://lh3.googleusercontent.com/d/${folderId}=w1200-h800-no`,
      `https://drive.google.com/file/d/${folderId}/preview`
    ];
    
    return patterns[index % patterns.length];
  }

  /**
   * Get viewable URLs for images from a Google Drive folder
   */
  async getImageUrlsFromFolder(folderUrl: string, limit: number = 4, clientName?: string): Promise<string[]> {
    this.initialize();
    const images = await this.listImagesInFolder(folderUrl, clientName);
    
    // Return direct links for the first N images
    return images.slice(0, limit).map(img => img.directLink);
  }

  /**
   * Get a single representative image from a folder (for thumbnail)
   */
  async getThumbnailFromFolder(folderUrl: string, clientName?: string): Promise<string | null> {
    this.initialize();
    const images = await this.listImagesInFolder(folderUrl, clientName);
    return images.length > 0 ? images[0].directLink : null;
  }
}

// Export singleton instance
export const googleDriveService = new GoogleDriveService();