import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, MapPin, Clock, DollarSign, Sparkles, Code, CheckCircle2, Send, Upload } from "lucide-react";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  school: z.string().optional(),
  linkedIn: z.string().optional(),
  github: z.string().optional(),
  portfolio: z.string().optional(),
  experience: z.string().min(20, "Tell us about your experience"),
  whyInterested: z.string().min(20, "Tell us why you're interested"),
  availability: z.string().min(1, "Please specify your availability"),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

// Formspree form ID for AFM Technical Intern applications
// TODO: Replace with actual form ID after creating in Formspree dashboard
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

export default function Careers() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  });

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `Technical Intern Application: ${data.fullName}`,
          position: "Technical Intern",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon.",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or email careers@airfreshmarketing.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-2 text-blue-300 mb-4">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wider">Careers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            We're an AI-forward experiential marketing agency looking for talented people who want to build the future.
          </p>
        </div>
      </section>

      {/* Job Listing */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            {/* Job Header */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Clock className="w-4 h-4" />
                  Part-Time (20 hrs/week)
                </span>
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  <DollarSign className="w-4 h-4" />
                  $20/hour
                </span>
                <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  AI-Forward Company
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Intern</h2>
              <p className="text-gray-600 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Denver, CO • Remote-Friendly
              </p>
            </div>

            {/* Job Content */}
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About This Role</h3>
                <p className="text-gray-700 mb-6">
                  Air Fresh Marketing is looking for a <strong>Technical Intern</strong> to join our team and help us ship faster. 
                  You'll work directly with our founder on internal tools, web projects, and AI-powered systems that run our business.
                </p>
                <p className="text-gray-700 mb-6">
                  This isn't a "get coffee and file papers" internship. You'll be hands-on with real projects — testing portals, 
                  fixing bugs, finishing websites, and building dashboards. If you're a CS student or self-taught developer who 
                  wants real-world experience with modern web tech and AI tools, this is it.
                </p>

                {/* AI Highlight Box */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg my-8">
                  <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5" />
                    Why This Internship Is Different
                  </h4>
                  <p className="text-blue-800 m-0">
                    We're an AI-forward company. You'll use tools like Cursor, Claude, ChatGPT, and Codex daily. 
                    We don't just talk about AI — we build with it. You'll learn how to 10x your output using 
                    AI coding assistants while working on production systems.
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">What You'll Do</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li><strong>Test & QA:</strong> Break our portals before clients do. Find bugs, document them, fix them.</li>
                  <li><strong>Finish Websites:</strong> We have several sites at 80% — you'll get them to 100%.</li>
                  <li><strong>Build Dashboards:</strong> Help create internal tools that track proposals, leads, and operations.</li>
                  <li><strong>Backend Work:</strong> Database queries, API integrations, automation scripts.</li>
                  <li><strong>AI Implementation:</strong> Help integrate AI features into our products and workflows.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["React / Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel", "Git / GitHub", "Cursor / Claude", "PostgreSQL"].map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Required</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Currently studying CS, IT, or related field — OR self-taught with portfolio
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Comfortable with HTML, CSS, JavaScript
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Experience with React or Next.js (even personal projects)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Uses AI tools (ChatGPT, Cursor, Claude, etc.)
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        Can work independently with minimal supervision
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Nice to Have</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        Experience with databases (SQL, Supabase, Firebase)
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        Familiarity with Git and GitHub workflows
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        Interest in marketing technology or startups
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        Previous internship or freelance experience
                      </li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Details</h3>
                <ul className="space-y-2 text-gray-700 mb-8">
                  <li><strong>Hours:</strong> 20 hours/week, flexible schedule</li>
                  <li><strong>Pay:</strong> $20/hour</li>
                  <li><strong>Duration:</strong> 3 months initially, with potential to extend</li>
                  <li><strong>Location:</strong> Remote-friendly (Denver-based preferred but not required)</li>
                  <li><strong>Start Date:</strong> ASAP / Flexible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50" id="apply">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply Now</h2>
            <p className="text-gray-600">
              Fill out the form below and we'll get back to you within a few days.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Application Received!</h3>
              <p className="text-green-700">
                Thanks for applying. We'll review your application and reach out if there's a fit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    {...register("fullName")}
                    placeholder="John Smith"
                    className={errors.fullName ? "border-red-500" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="you@email.com"
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <Input
                    {...register("phone")}
                    placeholder="(303) 555-1234"
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    School (if applicable)
                  </label>
                  <Input
                    {...register("school")}
                    placeholder="University of Colorado"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <Input
                    {...register("linkedIn")}
                    placeholder="linkedin.com/in/yourname"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GitHub Profile
                  </label>
                  <Input
                    {...register("github")}
                    placeholder="github.com/yourname"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio / Website
                  </label>
                  <Input
                    {...register("portfolio")}
                    placeholder="yoursite.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your experience with web development and AI tools *
                </label>
                <Textarea
                  {...register("experience")}
                  placeholder="What have you built? What technologies have you used? How do you use AI in your workflow?"
                  rows={4}
                  className={errors.experience ? "border-red-500" : ""}
                />
                {errors.experience && (
                  <p className="text-red-500 text-sm mt-1">{errors.experience.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in this internship? *
                </label>
                <Textarea
                  {...register("whyInterested")}
                  placeholder="What excites you about this role? What do you hope to learn?"
                  rows={3}
                  className={errors.whyInterested ? "border-red-500" : ""}
                />
                {errors.whyInterested && (
                  <p className="text-red-500 text-sm mt-1">{errors.whyInterested.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  When can you start and what's your weekly availability? *
                </label>
                <Input
                  {...register("availability")}
                  placeholder="e.g., Available to start immediately, 20 hrs/week flexible"
                  className={errors.availability ? "border-red-500" : ""}
                />
                {errors.availability && (
                  <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
              >
                {isSubmitting ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
