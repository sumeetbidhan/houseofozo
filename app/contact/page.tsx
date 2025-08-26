"use client"

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/01.jpg"
            alt="House of Ozo Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-[60px] font-bold mb-6 text-white" style={{fontFamily: 'Cormorant Garamond'}}>
            Get in Touch
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any questions, collaborations, or just to say hello.
          </p>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-[48px] font-bold mb-6" style={{fontFamily: 'Cormorant Garamond'}}>
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Connect with us at our flagship store or reach out through any of our channels.
                </p>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#ffaa45] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Blossoms Aroma Private Limited<br />
                      E-191, Sector 63 Rd, E Block<br />
                      Sector 63, Noida, Hazratpur Wajidpur<br />
                      Uttar Pradesh 201309, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#ffaa45] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#ffaa45] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">hello@houseofozo.com</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-[#ffaa45] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Store Hours</h3>
                    <p className="text-gray-600">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 12:00 PM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzQ2LjAiTiA3N8KwMzcnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blossoms Aroma Private Limited Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[48px] font-bold mb-6" style={{fontFamily: 'Cormorant Garamond'}}>
              Send us a Message
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have a question or want to collaborate? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffaa45] focus:border-[#ffaa45] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffaa45] focus:border-[#ffaa45] transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffaa45] focus:border-[#ffaa45] transition-colors"
                placeholder="What is this regarding?"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffaa45] focus:border-[#ffaa45] transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#ffaa45] hover:bg-[#ffaa45]/90 text-black px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[48px] font-bold mb-6" style={{fontFamily: 'Cormorant Garamond'}}>
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover why fragrance enthusiasts around the world choose House of Ozo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/scent01.png"
                  alt="MOTI Fragrance"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "The Navarasa Collection is absolutely divine. Each fragrance tells a story and transports me to different emotions. House of Ozo has created something truly magical."
              </p>
              <h4 className="font-semibold text-gray-900 mb-1">Sarah Mitchell</h4>
              <p className="text-sm text-gray-600">Fragrance Enthusiast, New York</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/scent02.png"
                  alt="HOJAI Fragrance"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "I've been collecting perfumes for years, but nothing compares to the craftsmanship and authenticity of House of Ozo. The Discovery Set is a perfect introduction."
              </p>
              <h4 className="font-semibold text-gray-900 mb-1">Rajesh Kumar</h4>
              <p className="text-sm text-gray-600">Perfume Collector, Mumbai</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/scent03.png"
                  alt="NEEL Fragrance"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "The attention to detail in every bottle is remarkable. House of Ozo has managed to capture the essence of Indian heritage while creating modern, wearable fragrances."
              </p>
              <h4 className="font-semibold text-gray-900 mb-1">Emma Thompson</h4>
              <p className="text-sm text-gray-600">Luxury Retailer, London</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
