import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">Contact Us</h1>
          <div className="prose prose-lg max-w-4xl mb-12">
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to create unforgettable brand experiences? Let's start the conversation. Whether you're planning a brand activation, corporate event, or experiential marketing campaign, our team is here to help bring your vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <p className="text-gray-600 text-lg">
                    <a href="tel:+13037206060" className="hover:text-cyan-600">303-720-6060</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-gray-600 text-lg">
                    <a href="mailto:hello@airfreshmarketing.com" className="hover:text-cyan-600">hello@airfreshmarketing.com</a>
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Address</h3>
                  <p className="text-gray-600 text-lg">
                    720 S. Colorado Blvd., Penthouse North<br />
                    Denver, Colorado 80246
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/airfresh-marketing" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    LinkedIn
                  </a>
                  <span className="text-gray-400">/</span>
                  <a href="https://www.facebook.com/AirFreshMarketing" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    Facebook
                  </a>
                  <span className="text-gray-400">/</span>
                  <a href="https://twitter.com/AirFreshmktg" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    Twitter
                  </a>
                  <span className="text-gray-400">/</span>
                  <a href="https://www.instagram.com/airfreshmarketing/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}