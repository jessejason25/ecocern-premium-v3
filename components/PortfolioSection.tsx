"use client"

import { ExternalLink, Calendar, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Nairobi Green Belt Initiative",
      category: "environmental",
      location: "Nairobi, Kenya",
      year: "2024",
      description:
        "Comprehensive environmental impact assessment for urban reforestation project covering 500 hectares.",
      image: "/nairobi-urban-forest.png",
      tags: ["EIA", "Urban Planning", "Reforestation"],
    },
    {
      id: 2,
      title: "Industrial Water Treatment Facility",
      category: "industrial",
      location: "Mombasa, Kenya",
      year: "2023",
      description: "Design and implementation of advanced water treatment systems for manufacturing complex.",
      image: "/placeholder-j5ihe.png",
      tags: ["Water Treatment", "Industrial", "Compliance"],
    },
    {
      id: 3,
      title: "Solar Farm Environmental Assessment",
      category: "renewable",
      location: "Turkana, Kenya",
      year: "2024",
      description: "Environmental and social impact assessment for 100MW solar energy project.",
      image: "/placeholder-9i7q3.png",
      tags: ["Renewable Energy", "ESIA", "Solar"],
    },
    {
      id: 4,
      title: "Mining Operations Rehabilitation",
      category: "mining",
      location: "Western Kenya",
      year: "2023",
      description: "Post-mining land rehabilitation and ecosystem restoration project.",
      image: "/mining-rehabilitation-ecosystem.png",
      tags: ["Mining", "Rehabilitation", "Ecosystem"],
    },
    {
      id: 5,
      title: "Coastal Conservation Project",
      category: "environmental",
      location: "Kilifi, Kenya",
      year: "2024",
      description: "Marine ecosystem protection and community-based conservation initiative.",
      image: "/coastal-conservation-marine.png",
      tags: ["Marine", "Conservation", "Community"],
    },
    {
      id: 6,
      title: "Smart City Infrastructure",
      category: "urban",
      location: "Kisumu, Kenya",
      year: "2024",
      description: "Environmental planning for smart city development with sustainable infrastructure.",
      image: "/smart-city-sustainable-infrastructure.png",
      tags: ["Smart City", "Infrastructure", "Sustainability"],
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "environmental", label: "Environmental" },
    { id: "industrial", label: "Industrial" },
    { id: "renewable", label: "Renewable Energy" },
    { id: "mining", label: "Mining" },
    { id: "urban", label: "Urban Planning" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Our Portfolio
            </span>
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            Transformative Projects
            <span className="text-primary"> Across Africa</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Discover our portfolio of successful environmental consultancy projects that have made a lasting impact on
            communities and ecosystems.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/environmental-project.png"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {project.year}
                </div>
              </div>

              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} className="sm:w-[14px] sm:h-[14px]" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="group/btn flex items-center space-x-2 text-primary hover:text-secondary transition-colors duration-300 font-medium text-sm sm:text-base">
                  <span>View Project</span>
                  <ExternalLink
                    size={14}
                    className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button className="group bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base hover:bg-secondary transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center space-x-2 sm:space-x-3 mx-auto">
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
