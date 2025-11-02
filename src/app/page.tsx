
import AboutSection from "@/components/AboutSection";
import CoreServices from "@/components/CoreServices";
import { CTASection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import HeroBanner from "@/components/Hero";
// import { IndustriesSection } from "@/components/IndustriesSection";  
import Navbar from "@/components/Navbar";
import { TestimonialsSection } from "@/components/TestimonialsSections";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-16 font-sans min-h-screen flex flex-col">
        <HeroBanner />
        <AboutSection/>
        <CoreServices/>
        {/* <IndustriesSection/> */}
        <TestimonialsSection/>
        <CTASection/>
        <Footer/>
      </main>
    </>
  )
}