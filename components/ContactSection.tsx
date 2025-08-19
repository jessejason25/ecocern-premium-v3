"use client"

import type React from "react"

import { MapPin, Phone, Mail, Clock, Send, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 py-2 sm:px-4 rounded-full mb-4 sm:mb-6">
            <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <span className="text-primary font-semibold text-sm sm:text-base">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            Start Your Project
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to transform your environmental challenges into opportunities? Our expert team is here to provide
            innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 sm:mb-8">Let's Connect</h3>
              <div className="space-y-6 sm:space-y-8">
                <div className="group flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground text-base sm:text-lg mb-1 sm:mb-2">
                      Headquarters
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Nairobi, Kenya
                      <br />
                      P.O. Box 12345-00100
                      <br />
                      Westlands, Nairobi
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground text-base sm:text-lg mb-1 sm:mb-2">
                      Phone
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      +254 726 342 189
                      <br />
                      +254 726 342 189
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground text-base sm:text-lg mb-1 sm:mb-2">
                      Email
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      info@ecocernhubconsultancy.co.ke
                      <br />
                      projects@ecocernhubconsultancy.co.ke
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 bg-card/50 rounded-xl sm:rounded-2xl border border-border hover:bg-card/80 transition-all duration-300">
                  <div className="bg-primary/10 p-3 sm:p-4 rounded-lg sm:rounded-xl group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-foreground text-base sm:text-lg mb-1 sm:mb-2">
                      Business Hours
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl sm:rounded-3xl border border-border p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground">Global Reach</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h5 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">East Africa</h5>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Kenya</li>
                    <li>• Tanzania</li>
                    <li>• Uganda</li>
                    <li>• Rwanda</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">International</h5>
                  <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                    <li>• Sub-Saharan Africa</li>
                    <li>• Americas</li>
                    <li>• Asia Pacific</li>
                    <li>• Europe</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-card/80 backdrop-blur-sm shadow-2xl border border-border rounded-2xl sm:rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-6 sm:mb-8">
                Send us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john.doe@example.com"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 123 456 789"
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="eia">Environmental Impact Assessment</option>
                    <option value="regulatory">Regulatory Approvals</option>
                    <option value="planning">Environmental Planning</option>
                    <option value="industrial">Industrial Services</option>
                    <option value="water">Water & Hydrogeology</option>
                    <option value="social">Social Impact Assessment</option>
                    <option value="supplies">General Supplies</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2 sm:mb-3">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={5}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border bg-background text-foreground rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical transition-all duration-300 text-sm sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 font-semibold text-base sm:text-lg flex items-center justify-center gap-3 group"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
