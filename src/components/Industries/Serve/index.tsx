import Image from "next/image"

const offerings = [
  {
    title: "Financial Services",
    description:
      "In the rapidly evolving financial landscape, Yova Technologies Ltd provides strategic guidance to banks, investment firms, and fintech innovators. We help optimize regulatory compliance, enhance digital transformation, and streamline operations, ensuring secure and efficient financial ecosystems.",
    image: "/images/industry/financialImg.png",
    imageAlt: "Business team collaborating on requirements gathering",
    reverse: false,
  },
  {
    title: "Telecommunications",
    description:
      "Navigating the complexities of global connectivity, we partner with telecommunication companies to drive innovation in network infrastructure, customer experience, and service delivery. Our expertise supports growth in an increasingly connected world.",
    image: "/images/industry/telecom.png",
    imageAlt: "Process optimization network diagram",
    reverse: true,
  },
  {
    title: "Sales & Marketing",
    description:
      "Yova empowers sales organizations to maximize revenue and market reach through advanced analytics, CRM optimization, and sales process re-engineering. We help build high-performing teams and scalable strategies that convert leads into loyal customers.",
    image: "/images/industry/salesmark.png",
    imageAlt: "Digital transformation workspace",
    reverse: false,
  },
  {
    title: "Technology & Software",
    description:
      "From startups to established enterprises, Yova Technologies Ltd accelerates technology development and adoption. We assist with product roadmap strategy, agile implementation, and cloud integration, ensuring our clients remain at the forefront of innovation.",
    image: "/images/industry/technology.png",
    imageAlt: "Change management process diagram",
    reverse: true,
  },
  {
    title: "Public Sector & Government",
    description:
      "Working with governmental bodies and public institutions, we deliver solutions that enhance operational efficiency, improve public services, and ensure compliance. Our focus is on fostering transparency and delivering tangible value to citizens.",
    image: "/images/industry/publicsec.png",
    imageAlt: "Tender support meeting",
    reverse: false,
  },
]

export function Serve() {
  return (
    <section className="py-16 lg:py-24 bg-[#fff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A3D62] mb-4">Our Core Offerings</h2>
        </div> */}

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