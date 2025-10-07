import { Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#000] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="#" className="text-white hover:text-white text-sm">
              Quick Links
            </a>
            <a href="#" className="text-white hover:text-white text-sm">
              Legal
            </a>
            <a href="/contact" className="text-white hover:text-white text-sm">
              Contact
            </a>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
