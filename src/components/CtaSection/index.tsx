// import { Button } from "../Ui/button";


// export function CTASection() {
//   return (
//     <section className="py-10 px-4 bg-[#0A3D62]">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
//         <p className="text-white mb-8 max-w-2xl mx-auto">
//           Partner with Yova Technologies Ltd to unlock your full potential and achieve your strategic goals.
//         </p>

//         <Button variant="blue" size="xl">
//           Schedule a Consultation
//         </Button>
//       </div>
//     </section>
//   )
// }


import Link from "next/link"
import { Button } from "../Ui/button"

export function CTASection() {
  return (
    <section className="py-10 px-4 bg-[#0A3D62]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto">
          Partner with Yova Technologies Ltd to unlock your full potential and achieve your strategic goals.
        </p>

        {/* ✅ Use Link to navigate */}
        <Link href="/contact">
          <Button variant="blue" size="xl">
            Schedule a Consultation
          </Button>
        </Link>
      </div>
    </section>
  )
}