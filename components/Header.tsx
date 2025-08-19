"use client"

import { Menu, Phone, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/254726342189", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+254726342189"
  }

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Insights", href: "#insights" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <Image
                className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110"
                src="/placeholder-6e3kc.png"
                alt="Ecocern Hub Logo"
                width={40}
                height={40}
              />
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-foreground">Ecocern Hub</span>
              <div className="text-xs text-muted-foreground font-medium tracking-wider">CONSULTANCY</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground hover:text-primary transition-all duration-300 font-medium py-2 relative"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                  )}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary" />
              <span className="font-medium">+254 726 342 189</span>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="relative overflow-hidden bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-muted transition-colors"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 bg-card/95 backdrop-blur-xl shadow-2xl rounded-2xl mt-2 border border-border overflow-hidden">
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-foreground hover:bg-muted hover:text-primary rounded-xl transition-all duration-300 font-medium"
                >
                  {item.name}
                </a>
              ))}

              <div className="border-t border-border pt-4 mt-6">
                <div
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 text-foreground mb-4 cursor-pointer hover:text-primary transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  <span className="font-medium">+254 726 342 189</span>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-secondary transition-all duration-300"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
