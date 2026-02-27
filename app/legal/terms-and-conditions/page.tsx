import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | AirFresh Marketing',
  description: 'Terms and conditions for AirFresh Marketing services. Read our service agreement, usage policies, and legal terms.',
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: February 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using AirFresh Marketing&apos;s services, you agree to be bound by these Terms and Conditions. 
              If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
            <p>
              AirFresh Marketing provides experiential marketing, brand ambassador, event staffing, and promotional services. 
              All services are subject to availability and may vary by location. We reserve the right to modify or discontinue 
              any service at any time without prior notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
            <p>
              Clients are responsible for providing accurate information, timely communication, and compliance with all 
              applicable laws and regulations related to their marketing campaigns. Clients must ensure that all promotional 
              materials and activities comply with local, state, and federal laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <p>
              Payment terms are established in individual service agreements. Unless otherwise specified, invoices are due 
              within 30 days of receipt. Late payments may be subject to interest charges and service suspension.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cancellation Policy</h2>
            <p>
              Cancellation policies vary by service type and are specified in individual service agreements. Generally, 
              cancellations made less than 48 hours before a scheduled event may be subject to cancellation fees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p>
              All content, trademarks, and intellectual property on this website are owned by AirFresh Marketing or its 
              licensors. Clients retain ownership of their brand materials and creative assets provided to us for campaign execution.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              AirFresh Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages 
              resulting from your use of our services. Our total liability shall not exceed the amount paid for the specific 
              service in question.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
            <p>
              Clients agree to indemnify and hold harmless AirFresh Marketing from any claims, damages, or expenses arising 
              from their use of our services or violation of these terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p>
              For questions about these Terms and Conditions, please contact us at:
            </p>
            <ul className="list-none pl-0 mt-4">
              <li><strong>Email:</strong> info@airfreshmarketing.com</li>
              <li><strong>Phone:</strong> (303) 720-6060</li>
              <li><strong>Address:</strong> Denver, Colorado</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
