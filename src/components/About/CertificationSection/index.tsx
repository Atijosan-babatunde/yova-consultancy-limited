import { Award, Shield, CheckCircle, Star } from "lucide-react"

const certifications = [
  {
    icon: Award,
    name: "ISO 27001",
    description: "Information Security Management",
  },
  {
    icon: Shield,
    name: "SOC 2 Type II",
    description: "Security & Compliance",
  },
  {
    icon: CheckCircle,
    name: "AWS Partner",
    description: "Advanced Consulting Partner",
  },
  {
    icon: Star,
    name: "Microsoft Gold",
    description: "Application Development",
  },
]

export function CertificationsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Certifications & Partnerships</h2>
          <p className="text-[#0A3D62] max-w-2xl mx-auto">
           Our commitment to excellence is recognized through leading industry certifications and strategic partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon
            return (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                  <IconComponent className="w-8 h-8 text-[#f1170c]" />
                </div>
                <h3 className="text-lg font-semibold text-[#0A3D62] mb-2">{cert.name}</h3>
                <p className="text-[#0A3D62] text-sm">{cert.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
