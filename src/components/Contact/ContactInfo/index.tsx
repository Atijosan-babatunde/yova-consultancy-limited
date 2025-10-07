import { Phone, Mail } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Reach Out Directly</h2>

      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <a href="tel:+16551234567" className="text-slate-900 hover:text-slate-700 font-medium">
              +1 (655) 123-4567
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-slate-700" />
          </div>
          <div>
            <a href="mailto:contact@yovatech.com" className="text-slate-900 hover:text-slate-700 font-medium">
              contact@yovatech.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
