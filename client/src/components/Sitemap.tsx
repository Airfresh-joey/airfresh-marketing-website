export default function Sitemap() {
  const sitemap = {
    pages: [
      {
        url: 'https://airfreshmarketing.com',
        title: 'Home - Premier Experiential Marketing Agency',
        description: 'Leading experiential marketing agency specializing in brand activations, event marketing, and customer engagement campaigns nationwide',
        lastModified: '2025-09-09',
        priority: '1.0',
        keywords: ['experiential marketing', 'brand activation', 'event marketing']
      },
      {
        url: 'https://airfreshmarketing.com/about',
        title: 'About - 20+ Years of Experiential Marketing Excellence',
        description: 'Learn about AirFresh Marketing\'s 20+ year journey serving 300+ brands across 50+ cities',
        lastModified: '2025-09-09',
        priority: '0.8',
        keywords: ['about experiential marketing', 'marketing agency history', 'brand activation experts']
      },
      {
        url: 'https://airfreshmarketing.com/services',
        title: 'Experiential Marketing Services - Brand Activations & Events',
        description: 'Comprehensive experiential marketing services including brand activations, corporate events, product sampling',
        lastModified: '2025-09-09',
        priority: '0.9',
        keywords: ['experiential marketing services', 'brand activation services', 'corporate events']
      },
      {
        url: 'https://airfreshmarketing.com/talent',
        title: 'Professional Brand Ambassadors & Event Talent Network',
        description: 'Hire professional brand ambassadors from our network of 5,000+ verified specialists',
        lastModified: '2025-09-09',
        priority: '0.7',
        keywords: ['brand ambassadors', 'event staff', 'promotional talent']
      },
      {
        url: 'https://airfreshmarketing.com/projects/case-studies',
        title: 'Experiential Marketing Case Studies & Success Stories',
        description: 'Explore 500+ case studies showcasing real results from experiential marketing campaigns',
        lastModified: '2025-09-09',
        priority: '0.8',
        keywords: ['case studies', 'success stories', 'campaign results']
      },
      {
        url: 'https://airfreshmarketing.com/contact',
        title: 'Contact AirFresh Marketing - Get Your Free Consultation',
        description: 'Contact our experiential marketing experts for a free consultation on your next campaign',
        lastModified: '2025-09-09',
        priority: '0.6',
        keywords: ['contact', 'free consultation', 'get quote']
      }
    ],
    services: [
      'Experiential Marketing',
      'Brand Activations',
      'Product Sampling',
      'Corporate Events',
      'Trade Show Marketing',
      'Brand Ambassador Programs',
      'Pop-up Experiences',
      'Event Production',
      'Promotional Campaigns',
      'Customer Engagement'
    ],
    locations: [
      'Los Angeles, CA',
      'New York, NY', 
      'Chicago, IL',
      'Miami, FL',
      'Denver, CO',
      'Atlanta, GA',
      'Austin, TX',
      'Seattle, WA',
      'Boston, MA',
      'San Francisco, CA'
    ]
  };

  const generateXMLSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemap.pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
    return xml;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Site Map - AirFresh Marketing</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Main Pages</h2>
          <ul className="space-y-2">
            {sitemap.pages.map((page, index) => (
              <li key={index} className="border-l-2 border-blue-500 pl-3">
                <a href={page.url} className="font-medium hover:text-blue-600">
                  {page.title}
                </a>
                <p className="text-sm text-gray-600 mt-1">{page.description}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Services</h2>
          <ul className="grid grid-cols-1 gap-1">
            {sitemap.services.map((service, index) => (
              <li key={index} className="text-sm">• {service}</li>
            ))}
          </ul>
          
          <h2 className="text-xl font-semibold mb-4 mt-6">Service Areas</h2>
          <ul className="grid grid-cols-1 gap-1">
            {sitemap.locations.map((location, index) => (
              <li key={index} className="text-sm">📍 {location}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">XML Sitemap</h2>
        <pre className="text-xs bg-white p-4 rounded border overflow-x-auto">
          {generateXMLSitemap()}
        </pre>
      </div>
    </div>
  );
}