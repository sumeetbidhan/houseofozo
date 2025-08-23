"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Heart, 
  Leaf, 
  Shield, 
  Star, 
  Award, 
  Globe, 
  Sparkles,
  ChevronUp,
  ShoppingBag,
  Search,
  Menu,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "HOJAI - Adbhuta (Wonder)",
      price: 180,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=100&h=120&fit=crop&crop=center",
      quantity: 1
    }
  ])

  const heroImages = [
    {
      src:"./images/02.jpg",
       alt: "Luxury perfume background 1"
     },
     {
      src:"./images/edited01.png",
       alt: "Luxury perfume background 2"
     },
     {
      src:"./images/01.jpg",
       alt: "Luxury perfume background 3"
     },
     {
      src:"./images/image01.JPG",
       alt: "Luxury perfume background 4"
     },
     // {
     //  src:"./images/image02.jpg",
     //   alt: "Luxury perfume background 5"
     // },
     {
      src:"./images/img.jpg",
       alt: "Luxury perfume background 6"
     },
     {
      src:"./images/img2.jpg",
       alt: "Luxury perfume background 7"
     }
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroImages.length])

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen bg-white">
      <Header cartItems={cartItems} onCartClick={() => setIsCartOpen(true)} />

      {/* Hero Section with Slideshow */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 pt-20">
        {/* Slideshow Background */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#847a69]/50 via-[#847a69]/40 to-[#847a69]/50"></div>
          </div>
        ))}
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-heading font-heading text-white mb-6 italic tracking-wide">
            A gift from a memory returns,
            <br />
            It was always meant to find you
          </h1>
          <p className="text-body font-body text-white/90 mb-8 italic tracking-wide">
            A trace of the familiar. A touch of the unknown.
          </p>
          <Button size="lg" className="bg-[#ffda5a] hover:bg-[#ffda5a]/90 text-gray-900 px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-full shadow-xl border-2 border-[#ffda5a]/20 hover:border-[#ffda5a]/40 hover:scale-105">
            SHOP NOW
          </Button>
        </div>


      </section>

      {/* Announcement Bar */}
      <section className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-6 overflow-hidden">
        <div className="relative">
          {/* Marquee Container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of text */}
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg text-purple-800 font-medium">✨</span>
              <span className="text-xl text-purple-900 font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              <span className="text-lg text-purple-800 font-medium">🌸</span>
              <span className="text-lg text-purple-800 font-medium">✨</span>
              <span className="text-xl text-purple-900 font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              <span className="text-lg text-purple-800 font-medium">🌸</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg text-purple-800 font-medium">✨</span>
              <span className="text-xl text-purple-900 font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              <span className="text-lg text-purple-800 font-medium">🌸</span>
              <span className="text-lg text-purple-800 font-medium">✨</span>
              <span className="text-xl text-purple-900 font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              <span className="text-lg text-purple-800 font-medium">🌸</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-subheading font-subheading text-center text-violet-800 mb-16 italic tracking-wide">
            Explore our scented world
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* HOJAI - No.01 */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-64 h-72 mx-auto relative overflow-hidden bg-white">
                  <Image
                    src="/images/scent01.png"
                    alt="HOJAI Perfume"
                    fill
                    className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  />
                  {/* Hover Image - scent03.png */}
                  <Image
                    src="/images/scent03.png"
                    alt="HOJAI Perfume Hover"
                    fill
                    className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* ADD TO CART Button - Only visible on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                      className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 text-sm rounded-lg shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300"
                onClick={() => addToCart({
                  id: 1,
                  name: "HOJAI - Adbhuta (Wonder)",
                  price: 180,
                        image: "/images/scent01.png"
                })}
              >
                ADD TO CART
              </Button>
            </div>
                </div>
                </div>
              <h3 className="text-body font-subheading text-gray-900 mb-2">HOJAI</h3>
              <p className="text-body font-body text-gray-600 mb-2">Adbhuta (Wonder)</p>
              <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p>
              <div className="flex items-center justify-center mb-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
              </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-3">₹180</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Pink Pepper, Bergamot</p>
                <p><span className="font-medium">Heart:</span> Oud, Rose, Saffron</p>
                <p><span className="font-medium">Base:</span> Leather, Cedarwood, Amber</p>
              </div>
            </div>

            {/* MOTI - No.02 Bestseller */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-64 h-72 mx-auto relative overflow-hidden bg-white">
                  <Image
                    src="/images/scent02.png"
                    alt="MOTI Perfume"
                    fill
                    className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  />
                  {/* Hover Image - scent03.png */}
                  <Image
                    src="/images/scent03.png"
                    alt="MOTI Perfume Hover"
                    fill
                    className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* ADD TO CART Button - Only visible on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                      className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 text-sm rounded-lg shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300"
                onClick={() => addToCart({
                  id: 2,
                  name: "MOTI - Śṛṅgāra (Love & Desire)",
                  price: 180,
                        image: "/images/scent02.png"
                })}
              >
                ADD TO CART
              </Button>
            </div>
                </div>
                </div>
              <h3 className="text-body font-subheading text-gray-900 mb-2">MOTI</h3>
              <p className="text-body font-body text-gray-600 mb-2">Śṛṅgāra (Love & Desire)</p>
              <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p>
              <div className="flex items-center justify-center mb-3">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                  <span className="text-gray-400 text-sm">☆</span>
              </div>
                <span className="text-gray-600 text-xs ml-2">(4.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-3">₹180</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Pink Pepper, Bergamot, Lychee</p>
                <p><span className="font-medium">Heart:</span> Jasmine, Rose, Tuberose</p>
                <p><span className="font-medium">Base:</span> Vanilla, Tonka Bean, Patchouli, Amber</p>
              </div>
            </div>

            {/* NEEL - No.03 */}
            <div className="text-center group cursor-pointer">
              <div className="relative mb-6">
                <div className="w-64 h-72 mx-auto relative overflow-hidden bg-white">
                  <Image
                    src="/images/scent01.png"
                    alt="NEEL Perfume"
                    fill
                    className="object-contain opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Hover Image - scent03.png */}
                  <Image
                    src="/images/scent03.png"
                    alt="NEEL Perfume Hover"
                    fill
                    className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* ADD TO CART Button - Only visible on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button 
                      className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-2 text-sm rounded-lg shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300"
                onClick={() => addToCart({
                  id: 3,
                  name: "NEEL - Vīra (Courage)",
                  price: 180,
                        image: "/images/scent03.png"
                })}
              >
                ADD TO CART
              </Button>
                  </div>
                  
                  {/* BESTSELLER Tag - Positioned on top of the image */}
                  <div className="absolute top-1 right-2 bg-purple-400 text-white text-xs px-2 py-0 rounded z-10">
                    BESTSELLER
                  </div>
                </div>
              </div>
              <h3 className="text-body font-subheading text-gray-900 mb-2">NEEL</h3>
                              <p className="text-body font-body text-gray-600 mb-2">Vīra (Courage)</p>
                <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p>
              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-3">₹180</p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Bergamot, Black Pepper, Grapefruit</p>
                <p><span className="font-medium">Heart:</span> Lavender, Geranium, Aquatic Accord</p>
                <p><span className="font-medium">Base:</span> Ambroxan, Patchouli, Cedarwood</p>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg">
              VIEW ALL
            </Button>
          </div>
        </div>
      </section>

      {/* Second Marquee - Opposite Direction */}
      <section className="bg-gradient-to-l from-amber-50 via-amber-100 to-amber-50 py-6 overflow-hidden">
        <div className="relative">
          {/* Marquee Container - Right to Left */}
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {/* First set of text */}
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Information */}
      <section className="py-20 bg-gray-50">
          <div className="w-full">
            {/* Navarasa Collection Box */}
            <div className="bg-gray-50 rounded-2xl p-32 mb-20 relative overflow-hidden mx-1 sm:mx-2 lg:mx-3">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/background.png"
                alt="Navarasa Collection Background"
                fill
                className="object-contain opacity-40 scale-99"
              />
            </div>
            
            {/* Centered Content */}
            <div className="text-center relative z-10">
              {/* Centered Logo */}
              <div className="mb-1 mt-12">
                <Image
                  src="/images/logo02.png"
                  alt="House of Ozo Logo"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              
              {/* Text Content */}
              <h2 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide -mt-2">
                Navarasa Collection
              </h2>
              <h3 className="text-subheading font-subheading text-[#847a69] mb-8 italic tracking-wide">
                Nine Emotions. Five Fragrances. Infinite experience
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-body font-body text-gray-700 leading-relaxed mb-6 italic tracking-wide">
                  Capturing moments of love, wonder, courage, joy, and longing, the Navarasa Collection by House of Ozo is a sensory journey through the emotional landscape of India distilled into five fragrances.
                </p>
                <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                  Crafted with premium Indian raw materials, composed in layers that unfold like a story, holding the promise of belonging for the unbound spirit. A smoky oud that swirls mystery into a soft jasmine that blooms with you for all the adventures you brave, each creation invites you to step into a world where the best of you thrives, abundantly.
                </p>
              </div>
            </div>
          </div>
          
          {/* Royal Collection Header */}
          <div className="text-center mb-20">
            <h2 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide">
            Our Navarasa Collection
          </h2>
          </div>
          
          <div className="space-y-20">
            {/* HOJAI - Premium Layout */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-24 px-8 rounded-3xl shadow-xl border border-amber-100 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                <div>
                      <h3 className="text-heading font-heading text-amber-800 mb-3">HOJAI</h3>
                      <p className="text-body font-body text-amber-600 italic">Adbhuta (Wonder)</p>
                    </div>
                    
                    <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                      Hojai captures the essence of surprise and discovery—the moment when everything shifts, and something ordinary becomes extraordinary. Deep, smoky oud and amber blend with the warmth of saffron and pink pepper, evoking the thrill of finding beauty in unexpected places.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                        <h4 className="font-bold text-amber-800 text-sm mb-1 italic tracking-wide font-body">TOP</h4>
                        <p className="text-gray-600 text-xs">Pink Pepper<br/>Bergamot</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                        <h4 className="font-bold text-amber-800 text-sm mb-1 italic tracking-wide font-body">HEART</h4>
                        <p className="text-gray-600 text-xs">Oud, Rose<br/>Saffron</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                        <h4 className="font-bold text-amber-800 text-sm mb-1 italic tracking-wide font-body">BASE</h4>
                        <p className="text-gray-600 text-xs">Leather<br/>Cedarwood, Amber</p>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-2">
                      {['Saffron', 'Oud', 'Cedarwood', 'Amber'].map((material) => (
                        <span key={material} className="bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-medium">
                          {material}
                        </span>
                      ))}
                  </div>
                </div>
                
                  <div className="flex justify-center">
                    <div className="relative group">
                      <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                        <div className="relative w-full h-full">
                          {/* Elegant Border Frame */}
                          <div className="absolute inset-0 border border-amber-200 rounded-xl transition-all duration-500 group-hover:border-amber-400"></div>
                          <div className="absolute inset-2 border border-amber-300 rounded-lg transition-all duration-500 group-hover:border-amber-500"></div>
                          
                          {/* Corner Flourishes */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-amber-400 rounded-tl-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-amber-400 rounded-tr-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-amber-400 rounded-bl-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-amber-400 rounded-br-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                          <Image
                            src="/images/scent01.png"
                            alt="HOJAI Perfume"
                            fill
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MOTI - Premium Layout */}
            <div className="bg-gradient-to-br from-pink-50 via-white to-pink-50 py-24 px-8 rounded-3xl shadow-xl border border-pink-100 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="flex justify-center order-1 lg:order-1">
                    <div className="relative group">
                      <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                        <div className="relative w-full h-full">
                          {/* Elegant Border Frame */}
                          <div className="absolute inset-0 border border-pink-200 rounded-xl transition-all duration-500 group-hover:border-pink-400"></div>
                          <div className="absolute inset-2 border border-pink-300 rounded-lg transition-all duration-500 group-hover:border-pink-500"></div>
                          
                          {/* Corner Flourishes */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-pink-400 rounded-tl-lg transition-all duration-500 group-hover:border-pink-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-pink-400 rounded-tr-lg transition-all duration-500 group-hover:border-pink-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-pink-400 rounded-bl-lg transition-all duration-500 group-hover:border-pink-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-pink-400 rounded-br-lg transition-all duration-500 group-hover:border-pink-600"></div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-pink-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-pink-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-pink-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-pink-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-pink-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-pink-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-pink-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                          <Image
                            src="/images/scent02.png"
                            alt="MOTI Perfume"
                            fill
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                  </div>
                </div>
                
                  <div className="space-y-8 order-2 lg:order-2">
                <div>
                      <h3 className="text-heading font-heading text-pink-800 mb-3">MOTI</h3>
                      <p className="text-body font-body text-pink-600 italic">Śṛṅgāra (Love & Desire)</p>
                    </div>
                    
                    <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                      Moti captures the heart of desire—unexpected, alluring, and irresistible. Like the heady scents of a bustling Indian market, it draws you in with a blend of Indian rose and almond, subtly spiced with saffron. The creamy warmth of vanilla balances this intensity.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                        <h4 className="font-bold text-pink-800 text-sm mb-1 italic tracking-wide font-body">TOP</h4>
                        <p className="text-gray-600 text-xs">Pink Pepper<br/>Bergamot, Lychee</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                        <h4 className="font-bold text-pink-800 text-sm mb-1 italic tracking-wide font-body">HEART</h4>
                        <p className="text-gray-600 text-xs">Jasmine, Rose<br/>Tuberose</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                        <h4 className="font-bold text-pink-800 text-sm mb-1 italic tracking-wide font-body">BASE</h4>
                        <p className="text-gray-600 text-xs">Vanilla, Tonka<br/>Patchouli, Amber</p>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-2">
                      {['Jasmine', 'Rose', 'Vanilla', 'Amber'].map((material) => (
                        <span key={material} className="bg-pink-200 text-pink-900 px-3 py-1 rounded-full text-xs font-medium">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NEEL - Premium Layout */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24 px-8 rounded-3xl shadow-xl border border-blue-100 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                <div>
                      <h3 className="text-heading font-heading text-blue-800 mb-3">NEEL</h3>
                      <p className="text-body font-body text-blue-600 italic">Vīra (Courage)</p>
                    </div>
                    
                    <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                      Neel embodies the spirit of courage and adventure—the fearless explorer who ventures into the unknown. A fresh, aquatic opening with bergamot and black pepper leads to a heart of lavender and geranium, creating a sense of calm determination.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 text-sm mb-1 italic tracking-wide font-body">TOP</h4>
                        <p className="text-gray-600 text-xs">Bergamot<br/>Black Pepper, Grapefruit</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 text-sm mb-1 italic tracking-wide font-body">HEART</h4>
                        <p className="text-gray-600 text-xs">Lavender, Geranium<br/>Aquatic Accord</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-800 text-sm mb-1 italic tracking-wide font-body">BASE</h4>
                        <p className="text-gray-600 text-xs">Ambroxan<br/>Patchouli, Cedarwood</p>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-2">
                      {['Black Pepper', 'Lavender', 'Cedarwood', 'Ambroxan'].map((material) => (
                        <span key={material} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-xs font-medium">
                          {material}
                        </span>
                      ))}
                  </div>
                </div>
                
                  <div className="flex justify-center">
                    <div className="relative group">
                      <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                        <div className="relative w-full h-full">
                          {/* Elegant Border Frame */}
                          <div className="absolute inset-0 border border-blue-200 rounded-xl transition-all duration-500 group-hover:border-blue-400"></div>
                          <div className="absolute inset-2 border border-blue-300 rounded-lg transition-all duration-500 group-hover:border-blue-500"></div>
                          
                          {/* Corner Flourishes */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-blue-400 rounded-tl-lg transition-all duration-500 group-hover:border-blue-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-blue-400 rounded-tr-lg transition-all duration-500 group-hover:border-blue-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-blue-400 rounded-bl-lg transition-all duration-500 group-hover:border-blue-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-blue-400 rounded-br-lg transition-all duration-500 group-hover:border-blue-600"></div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-blue-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-blue-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-blue-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-blue-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-blue-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                          <Image
                            src="/images/scent01.png"
                            alt="NEEL Perfume"
                            fill
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BAAG - Premium Layout */}
            <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-24 px-8 rounded-3xl shadow-xl border border-green-100 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="flex justify-center order-1 lg:order-1">
                    <div className="relative group">
                      <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                        <div className="relative w-full h-full">
                          {/* Elegant Border Frame */}
                          <div className="absolute inset-0 border border-green-200 rounded-xl transition-all duration-500 group-hover:border-green-400"></div>
                          <div className="absolute inset-2 border border-green-300 rounded-lg transition-all duration-500 group-hover:border-green-500"></div>
                          
                          {/* Corner Flourishes */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-green-400 rounded-tl-lg transition-all duration-500 group-hover:border-green-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-green-400 rounded-tr-lg transition-all duration-500 group-hover:border-green-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-green-400 rounded-bl-lg transition-all duration-500 group-hover:border-green-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-green-400 rounded-br-lg transition-all duration-500 group-hover:border-green-600"></div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-green-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-green-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-green-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-green-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-green-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-green-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                          <Image
                            src="/images/scent01.png"
                            alt="BAAG Perfume"
                            fill
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                  </div>
                </div>
                
                  <div className="space-y-8 order-2 lg:order-2">
                <div>
                      <h3 className="text-heading font-heading text-green-800 mb-3">BAAG</h3>
                      <p className="text-body font-body text-green-600 italic">Śānta (Peace & Belonging)</p>
                    </div>
                    
                    <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                      Baag is a tribute to the family garden—a place of memories, love, and growth. Jasmine vines wrapped around old trellises, orange blossoms sweetening the air, and rich earth that holds the stories of generations. Bright notes of bergamot and jasmine reflect the freshness of a new morning, while patchouli and vanilla offer grounding comfort. Baag is the scent of home and heritage.
                    </p>
                  
                    <div className="grid grid-cols-3 gap-4">
                                              <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                          <h4 className="font-bold text-green-800 text-sm mb-1 italic tracking-wide font-body">TOP</h4>
                          <p className="text-gray-600 text-xs">Saffron, Mandarin<br/>Pink Pepper</p>
                    </div>
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                          <h4 className="font-bold text-green-800 text-sm mb-1 italic tracking-wide font-body">HEART</h4>
                          <p className="text-gray-600 text-xs">Jasmine, Tuberose<br/>Peony</p>
                    </div>
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                          <h4 className="font-bold text-green-800 text-sm mb-1 italic tracking-wide font-body">BASE</h4>
                          <p className="text-gray-600 text-xs">Musk, Vetiver<br/>Vanilla</p>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-2">
                      {['Saffron', 'Jasmine', 'Tuberose (Raat ki Raani)', 'Vetiver'].map((material) => (
                        <span key={material} className="bg-green-200 text-green-900 px-3 py-1 rounded-full text-xs font-medium">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RAAS - Premium Layout */}
            <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-24 px-8 rounded-3xl shadow-xl border border-orange-100 mb-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                <div>
                      <h3 className="text-heading font-heading text-orange-800 mb-3">RAAS</h3>
                      <p className="text-body font-body text-orange-600 italic">Hāsya (Joy)</p>
                    </div>
                    
                    <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
                    Raas is the embodiment of pure joy and celebration. Inspired by dance and togetherness, it opens with sparkling notes of bergamot and grapefruit, capturing the exhilaration of a festive moment. Lavender, amber, and musk provide grounding warmth, while tonka bean and vanilla add a sweet softness—reflecting the beauty of connection and shared happiness.
                  </p>
                  
                    <div className="grid grid-cols-3 gap-4">
                                              <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-orange-800 text-sm mb-1 italic tracking-wide font-body">TOP</h4>
                          <p className="text-gray-600 text-xs">Bergamot, Blackcurrant<br/>Mandarin</p>
                    </div>
                        <div className="text-center p-3 bg-white/70 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-orange-800 text-sm mb-1 italic tracking-wide font-body">HEART</h4>
                          <p className="text-gray-600 text-xs">Jasmine, Orange Blossom<br/>Orris</p>
                    </div>
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-orange-800 text-sm mb-1 italic tracking-wide font-body">BASE</h4>
                          <p className="text-gray-600 text-xs">Patchouli, Tonka Bean<br/>Amberwood</p>
                    </div>
                  </div>
                  
                    <div className="flex flex-wrap gap-2">
                      {['Amberwood', 'Patchouli', 'Jasmine'].map((material) => (
                        <span key={material} className="bg-orange-200 text-orange-900 px-3 py-1 rounded-full text-xs font-medium">
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="relative group">
                      <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                        <div className="relative w-full h-full">
                          {/* Elegant Border Frame */}
                          <div className="absolute inset-0 border border-orange-200 rounded-xl transition-all duration-500 group-hover:border-orange-400"></div>
                          <div className="absolute inset-2 border border-orange-300 rounded-lg transition-all duration-500 group-hover:border-orange-500"></div>
                          
                          {/* Corner Flourishes */}
                          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-orange-400 rounded-tl-lg transition-all duration-500 group-hover:border-orange-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-orange-400 rounded-tr-lg transition-all duration-500 group-hover:border-orange-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-orange-400 rounded-bl-lg transition-all duration-500 group-hover:border-orange-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-orange-400 rounded-br-lg transition-all duration-500 group-hover:border-orange-600"></div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-orange-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-orange-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-orange-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-orange-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-orange-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-orange-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-orange-500 rounded-full opacity-60 transition-all duration-500 group-hover:bg-orange-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                          <Image
                            src="/images/scent01.png"
                            alt="RAAS Perfume"
                            fill
                            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                          />
                </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Discovery Set Section */}
      <section className="py-24 bg-gray-50">
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch h-[600px]">
            {/* Left Section - Video (Full Left Side) */}
            <div className="w-full h-full relative overflow-hidden">
              <video
                src="/images/Sequence01.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
            
                        {/* Right Section - Text Content (Full Right Side) */}
            <div className="relative p-20 flex flex-col justify-center overflow-hidden" style={{backgroundColor: 'rgb(243, 232, 255)'}}>
              <div className="space-y-8">
                <div>
                                      <h2 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide">
                      The Discovery Set
                    </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-body font-body text-gray-900 leading-relaxed italic tracking-wide">
                    From the quiet hills of Nahan to the restless lights of New York, this curated set of five perfumes captures the spirit of India's landscapes and emotions- carried across oceans to find their place in the heart of the city. Each 10 ml vial holds a chapter of the journey-Hojai, Moti, Neel, Baag, and Raas.
                  </p>
                </div>
                
                <div className="pt-4">
                  <a href="/discovery" className="text-gray-900 font-medium text-lg hover:text-gray-700 transition-colors duration-300 flex items-center group">
                    <span className="italic tracking-wide font-body">Discover</span>
                    <svg 
                      className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 animate-pulse" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-subheading font-subheading text-center text-gray-900 mb-16">
            Our Product Promise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Cruelty Free</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Made in India</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Natural Oils</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Paraben Free</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">IFRA Compliant</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide">
              Testimonials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Linda Schuh Testimonial */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-200 shadow-lg">
                <Image
                  src="/images/01.jpg"
                  alt="Linda Schuh"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-body font-body text-gray-800 leading-relaxed mb-6 italic">
                "I love layering my perfumes using Fresh to create a unique scent. I discovered this through their blog - full of great tips!"
              </p>
              
              <h3 className="text-xl font-semibold text-violet-800">Linda Schuh</h3>
            </div>

            {/* Jane Fontanna Testimonial */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-200 shadow-lg">
                <Image
                  src="/images/01.jpg"
                  alt="Jane Fontanna"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-body font-body text-gray-800 leading-relaxed mb-6 italic">
                "Packaging design is beautiful. It makes the unboxing process memorable. Also, great to receive free samples with my order."
              </p>
              
              <h3 className="text-xl font-semibold text-violet-800">Jane Fontanna</h3>
            </div>

            {/* Celina Smith Testimonial */}
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 hover:shadow-3xl transition-all duration-500 hover:scale-105">
              <div className="w-28 h-28 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-200 shadow-lg">
                <Image
                  src="/images/01.jpg"
                  alt="Celina Smith"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-xl">★</span>
                  ))}
                </div>
              </div>
              
              <p className="text-body font-body text-gray-800 leading-relaxed mb-6 italic">
                "Service is professional and efficient. Thank you for your speedy replies! In love with the Mimosa collection."
              </p>
              
              <h3 className="text-xl font-semibold text-violet-800">Celina Smith</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-subheading font-subheading text-white mb-6">
            Newsletter
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Be the first to know about our biggest and best sales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="email@example.com"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </section>

      {/* Crafted with Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-subheading font-subheading text-gray-900 mb-6">
            Crafted with care since 2010
          </h2>
          <p className="text-body font-body text-gray-600">
            Immerse yourself in a world of timeless botanical scents.
          </p>
        </div>
      </section>

      <Footer />

      {/* Shopify-like Cart Sidebar */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={() => setIsCartOpen(false)}></div>
            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl">
                  {/* Cart Header */}
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Shopping cart</h2>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="ml-3 h-7 flex items-center"
                      >
                        <X className="h-6 w-6 text-gray-400 hover:text-gray-500" />
                      </button>
                    </div>

                    {/* Cart Items */}
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cartItems.map((item) => (
                            <li key={item.id} className="py-6 flex">
                              <div className="flex-shrink-0 w-24 h-24">
                                <Image
                                  src={item.image}
                                  alt={item.name}
                                  width={96}
                                  height={96}
                                  className="w-full h-full object-cover rounded-md"
                                />
                              </div>

                              <div className="ml-4 flex-1 flex flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item.name}</h3>
                                    <p className="ml-4">₹{item.price}</p>
                                  </div>
                                </div>
                                <div className="flex-1 flex items-end justify-between text-sm">
                                  <div className="flex items-center space-x-2">
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    >
                                      -
                                    </button>
                                    <span className="w-8 text-center">{item.quantity}</span>
                                    <button
                                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                      className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-purple-600 hover:text-purple-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Cart Footer */}
                  <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Subtotal</p>
                      <p>₹{cartTotal}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
                        Checkout
                      </Button>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                      <p>
                        or{' '}
                        <button
                          onClick={() => setIsCartOpen(false)}
                          className="text-purple-600 hover:text-purple-500"
                        >
                          Continue Shopping
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to top button */}
      <button className="fixed bottom-8 right-8 w-12 h-12 bg-amber-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-900 transition-colors">
        <ChevronUp className="h-6 w-6" />
      </button>
    </div>
  )
}
