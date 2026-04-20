'use client'

import { useState, useMemo, FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Tag,
  TrendingUp,
  BookOpen,
  Sparkles,
  ChevronRight,
  ChevronLeft
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: string | number
  slug: string
  title: string
  excerpt: string
  image: string
  author: string
  date: string
  readTime: string
  category: string
  tags: string[]
  content: string
}

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredCard, setHoveredCard] = useState<string | number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 9

  const categories = useMemo(() => {
    const cats = new Set(["All"])
    posts.forEach((post) => cats.add(post.category))
    return Array.from(cats)
  }, [posts])

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, posts])

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  useMemo(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  const featuredPost = posts[0]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-20 left-10 text-cyan-400/20">
          <BookOpen className="w-24 h-24" />
        </div>

        <div className="absolute bottom-20 right-10 text-cyan-400/20">
          <TrendingUp className="w-32 h-32" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 px-4 py-2 bg-cyan-500/10 text-cyan-400 border-cyan-400/30 text-sm font-semibold">
              <Sparkles className="w-4 h-4 mr-2" />
              Marketing Insights & Strategies
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              The Air Fresh
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Marketing Blog
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert insights on experiential marketing, street teams, and brand activation strategies
              that drive real results.
            </p>

            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or case studies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg bg-white/10 backdrop-blur-lg border-gray-700 text-white placeholder-gray-400 focus:border-cyan-400"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Filter by category:</span>
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                  className={selectedCategory === cat ? "bg-cyan-500 hover:bg-cyan-600" : ""}
                >
                  {cat}
                  {cat === "All" && (
                    <span className="ml-2 text-xs opacity-70">({posts.length})</span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <TrendingUp className="w-8 h-8 mr-3 text-cyan-500" />
            Featured Article
          </h2>

          <Link href={`/blog/${featuredPost.slug}`}>
            <div className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-cyan-500 text-white border-0">
                    Featured
                  </Badge>
                </div>

                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-cyan-600 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gray-100">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* Popular Guides */}
      {selectedCategory === "All" && searchTerm === "" && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Popular Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link
              href="/guides/best-event-staffing-agency"
              className="group p-4 bg-cyan-50 rounded-xl border border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors text-sm">
                Best Event Staffing Agency 2026
              </div>
            </Link>
            <Link
              href="/guides/event-staffing-101"
              className="group p-4 bg-cyan-50 rounded-xl border border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors text-sm">
                Event Staffing 101 Complete Guide
              </div>
            </Link>
            <Link
              href="/guides/brand-ambassador-hiring-guide"
              className="group p-4 bg-cyan-50 rounded-xl border border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors text-sm">
                Brand Ambassador Hiring Guide
              </div>
            </Link>
            <Link
              href="/event-staffing-near-me"
              className="group p-4 bg-cyan-50 rounded-xl border border-cyan-200 hover:border-cyan-400 hover:shadow-md transition-all"
            >
              <div className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors text-sm">
                Find Event Staffing Near You
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="group h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                        {post.category}
                      </Badge>
                      <div
                        className={`absolute inset-0 bg-cyan-600/20 transition-opacity duration-300 ${
                          hoveredCard === post.id ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>

                    <div className="flex-1 p-6 flex flex-col">
                      <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-cyan-600 font-semibold group-hover:text-cyan-700 mt-auto">
                        Read Article
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                if (
                  page === 1 ||
                  page === totalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className={currentPage === page ? "bg-cyan-500 hover:bg-cyan-600" : ""}
                    >
                      {page}
                    </Button>
                  )
                } else if (page === currentPage - 2 || page === currentPage + 2) {
                  return (
                    <span key={page} className="px-2 py-1 text-gray-400">
                      ...
                    </span>
                  )
                }
                return null
              })}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          Showing {indexOfFirstPost + 1}-{Math.min(indexOfLastPost, filteredPosts.length)} of{" "}
          {filteredPosts.length} articles
        </div>
      </section>
    </>
  )
}

export function BlogNewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubscribeStatus("loading")
    try {
      const res = await fetch("https://formspree.io/f/xzdjwkdj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "New Blog Subscriber" }),
      })
      if (res.ok) {
        setSubscribeStatus("success")
        setEmail("")
      } else {
        setSubscribeStatus("error")
      }
    } catch {
      setSubscribeStatus("error")
    }
  }

  return (
    <section className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 py-20 mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Sparkles className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
        <h2 className="text-4xl font-bold mb-4 text-white">Stay Ahead of the Curve</h2>
        <p className="text-xl mb-8 text-gray-300">
          Get the latest experiential marketing insights delivered to your inbox
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border-gray-700 text-white placeholder-gray-400"
            required
          />
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white"
            disabled={subscribeStatus === "loading"}
          >
            {subscribeStatus === "loading"
              ? "..."
              : subscribeStatus === "success"
              ? "Subscribed!"
              : "Subscribe"}
            {subscribeStatus !== "success" && <ArrowRight className="w-4 h-4 ml-2" />}
          </Button>
        </form>
        {subscribeStatus === "success" && (
          <p className="text-green-400 mt-4">Thanks for subscribing!</p>
        )}
      </div>
    </section>
  )
}
