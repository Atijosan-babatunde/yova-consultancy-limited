import Image from "next/image"

const testimonials = [
  {
    quote:
      "Yova Technologies transformed our operational efficiency. Their insights and execution were exceptional, delivering tangible results far beyond our expectations.",
    name: "Eleanor Vasco",
    title: "CEO & Managing Partner",
    image: "/images/testimonial/testimonial1.jpg",
  },
  {
    quote:
      "The team at Yova provided invaluable guidance during our digital transformation. Their expertise and a complete process exceeded our expectations.",
    name: "Marcus Thorne",
    title: "CTO, Thorne Systems",
    image: "/images/testimonial/testimonial3.jpg",
  },
  {
    quote:
      "Their strategic approach to process optimization has significantly reduced our costs and improved our overall productivity. A truly impactful partnership.",
    name: "Sophia Rios",
    title: "Operations Director, Global Dynamics",
    image: "/images/testimonial/testimonial2.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#0A3D62] mb-4">What Our Clients Say</h2>
        <p className="text-[#0A3D62] mb-12 max-w-2xl mx-auto">
          Trusted partnerships and proven results that speak for themselves.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              {/* <blockquote className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</blockquote> */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>

              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}