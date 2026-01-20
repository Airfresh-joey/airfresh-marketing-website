import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      category: "General",
      question: "What is experiential marketing and how does it differ from traditional advertising?",
      answer: "Experiential marketing creates immersive, interactive experiences that allow customers to directly engage with your brand through all five senses. Unlike traditional advertising that tells customers about your product, experiential marketing lets them experience it firsthand through brand activations, product sampling, live events, and pop-up experiences. This creates stronger emotional connections and more memorable brand interactions."
    },
    {
      category: "Services",
      question: "What types of experiential marketing services does AirFresh Marketing offer?",
      answer: "We offer comprehensive experiential marketing services including brand activations, product sampling campaigns, trade show marketing, corporate events, pop-up experiences, brand ambassador programs, event production, promotional campaigns, and customer engagement activations. Our full-service approach covers strategy, creative development, talent sourcing, logistics, and execution."
    },
    {
      category: "Coverage",
      question: "What cities and regions does AirFresh Marketing serve?",
      answer: "AirFresh Marketing provides nationwide coverage across 50+ major cities including Los Angeles, New York, Chicago, Miami, Denver, Atlanta, Austin, Seattle, Boston, and San Francisco. Our extensive network of 5,000+ brand ambassadors and local partnerships allows us to execute campaigns anywhere in the United States."
    },
    {
      category: "Talent",
      question: "How are your brand ambassadors selected and trained?",
      answer: "Our brand ambassadors undergo a rigorous selection process including background checks, interviews, and skills assessments. We maintain a network of 5,000+ verified professionals including event hosts, product specialists, and promotional staff. Each ambassador receives comprehensive training on your brand, products, and campaign objectives to ensure authentic representation."
    },
    {
      category: "Planning",
      question: "How far in advance should I book an experiential marketing campaign?",
      answer: "We recommend booking campaigns 6-8 weeks in advance for optimal planning and execution. However, we can accommodate rush projects with as little as 2-3 weeks notice depending on scope, location, and availability. Early booking allows for better talent selection, venue options, and creative development."
    },
    {
      category: "ROI",
      question: "How do you measure the success of experiential marketing campaigns?",
      answer: "We provide comprehensive reporting including attendance numbers, engagement metrics, lead generation, social media reach, brand awareness lift, and sales attribution. Our data-driven approach uses both quantitative metrics (foot traffic, conversions, surveys) and qualitative feedback (customer testimonials, brand sentiment) to demonstrate ROI."
    },
    {
      category: "Industries",
      question: "What industries does AirFresh Marketing work with?",
      answer: "We serve clients across all industries including consumer goods, technology, automotive, food & beverage, healthcare, finance, entertainment, retail, and B2B services. Our 20+ years of experience includes Fortune 500 companies, emerging brands, and local businesses of all sizes."
    },
    {
      category: "Budget",
      question: "What factors determine the cost of an experiential marketing campaign?",
      answer: "Campaign costs depend on factors including event duration, number of markets, talent requirements, creative complexity, venue costs, equipment needs, and production elements. We work with budgets from $10,000 to $1M+ and provide detailed proposals outlining all costs upfront with no hidden fees."
    },
    {
      category: "COVID",
      question: "How has AirFresh Marketing adapted to post-COVID experiential marketing?",
      answer: "We've developed comprehensive health and safety protocols while creating innovative hybrid experiences that combine in-person and digital elements. This includes virtual product demonstrations, socially distanced sampling, enhanced sanitation procedures, and contactless engagement technologies that maintain the personal touch of experiential marketing."
    }
  ];

  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  // Structured data for FAQ
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Frequently Asked Questions About Experiential Marketing
        </h1>
        <p className="text-gray-600">
          Get answers to common questions about experiential marketing services, 
          brand activations, and working with AirFresh Marketing.
        </p>
      </div>

      {categories.map(category => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-blue-600">
            {category} Questions
          </h2>
          <div className="space-y-3">
            {faqs
              .filter(faq => faq.category === category)
              .map((faq, index) => {
                const globalIndex = faqs.indexOf(faq);
                const isOpen = openItems.includes(globalIndex);
                
                return (
                  <Card key={globalIndex} className="border-gray-200">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full text-left p-6 hover:bg-gray-50 flex justify-between items-center"
                      >
                        <span className="font-medium pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })
            }
          </div>
        </div>
      ))}
    </div>
  );
}