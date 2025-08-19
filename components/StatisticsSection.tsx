"use client"

import { TrendingUp, Users, Globe, Award } from "lucide-react"
import { useEffect, useState } from "react"

const StatisticsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ projects: 0, clients: 0, countries: 0, years: 0 })

  const stats = [
    { icon: TrendingUp, label: "Successful Projects", value: 500, suffix: "+", color: "text-emerald-500" },
    { icon: Users, label: "Happy Clients", value: 250, suffix: "+", color: "text-blue-500" },
    { icon: Globe, label: "Countries Served", value: 15, suffix: "+", color: "text-purple-500" },
    { icon: Award, label: "Years Experience", value: 10, suffix: "+", color: "text-orange-500" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat, index) => {
            let current = 0
            const increment = stat.value / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setCounters((prev) => ({
                ...prev,
                [index === 0 ? "projects" : index === 1 ? "clients" : index === 2 ? "countries" : "years"]:
                  Math.floor(current),
              }))
            }, 40)
          })
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("statistics")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="statistics" className="py-16 sm:py-20 bg-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/20 to-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 sm:mb-4">
            Proven Track Record of
            <span className="text-primary"> Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Numbers that speak to our commitment to environmental excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group text-center transition-all duration-1000 delay-${index * 200} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="bg-card/60 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border hover:bg-card/80 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className={`${stat.color} mb-3 sm:mb-4 flex justify-center`}>
                  <div className="bg-current/10 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-2xl">
                    <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
                    {index === 0
                      ? counters.projects
                      : index === 1
                        ? counters.clients
                        : index === 2
                          ? counters.countries
                          : counters.years}
                    <span className="text-primary">{stat.suffix}</span>
                  </div>
                  <p className="text-muted-foreground font-medium text-xs sm:text-sm lg:text-base">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatisticsSection
