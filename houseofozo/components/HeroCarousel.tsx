"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const heroSlides = [
  {
    id: 1,
    image: "/images/elegant-hero-1.png",
    title: "Fragrance.",
    subtitle: "Redefined.",
    description: "Experience the timeless elegance of royal Indian perfumery",
  },
  {
    id: 2,
    image: "/images/elegant-hero-2.png",
    title: "Heritage.",
    subtitle: "Reimagined.",
    description: "Crafted with precious ingredients from ancient India",
  },
  {
    id: 3,
    image: "/images/elegant-hero-3.png",
    title: "Luxury.",
    subtitle: "Refined.",
    description: "Where tradition meets contemporary sophistication",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/30 via-transparent to-stone-900/30"></div>
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-heading font-heading text-white mb-6 tracking-wide drop-shadow-lg">
            {heroSlides[currentSlide].title}
            <br />
            <span className="font-normal">{heroSlides[currentSlide].subtitle}</span>
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>

          <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {heroSlides[currentSlide].description}
          </p>

          <Button
            size="lg"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-12 py-4 text-lg font-light tracking-wide transition-all duration-300"
          >
            SHOP NOW
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border border-white transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
