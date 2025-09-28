// City-specific images mapping
// Since the original site doesn't have city-specific images, we'll use relevant stock photos
// These can be replaced with actual city photos later

export interface CityImages {
  hero: string;
  thumbnail: string;
  gallery?: string[];
}

// Major cities with iconic imagery
export const cityImages: Record<string, CityImages> = {
  'new-york-city': {
    hero: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&h=900&fit=crop', // Times Square
    thumbnail: 'https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=800&h=600&fit=crop'
    ]
  },
  'los-angeles': {
    hero: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=1600&h=900&fit=crop', // LA skyline
    thumbnail: 'https://images.unsplash.com/photo-1515896769750-31548aa180ed?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1508435949569-a49aaa1c71aa?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1554143091-c41d76e3da15?w=800&h=600&fit=crop'
    ]
  },
  'chicago': {
    hero: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=1600&h=900&fit=crop', // Chicago skyline
    thumbnail: 'https://images.unsplash.com/photo-1477414956199-7dafc86a4f1a?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1581373449483-37449f962b6c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&fit=crop'
    ]
  },
  'denver': {
    hero: 'https://images.unsplash.com/photo-1546156929-a4c0ac411f47?w=1600&h=900&fit=crop', // Denver with mountains
    thumbnail: 'https://images.unsplash.com/photo-1565895405227-31cffbe5cf86?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519424187720-db6d0fc5a5d2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1609924211018-5526c55bad5b?w=800&h=600&fit=crop'
    ]
  },
  'seattle': {
    hero: 'https://images.unsplash.com/photo-1502175353174-a7a70e73b362?w=1600&h=900&fit=crop', // Space Needle
    thumbnail: 'https://images.unsplash.com/photo-1542223616-740d5dff7f56?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1516724562728-afc824a36e84?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop'
    ]
  },
  'austin': {
    hero: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1600&h=900&fit=crop', // Austin skyline
    thumbnail: 'https://images.unsplash.com/photo-1588993608283-7f0eda4438be?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603925812495-f3926b3c8165?w=800&h=600&fit=crop'
    ]
  },
  'miami': {
    hero: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1600&h=900&fit=crop', // Miami Beach
    thumbnail: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1571041804726-53e8bf082096?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=800&h=600&fit=crop'
    ]
  },
  'san-francisco': {
    hero: 'https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1600&h=900&fit=crop', // Golden Gate
    thumbnail: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558393847-a490cdb80f5f?w=800&h=600&fit=crop'
    ]
  },
  'boston': {
    hero: 'https://images.unsplash.com/photo-1581590114023-fd3e5240a052?w=1600&h=900&fit=crop', // Boston Harbor
    thumbnail: 'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1556079337-11b3fa9a70f5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573140248124-73aeaa83061d?w=800&h=600&fit=crop'
    ]
  },
  'dallas': {
    hero: 'https://images.unsplash.com/photo-1545194445-dddb8f4487c6?w=1600&h=900&fit=crop', // Dallas skyline
    thumbnail: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566990820846-cb1e40bfd759?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1520633946502-dcf82189a6a0?w=800&h=600&fit=crop'
    ]
  },
  'atlanta': {
    hero: 'https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?w=1600&h=900&fit=crop', // Atlanta skyline
    thumbnail: 'https://images.unsplash.com/photo-1559554691-596e2f290a81?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565036491543-b98b91e9a528?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1603217039863-aa0c865404f7?w=800&h=600&fit=crop'
    ]
  },
  'phoenix': {
    hero: 'https://images.unsplash.com/photo-1560574188-6a6774965120?w=1600&h=900&fit=crop', // Phoenix desert
    thumbnail: 'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1617537102862-5c809488a25f?w=800&h=600&fit=crop'
    ]
  },
  'san-diego': {
    hero: 'https://images.unsplash.com/photo-1579532536935-619928decd08?w=1600&h=900&fit=crop', // San Diego coast
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc67?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1512144156051-a7d6425d0e3a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600270055149-c36e30d5db66?w=800&h=600&fit=crop'
    ]
  },
  'philadelphia': {
    hero: 'https://images.unsplash.com/photo-1524168272322-bf73616d9cb5?w=1600&h=900&fit=crop', // Philly skyline
    thumbnail: 'https://images.unsplash.com/photo-1574481116169-96b4c878859e?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1572715399758-f21aa1e5a37c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1597133166405-b1a852de9bb4?w=800&h=600&fit=crop'
    ]
  },
  'nashville': {
    hero: 'https://images.unsplash.com/photo-1560506840-ec148e82a604?w=1600&h=900&fit=crop', // Nashville Broadway
    thumbnail: 'https://images.unsplash.com/photo-1588181957926-f85e6bda4096?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1553301208-a3718cc0150e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570089707135-f87ece17029e?w=800&h=600&fit=crop'
    ]
  },
  'portland': {
    hero: 'https://images.unsplash.com/photo-1474376962954-d8a681cc53b2?w=1600&h=900&fit=crop', // Portland bridges
    thumbnail: 'https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1502993196971-b3349b60e9ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1573688012890-b3c360144540?w=800&h=600&fit=crop'
    ]
  },
  'las-vegas': {
    hero: 'https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&h=900&fit=crop', // Vegas Strip
    thumbnail: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1585618256754-33343e56567f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1569163139394-de4798aa62b6?w=800&h=600&fit=crop'
    ]
  },
  'orlando': {
    hero: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=1600&h=900&fit=crop', // Orlando skyline
    thumbnail: 'https://images.unsplash.com/photo-1581684898794-35b5a87859ad?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1626406299037-cffe164f0c48?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=800&h=600&fit=crop'
    ]
  },
  'tampa': {
    hero: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1600&h=900&fit=crop', // Tampa Bay
    thumbnail: 'https://images.unsplash.com/photo-1595091594183-a1b19aa27a48?w=400&h=300&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606829079995-640dbcbf552a?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1621265040752-68b62b71497c?w=800&h=600&fit=crop'
    ]
  },
  'minneapolis': {
    hero: 'https://images.unsplash.com/photo-1557804506-e969d7b32a4b?w=1600&h=900&fit=crop', // Minneapolis skyline
    thumbnail: 'https://images.unsplash.com/photo-1474684256642-c3492829ff9f?w=400&h=300&fit=crop'
  },
  'detroit': {
    hero: 'https://images.unsplash.com/photo-1567606641547-67a97ad65d24?w=1600&h=900&fit=crop', // Detroit skyline
    thumbnail: 'https://images.unsplash.com/photo-1566343441370-ac72e8d0f6f1?w=400&h=300&fit=crop'
  },
  'st-louis': {
    hero: 'https://images.unsplash.com/photo-1501952476817-d7ae22e0d202?w=1600&h=900&fit=crop', // St. Louis Arch
    thumbnail: 'https://images.unsplash.com/photo-1591013337615-b5bdc8332b8a?w=400&h=300&fit=crop'
  },
  'san-antonio': {
    hero: 'https://images.unsplash.com/photo-1518500928187-fdd64f6fdbf2?w=1600&h=900&fit=crop', // San Antonio River Walk
    thumbnail: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=400&h=300&fit=crop'
  },
  'kansas-city': {
    hero: 'https://images.unsplash.com/photo-1622495965609-5e3b4a00b116?w=1600&h=900&fit=crop', // Kansas City skyline
    thumbnail: 'https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?w=400&h=300&fit=crop'
  },
  'charlotte': {
    hero: 'https://images.unsplash.com/photo-1572987673074-f5659f3540de?w=1600&h=900&fit=crop', // Charlotte skyline
    thumbnail: 'https://images.unsplash.com/photo-1585245332774-3dd2b177048a?w=400&h=300&fit=crop'
  },
  'columbus': {
    hero: 'https://images.unsplash.com/photo-1567443024213-7d8d4f46314c?w=1600&h=900&fit=crop', // Columbus Ohio
    thumbnail: 'https://images.unsplash.com/photo-1577583606189-cfaf0e96f4f3?w=400&h=300&fit=crop'
  },
  'indianapolis': {
    hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc67?w=1600&h=900&fit=crop', // Indianapolis
    thumbnail: 'https://images.unsplash.com/photo-1578001506854-e6f89c25abfd?w=400&h=300&fit=crop'
  },
  'pittsburgh': {
    hero: 'https://images.unsplash.com/photo-1527239441953-caffd968d952?w=1600&h=900&fit=crop', // Pittsburgh bridges
    thumbnail: 'https://images.unsplash.com/photo-1513411052-55f15ad5f366?w=400&h=300&fit=crop'
  },
  'cincinnati': {
    hero: 'https://images.unsplash.com/photo-1568876696923-78de60e44bd3?w=1600&h=900&fit=crop', // Cincinnati skyline
    thumbnail: 'https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?w=400&h=300&fit=crop'
  },
  'salt-lake-city': {
    hero: 'https://images.unsplash.com/photo-1594399901384-38f24ec15cb8?w=1600&h=900&fit=crop', // Salt Lake City with mountains
    thumbnail: 'https://images.unsplash.com/photo-1565460333596-03d3e1e135f3?w=400&h=300&fit=crop'
  },
  'sacramento': {
    hero: 'https://images.unsplash.com/photo-1579548369658-e15d6c693031?w=1600&h=900&fit=crop', // Sacramento bridge
    thumbnail: 'https://images.unsplash.com/photo-1592439024267-ceea76bbdc67?w=400&h=300&fit=crop'
  },
  'raleigh': {
    hero: 'https://images.unsplash.com/photo-1632394358991-f7f063c0c89a?w=1600&h=900&fit=crop', // Raleigh
    thumbnail: 'https://images.unsplash.com/photo-1609174746123-9bf32c294b71?w=400&h=300&fit=crop'
  },
  'new-orleans': {
    hero: 'https://images.unsplash.com/photo-1549965738-e1aaf1168943?w=1600&h=900&fit=crop', // French Quarter
    thumbnail: 'https://images.unsplash.com/photo-1568693059993-a239b9cd4957?w=400&h=300&fit=crop'
  },
  'milwaukee': {
    hero: 'https://images.unsplash.com/photo-1602517032470-cce76ff9610e?w=1600&h=900&fit=crop', // Milwaukee waterfront
    thumbnail: 'https://images.unsplash.com/photo-1578406132218-0fa7ee6ad34e?w=400&h=300&fit=crop'
  }
};

