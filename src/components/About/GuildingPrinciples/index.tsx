import { Shield, Lightbulb, Users, Award } from "lucide-react"

const principles = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Operating with unwavering honesty and transparency in all client engagements and internal practices.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly seeking and implementing cutting-edge solutions to deliver transformative results for clients.",
  },
  {
    icon: Users,
    title: "Client Centricity",
    description:
      "Prioritizing client needs and objectives, ensuring tailored strategies that drive their success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committing to the highest standards of quality and performance in every aspect of our consultancy.",
  },
]

export function GuidingPrinciples() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Our Guiding Principles</h2>
          <p className="text-[#0A3D62] max-w-2xl mx-auto">
            At Yova Technologies, our core values define who we are and how we operate. They are the foundation of our culture and our commitment to clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <div key={index} className="text-left">
                <div className="inline-flex items-left  w-16 h-16">
                  <IconComponent className="w-8 h-8 text-[#F1170c]" />
                </div>
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-3">{principle.title}</h3>
                <p className="text-[#0A3D62] leading-relaxed">{principle.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
