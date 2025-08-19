"use client"

import { ArrowRight, Shield, Globe, Award, Sparkles } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <Image
          className="w-full h-full object-cover scale-105"
          src="/mountain-forest-landscape.png"
          alt="Environmental consulting services"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "1s" }}>
        <div className="w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className={`flex items-center space-x-3 mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center space-x-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
              <Sparkles className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-primary font-semibold text-sm">Premium Environmental Solutions</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transforming
            <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Environmental Excellence
            </span>
            <span className="text-3xl md:text-4xl text-muted-foreground font-sans font-normal">with Innovation</span>
          </h1>

          {/* Description */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Leading environmental consultancy delivering cutting-edge solutions and premium supplies across Kenya,
            Africa, and worldwide. Where expertise meets sustainability.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 mb-16 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <button className="group relative overflow-hidden bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-3">
                Start Your Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
            <button className="group border-2 border-primary text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg">
              Explore Services
            </button>
          </div>

          {/* Key Features */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="group flex items-center space-x-4 bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-serif font-semibold text-foreground text-lg">Global Reach</p>
                <p className="text-muted-foreground">Kenya, Africa & Worldwide</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-serif font-semibold text-foreground text-lg">Expert Solutions</p>
                <p className="text-muted-foreground">Cutting-edge Innovation</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
              <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="font-serif font-semibold text-foreground text-lg">Compliance</p>
                <p className="text-muted-foreground">Regulatory Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
