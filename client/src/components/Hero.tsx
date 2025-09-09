import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mb-12 max-w-2xl mx-auto">
          <p className="text-base sm:text-lg mb-6 font-medium leading-relaxed">
            AIRFRESH IS A NATIONWIDE COMPANY THAT<br />
            CONNECTS BRANDS WITH THEIR CUSTOMERS<br />
            THROUGH UNFORGETTABLE EXPERIENCES
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
          Let's get people<br />
          experiencing <span className="italic font-serif text-yellow-300">your</span> brand.
        </h1>
      </div>
    </section>
  );
}
