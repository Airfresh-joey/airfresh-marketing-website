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
import BlogPost from "@/pages/BlogPost";
import BlogPostDetail from "@/pages/BlogPostDetail";
import BlogEditor from "@/pages/BlogEditor";
import CityPage from "@/pages/CityPage";
import CityServicePage from "@/pages/CityServicePage";
import CaseStudies from "@/pages/CaseStudies";
import CaseStudyDetail from "@/pages/CaseStudyDetail";
import EnhancedCaseStudies from "@/pages/EnhancedCaseStudies";
import EnhancedCaseStudyDetail from "@/pages/EnhancedCaseStudyDetail";
import BrandActivations from "@/pages/BrandActivations";
import CorporateEvents from "@/pages/CorporateEvents";
import Recruiting from "@/pages/Recruiting";
import TrainingPortal from "@/pages/TrainingPortal";
import NotFound from "@/pages/not-found";
import { Redirect } from "wouter";
import ExperientialMarketing from "@/pages/ExperientialMarketing";
import BrandStrategy from "@/pages/BrandStrategy";
import EventProduction from "@/pages/EventProduction";
import NotionBlog from "@/pages/NotionBlog";
import NotionBlogPost from "@/pages/NotionBlogPost";
import NotionGalleryPage from "@/pages/NotionGalleryPage";
import TargetingPage from "@/pages/TargetingPage";
import RepurposeDashboard from "@/pages/RepurposeDashboard";
import BacklinksDashboard from "@/pages/BacklinksDashboard";
import ReviewsDashboard from "@/pages/ReviewsDashboard";
import FeedbackForm from "@/pages/FeedbackForm";
import CaseStudyAdmin from "@/pages/CaseStudyAdmin";
import CaseStudiesReal from "@/pages/CaseStudiesReal";
import CaseStudyRealDetail from "@/pages/CaseStudyRealDetail";
import ContentCalendar from "@/pages/ContentCalendar";
import AdminDashboard from "@/pages/AdminDashboard";
import NotionCaseStudies from "@/pages/NotionCaseStudies";
import NotionCaseStudyDetail from "@/pages/NotionCaseStudyDetail";
import PortfolioEnhanced from "@/pages/PortfolioEnhanced";
import PortfolioCaseStudyDetail from "@/pages/PortfolioCaseStudyDetail";
import PremierProteinCaseStudy from "@/pages/PremierProteinCaseStudy";
import ScrollToTop from "@/components/ScrollToTop";
import BrandAmbassadors from "@/pages/services/BrandAmbassadors";
import StreetTeams from "@/pages/services/StreetTeams";
import ExperientialMarketingService from "@/pages/services/ExperientialMarketing";
import TalentDashboard from "@/pages/TalentDashboard";
import TalentCourseViewer from "@/pages/TalentCourseViewer";
import TalentAdmin from "@/pages/TalentAdmin";
import TrainingAdmin from "@/pages/TrainingAdmin";

// Events pages
import EventsDirectory from "@/pages/EventsDirectory";
import EventPage from "@/pages/EventPage";
import EventServicePage from "@/pages/EventServicePage";
import Olympics2028 from "@/pages/Olympics2028";

// Venues pages
import VenuesDirectory from "@/pages/VenuesDirectory";
import VenuePage from "@/pages/VenuePage";
import VenueServicePage from "@/pages/VenueServicePage";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <NavigationClean />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/brand-ambassadors" component={BrandAmbassadors} />
          <Route path="/services/street-teams" component={StreetTeams} />
          <Route path="/services/experiential-marketing" component={ExperientialMarketingService} />
          <Route path="/services/brand-strategy" component={BrandStrategy} />
          <Route path="/services/event-production" component={EventProduction} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/editor" component={BlogEditor} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/notion-blog" component={NotionBlog} />
          <Route path="/notion-blog/:slug" component={NotionBlogPost} />
          <Route path="/notion-gallery" component={NotionGalleryPage} />
          <Route path="/notion-case-studies" component={NotionCaseStudies} />
          <Route path="/notion-case-studies/:id" component={NotionCaseStudyDetail} />
          <Route path="/city/:cityName" component={CityPage} />
          <Route path="/city-services/:slug" component={CityServicePage} />
          <Route path="/portfolio" component={PortfolioEnhanced} />
          <Route path="/portfolio/premier-protein" component={PremierProteinCaseStudy} />
          <Route path="/portfolio/:id" component={PortfolioCaseStudyDetail} />
          <Route path="/case-studies" component={PortfolioEnhanced} />
          <Route path="/case-studies/:id" component={PortfolioCaseStudyDetail} />
          <Route path="/projects/case-studies">{() => <Redirect to="/case-studies" />}</Route>
          <Route path="/projects/case-studies/:id" component={EnhancedCaseStudyDetail} />
          <Route path="/projects/case-studies-original" component={CaseStudies} />
          <Route path="/projects/case-studies-original/:id" component={CaseStudyDetail} />
          <Route path="/projects/brand-activations" component={BrandActivations} />
          <Route path="/projects/corporate-events" component={CorporateEvents} />
          <Route path="/talent" component={Recruiting} />
          <Route path="/training" component={TrainingPortal} />
          <Route path="/training/admin" component={TrainingAdmin} />
          <Route path="/training/dashboard/:clientSlug" component={TalentDashboard} />
          <Route path="/training/course/:courseId" component={TalentCourseViewer} />
          <Route path="/careers" component={Recruiting} />
          <Route path="/careers/admin" component={TalentAdmin} />

          {/* Events & Conferences */}
          <Route path="/events" component={EventsDirectory} />
          <Route path="/events/olympics-2028-los-angeles" component={Olympics2028} />
          <Route path="/events/2028-olympics" component={Olympics2028} />
          <Route path="/events/:slug/:service" component={EventServicePage} />
          <Route path="/events/:slug" component={EventPage} />

          {/* Venues / Convention Centers */}
          <Route path="/venues" component={VenuesDirectory} />
          <Route path="/venues/:slug/:service" component={VenueServicePage} />
          <Route path="/venues/:slug" component={VenuePage} />

          {/* Admin Pages */}
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/admin/case-studies" component={CaseStudyAdmin} />
          
          {/* Marketing Tools */}
          <Route path="/repurpose" component={RepurposeDashboard} />
          <Route path="/backlinks" component={BacklinksDashboard} />
          <Route path="/reviews-dashboard" component={ReviewsDashboard} />
          <Route path="/feedback" component={FeedbackForm} />
          <Route path="/content-calendar" component={ContentCalendar} />
          
          {/* Targeting Pages - Verticals */}
          <Route path="/verticals/:slug" component={TargetingPage} />
          <Route path="/verticals/:slug/:city" component={TargetingPage} />
          
          {/* Targeting Pages - Conventions */}
          <Route path="/conventions/:slug" component={TargetingPage} />
          <Route path="/conventions/:slug/:city" component={TargetingPage} />
          
          {/* Note: Event routes handled above with EventPage component */}
          
          {/* Targeting Pages - Sports */}
          <Route path="/sports/:slug" component={TargetingPage} />
          <Route path="/sports/:slug/:city" component={TargetingPage} />
          
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
