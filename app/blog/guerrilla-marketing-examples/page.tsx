import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Target, TrendingUp, DollarSign, Share2, Camera, Megaphone } from 'lucide-react';

export const metadata: Metadata = {
  title: '15 Guerrilla Marketing Examples That Went Viral (2026) | Air Fresh Marketing',
  description: 'Discover the best guerrilla marketing examples and learn how to create low-cost, high-impact campaigns that generate massive buzz for your brand.',
  keywords: 'guerrilla marketing examples, guerrilla marketing ideas, street marketing, ambient advertising, creative marketing campaigns, viral marketing examples',
  openGraph: {
    title: '15 Guerrilla Marketing Examples That Went Viral',
    description: 'Low-cost, high-impact marketing campaigns that generated massive buzz.',
    type: 'article',
  },
};

export default function GuerrillaMarketingExamples() {
  return (
    <article className="pt-16 min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@graph": [
                            {
                                      "@type": "Article",
                                      "headline": "15 Guerrilla Marketing Examples That Went Viral (2026)",
                                      "description": "Discover the best guerrilla marketing examples and learn how to create low-cost, high-impact campaigns that generate massive buzz for your brand.",
                                      "datePublished": "2025-01-01",
                                      "dateModified": "2025-01-01",
                                      "author": {
                                                "@type": "Organization",
                                                "name": "AirFresh Marketing",
                                                "url": "https://www.airfreshmarketing.com"
                                      },
                                      "publisher": {
                                                "@type": "Organization",
                                                "name": "AirFresh Marketing",
                                                "logo": {
                                                          "@type": "ImageObject",
                                                          "url": "https://www.airfreshmarketing.com/images/airfresh-logo.svg"
                                                }
                                      },
                                      "mainEntityOfPage": {
                                                "@type": "WebPage",
                                                "@id": "https://www.airfreshmarketing.com/blog/guerrilla-marketing-examples"
                                      },
                                      "inLanguage": "en-US",
                                      "keywords": "guerrilla marketing examples, guerrilla marketing ideas, street marketing, ambient advertising, creative marketing campaigns, viral marketing examples"
                            },
                            {
                                      "@type": "BreadcrumbList",
                                      "itemListElement": [
                                                {
                                                          "@type": "ListItem",
                                                          "position": 1,
                                                          "name": "Home",
                                                          "item": "https://www.airfreshmarketing.com"
                                                },
                                                {
                                                          "@type": "ListItem",
                                                          "position": 2,
                                                          "name": "Blog",
                                                          "item": "https://www.airfreshmarketing.com/blog"
                                                },
                                                {
                                                          "@type": "ListItem",
                                                          "position": 3,
                                                          "name": "15 Guerrilla Marketing Examples That Went Viral (2026)",
                                                          "item": "https://www.airfreshmarketing.com/blog/guerrilla-marketing-examples"
                                                }
                                      ]
                            }
                  ]
        }) }}
      />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: "15 Guerrilla Marketing Examples That Went Viral (2026)" }]} />

      {/* Hero */}
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Inspiration</span>
            <span className="text-green-200">March 1, 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">15 Guerrilla Marketing Examples That Went Viral</h1>
          <p className="text-xl text-green-100 mb-8">Low-budget, high-impact campaigns that prove you don't need millions to make millions of impressions. Get inspired by these creative guerrilla marketing successes.</p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What is Guerrilla Marketing?</h2>
          <p className="text-lg text-gray-700 mb-6"><strong>Guerrilla marketing</strong> uses unconventional, low-cost tactics to promote a product or brand in unexpected ways. The goal is to create memorable experiences that generate word-of-mouth, social sharing, and media coverage - all without the budget of traditional advertising.</p>
          
          <Card className="bg-green-50 border-green-200 mb-8">
            <CardContent className="p-6">
              <p className="text-green-900 font-medium">"Guerrilla marketing is about using time, energy, and imagination instead of big marketing budgets." - Jay Conrad Levinson, who coined the term in 1984</p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Card><CardContent className="p-4 text-center"><DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" /><h4 className="font-bold">Low Cost</h4><p className="text-sm text-gray-600">Big impact without big budgets</p></CardContent></Card>
            <Card><CardContent className="p-4 text-center"><Share2 className="w-8 h-8 text-green-600 mx-auto mb-2" /><h4 className="font-bold">Highly Shareable</h4><p className="text-sm text-gray-600">Designed to go viral</p></CardContent></Card>
            <Card><CardContent className="p-4 text-center"><Zap className="w-8 h-8 text-green-600 mx-auto mb-2" /><h4 className="font-bold">Unexpected</h4><p className="text-sm text-gray-600">Surprises create memories</p></CardContent></Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">15 Brilliant Guerrilla Marketing Examples</h2>
          
          <div className="space-y-12">
            
            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #1</span>
              <h3 className="text-2xl font-bold mb-3">Coca-Cola's "Happiness Machine"</h3>
              <p className="text-gray-700 mb-4">Coca-Cola placed a special vending machine on a college campus that dispensed not just Coke, but pizzas, flowers, balloon animals, and even a 6-foot sub sandwich. Hidden cameras captured students' genuine reactions of surprise and joy.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Created genuine emotional moments, highly shareable video content, reinforced "Open Happiness" brand message.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> 6+ million YouTube views, massive social sharing, global media coverage.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #2</span>
              <h3 className="text-2xl font-bold mb-3">IKEA's "Everyday Fabulous" Bus Stops</h3>
              <p className="text-gray-700 mb-4">IKEA transformed ordinary bus stops into fully furnished living rooms, complete with sofas, rugs, and lamps. Commuters could sit in comfort while waiting for their bus - experiencing IKEA furniture firsthand.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Turned a daily frustration (waiting for the bus) into a pleasant brand experience. Free product trial in unexpected location.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Widespread social media sharing, local news coverage, positioned IKEA as innovative and customer-focused.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #3</span>
              <h3 className="text-2xl font-bold mb-3">Frontline's Giant Dog Floor Ad</h3>
              <p className="text-gray-700 mb-4">Frontline placed a massive image of a dog on a shopping mall floor. When viewed from upper floors, shoppers walking across the image looked like fleas on the dog - perfectly demonstrating why you need Frontline flea treatment.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Clever visual trick that made people part of the ad. Impossible to ignore, easy to photograph and share.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Millions of social impressions, one of the most shared ambient ads ever.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #4</span>
              <h3 className="text-2xl font-bold mb-3">Red Bull Stratos Space Jump</h3>
              <p className="text-gray-700 mb-4">Red Bull sponsored Felix Baumgartner's record-breaking jump from the edge of space (128,000 feet). The live-streamed event became the most-watched YouTube livestream in history at the time.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Perfectly aligned with brand values ("Red Bull gives you wings"), created a globally shared experience, pushed boundaries of what's possible.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> 8 million concurrent viewers, 52+ million total views, incalculable brand value.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #5</span>
              <h3 className="text-2xl font-bold mb-3">Spotify's "Wrapped" Billboards</h3>
              <p className="text-gray-700 mb-4">Spotify used listener data to create humorous, hyper-specific billboards like "Dear person who played 'Sorry' 42 times on Valentine's Day, what did you do?" The personalized (but anonymous) approach felt both invasive and hilarious.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Made data feel human and funny, encouraged users to check their own stats, created annual tradition.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Millions of social shares, user-generated content explosion, "Wrapped" became a cultural moment.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #6</span>
              <h3 className="text-2xl font-bold mb-3">Deadpool's Tinder Profile</h3>
              <p className="text-gray-700 mb-4">To promote Deadpool on Valentine's Day weekend, the marketing team created a Tinder profile for the character. Users could match with Deadpool and receive snarky, in-character messages promoting the film.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Perfect platform for the target audience, stayed true to character's irreverent humor, unprecedented use of dating apps for marketing.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Massive social buzz, helped Deadpool become highest-grossing R-rated film (at the time).</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #7</span>
              <h3 className="text-2xl font-bold mb-3">GoldToe's Giant Underwear Statue</h3>
              <p className="text-gray-700 mb-4">GoldToe put giant underwear on the famous Wall Street bull statue (and other NYC landmarks) to promote their new underwear line. The unexpected sight stopped traffic and dominated social feeds.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Humor, unexpected location, photo-worthy, generated news coverage for minimal cost.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Global media coverage, massive social sharing, brand awareness spike.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #8</span>
              <h3 className="text-2xl font-bold mb-3">Netflix's Stranger Things Pop-Ups</h3>
              <p className="text-gray-700 mb-4">Netflix created immersive Stranger Things experiences in major cities - including recreating the Byers' living room, the Upside Down, and Starcourt Mall. Fans could step into the show's world.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Gave superfans a shareable experience, created urgency through limited-time access, extended the show's world beyond the screen.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Lines around the block, millions of social posts, built anticipation for new seasons.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #9</span>
              <h3 className="text-2xl font-bold mb-3">Burger King's "Whopper Detour"</h3>
              <p className="text-gray-700 mb-4">Burger King offered 1-cent Whoppers through their app - but only if you ordered while physically inside or near a McDonald's. The app would then direct you to the nearest Burger King for pickup.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Brilliant competitive trolling, drove app downloads, created social buzz through sheer audacity.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> 1.5 million app downloads in 9 days, most downloaded food app, 37:1 media ROI.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #10</span>
              <h3 className="text-2xl font-bold mb-3">KitKat's "Have a Break" Benches</h3>
              <p className="text-gray-700 mb-4">KitKat transformed ordinary park benches to look like giant KitKat bars, reinforcing their "Have a Break" tagline in a clever, functional way. People could literally take a break on a KitKat.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Simple, clever, directly tied to brand message, useful ambient advertising.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Highly photographed, shared on social media, became iconic guerrilla marketing example.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #11</span>
              <h3 className="text-2xl font-bold mb-3">TNT's "Push to Add Drama" Button</h3>
              <p className="text-gray-700 mb-4">TNT placed a big red button in a quiet Belgian town square with a sign that said "Push to Add Drama." When pressed, an ambulance arrived, a stretcher fell, a shootout broke out, and a full dramatic scene unfolded - promoting TNT's tagline.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Interactive, surprising, perfectly demonstrated the brand promise, great video content.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> 50+ million YouTube views, one of the most shared branded videos ever.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #12</span>
              <h3 className="text-2xl font-bold mb-3">Bounty's Giant Messes</h3>
              <p className="text-gray-700 mb-4">Bounty placed giant "spills" around NYC - a massive coffee cup knocked over, a giant melting popsicle. Next to each mess was a human-sized Bounty paper towel roll, demonstrating the product's capability at scale.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Visual impact, product demonstration at scale, highly photographable.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Thousands of photos shared, media coverage, memorable brand impression.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #13</span>
              <h3 className="text-2xl font-bold mb-3">Childish Gambino's "Pharos" Earth Experience</h3>
              <p className="text-gray-700 mb-4">To debut his album, Childish Gambino created a dome experience in the Joshua Tree desert where 3,600 fans could experience the album in a custom environment with visuals projected overhead. No phones allowed.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Scarcity, exclusivity, completely unique experience, word-of-mouth from attendees.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> Sold out instantly, massive coverage, positioned album as special artistic event.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #14</span>
              <h3 className="text-2xl font-bold mb-3">Fiji Water Girl at Golden Globes</h3>
              <p className="text-gray-700 mb-4">A Fiji Water brand ambassador strategically photobombed celebrities on the Golden Globes red carpet, appearing in countless photos. The "Fiji Water Girl" became a meme and the most talked-about part of the event.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Hijacked a major cultural moment, meme-worthy content, cost of one brand ambassador vs. millions for traditional sponsorship.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> #1 trending topic, billions of impressions, more coverage than actual sponsors.</p>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <span className="text-green-600 font-bold text-sm">EXAMPLE #15</span>
              <h3 className="text-2xl font-bold mb-3">Duolingo's Unhinged TikTok</h3>
              <p className="text-gray-700 mb-4">Duolingo's giant green owl mascot became a TikTok sensation through deliberately chaotic, meme-driven content - simping for celebrities, threatening users who miss lessons, and generally behaving like no corporate mascot should.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm"><strong>Why it worked:</strong> Understood Gen Z humor, didn't feel like advertising, consistent character, embraced being weird.</p>
                <p className="text-sm mt-2"><strong>Results:</strong> 6+ million TikTok followers, massive app growth, cult brand status.</p>
              </div>
            </div>

          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Create Your Own Guerrilla Campaign</h2>
          <div className="space-y-4">
            <Card><CardContent className="p-4"><h4 className="font-bold mb-2">1. Know Your Audience</h4><p className="text-gray-600">What will surprise and delight THEM specifically? Where do they spend time?</p></CardContent></Card>
            <Card><CardContent className="p-4"><h4 className="font-bold mb-2">2. Tie It to Your Brand</h4><p className="text-gray-600">Clever for clever's sake doesn't work. The best campaigns reinforce your brand message.</p></CardContent></Card>
            <Card><CardContent className="p-4"><h4 className="font-bold mb-2">3. Make It Shareable</h4><p className="text-gray-600">If people won't photograph/video it, the impact stays local. Design for social sharing.</p></CardContent></Card>
            <Card><CardContent className="p-4"><h4 className="font-bold mb-2">4. Consider Legal/Permits</h4><p className="text-gray-600">Some guerrilla tactics exist in gray areas. Know the risks and get permits when possible.</p></CardContent></Card>
            <Card><CardContent className="p-4"><h4 className="font-bold mb-2">5. Have a Amplification Plan</h4><p className="text-gray-600">Capture great content, seed it to media, and be ready to engage when it goes viral.</p></CardContent></Card>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Ready to Go Guerrilla?</h2>
          <p className="mb-6 text-green-100">Air Fresh Marketing has executed guerrilla and <Link href="/services/street-teams" className="underline">street team campaigns</Link> for brands nationwide. From flash mobs to pop-up experiences, we help you create buzz without breaking the bank.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100"><Link href="/contact">Get a Free Quote<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10"><Link href="/services/experiential-marketing">Our Services</Link></Button>
          </div>
        </section>
      </div>
    </article>
  );
}
