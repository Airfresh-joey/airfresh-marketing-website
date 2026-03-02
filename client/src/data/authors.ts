export interface Author {
  id: string;
  slug: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  credentials: string[];
  experience: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const authors: Record<string, Author> = {
  "joey-kercher": {
    id: "joey-kercher",
    slug: "joey-kercher",
    name: "Joey Kercher",
    title: "Founder & CEO",
    bio: "Joey Kercher founded Air Fresh Marketing in 2012 with a vision to transform how brands connect with consumers at ground level. With over 12 years of hands-on experience in experiential marketing, Joey has led campaigns for Fortune 500 companies including Google, Microsoft, Adidas, and the NFL. His strategic approach combines data-driven insights with authentic human connection, resulting in campaigns that consistently exceed client expectations.",
    image: "/images/team/joey-kercher.jpg",
    credentials: [
      "12+ years in experiential marketing",
      "Led 5,000+ successful campaigns",
      "Built network of 20,000+ brand ambassadors",
      "Fortune 500 client partnerships"
    ],
    experience: "12+ years",
    socialLinks: {
      linkedin: "https://linkedin.com/in/joeykercher",
      email: "joey@airfreshmarketing.com"
    }
  }
};

export const getAuthorBySlug = (slug: string): Author | undefined => {
  return authors[slug];
};

export const getAuthorByName = (name: string): Author | undefined => {
  return Object.values(authors).find(author => author.name === name);
};

export const defaultAuthor = authors["joey-kercher"];
