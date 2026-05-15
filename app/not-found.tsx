import Link from 'next/link'
import { Home, BookOpen, MapPin, Briefcase, Phone, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="text-8xl font-black text-cyan-500/20 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <Link
            href="/"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <Home className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Home</h2>
            <p className="text-sm text-gray-500 mt-1">Back to homepage</p>
          </Link>

          <Link
            href="/services"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <Briefcase className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Our Services</h2>
            <p className="text-sm text-gray-500 mt-1">Explore marketing solutions</p>
          </Link>

          <Link
            href="/locations"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <MapPin className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Locations</h2>
            <p className="text-sm text-gray-500 mt-1">Find staffing in your city</p>
          </Link>

          <Link
            href="/blog"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <BookOpen className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Blog</h2>
            <p className="text-sm text-gray-500 mt-1">Marketing insights & guides</p>
          </Link>

          <Link
            href="/case-studies"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <Search className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Case Studies</h2>
            <p className="text-sm text-gray-500 mt-1">See our results</p>
          </Link>

          <Link
            href="/get-quote?source=not-found&intent=404-free-quote"
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all"
          >
            <Phone className="w-8 h-8 text-cyan-600 mb-3 mx-auto" />
            <h2 className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Get a Free Quote</h2>
            <p className="text-sm text-gray-500 mt-1">Tell us about your event</p>
          </Link>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <h3 className="font-bold text-gray-900 mb-4">Popular Resources</h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Link href="/guides/best-event-staffing-agency" className="text-cyan-600 hover:underline">Best Event Staffing Agency Guide</Link>
            <span className="text-gray-300">|</span>
            <Link href="/guides/event-staffing-101" className="text-cyan-600 hover:underline">Event Staffing 101</Link>
            <span className="text-gray-300">|</span>
            <Link href="/pricing" className="text-cyan-600 hover:underline">Pricing</Link>
            <span className="text-gray-300">|</span>
            <Link href="/event-staffing-near-me" className="text-cyan-600 hover:underline">Event Staffing Near Me</Link>
            <span className="text-gray-300">|</span>
            <Link href="/compare" className="text-cyan-600 hover:underline">Compare Agencies</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
