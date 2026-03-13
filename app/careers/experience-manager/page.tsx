'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Loader2, Upload, FileText, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";

// Using existing talent form - filtering by position field
const FORMSPREE_ID = "mojjqakb";

export default function ExperienceManagerApplication() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    currentTitle: "",
    yearsExperience: "",
    coverLetter: "",
    whyInterested: "",
    eventExperience: "",
    managementExperience: "",
    salary: "",
    startDate: "",
    referral: "",
  });

  const formatPhone = (value: string) => {
    const phone = value.replace(/\D/g, "");
    if (phone.length <= 3) return phone.length ? `(${phone}` : "";
    if (phone.length <= 6) return `(${phone.slice(0, 3)}) ${phone.slice(3)}`;
    return `(${phone.slice(0, 3)}) ${phone.slice(3, 6)}-${phone.slice(6, 10)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });
      submitData.append("position", "Experience Manager - Denver, CO");
      submitData.append("type", "Full-time W2");
      if (resumeFile) {
        submitData.append("resume", resumeFile);
      }

      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: submitData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to submit");
      setIsSubmitted(true);
    } catch (error) {
      alert("There was an error submitting your application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Application Received!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for applying for the Experience Manager position. We&apos;ve received your application and will review it carefully. Expect to hear from us within 5-7 business days.
            </p>
            <Link href="/careers">
              <Button variant="outline">Back to Careers</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="relative rounded-2xl overflow-hidden mb-8">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
          <div className="relative p-8 text-white">
            <div className="flex items-center gap-2 text-gray-200 mb-2">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm font-medium">Full-time Position</span>
            </div>
            <h1 className="text-3xl font-bold mb-2">Experience Manager</h1>
            <div className="flex items-center gap-4 text-gray-200">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Denver, CO
              </span>
              <span>$80,000 - $90,000/year</span>
            </div>
          </div>
        </div>

        {/* Position Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-lg font-semibold mb-3">About This Role</h2>
          <p className="text-gray-600 mb-4">
            Lead workplace experiences and events for a premier office property. You&apos;ll plan tenant engagement programs, coordinate with vendors, manage event staff, and create memorable experiences that build community.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Requirements</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• 3-5 years in hospitality, events, or experiential marketing</li>
                <li>• Experience managing teams and vendors</li>
                <li>• Strong communication and organizational skills</li>
                <li>• Ability to work on-site in Denver</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Benefits</h3>
              <ul className="text-gray-600 space-y-1">
                <li>• Competitive salary + bonus potential</li>
                <li>• Health, dental, and vision insurance</li>
                <li>• 401(k) with company match</li>
                <li>• Paid time off + holidays</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-6">Apply Now</h2>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 555-5555"
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                <Input
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Professional Background */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Professional Background</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentTitle">Current/Most Recent Title *</Label>
                <Input
                  id="currentTitle"
                  name="currentTitle"
                  value={formData.currentTitle}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="yearsExperience">Years of Relevant Experience *</Label>
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                >
                  <option value="">Select...</option>
                  <option value="1-2">1-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5-7">5-7 years</option>
                  <option value="7-10">7-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
            </div>
          </div>

          {/* Resume Upload */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Resume *</h3>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
              <input
                type="file"
                id="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                required
              />
              <label htmlFor="resume" className="cursor-pointer">
                {resumeFile ? (
                  <div className="flex items-center justify-center gap-2 text-green-600">
                    <FileText className="w-5 h-5" />
                    <span className="font-medium">{resumeFile.name}</span>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Click to upload your resume</p>
                    <p className="text-gray-400 text-sm">PDF, DOC, or DOCX (max 5MB)</p>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Cover Letter */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Cover Letter *</h3>
            <Label htmlFor="coverLetter" className="text-gray-700">
              Tell us why you&apos;re excited about this role and what makes you a great fit.
            </Label>
            <Textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              required
              rows={6}
              className="mt-2"
              placeholder="Share your background, what draws you to experiential marketing, and why you'd be a great Experience Manager..."
            />
          </div>

          {/* Position-Specific Questions */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Position Questions</h3>
            
            <div className="space-y-6">
              <div>
                <Label htmlFor="eventExperience" className="text-gray-700">
                  Describe a memorable event or experience you planned and executed. What made it successful? *
                </Label>
                <Textarea
                  id="eventExperience"
                  name="eventExperience"
                  value={formData.eventExperience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="managementExperience" className="text-gray-700">
                  Tell us about your experience managing teams or vendors. How do you handle challenges that arise? *
                </Label>
                <Textarea
                  id="managementExperience"
                  name="managementExperience"
                  value={formData.managementExperience}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="whyInterested" className="text-gray-700">
                  What interests you about working in workplace experience and tenant engagement? *
                </Label>
                <Textarea
                  id="whyInterested"
                  name="whyInterested"
                  value={formData.whyInterested}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Logistics */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Logistics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary">Salary Expectations *</Label>
                <Input
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                  placeholder="e.g., $85,000"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="startDate">Earliest Start Date *</Label>
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="referral">How did you hear about this position?</Label>
                <Input
                  id="referral"
                  name="referral"
                  value={formData.referral}
                  onChange={handleChange}
                  placeholder="LinkedIn, Indeed, referral, etc."
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>

          <p className="text-center text-sm text-gray-500 mt-4">
            By submitting, you agree to our privacy policy and consent to being contacted about this position.
          </p>
        </form>
      </div>
    </div>
  );
}
