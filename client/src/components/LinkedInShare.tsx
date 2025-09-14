import { Linkedin, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LinkedInShareProps {
  url?: string;
  title?: string;
  summary?: string;
  source?: string;
  variant?: 'button' | 'icon' | 'compact';
  className?: string;
}

export default function LinkedInShare({ 
  url,
  title = '',
  summary = '',
  source = 'AirFresh Marketing',
  variant = 'button',
  className = ''
}: LinkedInShareProps) {
  const shareUrl = url || window.location.href;
  
  const handleShare = () => {
    const linkedInUrl = new URL('https://www.linkedin.com/sharing/share-offsite/');
    linkedInUrl.searchParams.append('url', shareUrl);
    
    if (title) {
      linkedInUrl.searchParams.append('title', title);
    }
    if (summary) {
      linkedInUrl.searchParams.append('summary', summary);
    }
    if (source) {
      linkedInUrl.searchParams.append('source', source);
    }
    
    window.open(linkedInUrl.toString(), '_blank', 'width=600,height=600');
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleShare}
        className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${className}`}
        aria-label="Share on LinkedIn"
        data-testid="linkedin-share-icon"
      >
        <Linkedin className="h-5 w-5 text-[#0077b5]" />
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <button
        onClick={handleShare}
        className={`inline-flex items-center px-3 py-1.5 text-sm bg-[#0077b5] text-white rounded hover:bg-[#005885] transition-colors ${className}`}
        data-testid="linkedin-share-compact"
      >
        <Linkedin className="h-4 w-4 mr-1.5" />
        Share
      </button>
    );
  }

  return (
    <Button
      onClick={handleShare}
      variant="outline"
      className={`inline-flex items-center ${className}`}
      data-testid="linkedin-share-button"
    >
      <Linkedin className="h-4 w-4 mr-2 text-[#0077b5]" />
      Share on LinkedIn
    </Button>
  );
}