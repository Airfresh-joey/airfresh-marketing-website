import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Users,
  CheckCircle,
  ArrowRight,
  Phone,
  Star,
  Target,
  Award,
  TrendingUp,
  Calendar,
  AlertCircle,
  Building2,
  Zap,
} from 'lucide-react';
import { eventPages, getEventBySlug } from '@/server/eventPages';
import type { Metadata } from 'next';

interface EventPageProps {
  params: Promise<{ event: string }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { event: slug } = await params;
  const eventPage = getEventBySlug(slug);

  if (!eventPage) {
    return { title: 'Event Not Found' };
  }

  return {
    title: eventPage.title,
    description: eventPage.metaDescription,
    keywords: eventPage.keywords.join(', '),
    openGraph: {
      type: 'website',
      title: eventPage.title,
      description: eventPage.metaDescription,
      url: `https://www.airfreshmarketing.com/staffing-for/${slug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: eventPage.h1 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: eventPage.title,
      description: eventPage.metaDescription,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/staffing-for/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return eventPages.map((e) => ({ event: e.slug }));
}

// Render body content that uses **bold** markdown-style markers
function BodyContent({ text }: { text: string }) {
  const paragraphs = text.split('\n\n').filter(Boolean);
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, i) => {
        // Heading lines start with **text**
        if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
          return (
            <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-2">
              {paragraph.replace(/\*\*/g, '')}
            </h3>
          );
        }
        // Inline bold within paragraph
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i} className="text-gray-700 leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={j}>{part.replace(/\*\*/g, '')}</strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </div>
  );
}

export default async function EventPage({ params }: EventPageProps) {
  const { event: slug } = await params;
  const eventPage = getEventBySlug(slug);

  if (!eventPage) {
    notFound();
  }

  // ─── Structured Data ───────────────────────────────────────────
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      // LocalBusiness
      {
        '@type': ['LocalBusiness', 'MarketingAgency'],
        name: `AirFresh Marketing - ${eventPage.h1}`,
        description: eventPage.metaDescription,
        url: `https://www.airfreshmarketing.com/staffing-for/${slug}`,
        telephone: '+1-303-720-6060',
        email: 'hello@airfreshmarketing.com',
        priceRange: '$35-$85',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1580 N. Logan St., Suite 660',
          addressLocality: 'Denver',
          addressRegion: 'CO',
          postalCode: '80203',
          addressCountry: 'US',
        },
        areaServed: {
          '@type': 'City',
          name: eventPage.city,
        },
        image: 'https://www.airfreshmarketing.com/images/og-image.jpg',
        sameAs: [
          'https://www.airfreshmarketing.com',
          'https://twitter.com/AirFreshMktg',
          'https://www.linkedin.com/company/airfreshmarketing',
          'https://www.instagram.com/airfreshmarketing',
        ],
      },
      // Service
      {
        '@type': 'Service',
        name: eventPage.h1,
        description: eventPage.description,
        provider: {
          '@type': 'Organization',
          name: 'AirFresh Marketing',
          url: 'https://www.airfreshmarketing.com',
        },
        areaServed: {
          '@type': 'City',
          name: eventPage.city,
        },
        priceRange: '$35-$85',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: eventPage.h1,
          itemListElement: eventPage.staffTypes.map((staff) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: staff.title,
              description: staff.description,
            },
          })),
        },
      },
      // FAQPage
      {
        '@type': 'FAQPage',
        mainEntity: eventPage.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  const isFeatured = eventPage.isFeatured === true;

  return (
    <div className="pt-16 min-h-screen">
      {/* Inline structured data — server-rendered, no client JS needed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ─── URGENCY BANNER (World Cup etc.) ─────────────────────── */}
      {eventPage.urgencyNote && (
        <div className="bg-amber-500 text-white py-3 px-4 text-center">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold text-sm md:text-base">{eventPage.urgencyNote}</span>
            <Link href="/contact" className="underline font-bold ml-2 whitespace-nowrap">
              Book Now
            </Link>
          </div>
        </div>
      )}

      {/* ─── HERO SECTION ────────────────────────────────────────── */}
      <section className="relative h-[520px] lg:h-[620px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={eventPage.heroImage}
            alt={eventPage.h1}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/75 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              {isFeatured && (
                <Badge className="mb-4 bg-cyan-500 text-white border-0 px-3 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Verified Case Study
                </Badge>
              )}
              <Badge className="mb-4 ml-2 bg-white/20 text-white border-0">
                <MapPin className="w-4 h-4 mr-1" />
                {eventPage.city}, {eventPage.stateAbbrev}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {eventPage.h1}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed">
                {eventPage.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {eventPage.venues.slice(0, 3).map((venue) => (
                  <span
                    key={venue}
                    className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-sm"
                  >
                    <Building2 className="w-3 h-3" />
                    {venue}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/contact">
                    Get Staffing Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
                >
                  <a href="tel:3037206060">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (303) 720-6060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ───────────────────────────────────────────── */}
      <section className="py-8 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {eventPage.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-cyan-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED CASE STUDY CALLOUT (F1 only) ───────────────── */}
      {isFeatured && (
        <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-50 border-b border-cyan-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <Badge className="mb-3 bg-cyan-600 text-white border-0">
                  <Award className="w-4 h-4 mr-1" />
                  Real Case Study
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  We Staffed the F1 Las Vegas Grand Prix
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  AirFresh Marketing is the only staffing agency with verified on-the-ground experience
                  from the Formula 1 Las Vegas Grand Prix. We deployed 500+ staff across the Las Vegas
                  Strip Circuit, generated 300,000+ fan interactions, and achieved a 98% client
                  satisfaction rate. This is not a claim — it is a documented track record.
                </p>
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
                  <Link href="/contact">
                    Work With the Team That Did It
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 md:w-64 w-full">
                {[
                  { value: '500+', label: 'Staff Deployed' },
                  { value: '300K+', label: 'Fan Interactions' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((item) => (
                  <div key={item.label} className="text-center bg-white rounded-xl p-4 shadow-sm">
                    <div className="text-2xl font-bold text-cyan-600">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── MAIN CONTENT + SIDEBAR ──────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Body copy */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Professional {eventPage.h1} Services
              </h2>
              <BodyContent text={eventPage.bodyContent} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Quote Card */}
              <Card className="border-2 border-cyan-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Get a Staffing Quote</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Tell us your event dates and staffing needs. We respond within 24 hours.
                  </p>
                  <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 text-white">
                    <Link href="/contact">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <a
                    href="tel:3037206060"
                    className="mt-3 flex items-center justify-center gap-2 text-gray-600 text-sm hover:text-cyan-600 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (303) 720-6060
                  </a>
                </CardContent>
              </Card>

              {/* Venue Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-cyan-600" />
                    Venues
                  </h3>
                  <ul className="space-y-2">
                    {eventPage.venues.map((venue) => (
                      <li key={venue} className="text-gray-600 text-sm flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                        {venue}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Keywords / Target Searches */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-cyan-600" />
                    Related Services
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="/services/trade-show-staffing"
                      className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Trade Show Staffing
                    </Link>
                    <Link
                      href="/services/brand-ambassadors"
                      className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Brand Ambassadors
                    </Link>
                    <Link
                      href="/services/convention-staffing"
                      className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Convention Staffing
                    </Link>
                    <Link
                      href="/services/promotional-models"
                      className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Promotional Models
                    </Link>
                    <Link
                      href={`/cities/${eventPage.relatedCitySlug}`}
                      className="flex items-center gap-2 text-sm text-cyan-600 hover:text-cyan-700 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {eventPage.relatedCityName} Event Staffing
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE PROVIDE ─────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What We Provide for {eventPage.h1}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A full roster of professional event staff trained and ready to represent your brand at{' '}
              {eventPage.venues[0]}.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventPage.staffTypes.map((staff, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{staff.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{staff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE AIRFRESH ─────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Why Brands Choose AirFresh for {eventPage.h1}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: 'Elite Vetting',
                body: 'Only the top 5% of applicants join our network. Background checks, interviews, and brand-fit assessments for every deployment.',
              },
              {
                icon: TrendingUp,
                title: 'GPS Accountability',
                body: 'Proprietary GPS check-in technology verifies staff arrival and provides real-time tracking throughout your event.',
              },
              {
                icon: Zap,
                title: 'Video Training',
                body: 'Brand-specific training modules and knowledge assessments ensure every staff member is ready before the doors open.',
              },
              {
                icon: Award,
                title: 'Post-Event Reporting',
                body: 'Comprehensive analytics delivered within 48 hours: leads captured, engagement counts, photos, and staff performance data.',
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <item.icon className="w-10 h-10 text-cyan-600 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOGISTICS INFO ──────────────────────────────────────── */}
      <section className="py-12 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-cyan-600" />
                <h2 className="text-2xl font-bold text-gray-900">Event Logistics</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">{eventPage.logisticsInfo}</p>
            </div>
            <div className="md:w-72 space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  Primary Location
                </h4>
                <p className="text-gray-600 text-sm">
                  {eventPage.city}, {eventPage.stateAbbrev}
                </p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-cyan-600" />
                  {eventPage.venues.length > 1 ? 'Main Venue' : 'Venue'}
                </h4>
                <p className="text-gray-600 text-sm">{eventPage.venues[0]}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-600" />
                  Staff Rate
                </h4>
                <p className="text-gray-600 text-sm">Starting at $35/hr — rates vary by role</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ─────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about {eventPage.h1} staffing
            </p>
          </div>
          <div className="space-y-6">
            {eventPage.faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Staffing Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From first inquiry to post-event report, here is how AirFresh delivers flawless staffing
              for {eventPage.h1}.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Discovery Call',
                body: 'We learn your event, booth size, objectives, and staffing goals in a 30-minute consultation.',
              },
              {
                step: '2',
                title: 'Custom Proposal',
                body: 'Detailed proposal delivered within 24 hours covering staff types, quantities, rates, and management structure.',
              },
              {
                step: '3',
                title: 'Training & Prep',
                body: 'Product training, brand briefings, knowledge assessments, and logistics coordination completed before day one.',
              },
              {
                step: '4',
                title: 'Execute & Report',
                body: 'On-site management, GPS check-in tracking, daily debriefs, and a comprehensive post-event report.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-md">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERNAL LINKS ──────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Related Staffing Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { href: '/services/trade-show-staffing', label: 'Trade Show Staffing' },
              { href: '/services/brand-ambassadors', label: 'Brand Ambassadors' },
              { href: '/services/convention-staffing', label: 'Convention Staffing' },
              { href: '/services/promotional-models', label: 'Promotional Models' },
              { href: '/services/experiential-marketing', label: 'Experiential Marketing' },
              { href: '/services/event-management', label: 'Event Management' },
            ].map((link) => (
              <Link key={link.href} href={link.href}>
                <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 hover:text-cyan-600">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Also link to city page */}
          <div className="mt-6 flex items-center gap-2 text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span className="text-sm">
              Looking for general event staffing in {eventPage.relatedCityName}?{' '}
              <Link
                href={`/cities/${eventPage.relatedCitySlug}`}
                className="text-cyan-600 hover:underline font-medium"
              >
                See {eventPage.relatedCityName} Event Staffing
              </Link>
            </span>
          </div>
        </div>
      </section>

      {/* ─── CTA ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6 text-white/90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Staff {eventPage.h1}?
          </h2>
          <p className="text-xl mb-8 text-cyan-100 max-w-2xl mx-auto">
            Contact AirFresh Marketing today to discuss your staffing needs. We respond within 24
            hours and deliver proposals within 48.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
              <Link href="/contact">
                Get a Free Staffing Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              <a href="tel:3037206060">
                <Phone className="w-4 h-4 mr-2" />
                Call (303) 720-6060
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
