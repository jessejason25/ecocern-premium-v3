"use client"

import { Users, Target, Award, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { useEffect, useState } from "react"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Target,
      title: "Precision Excellence",
      description: "Delivering accurate, data-driven environmental solutions with meticulous attention to detail.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Creating sustainable environmental solutions that benefit communities across Kenya, Africa, and beyond.",
    },
    {
      icon: Award,
      title: "Industry Leadership",
      description: "Setting new standards in environmental consultancy through innovation and expertise.",
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "Working closely with clients, communities, and stakeholders to achieve shared environmental goals.",
    },
  ]

  const achievements = [
    "ISO 14001 Environmental Management Certified",
    "Over 500+ Successful Environmental Assessments",
    "Regulatory Compliance Rate of 99.8%",
    "Partnerships with Leading International Organizations",
    "Award-Winning Sustainability Projects",
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-0.5 bg-primary"></div>
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">About Ecocern Hub</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
                Pioneering
                <span className="text-primary"> Environmental Excellence</span>
                <br />
                Since 2015
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are Kenya's premier environmental consultancy, combining cutting-edge expertise with innovative
                solutions to create a sustainable future. Our comprehensive approach integrates environmental
                stewardship with business excellence.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-foreground">Our Achievements</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button className="group flex items-center space-x-3 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
              <span>Learn More About Us</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

          {/* Values Grid */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-card/60 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card/80 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-3 rounded-xl w-fit group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-foreground mb-2">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
