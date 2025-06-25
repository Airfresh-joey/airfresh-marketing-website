export default function Blog() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Blog & Insights</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Stay updated with the latest trends, strategies, and insights in experiential marketing from the AirFresh Marketing team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <article className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">The Future of Experiential Marketing</h2>
                <p className="text-gray-600 mb-4">March 15, 2024</p>
                <p className="text-gray-700">
                  Explore how emerging technologies and changing consumer behaviors are shaping the experiential marketing landscape. From virtual reality integrations to sustainability-focused events, discover what's next for the industry.
                </p>
              </article>
              
              <article className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Creating Memorable Brand Activations</h2>
                <p className="text-gray-600 mb-4">March 10, 2024</p>
                <p className="text-gray-700">
                  Learn the essential elements that make brand activations unforgettable. From sensory engagement to storytelling techniques, we share our proven strategies for creating lasting impressions.
                </p>
              </article>
              
              <article className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Measuring ROI in Experiential Marketing</h2>
                <p className="text-gray-600 mb-4">March 5, 2024</p>
                <p className="text-gray-700">
                  Discover effective methods for tracking and measuring the success of your experiential marketing campaigns. We break down key metrics and provide actionable insights for optimization.
                </p>
              </article>
              
              <article className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">The Psychology of Brand Experiences</h2>
                <p className="text-gray-600 mb-4">February 28, 2024</p>
                <p className="text-gray-700">
                  Understanding the psychological principles behind successful brand experiences. Learn how emotions, memory, and social dynamics influence consumer behavior at live events.
                </p>
              </article>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Industry Insights</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our team regularly shares expertise on experiential marketing trends, best practices, and innovative approaches to brand engagement. From case studies to thought leadership pieces, our blog provides valuable insights for marketers, brand managers, and agency professionals.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Perspectives</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 20 years of experience in the industry, our team has worked with more than 300 brands across various sectors. We share our learnings, challenges, and successes to help other professionals navigate the evolving landscape of experiential marketing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}