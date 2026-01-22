'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Loader2, ArrowRight, ArrowLeft, User, FileText, Briefcase, Camera, FolderOpen, Video, MapPin, Check } from "lucide-react";

const FORMSPREE_TALENT_ID = "mojjqakb";

// Format phone number as user types
const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length === 0) return "";
  if (phoneNumber.length <= 3) return `(${phoneNumber}`;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

// US States
const US_STATES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC"];

// Skills options
const SKILLS_OPTIONS = [
  "Acting", "Alcohol Certification (TIPS/ServSafe)", "Bartending", "Auto/Automotive Experience",
  "Bilingual - Spanish", "Bilingual - French", "Bilingual - Mandarin", "Bilingual - Other",
  "Brand Ambassador", "Costume/Character Work", "DJ", "Emcee/Host",
  "Field Manager", "Fitness Instructor", "Fitness Model", "Food Handlers Permit",
  "Guerrilla Marketing", "Hair & Makeup", "Hospitality", "Lead Generation",
  "Mascot Performance", "Model - Commercial", "Model - Fashion", "Model - Fitness",
  "Model - Promotional", "Model - Trade Show", "Photographer", "Product Demonstration",
  "Product Sampling", "Registration/Check-in", "Retail Experience", "Sales Experience",
  "Social Media Influencer", "Street Team", "Surveying", "Technology/Demo Products",
  "Tour Experience", "Trade Show Experience", "Transportation - Own Vehicle",
  "Transportation - Valid License", "VIP Hosting", "Video Production", "Warehouse/Setup",
  "Wine/Spirits Knowledge", "Event Setup/Breakdown", "Customer Service", "Data Entry",
  "Crowd Engagement", "Gaming/Esports", "Sports Knowledge", "Live Streaming",
  "Content Creation", "Public Speaking", "Interpretation", "Sign Language"
];

// Work areas by region
const WORK_AREAS = {
  "West Coast": ["Los Angeles, CA", "San Francisco, CA", "San Diego, CA", "Seattle, WA", "Portland, OR", "Las Vegas, NV", "Phoenix, AZ", "Denver, CO", "Salt Lake City, UT"],
  "Midwest": ["Chicago, IL", "Detroit, MI", "Minneapolis, MN", "Kansas City, MO", "St. Louis, MO", "Indianapolis, IN", "Columbus, OH", "Cleveland, OH", "Milwaukee, WI"],
  "South": ["Dallas, TX", "Houston, TX", "Austin, TX", "San Antonio, TX", "Miami, FL", "Orlando, FL", "Tampa, FL", "Atlanta, GA", "Nashville, TN", "Charlotte, NC", "New Orleans, LA"],
  "Northeast": ["New York, NY", "Boston, MA", "Philadelphia, PA", "Washington, DC", "Baltimore, MD", "Pittsburgh, PA", "Newark, NJ"],
  "Canada": ["Toronto, ON", "Vancouver, BC", "Montreal, QC", "Calgary, AB"]
};

// T-Shirt sizes
const TSHIRT_SIZES = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const PANT_SIZES = ["24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44"];
const SHOE_SIZES = ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15"];

// How did you hear options
const HEAR_ABOUT_OPTIONS = [
  "Google Search", "Social Media - Instagram", "Social Media - Facebook", "Social Media - TikTok",
  "Social Media - LinkedIn", "Job Board (Indeed, ZipRecruiter, etc.)", "Referral from Friend/Colleague",
  "Worked with us before", "Event/Activation", "Other"
];

// Experience level options
const EXPERIENCE_OPTIONS = [
  "No experience - just starting out",
  "Less than 6 months",
  "6 months - 1 year",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5+ years"
];

// Ethnicity options
const ETHNICITY_OPTIONS = [
  "Prefer not to say", "African American/Black", "Asian", "Caucasian/White",
  "Hispanic/Latino", "Middle Eastern", "Mixed/Multiracial", "Native American",
  "Pacific Islander", "Other"
];

