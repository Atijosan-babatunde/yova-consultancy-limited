import { Button } from "@/components/Ui/button";


export function StorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-[#0A3D62]  mb-6">Our Story - A Legacy of Innovation</h2>
            <div className="space-y-4 text-[#0A3D62]  leading-relaxed">
              <p>
                Founded with a vision to revolutionize the technology landscape, Yova Technologies Ltd has been at the
                forefront of digital transformation for over a decade. Our journey began with a simple yet powerful
                belief: technology should empower businesses to achieve their full potential.
              </p>
              <p>
                From our humble beginnings as a small startup to becoming a trusted partner for enterprises worldwide,
                we have consistently delivered cutting-edge solutions that drive growth and innovation. Our commitment
                to excellence has earned us recognition as industry leaders in software development, cloud solutions,
                and digital consulting.
              </p>
              <p>
                Today, we continue to push boundaries, embracing emerging technologies like AI, machine learning, and
                blockchain to create solutions that not only meet current needs but anticipate future challenges. Our
                story is one of continuous evolution, driven by our passion for technology and our dedication to client
                success.
              </p>
            </div>
            {/* <Button className="mt-6 px-6 py-2">Learn More</Button> */}
          </div>

          {/* Team Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <img
                 src="/images/about/aboutgroup.png"
                alt="Yova Technologies team collaborating in modern office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}