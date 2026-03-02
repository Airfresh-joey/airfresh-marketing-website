// City-specific images mapping
// Using high-quality Unsplash images for each city and service

export interface CityImages {
  hero: string;
  thumbnail: string;
  gallery?: string[];
}

// Major cities with iconic imagery - ALL using Unsplash for reliability
export const cityImages: Record<string, CityImages> = {
  'new-york-city': {
    hero: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop'
    ]
  },
  'new-york': {
    hero: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=400&h=300&fit=crop'
  },
  'los-angeles': {
    hero: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=400&h=300&fit=crop'
  },
  'chicago': {
    hero: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=400&h=300&fit=crop'
  },
  'denver': {
    hero: 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1565895405227-31cffbe5cf86?w=400&h=300&fit=crop'
  },
  'dallas': {
    hero: 'https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop'
  },
  'houston': {
    hero: 'https://images.unsplash.com/photo-1530089711124-9ca31fb9e863?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1548519157-6b969ccd5d4b?w=400&h=300&fit=crop'
  },
  'austin': {
    hero: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1588993608283-7f0eda4438be?w=400&h=300&fit=crop'
  },
  'miami': {
    hero: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&h=300&fit=crop'
  },
  'atlanta': {
    hero: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1559554691-596e2f290a81?w=400&h=300&fit=crop'
  },
  'seattle': {
    hero: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=400&h=300&fit=crop'
  },
  'san-francisco': {
    hero: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop'
  },
  'boston': {
    hero: 'https://images.unsplash.com/photo-1581590114023-fd3e5240a052?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=400&h=300&fit=crop'
  },
  'phoenix': {
    hero: 'https://images.unsplash.com/photo-1558645836-e44122a743ee?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=400&h=300&fit=crop'
  },
  'san-diego': {
    hero: 'https://images.unsplash.com/photo-1538964173425-93609525ded7?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc67?w=400&h=300&fit=crop'
  },
  'philadelphia': {
    hero: 'https://images.unsplash.com/photo-1569761316261-9a8696fa2ca3?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1574481116169-96b4c878859e?w=400&h=300&fit=crop'
  },
  'nashville': {
    hero: 'https://images.unsplash.com/photo-1560506840-ec148e82a604?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1588181957926-f85e6bda4096?w=400&h=300&fit=crop'
  },
  'las-vegas': {
    hero: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop'
  },
  'portland': {
    hero: 'https://images.unsplash.com/photo-1507245476901-243d7cc39a20?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=400&h=300&fit=crop'
  },
  'orlando': {
    hero: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1581684898794-35b5a87859ad?w=400&h=300&fit=crop'
  },
  'tampa': {
    hero: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1595091594183-a1b19aa27a48?w=400&h=300&fit=crop'
  },
  'minneapolis': {
    hero: 'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1474684256642-c3492829ff9f?w=400&h=300&fit=crop'
  },
  'detroit': {
    hero: 'https://images.unsplash.com/photo-1547424867-1e8e5a9c9e09?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1566343441370-ac72e8d0f6f1?w=400&h=300&fit=crop'
  },
  'new-orleans': {
    hero: 'https://images.unsplash.com/photo-1549965738-e1aaf1168943?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?w=400&h=300&fit=crop'
  },
  'milwaukee': {
    hero: 'https://images.unsplash.com/photo-1602517032470-cce76ff9610e?w=1600&h=900&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1578406132218-0fa7ee6ad34e?w=400&h=300&fit=crop'
  }
};

// Default city image for cities not in the specific list
export const defaultCityImages: CityImages = {
  hero: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop',
  thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
  ]
};

// Service-specific images - Using Unsplash for reliability (no broken local files)
export const serviceImages: Record<string, string> = {
  // All possible slug variations mapped to appropriate marketing imagery
  'brand-ambassadors': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop',
  'convention-staffing': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop',
  'event-management': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=900&fit=crop',
  'experiential-marketing': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&h=900&fit=crop',
  'guerilla-marketing': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&h=900&fit=crop',
  'marketing-mascots': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&h=900&fit=crop',
  'promotional-models': 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&h=900&fit=crop',
  'promotional-staff': 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&h=900&fit=crop',
  
  // IMPORTANT: Both slug variations for street teams
  'street-team-marketing': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&h=900&fit=crop',
  'street-teams': 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1600&h=900&fit=crop',
  
  // Additional service variations
  'event-staff': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop',
  'event-staffing': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop',
  'hospitality-staff': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop',
  'trade-show-booth-staff': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop',
  'trade-show-staffing': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop',
  'festival-activation': 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&h=900&fit=crop',
  'product-sampling': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&h=900&fit=crop',
  'brand-activation': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&h=900&fit=crop',
  'conference-staffing': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop'
};

// Helper function to get city images
export function getCityImages(citySlug: string): CityImages {
  return cityImages[citySlug] || defaultCityImages;
}

// Helper function to get service image
export function getServiceImage(serviceSlug: string): string {
  return serviceImages[serviceSlug] || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop';
}

// Brand activation images - Unsplash fallbacks
export const brandActivationImages = {
  experiential: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&h=900&fit=crop',
  experientialCDN: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&h=900&fit=crop',
  airfreshLogo: 'https://cdn.prod.website-files.com/5df012a5fc6d5a8e7e6328c4/5df95154d896f083cd7b9551_Airfresh-horiz.svg',
  airfreshBg: 'https://cdn.prod.website-files.com/5df012a5fc6d5a8e7e6328c4/5df9540a4324b250ab3b1c8b_airfreshbg.svg'
};
