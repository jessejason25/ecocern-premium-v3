"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const PartnersSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  const partners = [
    {
      name: "UN Environment Programme",
      logo: "/un-environment-logo.png",
      category: "International Organizations",
    },
    {
      name: "Kenya Wildlife Service",
      logo: "/kenya-wildlife-service-logo.png",
      category: "Government Agencies",
    },
    {
      name: "World Bank Group",
      logo: "/world-bank-logo.png",
      category: "Financial Institutions",
    },
    {
      name: "African Development Bank",
      logo: "/african-development-bank-logo.png",
      category: "Development Partners",
    },
    {
      name: "USAID",
      logo: "/generic-aid-logo.png",
      category: "Development Agencies",
    },
    {
      name: "GIZ Germany",
      logo: "/giz-germany-logo.png",
      category: "International Cooperation",
    },
    {
      name: "NEMA Kenya",
      logo: "/placeholder.svg?height=60&width=120",
      category: "Regulatory Bodies",
    },
    {
      name: "East African Community",
      logo: "/placeholder.svg?height=60&width=120",
      category: "Regional Organizations",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("partners")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="partners" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Partners</span>
            <div className="w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Trusted by
            <span className="text-primary"> Leading Organizations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We collaborate with prestigious international organizations, government agencies, and development partners
            to deliver exceptional environmental solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card/80 hover:shadow-lg transition-all duration-500 hover:scale-105 flex items-center justify-center ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-3">
                <div className="relative">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="mx-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium text-foreground">{partner.name}</p>
                  <p className="text-xs text-muted-foreground">{partner.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Strategic Partnerships</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-primary">15+</h3>
              <p className="text-muted-foreground">Countries Collaboration</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-primary">100%</h3>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