// Step configuration
const STEPS = [
  { id: 1, title: "Register", icon: User, description: "Create your account" },
  { id: 2, title: "Profile", icon: FileText, description: "Personal details" },
  { id: 3, title: "Skills", icon: Check, description: "Your qualifications" },
  { id: 4, title: "Experience", icon: Briefcase, description: "Work history" },
  { id: 5, title: "Photos", icon: Camera, description: "Upload photos" },
  { id: 6, title: "Documents", icon: FolderOpen, description: "Required docs" },
  { id: 7, title: "Videos", icon: Video, description: "Optional videos" },
  { id: 8, title: "Work Areas", icon: MapPin, description: "Where you work" },
  { id: 9, title: "Complete", icon: CheckCircle, description: "All done!" },
];

interface FormData {
  // Step 1 - Register
  firstName: string;
  lastName: string;
  email: string;
  emailConfirm: string;
  password: string;
  mobile: string;

  // Step 2 - Profile
  relevantExperience: string;
  howHeard: string;
  referredBy: string;
  legalName: string;
  promotionsDuration: string;
  vehicleInfo: string;
  personality: string;

  // Address
  address: string;
  unit: string;
  city: string;
  state: string;
  postcode: string;
  country: string;

  // Mailing Address
  mailingAddress: string;
  mailingUnit: string;
  mailingCity: string;
  mailingState: string;
  mailingZipcode: string;

  // Personal Info
  tattoos: string;
  dateOfBirth: string;
  sex: string;
  middleName: string;
  alias: string;
  ethnicity: string;
  height: string;
  weight: string;
  tshirtSize: string;
  suitJacketSize: string;
  hipSize: string;
  pantSize: string;
  shoeSize: string;
  eyeColor: string;
  hairColor: string;
  hairLength: string;
  comments: string;

  // Step 3 - Skills
  skills: string[];

  // Step 4 - Experience
  promotionalExperience: string;
  managementExperience: string;
  otherExperience: string;

  // Step 5 - Photos (we'll just collect intent, actual upload would need different handling)
  photoConsent: boolean;

  // Step 6 - Documents
  documentsConsent: boolean;

  // Step 7 - Videos
  videoConsent: boolean;

  // Step 8 - Work Areas
  workAreas: string[];
}

