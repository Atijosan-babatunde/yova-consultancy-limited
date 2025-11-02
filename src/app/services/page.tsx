import CoreServices from '@/components/CoreServices'
import Navbar from '../../components/Navbar'
import { CTASection } from '@/components/CtaSection'
import { Footer } from '@/components/Footer'
import { CoreOfferings } from '@/components/Services/CoreOfferings'
import { HeroSection } from '@/components/Services/HeroSection'

export default function ServicesPage() {
    return (
        <>
            <Navbar />
            <main className="pt-14 w-full">
              <HeroSection />
              <CoreServices/>
              <CoreOfferings/>
            </main>
            <CTASection />
            <Footer />
        </>
    )
}
