// Sample case studies data - will be replaced with Notion integration
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  description: string;
  results: string;
  image_url: string;
  date: string;
  status: string;
}

export const sampleCaseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Google Product Launch - Interactive VR Experience",
    client: "Google",
    industry: "Technology",
    campaign_type: "Product Launch",
    description: "Created an immersive VR experience for Google's new product launch, allowing customers to interact with the technology in a virtual environment across 15 major cities.",
    results: "• 50,000+ participants engaged • 300% increase in product awareness • 85% positive brand sentiment • 25% boost in pre-orders",
    image_url: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-08-15",
    status: "Published"
  },
  {
    id: "2", 
    title: "Nike Air Max Pop-Up Experience",
    client: "Nike",
    industry: "Retail/Fashion",
    campaign_type: "Pop-up Experience",
    description: "Designed and executed a multi-sensory pop-up experience for Nike's Air Max collection, featuring interactive displays, customization stations, and athlete meet-and-greets.",
    results: "• 25,000 visitors in 2 weeks • 40% increase in social media engagement • 500+ customized sneakers created • 60% purchase conversion rate",
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-07-22",
    status: "Published"
  },
  {
    id: "3",
    title: "Coca-Cola Summer Festival Activation",
    client: "Coca-Cola",
    industry: "Food & Beverage", 
    campaign_type: "Festival Marketing",
    description: "Created a refreshing brand experience at major summer festivals with interactive photo booths, product sampling, and social media integration across 20 events nationwide.",
    results: "• 100,000+ samples distributed • 2.5M social media impressions • 45% increase in brand favorability • 30% lift in purchase intent",
    image_url: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-06-10",
    status: "Published"
  },
  {
    id: "4",
    title: "Tesla Model Y Test Drive Campaign",
    client: "Tesla",
    industry: "Automotive",
    campaign_type: "Product Demonstration",
    description: "Organized premium test drive experiences in luxury locations, combining product demonstrations with educational sessions about electric vehicle technology and sustainability.",
    results: "• 5,000+ test drives completed • 35% test-drive-to-purchase conversion • 95% participant satisfaction • 200+ social media shares daily",
    image_url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-05-18",
    status: "Published"
  },
  {
    id: "5",
    title: "Apple iPhone Launch Event Series",
    client: "Apple",
    industry: "Technology",
    campaign_type: "Launch Event",
    description: "Executed exclusive iPhone launch events in flagship stores nationwide, featuring hands-on demos, expert consultations, and exclusive early access for select customers.",
    results: "• 15,000+ attendees across all events • 90% pre-order conversion rate • 500+ media mentions • 4.2M social media reach",
    image_url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-04-12",
    status: "Published"
  },
  {
    id: "6",
    title: "Amazon Prime Day Shopping Experience",
    client: "Amazon",
    industry: "E-commerce",
    campaign_type: "Promotional Event",
    description: "Created immersive shopping experiences in major metropolitan areas, showcasing Prime benefits through interactive displays, exclusive deals, and same-day delivery demonstrations.",
    results: "• 75,000+ visitors engaged • 55% Prime membership sign-ups • 150% increase in Prime Day sales • 80% customer satisfaction score",
    image_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "2024-03-20",
    status: "Published"
  }
];