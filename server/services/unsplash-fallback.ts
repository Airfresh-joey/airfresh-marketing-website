/**
 * Unsplash fallback image provider for case studies
 * Provides relevant stock images based on client name and industry
 */

interface UnsplashImage {
  url: string;
  alt: string;
}

const FALLBACK_IMAGES: Record<string, string[]> = {
  // Technology companies
  'microsoft': [
    'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop'
  ],
  'netflix': [
    'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1200&h=800&fit=crop'
  ],
  'apple': [
    'https://images.unsplash.com/photo-1569770218135-bea267ed7e84?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=1200&h=800&fit=crop'
  ],
  
  // Entertainment & Events
  'mrbeast': [
    'https://images.unsplash.com/photo-1626908013943-df94de54984c?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc81?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?w=1200&h=800&fit=crop'
  ],
  'formula one': [
    'https://images.unsplash.com/photo-1684785879424-2ba9c3e8b3a7?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1596838227943-0080651e9343?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1532906619279-a039b0c4e8a2?w=1200&h=800&fit=crop'
  ],
  'las vegas': [
    'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1200&h=800&fit=crop'
  ],
  
  // Beauty & Cosmetics
  'mac cosmetics': [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1609207807107-e0fde4dafcdc?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&h=800&fit=crop'
  ],
  'clarins': [
    'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=1200&h=800&fit=crop'
  ],
  'byoma': [
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556228852-80b6e5eeff06?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1617897903246-719242758050?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=800&fit=crop'
  ],
  
  // Food & Beverage
  'buffalo wild wings': [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=1200&h=800&fit=crop'
  ],
  'wagamama': [
    'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&h=800&fit=crop'
  ],
  '1800 tequila': [
    'https://images.unsplash.com/photo-1516535794938-6063878f08cc?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1566217688581-b2191944c2f9?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1200&h=800&fit=crop'
  ],
  'waiakea water': [
    'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1559839914-17aae19cec71?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=1200&h=800&fit=crop'
  ],
  
  // Sports & Racing
  'williams racing': [
    'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1553631266-e7c077d12ef6?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1533709475520-a0745bba78bf?w=1200&h=800&fit=crop'
  ],
  'nissan': [
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1555652736-e92021d28a10?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=1200&h=800&fit=crop'
  ],
  
  // Default fallback for unknown clients
  'default': [
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&h=800&fit=crop'
  ]
};

/**
 * Get fallback images for a client based on their name
 */
export function getUnsplashFallbackImages(clientName: string): string[] {
  const searchKey = clientName.toLowerCase().trim();
  
  // Try to find exact match or partial match
  for (const [key, images] of Object.entries(FALLBACK_IMAGES)) {
    if (searchKey.includes(key) || key.includes(searchKey)) {
      return images;
    }
  }
  
  // If no match found, return default event marketing images
  return FALLBACK_IMAGES.default;
}

/**
 * Get a specific fallback image by index
 */
export function getUnsplashFallbackImage(clientName: string, index: number = 0): string {
  const images = getUnsplashFallbackImages(clientName);
  return images[index % images.length];
}