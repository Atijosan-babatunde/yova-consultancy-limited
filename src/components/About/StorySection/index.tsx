import Image from "next/image";


export function StorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="max-w-4xl mx-auto px-4 py-12 text-[#0A3D62]">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-center mb-8">
              Our Story – <span className="text-[#0A3D62]">A Legacy of Innovation</span>
            </h2>

            {/* Content */}
            <div className="space-y-2 leading-relaxed text-lg">
              <p className="text-[16px]">
                At <span className="font-semibold">Yova Technologies Ltd</span>, we believe that business success begins with
                clarity. With over a decade of experience each, our founders bring deep expertise in
                <span className="font-medium"> financial services, consultancy, telecoms, and sales</span>.
                <br />
                <br />
                We are passionate about helping organizations transform by identifying business needs,
                defining clear requirements, and delivering solutions that drive measurable impact.
              </p>

              {/* Subsection */}
              <div>
                <h3 className="text-[20px] font-semibold mb-4">Our Approach</h3>
                <ul className="space-y-1 list-disc list-inside">
                  <li className="text-[14px]">
                    <span className="font-medium text-[14px]">Collaborative:</span> We work alongside your teams to ensure
                    stakeholder alignment.
                  </li>
                  <li className="text-[14px]">
                    <span className="font-medium text-[14px]">Practical:</span> We provide actionable insights, not just reports.
                  </li>
                  <li className="text-[14px]">
                    <span className="font-medium text-[14px]">Adaptable:</span> We tailor our services to your industry, challenges,
                    and goals.
                  </li>
                </ul>
              </div>

              {/* Closing */}
              <p className="text-[16px] mt-2">
                <span className="font semibold">Yova Technologies Ltd</span> is a registered UK company, committed to high
                standards of professionalism, compliance, and continuous improvement.
              </p>
            </div>

            {/* Optional Call-to-Action */}
            {/* <Button className="mt-8 bg-[#0A3D62] text-white px-6 py-3 rounded-2xl hover:bg-[#145DA0] transition">
    Learn More
  </Button> */}
          </div>


          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/about/aboutgroup.png"
                alt="Yova Technologies team collaborating in modern office"
                width={1200}
                height={800}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}