"use client"

import {
  FileText,
  Shield,
  TreePine,
  Factory,
  Waves,
  Users,
  Package,
  Wrench,
  Truck,
  Building,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("environmental")

  const environmentalServices = [
    {
      icon: FileText,
      title: "Environmental Impact Assessment",
      description: "Comprehensive environmental assessments with cutting-edge analysis and regulatory compliance.",
      features: ["Advanced impact modeling", "Regulatory compliance", "Risk mitigation", "Stakeholder engagement"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Shield,
      title: "Regulatory Approvals",
      description: "Expert navigation through complex regulatory frameworks with strategic guidance.",
      features: ["Strategic planning", "Permit acquisition", "Compliance management", "Risk assessment"],
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: TreePine,
      title: "Environmental Planning",
      description: "Sustainable development planning balancing growth with environmental protection.",
      features: ["Sustainability planning", "Management systems", "Monitoring programs", "Long-term strategy"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Factory,
      title: "Industrial Services",
      description: "Specialized industrial environmental services with advanced monitoring capabilities.",
      features: ["Air quality monitoring", "Waste management", "Safety protocols", "Environmental audits"],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Waves,
      title: "Water & Hydrogeology",
      description: "Advanced water resource management and hydrogeological assessment services.",
      features: ["Water quality analysis", "Hydrogeological studies", "Aquatic assessments", "Resource optimization"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "Social Impact Assessment",
      description: "Comprehensive community impact evaluation with cultural and socio-economic analysis.",
      features: ["Community engagement", "Cultural assessments", "Economic analysis", "Stakeholder consultation"],
      color: "from-purple-500 to-pink-600",
    },
  ]

  const supplyServices = [
    {
      icon: Package,
      title: "Premium Industrial Supplies",
      description: "High-quality industrial equipment and materials with technical excellence.",
      features: ["Quality equipment", "Technical support", "Bulk solutions", "Warranty coverage"],
      color: "from-gray-500 to-slate-600",
    },
    {
      icon: Building,
      title: "Construction Materials",
      description: "Complete construction material solutions from foundation to finishing.",
      features: ["Premium materials", "Quality assurance", "Competitive pricing", "Timely delivery"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Wrench,
      title: "Maintenance Solutions",
      description: "Comprehensive maintenance tools and equipment for optimal facility operations.",
      features: ["Professional tools", "Safety equipment", "Consumables", "Technical guidance"],
      color: "from-red-500 to-rose-600",
    },
    {
      icon: Truck,
      title: "Logistics Excellence",
      description: "Efficient supply chain and logistics services with nationwide coverage.",
      features: ["Transportation", "Warehousing", "Inventory management", "Tracking systems"],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      description: "Complete electrical components and systems for commercial applications.",
      features: ["Advanced wiring", "Smart lighting", "Control systems", "Safety compliance"],
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Shield,
      title: "Safety Equipment",
      description: "Premium safety gear and equipment ensuring workplace safety compliance.",
      features: ["Protective equipment", "Safety systems", "Emergency solutions", "Training support"],
      color: "from-green-500 to-teal-600",
    },
  ]

  const currentServices = activeTab === "environmental" ? environmentalServices : supplyServices

  return (
    <section id="services" className="py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-2 sm:px-4 rounded-full mb-4 sm:mb-6">
            <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-primary font-semibold text-sm sm:text-base">Our Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            Premium Services
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Comprehensive environmental consulting and premium supplies with expertise across multiple disciplines to
            exceed your expectations.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="bg-card/80 backdrop-blur-sm p-1 sm:p-2 rounded-xl sm:rounded-2xl border border-border w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
              <button
                onClick={() => setActiveTab("environmental")}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "environmental"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Environmental Services
              </button>
              <button
                onClick={() => setActiveTab("supplies")}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                  activeTab === "supplies"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Premium Supplies
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {currentServices.map((service, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon with gradient background */}
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 sm:space-x-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="group/btn w-full bg-muted hover:bg-primary text-foreground hover:text-primary-foreground px-4 sm:px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Learn More</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3 sm:mb-4">
              Ready to Transform Your Project?
            </h3>
            <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
              Let our expert team provide you with innovative solutions tailored to your specific needs.
            </p>
            <button className="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
