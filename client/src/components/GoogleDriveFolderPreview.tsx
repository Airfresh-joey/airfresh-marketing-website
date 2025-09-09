import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Folder, Image as ImageIcon, FileText, Video } from 'lucide-react';

interface GoogleDriveFolderPreviewProps {
  folderUrl: string;
  title: string;
  className?: string;
  fallbackImage?: string;
}

export function GoogleDriveFolderPreview({ 
  folderUrl, 
  title, 
  className = "",
  fallbackImage = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
}: GoogleDriveFolderPreviewProps) {
  
  if (!folderUrl || !folderUrl.includes('drive.google.com')) {
    return (
      <img 
        src={fallbackImage} 
        alt={title}
        className={className}
      />
    );
  }

  return (
    <div className={`relative bg-gradient-to-br from-blue-50 to-white border-2 border-dashed border-blue-200 ${className}`}>
      {/* Background image */}
      <img 
        src={fallbackImage} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      
      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Folder className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title} Project Assets
          </h3>
          
          <div className="flex items-center justify-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <ImageIcon className="h-4 w-4" />
              <span>Photos</span>
            </div>
            <div className="flex items-center gap-1">
              <Video className="h-4 w-4" />
              <span>Videos</span>
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-4 w-4" />
              <span>Documents</span>
            </div>
          </div>
          
          <Button
            asChild
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a 
              href={folderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              View Project Assets
            </a>
          </Button>
        </div>
      </div>
      
      {/* Corner badge */}
      <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
        Real Assets
      </div>
    </div>
  );
}

export default GoogleDriveFolderPreview;