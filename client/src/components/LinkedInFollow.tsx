interface LinkedInFollowProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function LinkedInFollow({ 
  size = 'medium',
  className = ''
}: LinkedInFollowProps) {
  const getSizeClasses = () => {
    switch(size) {
      case 'small': return 'px-3 py-1.5 text-sm';
      case 'large': return 'px-6 py-3 text-lg';
      default: return 'px-4 py-2';
    }
  };

  return (
    <div className={`linkedin-follow-button ${className}`} data-testid="linkedin-follow-button">
      <a 
        href="https://www.linkedin.com/company/airfresh-marketing"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center ${getSizeClasses()} bg-[#0077b5] text-white rounded hover:bg-[#005885] transition-colors font-medium`}
        data-testid="linkedin-follow-link"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        Follow us on LinkedIn
      </a>
    </div>
  );
}