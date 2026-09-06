import Hero from "@/components/Hero";
import InfiniteLogos from "@/components/InfiniteLogos";
import Services from "@/components/Services";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <InfiniteLogos />
      <Services />
      <PortfolioTeaser />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
