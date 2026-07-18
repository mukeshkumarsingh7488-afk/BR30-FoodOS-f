import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import TrustedBusinesses from "../../components/landing/TrustedBusinesses";
import BusinessTypes from "../../components/landing/BusinessTypes";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Modules from "../../components/landing/Modules";
import WhyChoose from "../../components/landing/WhyChoose";
import BusinessSuite from "../../components/landing/BusinessSuite";
import AIAutomation from "../../components/landing/AIAutomation";
import Integrations from "../../components/landing/Integrations";
import AnalyticsDashboard from "../../components/landing/AnalyticsDashboard";
import Testimonials from "../../components/landing/Testimonials";
import Pricing from "../../components/landing/Pricing";
import FAQ from "../../components/landing/FAQ";
import FinalCTA from "../../components/landing/FinalCTA";
import Footer from "../../components/landing/Footer";

export default function LandingPage() {
  return (
    <main className="foodos-page">
      <Navbar />
      <Hero />
      <TrustedBusinesses />
      <Features />
      <BusinessTypes />
      <Modules />
      <HowItWorks />
      <WhyChoose />
      <BusinessSuite />
      <AIAutomation />
      <Integrations />
      <AnalyticsDashboard />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
