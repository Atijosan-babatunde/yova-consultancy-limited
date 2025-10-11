import Image from "next/image"

const leaders = [
  {
    name: "Wreford Lawrence",
    position: "Lead Business Analyst",
    description: "Alexander brings over two decades of strategic leadership in technology and business consulting, guiding Yova Technologies to market prominence.",
    image: "/images/about/ceo.jpg",
  },
  {
    name: "Keji L.",
    position: "Senior Business Analyst",
    description: "Dr. Chen is an innovator in AI and data science, driving our technological vision and ensuring our solutions are at the forefront of industry.",
    image: "/images/about/analyst.jpg",
  },
  // {
  //   name: "Marcus Thorne",
  //   position: "Chief Operations Officer",
  //   description: "With extensive experience in change management and process optimization, Marcus leads our client delivery teams to achieve exceptional outcomes.",
  //   image: "/images/about/selectiontwo.png",
  // },
]

export function LeadershipSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Meet Our Leadership</h2>
          <p className="text-[#0A3D62] max-w-2xl mx-auto">
            Our executive team combines decades of experience, expertise, and a shared passion for delivering exceptional client outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={`${leader.name} - ${leader.position}`}
                    width={1800}
                    height={1800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#0A3D62] mb-2">{leader.name}</h3>
              <p className="text-[#0A3D62] font-medium mb-4">{leader.position}</p>
              {/* <p className="text-[#0A3D62] leading-relaxed">{leader.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
