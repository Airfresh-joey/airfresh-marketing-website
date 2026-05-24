import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "+44 Formula One – Wynn Las Vegas",
    category: "Sports & Entertainment",
    stat: "15,000+ guests · 11 days",
    image: "/images/case-studies/formula-1-5.jpg",
    href: "/case-studies/formula-1-las-vegas",
  },
  {
    name: "Williams Racing",
    category: "Sports & Entertainment",
    stat: "Las Vegas · Miami · Texas",
    image: "/images/case-studies/williams-racing.jpg",
    href: "/case-studies/williams-racing-f1",
  },
  {
    name: "Skinny Mixes – NYC Street Team",
    category: "Food & Beverage",
    stat: "Street team · NYC",
    image: "/images/case-studies/skinny-mixes-hero.jpg",
    href: "/case-studies/skinny-mixes",
  },
  {
    name: "Netflix Premiere Events",
    category: "Entertainment",
    stat: "3 premieres · 2,000+ guests",
    image: "/images/case-studies/netflix-hero.jpg",
    href: "/case-studies/netflix-activations",
  },
  {
    name: "Microsoft – NRF Conference",
    category: "Technology",
    stat: "10,000 sq ft · 5,000+ served",
    image: "/images/case-studies/microsoft-hero.jpg",
    href: "/case-studies/microsoft-events",
  },
  {
    name: "FIFA World Cup 2026 – Miami",
    category: "Sports & Entertainment",
    stat: "Activation staffing · Miami",
    image: "/images/events/miami-beach.jpg",
    href: "/events/fifa-world-cup-2026-miami",
  },
  {
    name: "Waiakea Water x Aaron Judge",
    category: "Food & Beverage",
    stat: "Yankee Stadium Opening Day",
    image: "/images/case-studies/waiakea-hero.jpg",
    href: "/case-studies/waiakea-water",
  },
  {
    name: "Buffalo Wild Wings GO! – NYC",
    category: "Food & Beverage",
    stat: "East Village street team",
    image: "/images/case-studies/buffalo-wild-wings-hero.jpg",
    href: "/case-studies/buffalo-wild-wings",
  },
];

const portraitVideos = [
  "1183200412",
  "1183200399",
  "1183200379",
  "1183200366",
  "1183200321",
  "1183200306",
  "1183200225",
  "1183200241",
  "1183200250",
  "1183200263",
  "1183200279",
  "1183200291",
  "1183200346",
  "1183200407",
  "1183200432",
];

const landscapeVideos = [
  { id: "394084617", title: "Air Fresh x Premier Protein – SoCal Streets" },
  { id: "394233666", title: "Clif Bar x Peachtree Road Racers" },
  { id: "394086862", title: "Mac x Air Fresh Marketing" },
  { id: "395332645", title: "Air Fresh Marketing AIMCO" },
  { id: "395306497", title: "Visible Rock at Red Rocks" },
  { id: "394241898", title: "Bring Your Brand to Life" },
  { id: "394237435", title: "We Bring Brands to People" },
  { id: "394235535", title: "SXSW – Let's Taco Bout It" },
  { id: "722724000", title: "Coca-Cola Special Olympics Orlando" },
  { id: "649976065", title: "Merrell Footwear – Brand Hero" },
  { id: "651787642", title: "Merrell AFM Front Page" },
  { id: "1157974198", title: "Immerse Forge – Red Rocks" },
];

export const metadata = {
  title: "Our Work | AirFresh Marketing",
  description:
    "AirFresh Marketing reel — brand activations, event staffing, and experiential marketing across 300+ clients.",
  robots: { index: false },
};

export default function ReelPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-16">
      {/* Hero video */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] -translate-x-1/2 -translate-y-1/2">
            <iframe
              src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ pointerEvents: "none" }}
              title="AirFresh Marketing Reel"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
        <div className="relative z-10 text-center px-4">
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            AirFresh Marketing
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Our Work
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            300+ brands. Millions of real consumer interactions. See what we bring to the floor.
          </p>
        </div>
      </section>

      {/* Client grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2">Featured Clients</h2>
        <p className="text-white/50 text-sm mb-8">
          From Formula One hospitality to grassroots street teams — we've done it all.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {clients.map((client) => (
            <Link key={client.name} href={client.href}>
              <div className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-900 cursor-pointer">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="text-cyan-400 text-[10px] font-semibold uppercase tracking-wider mb-0.5">
                    {client.category}
                  </p>
                  <p className="text-white font-bold text-sm leading-tight">{client.name}</p>
                  <p className="text-white/60 text-[11px] mt-0.5">{client.stat}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Landscape videos — multi-client brand work */}
      <section className="py-12 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Brand Activations</h2>
          <p className="text-white/50 text-sm mb-8">
            Premier Protein · Clif Bar · Merrell · Coca-Cola · SXSW · Red Rocks and more
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {landscapeVideos.map((v) => (
              <div key={v.id} className="flex-none w-72 snap-start">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&muted=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    title={v.title}
                  />
                </div>
                <p className="text-white/50 text-xs mt-2 truncate">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portrait video scroll — FIFA production */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-2">Latest Production</h2>
          <p className="text-white/50 text-sm mb-8">
            FIFA World Cup 2026 Miami · On-site activation footage
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {portraitVideos.map((videoId) => (
              <div key={videoId} className="flex-none w-44 snap-start">
                <div className="relative w-full rounded-xl overflow-hidden" style={{ paddingTop: "177.78%" }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&loop=1&muted=1`}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    title="AirFresh activation clip"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "300+", label: "Brands Served" },
            { value: "5M+", label: "Consumer Touchpoints" },
            { value: "50+", label: "U.S. Markets" },
            { value: "98%", label: "Client Return Rate" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-black text-cyan-400">{s.value}</div>
              <div className="text-white/50 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-white mb-3">Ready to be our next case study?</h2>
        <p className="text-white/60 mb-8">Let's talk about your activation.</p>
        <Link
          href="/get-quote"
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          Get a Quote
        </Link>
      </section>
    </div>
  );
}
