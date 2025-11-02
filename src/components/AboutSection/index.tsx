import Link from "next/link";
import { Button } from "../Ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-16 bg-[#fafafb]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0A3D62] mb-3">
            About Yova Tech
          </h2>
          <p className="text-[#0A3D62] text-lg">
            Driving innovation and excellence through expert IT and business consultancy tailored to your needs.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left Text Block */}
          <div>
            <h3 className="text-xl font-semibold text-[#0A3D62] mb-4">
              Our Mission: Driving Business Success Through Expert Business Analysis
            </h3>
            <p className="text-[#0A3D62] leading-relaxed mb-6">
              At Yova Technologies Ltd, we believe business success starts with clarity. With over a decade of experience each, our founders bring extensive expertise in financial services, consultancy, telecoms, and sales.<br />
              We are passionate about helping organizations transform by identifying business needs, defining clear requirements, and delivering solutions that drive measurable impact.<br />
              {/* Our approach is: <br />
              ● Collaborative: We work alongside your teams to ensure stakeholder alignment.<br />

              ● Practical: We provide actionable insights, not just reports.<br />

              ● Adaptable: We tailor our services to your industry, challenges, and goals.<br />

              Yova Technologies Ltd is a registered UK company, committed to high standards of professionalism, compliance, and continuous improvement. */}
            </p>
            <Button asChild variant="blue">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/images/about/aboutimg.jpg"
              alt="Yova Technologies consultants discussing"
              width={800} // 👈 any reasonable width
              height={600} // 👈 any reasonable height
              className="rounded-lg shadow-lg object-cover w-full h-72 sm:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
