'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Download, Mail, CheckCircle, Loader2 } from 'lucide-react';

interface ResourceEmailCaptureProps {
  resourceTitle: string;
  resourceType: 'guide' | 'checklist' | 'ebook';
  downloadUrl?: string;
  onSuccess?: () => void;
  variant?: 'default' | 'compact' | 'inline';
}

export default function ResourceEmailCapture({
  resourceTitle,
  resourceType,
  downloadUrl,
  onSuccess,
  variant = 'default'
}: ResourceEmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !firstName) {
      toast({
        title: "Please fill in required fields",
        description: "Email and first name are required",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/resource-download', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          company,
          resourceTitle,
          resourceType,
          downloadUrl,
          source: window.location.pathname
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Success!",
          description: "Check your email for the download link.",
        });
        onSuccess?.();
        
        // If direct download URL provided, trigger download
        if (downloadUrl) {
          window.open(downloadUrl, '_blank');
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">You're all set!</h3>
        <p className="text-green-700">
          We've sent the {resourceType} to your email. Check your inbox!
        </p>
        {downloadUrl && (
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => window.open(downloadUrl, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Again
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-base"
        />
        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="text-base"
        />
        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          ) : (
            <Download className="w-4 h-4 mr-2" />
          )}
          Get Free {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
        </Button>
      </form>
    );
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="flex-1"
        />
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1"
        />
        <Button 
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <Mail className="w-4 h-4 mr-2" />
              Send Me the {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
            </>
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
          <Download className="w-8 h-8 text-orange-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Get Your Free {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
        </h3>
        <p className="text-gray-600">
          Enter your details below and we'll send "{resourceTitle}" straight to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            placeholder="First name *"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="text-base"
          />
          <Input
            type="email"
            placeholder="Work email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="text-base"
          />
        </div>
        <Input
          type="text"
          placeholder="Company (optional)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="text-base"
        />
        <Button 
          type="submit" 
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Download Free {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}
            </>
          )}
        </Button>
        <p className="text-xs text-gray-500 text-center">
          By downloading, you agree to receive marketing emails. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
