import { StorySection } from '@/components/About/StorySection'
import Navbar from '../../components/Navbar'
import { GuidingPrinciples } from '@/components/About/GuildingPrinciples'
import { LeadershipSection } from '@/components/About/LeadershipSection'
import { CertificationsSection } from '@/components/About/CertificationSection'
import { CTASection } from '@/components/CtaSection'
// import { Footer } from '@/components/Footer'

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main className="pt-14 w-full">
                <section className="bg-gray-50 py-16 w-full">
                    <div className="w-full px-6 sm:px-12 lg:px-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#0A3D62] mb-4">
                            About Yova Technologies Ltd
                        </h1>
                        <p className="text-xl text-[#0A3D62] max-w-4xl mx-auto leading-relaxed">
                            Driving innovation and delivering excellence in technology consultancy.
                            Discover our journey, values, and the team committed to your success.
                        </p>
                    </div>
                </section>
                <StorySection />
                <GuidingPrinciples />
                <LeadershipSection />
                <CertificationsSection />
            </main>
            <CTASection />
            {/* <Footer /> */}
        </>
    )
}
