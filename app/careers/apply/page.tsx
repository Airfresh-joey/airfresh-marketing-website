import SEO from "@/components/SEO";
import TalentApplicationForm from "@/components/TalentApplicationForm";

export default function ApplyPage() {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 via-white to-cyan-50">
      <SEO
        title="Apply Now | Join Air Fresh Marketing"
        description="Apply to join Air Fresh Marketing's team of brand ambassadors and event staff. Complete our application to start working with top brands nationwide."
        keywords="apply brand ambassador, event staff application, promotional model jobs, marketing jobs application"
        canonical="https://airfreshmarketing.com/careers/apply"
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Join the Air Fresh Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete the application below to start your journey as a brand ambassador.
            It only takes a few minutes!
          </p>
        </div>

        {/* Application Form */}
        <TalentApplicationForm />

        {/* Footer info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Questions? Contact us at{" "}
            <a href="mailto:talent@airfreshmarketing.com" className="text-cyan-600 hover:underline">
              talent@airfreshmarketing.com
            </a>
            {" "}or call{" "}
            <a href="tel:3037206060" className="text-cyan-600 hover:underline">
              (303) 720-6060
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
