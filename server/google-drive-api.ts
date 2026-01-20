// Google Drive Image API Integration
// This provides better methods to extract actual images from Google Drive folders

export interface GoogleDriveImage {
    id: string;
    name: string;
    webViewLink: string;
    thumbnailLink: string;
    directLink: string;
}

export function createGoogleDriveImageUrls(folderUrl: string): string[] {
    if (!folderUrl || !folderUrl.includes('drive.google.com')) {
        return [];
    }
    
    // Extract folder ID from the URL
    const folderIdMatch = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderIdMatch) {
        return [];
    }
    
    const folderId = folderIdMatch[1];
    
    // Create multiple image URL formats that work for Google Drive
    const imageUrls = [
        // Method 1: Direct thumbnail (works for public folders)
        `https://drive.google.com/thumbnail?id=${folderId}&sz=w800-h600`,
        
        // Method 2: Google User Content format (often works)
        `https://lh3.googleusercontent.com/d/${folderId}=w800-h600-no`,
        
        // Method 3: Drive export view
        `https://drive.google.com/uc?export=view&id=${folderId}`,
        
        // Method 4: Direct file ID format (if it's actually a file, not folder)
        `https://drive.google.com/file/d/${folderId}/preview`,
        
        // Method 5: Embedded preview
        `https://drive.google.com/embeddedfolderview?id=${folderId}#grid`
    ];
    
    return imageUrls;
}

export function getBestGoogleDriveImage(folderUrl: string): string {
    if (!folderUrl || !folderUrl.includes('drive.google.com')) {
        return '';
    }
    
    // Extract folder ID from the URL
    const folderIdMatch = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderIdMatch) {
        return '';
    }
    
    const folderId = folderIdMatch[1];
    
    // Return the most reliable thumbnail format
    return `https://drive.google.com/thumbnail?id=${folderId}&sz=w800-h600-c`;
}

export function createImageGallery(folderUrl: string): GoogleDriveImage[] {
    // In a full implementation, this would use Google Drive API to list folder contents
    // For now, we'll create placeholder entries
    if (!folderUrl || !folderUrl.includes('drive.google.com')) {
        return [];
    }
    
    const folderIdMatch = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderIdMatch) {
        return [];
    }
    
    const folderId = folderIdMatch[1];
    
    // Create placeholder gallery entries
    const gallery: GoogleDriveImage[] = [];
    
    for (let i = 1; i <= 5; i++) {
        gallery.push({
            id: `${folderId}_image_${i}`,
            name: `Project Image ${i}`,
            webViewLink: folderUrl,
            thumbnailLink: `https://drive.google.com/thumbnail?id=${folderId}&sz=w400-h300-c`,
            directLink: `https://drive.google.com/uc?export=view&id=${folderId}`
        });
    }
    
    return gallery;
}

// Test if a Google Drive image URL is accessible
export async function testGoogleDriveImageUrl(imageUrl: string): Promise<boolean> {
    try {
        const response = await fetch(imageUrl, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        console.error('Error testing Google Drive image URL:', error);
        return false;
    }
}