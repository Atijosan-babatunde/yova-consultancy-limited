import Link from "next/link";
import { Button } from "../Ui/button";

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
              Our Mission: Delivering Unparalleled Value
            </h3>
            <p className="text-[#0A3D62] leading-relaxed mb-6">
              At Yova Tech, we are committed to helping organizations navigate
              complex technological landscapes and achieve their strategic objectives. <br />
              Our team of seasoned consultants brings deep industry expertise and a client-centric
              approach to every project, ensuring bespoke solutions that drive tangible results.
              We believe in building lasting partnerships founded on trust, transparency, and a shared vision for success.
            </p>
            <Button asChild variant="blue">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/images/about/aboutimg.jpg"
              alt="Yova Technologies consultants discussing"
              className="rounded-lg shadow-lg object-cover w-full h-72 sm:h-96"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
