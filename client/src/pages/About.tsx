export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">About AirFresh Marketing</h1>
          <div className="prose prose-lg max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              AirFresh Marketing is a nationwide experiential marketing company that connects brands with their customers through unforgettable experiences. For over 20 years, we've helped more than 300 brands create meaningful connections with their audiences.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in Denver, Colorado, AirFresh Marketing began with a simple mission: to help brands create authentic connections with their audiences through experiential marketing. What started as a small team of passionate marketers has grown into a nationwide company serving clients from coast to coast.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">What We Do</h2>
            <p className="text-lg text-gray-600 mb-4">
              We specialize in creating memorable brand experiences that engage all five senses. From large-scale corporate events to intimate brand activations, we handle everything in-house as an extension of your team. Our turnkey services include:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-6">
              <li>Production and Execution</li>
              <li>Experiential & Digital Marketing</li>
              <li>Asset Procurement</li>
              <li>Marketing Strategy</li>
              <li>Creative Development</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-4">
              Everything we do is done in-house and as an extension of your team. We strategize what's best for meeting your goals and then come together to crush them as a single unit. Our end-of-project success reports are packed with actionable data to guide future marketing efforts.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Who We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Local Brands</h3>
                <p className="text-gray-600">Pump up the volume with next-level events for your local business.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Corporations</h3>
                <p className="text-gray-600">Give every customer an intimate experience when it comes to colossal nationwide campaigns.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-3">Agencies</h3>
                <p className="text-gray-600">Enhance your agency with fresh ideas, unique perspectives and innovative outreach.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}