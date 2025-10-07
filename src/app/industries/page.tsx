import { CTASection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { HeroIndustry } from "@/components/Industries/HeroIndustry";
import { Serve } from "@/components/Industries/Serve";
import Navbar from "@/components/Navbar";


export default function IndustryPage() {
    return (
        <>
            <Navbar />
            <main className="pt-14 w-full">
              <HeroIndustry/>
              <Serve/> 
            </main>
            <CTASection />
            <Footer />
        </>
    )
}
