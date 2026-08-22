import Hero from "@/components/Hero";
import InfiniteLogos from "@/components/InfiniteLogos";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
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
      <Portfolio />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
