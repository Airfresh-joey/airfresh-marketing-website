import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  url: string;
  caption: string;
  id: string;
}

interface NotionGallery {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  images: GalleryImage[];
  notionUrl: string;
  lastUpdated: string;
}

export function NotionGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGallery, setSelectedGallery] = useState<NotionGallery | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { data: galleries, isLoading, error } = useQuery<NotionGallery[]>({
    queryKey: ['/api/notion/galleries'],
  });

  // Extract unique categories
  const categories = galleries 
    ? ['all', ...Array.from(new Set(galleries.map(gallery => gallery.category)))]
    : ['all'];

  // Filter galleries by category
  const filteredGalleries = selectedCategory === 'all' 
    ? galleries 
    : galleries?.filter(gallery => gallery.category === selectedCategory);

  const openLightbox = (gallery: NotionGallery, imageIndex: number) => {
    setSelectedGallery(gallery);
    setSelectedImageIndex(imageIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedGallery(null);
    setSelectedImageIndex(0);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedGallery) return;
    const totalImages = selectedGallery.images.length;
    
    if (direction === 'prev') {
      setSelectedImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    } else {
      setSelectedImageIndex((prev) => (prev + 1) % totalImages);
    }
  };

  if (isLoading) {
    return <NotionGallerySkeleton />;
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Unable to load galleries
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Please try again later or check our case studies.
          </p>
        </div>
      </div>
    );
  }

  if (!galleries || galleries.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No galleries available
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Check back soon for new visual content!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Event Galleries
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Visual stories from our most memorable brand activations and events
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              data-testid={`button-gallery-category-${category}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Galleries Grid */}
        <div className="space-y-12">
          {filteredGalleries?.map((gallery) => (
            <GallerySection 
              key={gallery.id} 
              gallery={gallery} 
              onImageClick={openLightbox}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedGallery && (
        <Dialog open={isLightboxOpen} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-screen-lg p-0 overflow-hidden">
            <DialogTitle className="sr-only">
              {selectedGallery.images[selectedImageIndex]?.caption || 'Gallery Image'}
            </DialogTitle>
            <div className="relative">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeLightbox}
                data-testid="button-close-lightbox"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              {selectedGallery.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('prev')}
                    data-testid="button-prev-image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                    onClick={() => navigateImage('next')}
                    data-testid="button-next-image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}

              {/* Image */}
              <figure itemScope itemType="https://schema.org/ImageObject">
                <img
                  src={selectedGallery.images[selectedImageIndex]?.url}
                  alt={selectedGallery.images[selectedImageIndex]?.caption || `${selectedGallery.title} event photo`}
                  title={`${selectedGallery.title} - ${selectedGallery.category} - AirFresh Marketing`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  loading="eager"
                  decoding="async"
                  data-testid="img-lightbox-current"
                  itemProp="contentUrl"
                />
                <meta itemProp="name" content={selectedGallery.title} />
                <meta itemProp="description" content={selectedGallery.description} />
              </figure>

              {/* Caption */}
              {selectedGallery.images[selectedImageIndex]?.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                  <p className="text-center">
                    {selectedGallery.images[selectedImageIndex].caption}
                  </p>
                </div>
              )}

              {/* Image counter */}
              {selectedGallery.images.length > 1 && (
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {selectedGallery.images.length}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

function GallerySection({ 
  gallery, 
  onImageClick 
}: { 
  gallery: NotionGallery;
  onImageClick: (gallery: NotionGallery, index: number) => void;
}) {
  const formattedDate = new Date(gallery.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Use first 4 images for preview
  const previewImages = gallery.images.slice(0, 4);
  const remainingCount = gallery.images.length - 4;

  return (
    <div className="space-y-4">
      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {gallery.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {gallery.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1">
              <Camera className="w-4 h-4" />
              {gallery.images.length} photos
            </span>
          </div>
        </div>
        
        {/* Tags */}
        {gallery.tags && gallery.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {gallery.tags.map(tag => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {previewImages.map((image, index) => (
          <div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
            onClick={() => onImageClick(gallery, index)}
            data-testid={`button-gallery-image-${gallery.id}-${index}`}
          >
            <img
              src={image.url}
              alt={image.caption || `${gallery.title} photo ${index + 1}`}
              title={`${gallery.title} - ${gallery.category}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              width="400"
              height="400"
              itemProp="image"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-medium">View</span>
            </div>
            
            {/* Show remaining count on last image */}
            {index === 3 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">+{remainingCount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function NotionGallerySkeleton() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Skeleton className="h-10 w-48 mb-4" />
      <Skeleton className="h-6 w-96 mb-8" />
      
      <div className="flex gap-2 mb-8">
        {[1, 2, 3, 4].map(i => (
          <Skeleton key={i} className="h-8 w-24" />
        ))}
      </div>
      
      <div className="space-y-12">
        {[1, 2].map(i => (
          <div key={i} className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <Skeleton className="h-8 w-64 mb-2" />
                <Skeleton className="h-4 w-96 mb-2" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-6 w-16" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(j => (
                <Skeleton key={j} className="aspect-square rounded-lg" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}