import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NavigationClean from "@/components/NavigationClean";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPostDetail from "@/pages/BlogPostDetail";
import BlogEditor from "@/pages/BlogEditor";
import CityPage from "@/pages/CityPage";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import BrandActivations from "@/pages/BrandActivations";
import CorporateEvents from "@/pages/CorporateEvents";
import Talent from "@/pages/Talent";
import NotFound from "@/pages/not-found";
import { Redirect } from "wouter";
import ExperientialMarketing from "@/pages/ExperientialMarketing";
import BrandStrategy from "@/pages/BrandStrategy";
import EventProduction from "@/pages/EventProduction";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationClean />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/experiential-marketing" component={ExperientialMarketing} />
          <Route path="/services/brand-strategy" component={BrandStrategy} />
          <Route path="/services/event-production" component={EventProduction} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/editor" component={BlogEditor} />
          <Route path="/blog/:slug" component={BlogPostDetail} />
          <Route path="/city/:cityName" component={CityPage} />
          <Route path="/portfolio">{() => <Redirect to="/projects/case-studies" />}</Route>
          <Route path="/projects/case-studies" component={CaseStudies} />
          <Route path="/projects/case-studies/:id" component={CaseStudyDetail} />
          <Route path="/projects/brand-activations" component={BrandActivations} />
          <Route path="/projects/corporate-events" component={CorporateEvents} />
          <Route path="/talent" component={Talent} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <GoogleAnalytics />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
