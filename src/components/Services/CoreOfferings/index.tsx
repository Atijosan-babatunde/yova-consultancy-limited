import Image from "next/image"

const offerings = [
  {
    title: "Business Requirements Gathering",
    description:
      "We work closely with your stakeholders to meticulously identify, document, and analyze business needs, translating them into clear, actionable requirements for successful project outcomes. This foundational step ensures every solution truly addresses your core challenges.",
    image: "/images/services/serviceone.jpg",
    imageAlt: "Business team collaborating on requirements gathering",
    reverse: false,
  },
  {
    title: "Process Optimization",
    description:
      "Our experts evaluate your current operational workflows to identify inefficiencies and bottlenecks. We then design and implement streamlined processes that reduce waste, improve productivity, and enhance overall organizational effectiveness.",
    image: "/images/services/servicetwo.jpg",
    imageAlt: "Process optimization network diagram",
    reverse: true,
  },
  {
    title: "Digital Transformation Support",
    description:
      "Guiding your organization through the adoption of new digital technologies and methodologies. We ensure a seamless transition that leverages innovation to create new value, improve customer experiences, and foster business agility.",
    image: "/images/services/servicefour.jpg",
    imageAlt: "Digital transformation workspace",
    reverse: false,
  },
  {
    title: "Change Management",
    description:
      "Facilitating smooth transitions during periods of significant organizational change. Our approach minimizes disruption, fosters employee buy-in, and ensures new initiatives are successfully integrated and sustained within your company culture.",
    image: "/images/services/servicefive.png",
    imageAlt: "Change management process diagram",
    reverse: true,
  },
  {
    title: "Tender Support",
    description:
      "Providing expert assistance throughout the tender process, from initial bid strategy and proposal writing to submission and negotiation. We help you craft compelling responses that maximize your chances of securing valuable contracts.",
    image: "/images/services/servicehelp.jpg",
    imageAlt: "Tender support meeting",
    reverse: false,
  },
   {
    title: "CV Review Service",
    description:
      "Our CV review and interview coaching service is designed to help clients craft powerful, confident, and career-ready profiles that stand out to employers. We go beyond surface-level edits to ensure you understand, own, and articulate your professional story with clarity and confidence.",
    image: "/images/services/cv-review.jpg",
    imageAlt: "cv review",
    reverse: true,
  },
]

export function CoreOfferings() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A3D62] mb-4">Our Core Offerings</h2>
        </div>

        <div className="space-y-24">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${offering.reverse ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={offering.image || "/placeholder.svg"}
                    alt={offering.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#0A3D62]">{offering.title}</h3>
                <p className="text-lg text-[#0A3D62] leading-relaxed">{offering.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}