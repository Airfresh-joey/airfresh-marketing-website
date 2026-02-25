import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSubmissionSchema } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { InsertContactSubmission } from "@shared/schema";

// Format phone number as user types
const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/\D/g, "");
  if (phoneNumber.length === 0) return "";
  if (phoneNumber.length <= 3) return `(${phoneNumber}`;
  if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  if (phoneNumber.length <= 10) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

// Validate email format
const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Capitalize first letter of each word
const capitalizeWords = (str: string) => str.replace(/\b\w/g, (char) => char.toUpperCase());

export default function ContactForm() {
  const { toast } = useToast();
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: undefined,
      message: "",
    },
  });

  // Check form validity whenever fields change
  useEffect(() => {
    const subscription = form.watch((value) => {
      const hasRequiredFields = !!(
        value.firstName?.trim() &&
        value.lastName?.trim() &&
        value.email?.trim() &&
        value.message?.trim()
      );
      const isEmailValid = value.email ? validateEmail(value.email) : false;
      setIsFormValid(hasRequiredFields && isEmailValid);
    });
    return () => subscription.unsubscribe();
  }, [form]);

  const onSubmit = async (data: InsertContactSubmission) => {
    // Additional validation before submission
    if (!data.firstName || !data.lastName || !data.email || !data.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(data.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/myznknaa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone ? formatPhoneNumber(data.phone) : "",
          company: data.company || "",
          inquiryType: data.inquiryType || "",
          message: data.message,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      toast({
        title: "Message sent!",
        description: "We'll be in touch with you shortly.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Request more information from AirFresh</h2>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Doe"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      placeholder="john.doe@company.com"
                      onBlur={(e) => {
                        field.onBlur();
                        if (e.target.value && !validateEmail(e.target.value)) {
                          form.setError("email", { type: "manual", message: "Please enter a valid email address" });
                        } else {
                          form.clearErrors("email");
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      {...field}
                      value={formatPhoneNumber(field.value || "")}
                      placeholder="(555) 123-4567"
                      onChange={(e) => {
                        const rawValue = e.target.value.replace(/\D/g, "");
                        if (rawValue.length <= 10) field.onChange(rawValue);
                      }}
                      maxLength={14}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Acme Corporation"
                      onChange={(e) => field.onChange(capitalizeWords(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="inquiryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Inquiry Type</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || undefined}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select one..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="quote">Request a Quote</SelectItem>
                      <SelectItem value="job">Job Inquiry</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Message <span className="text-red-500">*</span></FormLabel>
                  <FormControl>
                    <Textarea rows={4} placeholder="Tell us about your project..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="md:col-span-2">
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Sending..." : !isFormValid ? "Please fill in all required fields" : "Send Message"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