// Default city image for cities not in the specific list
export const defaultCityImages: CityImages = {
  hero: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&h=900&fit=crop', // Generic city street
  thumbnail: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
  gallery: [
    'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop'
  ]
};

// Service-specific images from actual AirFresh Marketing website
export const serviceImages = {
  'brand-ambassadors': '/images/heroes/sxsw-event-all-services.jpeg',
  'convention-staffing': '/images/heroes/sxsw-event-all-services.jpeg',
  'event-management': '/images/heroes/mac-cosmetics-event-management.jpeg',
  'experiential-marketing': '/images/heroes/mac-cosmetics-event-management.jpeg',
  'guerilla-marketing': '/images/heroes/sxsw-event-all-services.jpeg',
  'marketing-mascots': '/images/heroes/sxsw-event-all-services.jpeg',
  'promotional-models': '/images/heroes/mac-cosmetics-promotional-models.jpeg',
  'street-team-marketing': '/images/heroes/sxsw-event-all-services.jpeg'
};

// Helper function to get city images
export function getCityImages(citySlug: string): CityImages {
  return cityImages[citySlug] || defaultCityImages;
}

// Helper function to get service image
export function getServiceImage(serviceSlug: string): string {
  return serviceImages[serviceSlug] || defaultCityImages.hero;
}

// Event and activation images from the original site
export const brandActivationImages = {
  experiential: '/images/heroes/mac-cosmetics.jpg', // Local copy of the AirFresh hero image
  experientialCDN: 'https://cdn.prod.website-files.com/5df012a5fc6d5a8e7e6328c4/5e29b1d0bbdcedf519e16cc8_mac-cosmetics.jpg',
  airfreshLogo: 'https://cdn.prod.website-files.com/5df012a5fc6d5a8e7e6328c4/5df95154d896f083cd7b9551_Airfresh-horiz.svg',
  airfreshBg: 'https://cdn.prod.website-files.com/5df012a5fc6d5a8e7e6328c4/5df9540a4324b250ab3b1c8b_airfreshbg.svg'
};