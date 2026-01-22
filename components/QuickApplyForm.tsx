'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

export default function QuickApplyForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }

    // Store in sessionStorage so the apply page can prefill
    sessionStorage.setItem('quickApply', JSON.stringify(formData));

    // Navigate to full application
    router.push('/careers/apply');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started</h3>
        <p className="text-gray-600">Enter your info to begin your application</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-700">First Name</Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              placeholder="First name"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-gray-700">Last Name</Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              placeholder="Last name"
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-700">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="you@email.com"
            className="mt-1"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-lg py-6"
          size="lg"
        >
          Continue Application
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Takes only a few minutes to complete
        </p>
      </form>
    </div>
  );
}
