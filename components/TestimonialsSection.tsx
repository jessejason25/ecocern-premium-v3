"use client"

import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Kimani",
      position: "Environmental Director",
      company: "Kenya Wildlife Service",
      image: "/professional-african-woman.png",
      rating: 5,
      text: "Ecocern Hub's expertise in environmental impact assessment was instrumental in our conservation project. Their thorough approach and innovative solutions exceeded our expectations. The team's dedication to environmental excellence is truly remarkable.",
    },
    {
      id: 2,
      name: "James Ochieng",
      position: "Project Manager",
      company: "East African Development Bank",
      image: "/professional-african-man.png",
      rating: 5,
      text: "Working with Ecocern Hub on our renewable energy project was exceptional. Their comprehensive environmental planning and regulatory expertise ensured smooth project implementation. I highly recommend their services.",
    },
    {
      id: 3,
      name: "Maria Santos",
      position: "Sustainability Officer",
      company: "UN Environment Programme",
      image: "/professional-woman-international.png",
      rating: 5,
      text: "Ecocern Hub consistently delivers high-quality environmental consultancy services. Their team's professionalism, attention to detail, and commitment to sustainability make them our preferred partner for environmental projects across Africa.",
    },
    {
      id: 4,
      name: "David Mwangi",
      position: "CEO",
      company: "Green Energy Solutions Ltd",
      image: "/professional-man-business.png",
      rating: 5,
      text: "The environmental compliance support provided by Ecocern Hub was outstanding. They helped us navigate complex regulatory requirements while maintaining our project timeline. Their expertise is unmatched in the industry.",
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

    const element = document.getElementById("testimonials")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-primary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-secondary/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
            <span className="text-primary font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Client Testimonials
            </span>
            <div className="w-8 sm:w-12 h-0.5 bg-primary"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            What Our Clients
            <span className="text-primary"> Say About Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Hear from industry leaders who have experienced the excellence of our environmental consultancy services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative">
            <div className="bg-card/60 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-2xl">
              <div className="flex justify-center mb-6 sm:mb-8">
                <Quote className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-primary/30" />
              </div>

              <div className="text-center space-y-6 sm:space-y-8">
                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed font-medium italic px-4 sm:px-0">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-primary/20 w-16 h-16 sm:w-20 sm:h-20"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="text-base sm:text-lg font-serif font-bold text-foreground">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary font-medium text-sm sm:text-base">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <ArrowLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 sm:p-3 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            >
              <ArrowRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
