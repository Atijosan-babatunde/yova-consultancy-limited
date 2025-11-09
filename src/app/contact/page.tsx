import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
// import { GdprSection } from "@/components/Contact/GdprSection";
import { HeroContact } from "@/components/Contact/HeroContact";
// import { Footer } from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="pt-14 w-full">
                <HeroContact />
                {/* Contact Section */}
                <section className="py-16 px-4 bg-[#fff]">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Contact Form */}
                            <ContactForm />

                            {/* Right Column - Contact Info & GDPR */}
                            <div className="space-y-8">
                                <ContactInfo />
                                {/* <GdprSection /> */}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}
