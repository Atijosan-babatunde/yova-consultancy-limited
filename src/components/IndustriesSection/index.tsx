import { DollarSign, Phone, ShoppingCart, Settings, Building } from "lucide-react"

const industries = [
  {
    name: "Finance",
    icon: DollarSign,
  },
  {
    name: "Telecommunications",
    icon: Phone,
  },
  {
    name: "Sales",
    icon: ShoppingCart,
  },
  {
    name: "Technology",
    icon: Settings,
  },
  {
    name: "Public Sector",
    icon: Building,
  },
  {
    name: "Charity | Non-Profit",
    icon: Building,
  },
]

export function IndustriesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">Industries We Serve</h2>
        <p className="text-[#0A3D62] mb-12 max-w-2xl mx-auto">
          Deep industry expertise to address the unique challenges and opportunities within your sector.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-x-2 gap-y-10">
          {industries.map((industry) => {
            const IconComponent = industry.icon
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 flex items-center justify-center mb-3">
                  <IconComponent className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{industry.name}</h3>
                <a
                  href="/industries"
                  className="text-[#f1170c] hover:text-[#ee4037] text-sm font-medium cursor-pointer"
                >
                  View Solutions
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}