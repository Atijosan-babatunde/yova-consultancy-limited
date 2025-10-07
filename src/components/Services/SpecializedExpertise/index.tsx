import {
  BarChart3,
  Cloud,
  LineChart,
  Shield,
  Code,
  Server,
} from "lucide-react"

const expertiseAreas = [
  {
    icon: BarChart3,
    title: "Strategic Planning",
    description:
      "Developing robust strategies that align technology with business goals for sustained competitive advantage.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Leveraging cloud platforms to enhance scalability, reduce costs, and accelerate innovation for your enterprise.",
  },
  {
    icon: LineChart,
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights to drive informed decisions and optimize performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Implementing advanced security measures to protect your assets and ensure business continuity in a complex threat landscape.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description:
      "Designing and building bespoke software solutions tailored to your unique operational requirements and market demands.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    description:
      "Optimizing your IT infrastructure for maximum efficiency, reliability, and future readiness.",
  },
]

export function SpecializedExpertise() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0A3D62] mb-4">
            Specialized Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-8 text-left hover:shadow-lg transition-shadow duration-300"
              >
                <Icon className="w-10 h-10 text-[#F11706] mb-4" />
                <h3 className="text-xl font-semibold text-[#0A3D62] mb-4">
                  {area.title}
                </h3>
                <p className="text-[#0A3D62] leading-relaxed">
                  {area.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
