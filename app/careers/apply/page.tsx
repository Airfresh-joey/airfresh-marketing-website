
import TalentApplicationForm from "@/components/TalentApplicationForm";

export default function ApplyPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
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
      </div>
    </div>
  );
}