export default function TalentApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormData>({
    // Step 1
    firstName: "",
    lastName: "",
    email: "",
    emailConfirm: "",
    password: "",
    mobile: "",

    // Step 2
    relevantExperience: "",
    howHeard: "",
    referredBy: "",
    legalName: "",
    promotionsDuration: "",
    vehicleInfo: "",
    personality: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    postcode: "",
    country: "United States",
    mailingAddress: "",
    mailingUnit: "",
    mailingCity: "",
    mailingState: "",
    mailingZipcode: "",
    tattoos: "",
    dateOfBirth: "",
    sex: "",
    middleName: "",
    alias: "",
    ethnicity: "",
    height: "",
    weight: "",
    tshirtSize: "",
    suitJacketSize: "",
    hipSize: "",
    pantSize: "",
    shoeSize: "",
    eyeColor: "",
    hairColor: "",
    hairLength: "",
    comments: "",

    // Step 3
    skills: [],

    // Step 4
    promotionalExperience: "",
    managementExperience: "",
    otherExperience: "",

    // Step 5-7
    photoConsent: false,
    documentsConsent: false,
    videoConsent: false,

    // Step 8
    workAreas: [],
  });

  // Check for quick apply data from careers page
  useEffect(() => {
    const quickApplyData = sessionStorage.getItem('quickApply');
    if (quickApplyData) {
      try {
        const data = JSON.parse(quickApplyData);
        setFormData(prev => ({
          ...prev,
          firstName: data.firstName || prev.firstName,
          lastName: data.lastName || prev.lastName,
          email: data.email || prev.email,
          emailConfirm: data.email || prev.emailConfirm,
        }));
        // Clear the data after using it
        sessionStorage.removeItem('quickApply');
      } catch (e) {
        // Ignore parse errors
      }
    }
  }, []);

  const handleChange = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const toggleWorkArea = (area: string) => {
    setFormData((prev) => ({
      ...prev,
      workAreas: prev.workAreas.includes(area)
        ? prev.workAreas.filter((a) => a !== area)
        : [...prev.workAreas, area],
    }));
  };

  const validateStep = (step: number): boolean => {
    setError(null);

    switch (step) {
      case 1:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.emailConfirm || !formData.password || !formData.mobile) {
          setError("Please fill in all required fields.");
          return false;
        }
        if (formData.email !== formData.emailConfirm) {
          setError("Email addresses do not match.");
          return false;
        }
        if (formData.password.length < 6) {
          setError("Password must be at least 6 characters.");
          return false;
        }
        return true;

      case 2:
        if (!formData.relevantExperience || !formData.promotionsDuration || !formData.personality ||
            !formData.address || !formData.city || !formData.state || !formData.postcode ||
            !formData.tattoos || !formData.dateOfBirth || !formData.sex ||
            !formData.tshirtSize || !formData.pantSize || !formData.shoeSize || !formData.comments) {
          setError("Please fill in all required fields.");
          return false;
        }
        return true;

      case 3:
        if (formData.skills.length === 0) {
          setError("Please select at least one skill.");
          return false;
        }
        return true;

      case 4:
        // Experience is optional
        return true;

      case 5:
        if (!formData.photoConsent) {
          setError("Please acknowledge that you will provide photos.");
          return false;
        }
        return true;

      case 6:
      case 7:
        // Optional steps
        return true;

      case 8:
        if (formData.workAreas.length === 0) {
          setError("Please select at least one work area.");
          return false;
        }
        return true;

      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 9) {
        setCurrentStep(currentStep + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setError(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(8)) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_TALENT_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Personal Info
          name: `${formData.firstName} ${formData.lastName}`,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          legalName: formData.legalName || "Same as above",
          middleName: formData.middleName,
          alias: formData.alias,
          dateOfBirth: formData.dateOfBirth,
          sex: formData.sex,
          ethnicity: formData.ethnicity,

          // Physical
          height: formData.height,
          weight: formData.weight,
          tshirtSize: formData.tshirtSize,
          pantSize: formData.pantSize,
          shoeSize: formData.shoeSize,
          suitJacketSize: formData.suitJacketSize,
          hipSize: formData.hipSize,
          eyeColor: formData.eyeColor,
          hairColor: formData.hairColor,
          hairLength: formData.hairLength,
          tattoos: formData.tattoos,

          // Address
          address: `${formData.address}${formData.unit ? `, ${formData.unit}` : ""}, ${formData.city}, ${formData.state} ${formData.postcode}`,
          mailingAddress: formData.mailingAddress ? `${formData.mailingAddress}${formData.mailingUnit ? `, ${formData.mailingUnit}` : ""}, ${formData.mailingCity}, ${formData.mailingState} ${formData.mailingZipcode}` : "Same as home address",

          // Experience
          relevantExperience: formData.relevantExperience,
          promotionsDuration: formData.promotionsDuration,
          howHeard: formData.howHeard,
          referredBy: formData.referredBy,
          vehicleInfo: formData.vehicleInfo,
          personality: formData.personality,
          comments: formData.comments,

          // Skills
          skills: formData.skills.join(", "),

          // Experience details
          promotionalExperience: formData.promotionalExperience || "None provided",
          managementExperience: formData.managementExperience || "None provided",
          otherExperience: formData.otherExperience || "None provided",

          // Work Areas
          workAreas: formData.workAreas.join(", "),

          // Consent flags
          photoConsent: formData.photoConsent ? "Yes - Will provide photos" : "No",
          documentsConsent: formData.documentsConsent ? "Yes - Will provide documents" : "Pending",
          videoConsent: formData.videoConsent ? "Yes - Will provide videos" : "No",

          _subject: `New Talent Application: ${formData.firstName} ${formData.lastName} - ${formData.city}, ${formData.state}`,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setCurrentStep(9);
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Progress bar calculation
  const progress = ((currentStep - 1) / (STEPS.length - 1)) * 100;

  // Render step content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h3>
              <p className="text-gray-600">Let&apos;s start with your basic information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name <span className="text-red-500">*</span></Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                  placeholder="First name"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name <span className="text-red-500">*</span></Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@email.com"
              />
            </div>

            <div>
              <Label htmlFor="emailConfirm">Confirm Email <span className="text-red-500">*</span></Label>
              <Input
                id="emailConfirm"
                type="email"
                value={formData.emailConfirm}
                onChange={(e) => handleChange("emailConfirm", e.target.value)}
                placeholder="Re-type your email"
              />
            </div>

            <div>
              <Label htmlFor="password">Create Password <span className="text-red-500">*</span></Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                placeholder="At least 6 characters"
              />
            </div>

            <div>
              <Label htmlFor="mobile">Mobile Phone <span className="text-red-500">*</span></Label>
              <Input
                id="mobile"
                type="tel"
                value={formatPhoneNumber(formData.mobile)}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "");
                  if (raw.length <= 10) handleChange("mobile", raw);
                }}
                placeholder="(555) 123-4567"
                maxLength={14}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Profile</h3>
              <p className="text-gray-600">Tell us more about yourself</p>
            </div>

            {/* General Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 border-b pb-2">General Information</h4>

              <div>
                <Label htmlFor="relevantExperience">Relevant Experience <span className="text-red-500">*</span></Label>
                <Textarea
                  id="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={(e) => handleChange("relevantExperience", e.target.value)}
                  placeholder="Describe your relevant experience in promotional work, events, marketing, etc."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="howHeard">How did you hear about Air Fresh?</Label>
                  <Select value={formData.howHeard} onValueChange={(v) => handleChange("howHeard", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      {HEAR_ABOUT_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="referredBy">If referred, by who?</Label>
                  <Input
                    id="referredBy"
                    value={formData.referredBy}
                    onChange={(e) => handleChange("referredBy", e.target.value)}
                    placeholder="Name of referrer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="promotionsDuration">How long have you been doing promotions? <span className="text-red-500">*</span></Label>
                  <Select value={formData.promotionsDuration} onValueChange={(v) => handleChange("promotionsDuration", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPERIENCE_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="legalName">Legal Name (if different)</Label>
                  <Input
                    id="legalName"
                    value={formData.legalName}
                    onChange={(e) => handleChange("legalName", e.target.value)}
                    placeholder="Leave blank if same"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="vehicleInfo">Make/Model/Year of personal vehicle</Label>
                <Input
                  id="vehicleInfo"
                  value={formData.vehicleInfo}
                  onChange={(e) => handleChange("vehicleInfo", e.target.value)}
                  placeholder="e.g., Toyota Camry 2020"
                />
              </div>

              <div>
                <Label htmlFor="personality">Tell us about your personality <span className="text-red-500">*</span></Label>
                <Textarea
                  id="personality"
                  value={formData.personality}
                  onChange={(e) => handleChange("personality", e.target.value)}
                  placeholder="Describe yourself - are you outgoing, energetic, detail-oriented?"
                  rows={3}
                />
              </div>
            </div>

            {/* Home Address */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 border-b pb-2">Home Address</h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Label htmlFor="address">Street Address <span className="text-red-500">*</span></Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="123 Main St"
                  />
                </div>
                <div>
                  <Label htmlFor="unit">Unit/Apt</Label>
                  <Input
                    id="unit"
                    value={formData.unit}
                    onChange={(e) => handleChange("unit", e.target.value)}
                    placeholder="Apt 4B"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="city">City <span className="text-red-500">*</span></Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="Denver"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State <span className="text-red-500">*</span></Label>
                  <Select value={formData.state} onValueChange={(v) => handleChange("state", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((state) => (
                        <SelectItem key={state} value={state}>{state}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="postcode">Zip Code <span className="text-red-500">*</span></Label>
                  <Input
                    id="postcode"
                    value={formData.postcode}
                    onChange={(e) => handleChange("postcode", e.target.value)}
                    placeholder="80202"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country <span className="text-red-500">*</span></Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    placeholder="United States"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-800 border-b pb-2">Personal Information</h4>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth <span className="text-red-500">*</span></Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="sex">Sex <span className="text-red-500">*</span></Label>
                  <Select value={formData.sex} onValueChange={(v) => handleChange("sex", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="non-binary">Non-binary</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="middleName">Middle Name</Label>
                  <Input
                    id="middleName"
                    value={formData.middleName}
                    onChange={(e) => handleChange("middleName", e.target.value)}
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <Label htmlFor="ethnicity">Ethnicity</Label>
                  <Select value={formData.ethnicity} onValueChange={(v) => handleChange("ethnicity", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {ETHNICITY_OPTIONS.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    value={formData.height}
                    onChange={(e) => handleChange("height", e.target.value)}
                    placeholder="5'10&quot;"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight</Label>
                  <Input
                    id="weight"
                    value={formData.weight}
                    onChange={(e) => handleChange("weight", e.target.value)}
                    placeholder="165 lbs"
                  />
                </div>
                <div>
                  <Label htmlFor="eyeColor">Eye Color</Label>
                  <Input
                    id="eyeColor"
                    value={formData.eyeColor}
                    onChange={(e) => handleChange("eyeColor", e.target.value)}
                    placeholder="Brown"
                  />
                </div>
                <div>
                  <Label htmlFor="hairColor">Hair Color</Label>
                  <Input
                    id="hairColor"
                    value={formData.hairColor}
                    onChange={(e) => handleChange("hairColor", e.target.value)}
                    placeholder="Black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="tshirtSize">T-Shirt Size <span className="text-red-500">*</span></Label>
                  <Select value={formData.tshirtSize} onValueChange={(v) => handleChange("tshirtSize", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {TSHIRT_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="pantSize">Pant Size <span className="text-red-500">*</span></Label>
                  <Select value={formData.pantSize} onValueChange={(v) => handleChange("pantSize", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {PANT_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="shoeSize">Shoe Size <span className="text-red-500">*</span></Label>
                  <Select value={formData.shoeSize} onValueChange={(v) => handleChange("shoeSize", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {SHOE_SIZES.map((size) => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="hairLength">Hair Length</Label>
                  <Select value={formData.hairLength} onValueChange={(v) => handleChange("hairLength", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bald">Bald</SelectItem>
                      <SelectItem value="short">Short</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="long">Long</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="tattoos">Do you have visible tattoos? <span className="text-red-500">*</span></Label>
                <Select value={formData.tattoos} onValueChange={(v) => handleChange("tattoos", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">No visible tattoos</SelectItem>
                    <SelectItem value="small">Small, easily covered</SelectItem>
                    <SelectItem value="some">Some visible tattoos</SelectItem>
                    <SelectItem value="many">Many visible tattoos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comments">Additional Comments <span className="text-red-500">*</span></Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleChange("comments", e.target.value)}
                  placeholder="Anything else you'd like us to know about you?"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Skills & Qualifications</h3>
              <p className="text-gray-600">Select all that apply to you</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {SKILLS_OPTIONS.map((skill) => (
                <div
                  key={skill}
                  className={`flex items-center space-x-2 p-3 rounded-lg border cursor-pointer transition-colors ${
                    formData.skills.includes(skill)
                      ? "bg-cyan-50 border-cyan-500"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  <Checkbox
                    checked={formData.skills.includes(skill)}
                    onCheckedChange={() => toggleSkill(skill)}
                  />
                  <span className="text-sm">{skill}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 text-center">
              Selected: {formData.skills.length} skill{formData.skills.length !== 1 ? 's' : ''}
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Experience</h3>
              <p className="text-gray-600">Tell us about your background</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="promotionalExperience">Promotional Experience</Label>
                <Textarea
                  id="promotionalExperience"
                  value={formData.promotionalExperience}
                  onChange={(e) => handleChange("promotionalExperience", e.target.value)}
                  placeholder="Describe your promotional work experience - brands represented, types of events, etc."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="managementExperience">Management Experience</Label>
                <Textarea
                  id="managementExperience"
                  value={formData.managementExperience}
                  onChange={(e) => handleChange("managementExperience", e.target.value)}
                  placeholder="Have you led teams or managed events? Describe your leadership experience."
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="otherExperience">Other Relevant Experience</Label>
                <Textarea
                  id="otherExperience"
                  value={formData.otherExperience}
                  onChange={(e) => handleChange("otherExperience", e.target.value)}
                  placeholder="Any other experience that makes you a great candidate - hospitality, sales, performance, etc."
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Photos</h3>
              <p className="text-gray-600">We&apos;ll need at least 2 professional photos</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Photo Requirements</h4>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>At least 2 photos required</li>
                <li>Professional headshot preferred</li>
                <li>Full body photo recommended</li>
                <li>High resolution, well-lit images</li>
                <li>Recent photos (within the last year)</li>
              </ul>

              <p className="text-sm text-gray-500 mb-4">
                After submitting this application, you&apos;ll receive an email with instructions to upload your photos.
              </p>

              <div className="flex items-center justify-center space-x-2">
                <Checkbox
                  id="photoConsent"
                  checked={formData.photoConsent}
                  onCheckedChange={(checked) => handleChange("photoConsent", !!checked)}
                />
                <Label htmlFor="photoConsent" className="text-sm cursor-pointer">
                  I understand and will provide the required photos <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Documents</h3>
              <p className="text-gray-600">Required paperwork for employment</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <FolderOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold text-center mb-4">Documents You&apos;ll Need</h4>

              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border">
                  <FileText className="w-5 h-5 text-cyan-600 mt-0.5" />
                  <div>
                    <p className="font-medium">W9 Form</p>
                    <p className="text-sm text-gray-500">Required for tax purposes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border">
                  <FileText className="w-5 h-5 text-cyan-600 mt-0.5" />
                  <div>
                    <p className="font-medium">Independent Contractor Agreement</p>
                    <p className="text-sm text-gray-500">Our standard contractor terms</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 text-center mt-6">
                These documents will be provided to you after your application is reviewed.
              </p>

              <div className="flex items-center justify-center space-x-2 mt-4">
                <Checkbox
                  id="documentsConsent"
                  checked={formData.documentsConsent}
                  onCheckedChange={(checked) => handleChange("documentsConsent", !!checked)}
                />
                <Label htmlFor="documentsConsent" className="text-sm cursor-pointer">
                  I understand I will need to provide these documents
                </Label>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Videos</h3>
              <p className="text-gray-600">Optional but highly recommended</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Video Introduction</h4>
              <p className="text-sm text-gray-600 mb-4">
                A short video introduction can help you stand out! Share your personality,
                experience, and why you&apos;d be great for promotional work.
              </p>

              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>30-60 seconds recommended</li>
                <li>Good lighting and clear audio</li>
                <li>Be yourself and show your energy!</li>
              </ul>

              <div className="flex items-center justify-center space-x-2">
                <Checkbox
                  id="videoConsent"
                  checked={formData.videoConsent}
                  onCheckedChange={(checked) => handleChange("videoConsent", !!checked)}
                />
                <Label htmlFor="videoConsent" className="text-sm cursor-pointer">
                  I would like to submit a video introduction
                </Label>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Work Areas</h3>
              <p className="text-gray-600">Select all locations where you can work</p>
            </div>

            {Object.entries(WORK_AREAS).map(([region, cities]) => (
              <div key={region} className="space-y-3">
                <h4 className="font-semibold text-gray-800 border-b pb-2">{region}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                  {cities.map((city) => (
                    <div
                      key={city}
                      className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                        formData.workAreas.includes(city)
                          ? "bg-cyan-50 border-cyan-500"
                          : "bg-white border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => toggleWorkArea(city)}
                    >
                      <Checkbox
                        checked={formData.workAreas.includes(city)}
                        onCheckedChange={() => toggleWorkArea(city)}
                      />
                      <span className="text-sm">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-sm text-gray-500 text-center">
              Selected: {formData.workAreas.length} location{formData.workAreas.length !== 1 ? 's' : ''}
            </p>
          </div>
        );

      case 9:
        return (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Application Submitted!</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Thank you for applying to join the Air Fresh team! We&apos;ll review your application
              and reach out within 48 hours with next steps.
            </p>
            <div className="bg-cyan-50 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-sm text-cyan-800">
                <strong>What&apos;s next?</strong> Check your email for a confirmation and instructions
                on how to upload your photos and complete your profile.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Progress Header */}
      {currentStep < 9 && (
        <div className="bg-gray-50 p-4 border-b">
          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Step Indicators - Desktop */}
          <div className="hidden md:flex justify-between">
            {STEPS.slice(0, -1).map((step) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isComplete = step.id < currentStep;

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center ${
                    isActive ? "text-cyan-600" : isComplete ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                      isActive
                        ? "bg-cyan-100"
                        : isComplete
                        ? "bg-green-100"
                        : "bg-gray-100"
                    }`}
                  >
                    {isComplete ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Icon className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-xs font-medium">{step.title}</span>
                </div>
              );
            })}
          </div>

          {/* Step Indicator - Mobile */}
          <div className="md:hidden text-center">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of 8: {STEPS[currentStep - 1].title}
            </span>
          </div>
        </div>
      )}

      {/* Form Content */}
      <div className="p-6 md:p-8">
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error}
          </div>
        )}

        {renderStepContent()}

        {/* Navigation Buttons */}
        {currentStep < 9 && (
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={currentStep === 1 ? "invisible" : ""}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            {currentStep < 8 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                Continue
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
