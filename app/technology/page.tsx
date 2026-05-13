import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  MapPin,
  Video,
  Database,
  Users,
  Shield,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  Clock,
  Zap,
  Target,
  TrendingUp,
  Award,
  Eye,
  Gamepad2,
} from 'lucide-react'

export default function TechnologyPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How does GPS check-in work for event staff?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'AirFresh Marketing\'s GPS check-in system uses a mobile app that staff activate upon arrival at an event. The app captures their GPS coordinates and timestamps, verifying they are at the correct venue. This data appears instantly on the client\'s real-time dashboard, confirming staff arrival. If a staff member does not check in within the expected window, our operations team is automatically alerted and can dispatch a backup. GPS tracking continues throughout the shift so clients can see staff location and status at any point during the event.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is video training for brand ambassadors?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Video training is a pre-event preparation system where brand ambassadors complete campaign-specific training modules through our platform. Each module covers brand messaging, product details, conversation scripts, activation goals, and FAQs. After watching the training video, ambassadors must pass a knowledge test before being cleared to work the event. This verifies comprehension, not just attendance. Clients can review training completion rates and test scores before the event to confirm readiness. This approach replaces on-site verbal briefings which are inconsistent and hard to verify.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I see real-time data from my event?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. AirFresh Marketing provides a real-time reporting dashboard that shows staff check-in status, GPS locations, engagement metrics, data capture results, and photo documentation as the event unfolds. You can access the dashboard from any browser on desktop or mobile. After the event, all data is compiled into a comprehensive post-event report including engagement statistics, consumer demographics, lead counts, photos, and strategic recommendations for future activations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does event staffing technology reduce no-shows?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our technology stack addresses no-shows through multiple layers. First, confirmed staff receive automated reminders leading up to the event. Second, GPS check-in provides instant notification if someone has not arrived on time. Third, our operations team maintains a backup staffing pool in every active market that can be deployed within minutes of a no-show notification. Fourth, the gamification system rewards reliability, incentivizing consistent attendance. Combined, these systems have driven our no-show rate below 2% across all markets.',
            },
          },
          {
            '@type': 'Question',
            name: 'What data can you capture at events?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our data capture tools collect a wide range of consumer information including email addresses, phone numbers, survey responses, product preferences, demographic data, purchase intent, and social media handles. Staff use mobile devices with custom forms designed for your campaign goals. Data syncs in real time to your dashboard and can be exported in CSV or integrated directly with your CRM through API connections. All data collection complies with privacy regulations and includes opt-in consent documentation.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is AirFresh Marketing\'s technology platform proprietary?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our technology platform was built specifically for experiential marketing and event staffing operations by our partner Humming Agent AI. Unlike generic staffing apps or repurposed HR tools, every feature was designed around the unique challenges of event execution: field accountability, brand training verification, real-time client visibility, and consumer data capture. This purpose-built approach means our tools work together seamlessly rather than relying on disconnected third-party systems, giving clients a single integrated experience from staff selection through post-event reporting.',
            },
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'AirFresh Marketing Event Staffing Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: 'Proprietary event staffing technology platform with GPS check-in, video training, real-time reporting, data capture, and performance gamification.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          description: 'Included with AirFresh Marketing staffing services',
        },
        provider: {
          '@type': 'Organization',
          name: 'AirFresh Marketing',
          url: 'https://www.airfreshmarketing.com',
        },
      },
    ],
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 50%, rgba(6,182,212,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(59,130,246,0.3) 0%, transparent 50%)'
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-cyan-300 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Purpose-Built Event Staffing Technology
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Event Staffing Technology{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                That Eliminates Guesswork
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              GPS-verified check-ins. Video training with knowledge testing. Real-time reporting dashboards.
              The technology stack behind our 98% client satisfaction rate and less than 2% no-show rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-cyan-500/25">
                <Link href="/get-quote?source=technology&intent=hero-demo">
                  See a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-lg rounded-full">
                <Link href="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Problem with Traditional Event Staffing
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Most event staffing agencies still manage staff with text messages, spreadsheets, and verbal briefings.
              The result? No-shows, inconsistent brand messaging, zero real-time visibility, and post-event reports
              that arrive weeks later with little actionable data. AirFresh Marketing built a technology platform
              to solve every one of these problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, stat: '<2%', label: 'No-Show Rate', desc: 'GPS check-in + backup pool' },
              { icon: Video, stat: '100%', label: 'Training Verified', desc: 'Video modules + knowledge tests' },
              { icon: Eye, stat: 'Real-Time', label: 'Client Visibility', desc: 'Live dashboards on any device' },
              { icon: BarChart3, stat: '24hr', label: 'Post-Event Reports', desc: 'Delivered within one business day' },
            ].map((item, i) => (
              <Card key={i} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-sm font-semibold text-gray-700 mb-2">{item.label}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Platform Features - Detailed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Five Integrated Technology Systems
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every component works together so you have complete visibility and control from staff selection through post-event analytics.
            </p>
          </div>

          {/* Feature 1: GPS Check-In */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  System 1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  GPS Check-In & Location Verification
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every staff member checks in through our mobile app when they arrive at your event. The app captures
                  GPS coordinates and timestamps, instantly confirming they are at the correct venue. If someone does
                  not check in within the expected window, our operations team receives an automatic alert and can deploy
                  a backup from the local talent pool within minutes.
                </p>
                <ul className="space-y-3">
                  {[
                    'Location-verified arrival confirmation',
                    'Continuous GPS tracking throughout shift',
                    'Automatic no-show alerts to ops team',
                    'Backup deployment within 30 minutes',
                    'Full audit trail for every event',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Smartphone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Staff Opens App</div>
                      <div className="text-white/70 text-sm">Arrives at venue, opens check-in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">GPS Verified</div>
                      <div className="text-white/70 text-sm">Location + timestamp confirmed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Client Dashboard Updated</div>
                      <div className="text-white/70 text-sm">Real-time status visible instantly</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Auto-Alert if No Check-In</div>
                      <div className="text-white/70 text-sm">Backup deployed within 30 min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Video Training */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="text-lg font-semibold mb-4">Training Completion Dashboard</div>
                  {[
                    { name: 'Sarah M.', status: 'Passed', score: '95%' },
                    { name: 'Marcus J.', status: 'Passed', score: '90%' },
                    { name: 'Elena R.', status: 'Passed', score: '100%' },
                    { name: 'David K.', status: 'In Progress', score: '--' },
                  ].map((person, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <span>{person.name}</span>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm px-2 py-0.5 rounded ${person.status === 'Passed' ? 'bg-green-500/30 text-green-200' : 'bg-yellow-500/30 text-yellow-200'}`}>
                          {person.status}
                        </span>
                        <span className="font-mono text-sm">{person.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                  <Video className="w-4 h-4" />
                  System 2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Video Training & Knowledge Testing
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  On-site verbal briefings are inconsistent and impossible to verify. Our video training platform
                  delivers campaign-specific modules that every staff member must complete and pass before being
                  cleared to work. You can see exactly who completed training, when, and what score they achieved.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom video modules per campaign',
                    'Knowledge tests verify comprehension',
                    'Training completion tracking per person',
                    'Brand messaging consistency guaranteed',
                    'Supplements with live briefings for complex campaigns',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 3: Real-Time Reporting */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                  <BarChart3 className="w-4 h-4" />
                  System 3
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Real-Time Reporting Dashboard
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Stop waiting weeks for post-event reports. Our dashboard shows live data as your event
                  unfolds: staff check-in status, engagement metrics, lead counts, consumer feedback, and
                  photo documentation. Access from any browser on desktop or mobile. After the event,
                  everything compiles into a comprehensive report delivered within 24 hours.
                </p>
                <ul className="space-y-3">
                  {[
                    'Live staff status and GPS locations',
                    'Real-time engagement and lead metrics',
                    'Photo documentation as it happens',
                    'Consumer feedback and survey data',
                    'Post-event report within 24 hours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <div className="text-lg font-semibold mb-6">Live Event Dashboard</div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Staff Checked In', value: '12/12' },
                    { label: 'Interactions', value: '847' },
                    { label: 'Leads Captured', value: '234' },
                    { label: 'Samples Given', value: '1,203' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-white/70 text-xs">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-sm text-white/70 mb-2">Latest Activity</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Photo uploaded - Booth A</span><span className="text-white/60">2m ago</span></div>
                    <div className="flex justify-between"><span>Survey completed - #234</span><span className="text-white/60">5m ago</span></div>
                    <div className="flex justify-between"><span>Lead captured - Enterprise</span><span className="text-white/60">8m ago</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Data Capture */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-white">
                <div className="text-lg font-semibold mb-6">Data Points Collected</div>
                <div className="space-y-3">
                  {[
                    { field: 'Email Addresses', count: '234', icon: '📧' },
                    { field: 'Phone Numbers', count: '189', icon: '📱' },
                    { field: 'Survey Responses', count: '312', icon: '📋' },
                    { field: 'Product Preferences', count: '287', icon: '🎯' },
                    { field: 'Social Handles', count: '156', icon: '📣' },
                    { field: 'Purchase Intent', count: '201', icon: '💳' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-2">
                      <span>{item.field}</span>
                      <span className="font-mono font-bold">{item.count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
                  <Database className="w-4 h-4" />
                  System 4
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Data Capture & Consumer Insights
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Every consumer interaction is an opportunity to collect actionable data. Our integrated capture
                  tools let staff collect emails, phone numbers, survey responses, product preferences, and purchase
                  intent through mobile forms designed for speed. Data syncs in real time to your dashboard and can
                  export to CSV or integrate directly with your CRM.
                </p>
                <ul className="space-y-3">
                  {[
                    'Custom forms designed per campaign',
                    'Real-time sync to client dashboard',
                    'CRM integration via API or CSV export',
                    'Privacy-compliant with opt-in documentation',
                    'Demographic and geographic segmentation',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 5: Gamification */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium mb-4">
                  <Gamepad2 className="w-4 h-4" />
                  System 5
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Performance Gamification & Custom Software
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Long activation days can drain staff energy. Our gamification system keeps brand ambassadors
                  motivated by tracking individual performance metrics and creating friendly competition. Staff
                  earn points for interactions, leads captured, and positive consumer feedback. For clients who
                  need custom digital experiences, our partner Humming Agent AI builds interactive games, digital
                  activations, and custom apps that enhance the consumer experience.
                </p>
                <ul className="space-y-3">
                  {[
                    'Individual performance leaderboards',
                    'Points for interactions, leads, and feedback',
                    'Incentive programs tied to measurable outcomes',
                    'Custom interactive games and digital activations',
                    'Built by Humming Agent AI technology partner',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
                <div className="text-lg font-semibold mb-6">Staff Leaderboard</div>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: 'Elena R.', points: 2450, badge: 'Top Performer' },
                    { rank: 2, name: 'Marcus J.', points: 2180, badge: 'Lead Machine' },
                    { rank: 3, name: 'Sarah M.', points: 1920, badge: 'Engagement Pro' },
                    { rank: 4, name: 'David K.', points: 1740, badge: 'Rising Star' },
                  ].map((person) => (
                    <div key={person.rank} className="flex items-center justify-between bg-white/10 rounded-lg px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                          {person.rank}
                        </span>
                        <span>{person.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-white/20 px-2 py-0.5 rounded">{person.badge}</span>
                        <span className="font-mono font-bold">{person.points}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Console */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Console & Talent Selection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse talent profiles, approve staff, monitor events, and access reports from a single dashboard.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Browse & Select Talent',
                description: 'View detailed profiles with photos, skills, experience, languages, and past performance ratings. Filter by demographics, location, and availability. Approve or request alternatives before any event.',
              },
              {
                icon: Clock,
                title: 'Monitor Live Events',
                description: 'Watch your activation unfold in real time. See who checked in, track engagement metrics, view photos as they are uploaded, and communicate with field managers through the platform.',
              },
              {
                icon: TrendingUp,
                title: 'Access Reports & Analytics',
                description: 'Download post-event reports with engagement data, lead information, consumer demographics, photo galleries, and ROI calculations. Compare performance across events, markets, and staff.',
              },
            ].map((feature, i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Traditional vs AirFresh */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Traditional Staffing vs. AirFresh Technology
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="font-semibold text-gray-500 text-sm uppercase tracking-wider pl-4">Capability</div>
              <div className="font-semibold text-red-600 text-sm uppercase tracking-wider text-center">Traditional Agency</div>
              <div className="font-semibold text-cyan-600 text-sm uppercase tracking-wider text-center">AirFresh Platform</div>
            </div>
            {[
              { cap: 'Staff Check-In', trad: 'Phone call or text', af: 'GPS-verified with auto-alerts' },
              { cap: 'Training', trad: 'Verbal on-site briefing', af: 'Video modules + knowledge tests' },
              { cap: 'No-Show Response', trad: 'Scramble to find replacement', af: 'Auto-alert + backup pool deployment' },
              { cap: 'Event Visibility', trad: 'Wait for post-event email', af: 'Real-time dashboard on any device' },
              { cap: 'Data Collection', trad: 'Paper forms or none', af: 'Digital capture with CRM sync' },
              { cap: 'Post-Event Report', trad: '1-3 weeks later', af: 'Within 24 hours with full analytics' },
              { cap: 'Staff Motivation', trad: 'Hourly wage only', af: 'Gamification + performance incentives' },
              { cap: 'Quality Verification', trad: 'Trust-based', af: 'Verified via training scores + GPS' },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} rounded-lg px-4`}>
                <div className="font-medium text-gray-900">{row.cap}</div>
                <div className="text-gray-500 text-center text-sm">{row.trad}</div>
                <div className="text-cyan-700 text-center text-sm font-medium">{row.af}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {structuredData['@graph'][0].mainEntity?.map((faq: { name: string; acceptedAnswer: { text: string } }, i: number) => (
              <details key={i} className="group bg-gray-50 rounded-xl p-6 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  <span className="pr-4">{faq.name}</span>
                  <span className="text-cyan-500 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Learn More About Event Staffing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/event-staffing-101" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Event Staffing 101</div>
              <p className="text-sm text-gray-500 mt-1">Complete guide to hiring event staff</p>
            </Link>
            <Link href="/guides/best-event-staffing-agency" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Best Event Staffing Agency</div>
              <p className="text-sm text-gray-500 mt-1">How to choose the right partner</p>
            </Link>
            <Link href="/compare" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Compare Agencies</div>
              <p className="text-sm text-gray-500 mt-1">See how our technology compares</p>
            </Link>
            <Link href="/case-studies" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all">
              <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Case Studies</div>
              <p className="text-sm text-gray-500 mt-1">Real results from real campaigns</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to See the Platform in Action?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo and we will walk you through the GPS check-in, training platform,
            reporting dashboard, and data capture tools. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold">
              <Link href="/get-quote?source=technology&intent=final-demo">
                Schedule a Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
              <a href="tel:+13037206060">
                Call (303) 720-6060
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
