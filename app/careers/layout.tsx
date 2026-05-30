import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Brand Ambassador Jobs & Event Staff Careers',
    template: '%s | AirFresh Marketing',
  },
  description: 'Brand ambassador jobs and event staff careers at AirFresh Marketing. Flexible schedules, $20-35/hour pay, work with top brands like Netflix and Google nationwide.',
  keywords: 'brand ambassador jobs, promotional model jobs, event staff careers, experiential marketing jobs, how to become a brand ambassador',
  openGraph: {
    type: 'website',
    title: 'Brand Ambassador Jobs & Event Staff Careers | AirFresh Marketing',
    description: 'Join AirFresh Marketing as a brand ambassador or event staff. Flexible schedules, competitive pay, top brands.',
    url: 'https://www.airfreshmarketing.com/careers',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Brand Ambassador Jobs at AirFresh Marketing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brand Ambassador Jobs | AirFresh Marketing',
    description: 'Join our team of brand ambassadors and event staff. $20-35/hr, flexible schedules.',
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/careers',
  },
}

const careersStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a typical brand ambassador event look like?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Events vary widely! You might be sampling products at a grocery store, engaging crowds at a music festival, demonstrating tech at a trade show, or representing a brand at a sporting event. Most shifts are 4-8 hours, and you'll receive detailed briefings and training before each activation."
          }
        },
        {
          "@type": "Question",
          "name": "How often can I work as a brand ambassador?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It's completely flexible. Some ambassadors work weekly events, others pick up shifts monthly. You choose the opportunities that fit your schedule. We post available events regularly, and you can accept or decline based on your availability."
          }
        },
        {
          "@type": "Question",
          "name": "What kind of training do brand ambassadors receive?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All ambassadors receive comprehensive training through our online portal, including brand-specific training for each activation. We also provide on-site support and have team leads at larger events."
          }
        },
        {
          "@type": "Question",
          "name": "How much do brand ambassadors earn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pay varies by event type and location, typically ranging from $20-35/hour. Specialty events, trade shows, and multi-day activations often pay more. Some events also include tips, bonuses, or product perks."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need previous experience to become a brand ambassador?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While experience is a plus, it's not required. We value enthusiasm, reliability, and great communication skills. If you're outgoing, professional, and excited to represent amazing brands, we want to hear from you!"
          }
        },
        {
          "@type": "Question",
          "name": "What brands will I work with as a brand ambassador?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our clients include Fortune 500 companies, beloved consumer brands, and exciting startups. Past clients include Netflix, MrBeast, Google, Microsoft, MAC Cosmetics, Formula One, and many more."
          }
        }
      ]
    },
    {
      "@type": "JobPosting",
      "title": "Brand Ambassador",
      "description": "Join AirFresh Marketing as a brand ambassador and represent top brands at events, trade shows, and activations nationwide. Flexible schedules, competitive pay ($20-35/hr), and opportunities to work with Fortune 500 companies.",
      "hiringOrganization": {
        "@type": "Organization",
        "name": "AirFresh Marketing",
        "sameAs": "https://www.airfreshmarketing.com",
        "logo": "https://www.airfreshmarketing.com/images/airfresh-logo.svg"
      },
      "jobLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      },
      "employmentType": "PART_TIME",
      "baseSalary": {
        "@type": "MonetaryAmount",
        "currency": "USD",
        "value": {
          "@type": "QuantitativeValue",
          "minValue": 20,
          "maxValue": 35,
          "unitText": "HOUR"
        }
      },
      "datePosted": "2026-01-01",
      "validThrough": "2026-12-31"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
        { "@type": "ListItem", "position": 2, "name": "Careers", "item": "https://www.airfreshmarketing.com/careers" }
      ]
    }
  ]
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(careersStructuredData) }}
      />
      {children}
    </>
  )
}
