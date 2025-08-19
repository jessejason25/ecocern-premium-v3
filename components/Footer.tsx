import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight, Leaf } from "lucide-react"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                <Image
                  className="relative h-8 w-8 sm:h-10 sm:w-10"
                  src="/placeholder-6e3kc.png"
                  alt="Ecocern Hub Logo"
                  width={40}
                  height={40}
                  priority
                />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-serif font-bold">Ecocern Hub</span>
                <div className="text-xs text-primary-foreground/70 font-medium tracking-wider">CONSULTANCY</div>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Leading environmental consultancy delivering cutting-edge solutions and premium supplies across Kenya,
              Africa, and worldwide.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <button className="bg-primary-foreground/10 hover:bg-primary/20 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110">
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="bg-primary-foreground/10 hover:bg-primary/20 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110">
                <Twitter size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button className="bg-primary-foreground/10 hover:bg-primary/20 p-2 sm:p-3 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-110">
                <Facebook size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Environmental Services */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold flex items-center space-x-2">
              <Leaf className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span>Environmental Services</span>
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Environmental Impact Assessment",
                "Regulatory Approvals",
                "Environmental Planning",
                "Industrial Services",
                "Water & Hydrogeology",
                "Social Impact Assessment",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* General Supplies */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold">Premium Supplies</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Industrial Supplies",
                "Construction Materials",
                "Maintenance Tools",
                "Logistics Solutions",
                "Electrical Systems",
                "Safety Equipment",
              ].map((supply) => (
                <li key={supply}>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group text-sm sm:text-base"
                  >
                    <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{supply}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-serif font-bold">Stay Updated</h3>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Subscribe to our newsletter for the latest environmental insights and premium supply updates.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 text-sm sm:text-base"
              />
              <button className="w-full bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl hover:bg-secondary transition-all duration-300 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 group">
                Subscribe
                <ArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-primary-foreground/20 mt-12 sm:mt-16 pt-8 sm:pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80 text-sm sm:text-base">
              <MapPin size={16} className="sm:w-[18px] sm:h-[18px] text-primary flex-shrink-0" />
              <span>Nairobi, Kenya | P.O. Box 12345-00100</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80 text-sm sm:text-base">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px] text-primary flex-shrink-0" />
              <span>+254 726 342 189</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3 text-primary-foreground/80 text-sm sm:text-base sm:col-span-2 lg:col-span-1">
              <Mail size={16} className="sm:w-[18px] sm:h-[18px] text-primary flex-shrink-0" />
              <span>info@ecocernhubconsultancy.co.ke</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-primary-foreground/60 text-xs sm:text-sm">
            © 2025 Ecocern Hub Ltd. All rights reserved. |
            <span className="mx-1 sm:mx-2 hover:text-primary cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>{" "}
            |
            <span className="mx-1 sm:mx-2 hover:text-primary cursor-pointer transition-colors duration-300">
              Terms of Service
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
