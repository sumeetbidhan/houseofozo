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

  // FAQ state management
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [showAllFAQs, setShowAllFAQs] = useState(false)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const toggleShowAllFAQs = () => {
    setShowAllFAQs(!showAllFAQs)
  }

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
      {
       src:"./images/image02.jpg",
        alt: "Luxury perfume background 5"
      },
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
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden -mt-20 pt-20 pb-32">
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
          <h1 className="text-[50px] font-bold text-white mb-1 leading-tight tracking-tight" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em', letterSpacing: '-0.02em'}}>
            A gift from a memory returns,
            <br />
            It was always meant to find you
          </h1>
          <p className="text-body font-body text-white/80 mb-1 tracking-tight" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.07em', letterSpacing: '-0.01em'}}>
            A trace of the familiar. A touch of the unknown.
          </p>
          <Button size="sm" className="bg-[#ffaa45] hover:bg-[#ffaa45]/90 text-gray-900 px-3 py-2 text-base font-medium  transition-all duration-200 rounded-full shadow-lg border-2 border-[#ffaa45]/20 hover:border-[#ffaa45]/40 hover:scale-105">
            Explore More
          </Button>
        </div>


      </section>

      {/* Announcement Bar */}
      <section className="bg-gradient-to-r from-[#847a69]/20 via-[#847a69]/30 to-[#847a69]/20 py-2 overflow-hidden">
        <div className="relative">
          {/* Marquee Container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of text */}
            <div className="flex items-center space-x-8 mx-4">
              {/* <span className="text-lg text-purple-800 font-medium">✨</span> */}
              <span className="text-sm text-black font-medium">Fresh and uplifting floral scent with a modern feel</span>
              {/* <span className="text-lg text-purple-800 font-medium">🌸</span>
              <span className="text-lg text-purple-800 font-medium">✨</span> */}
              <span className="text-sm text-black font-medium">Fresh and uplifting floral scent with a modern feel</span>
              {/* <span className="text-lg text-purple-800 font-medium">🌸</span> */}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 mx-4">
              {/* <span className="text-lg text-purple-800 font-medium">✨</span> */}
              <span className="text-sm text-black font-medium">Fresh and uplifting floral scent with a modern feel</span>
              {/* <span className="text-lg text-purple-800 font-medium">🌸</span>
              <span className="text-lg text-purple-800 font-medium">✨</span> */}
              <span className="text-sm text-black font-medium">Fresh and uplifting floral scent with a modern feel</span>
              {/* <span className="text-lg text-purple-800 font-medium">🌸</span> */}
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-bold text-center text-black mb-12" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing:'-0.02em' }}>
            Our Scented World
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
              {/* <h3 className="text-body font-subheading text-gray-900 mb-2">HOJAI</h3> */}
              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Adbhuta</p>
              {/* <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p> */}
              <div className="flex items-center justify-center mb-0 -mt-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
              </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-0 -mt-2">₹180</p>
              {/* <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Pink Pepper, Bergamot</p>
                <p><span className="font-medium">Heart:</span> Oud, Rose, Saffron</p>
                <p><span className="font-medium">Base:</span> Leather, Cedarwood, Amber</p>
              </div> */}
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
              {/* <h3 className="text-body font-subheading text-gray-900 mb-2">MOTI</h3> */}
              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Śṛṅgāra</p>
              {/* <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p> */}
              <div className="flex items-center justify-center mb-0 -mt-2">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                  <span className="text-gray-400 text-sm">☆</span>
              </div>
                <span className="text-gray-600 text-xs ml-2">(4.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-0 -mt-2">₹180</p>
              {/* <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Pink Pepper, Bergamot, Lychee</p>
                <p><span className="font-medium">Heart:</span> Jasmine, Rose, Tuberose</p>
                <p><span className="font-medium">Base:</span> Vanilla, Tonka Bean, Patchouli, Amber</p>
              </div> */}
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
              {/* <h3 className="text-body font-subheading text-gray-900 mb-0 -mt-5">NEEL</h3> */}
                              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Vīra</p>
                {/* <p className="text-sm font-body text-gray-500 mb-3">Eau de Parfum</p> */}
              <div className="flex items-center justify-center mb-0 -mt-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-0 -mt-2">₹180</p>
              {/* <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Bergamot, Black Pepper, Grapefruit</p>
                <p><span className="font-medium">Heart:</span> Lavender, Geranium, Aquatic Accord</p>
                <p><span className="font-medium">Base:</span> Ambroxan, Patchouli, Cedarwood</p>
              </div> */}
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <a href="/scents">
              <Button size="lg" className="bg-[#ffaa45] hover:bg-[#ffaa45]/90 text-black px-8 py-3 rounded-lg">
              VIEW ALL
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Second Marquee - Opposite Direction - Commented Out
      <section className="bg-gradient-to-l from-amber-50 via-amber-100 to-amber-50 py-6 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            <div className="flex items-center space-x-8 mx-4">
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
              <span className="text-lg text-amber-800 font-medium">🌟</span>
              <span className="text-xl text-amber-900 font-semibold">Exquisite Indian royal fragrances with traditional motifs</span>
              <span className="text-lg text-amber-800 font-medium">💎</span>
            </div>
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
      */}

      {/* Detailed Product Information */}
      <section className="py-20 bg-gray-50 -mt-8">
          <div className="w-full">
            {/* Navarasa Collection Box */}
        <div className="bg-gray-50 rounded-2xl relative overflow-hidden mx-1 sm:mx-2 lg:mx-3">
          {/* Background Image - Commented Out
            <div className="absolute inset-0">
              <Image
                src="/images/background.png"
                alt="Navarasa Collection Background"
                fill
                className="object-contain opacity-40 scale-99"
              />
            </div>
            
          {/* Centered Content - Commented Out
            <div className="text-center relative z-10">
              <div className="mb-1 mt-12">
                <Image
                  src="/images/logo02.png"
                  alt="House of Ozo Logo"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              
            <h2 className="text-[48px] font-bold text-violet-800 mb-6 tracking-wide -mt-2" style={{fontFamily: 'Cormorant Garamond'}}>
                Navarasa Collection
              </h2>
            <h3 className="text-[32px] font-bold text-[#847a69] mb-8 tracking-wide" style={{fontFamily: 'Cormorant Garamond'}}>
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
          */}
          </div>
          
          {/* Royal Collection Header */}
        <div className="text-center mb-16 -mt-10">
          <h2 className="text-[48px] font-bold text-black mb-4" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing: '-0.02em' }}>
            Our Navarasa Collection
          </h2>
          </div>
          
        {/* Navarasa Collection Hero Section */}
        <section className="relative h-[500px] overflow-hidden mb-8">
          {/* Content Layout */}
          <div className="relative h-full flex">
            {/* Left Section - Text Content with Solid Background */}
            <div className="w-1/2 flex items-center justify-center p-10 bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-center max-w-md">
                <h2 className="text-[52px] font-bold text-gray-900 mb-5 leading-tight" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing:'-0.02em' }}>
                  She brought emotions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-7">
                  Experience the nine emotions of life through our Navarasa collection. Each fragrance captures a different rasa, from love and joy to courage and peace, enriched with rare Indian spices and precious oud.
                </p>
                <a 
                  href="/collections" 
                  className="inline-block text-gray-900 font-medium text-lg border-b-2 border-gray-900 hover:border-[#ffaa45] transition-all duration-300"
                >
                  Explore our Navarasa collection
                </a>
                    </div>
                  </div>
                  
            {/* Right Section - Background Image with Product */}
            <div className="w-1/2 relative">
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                          <Image
                  src="/images/01.jpg"
                  alt="Navarasa Collection Background"
                  fill
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
            </div>

              {/* Product Image Overlay */}
              <div className="relative h-full flex items-center justify-center">
                <div className="relative z-10">
                          <Image
                            src="/images/scent02.png"
                    alt="Navarasa Collection Perfume"
                    width={400}
                    height={500}
                    className="object-contain drop-shadow-2xl"
                  />
                  </div>
                </div>
                
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 right-8 z-20">
                <button className="w-12 h-12 bg-[#847a69] rounded-full flex items-center justify-center shadow-lg hover:bg-[#6b5f52] transition-colors duration-300">
                  <svg className="w-6 h-6 text-white transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
                    </div>
                    </div>
                    </div>
        </section>

        {/* Product Grid Section */}
        {/* <div className="space-y-16"> */}
          {/* HOJAI - Premium Layout - Commented Out */}
          {/* <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50 py-20 px-8 rounded-3xl shadow-xl border border-amber-100 mb-16">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                <div>
                    <h3 className="text-[36px] font-bold text-amber-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>HOJAI</h3>
                    <p className="text-body font-body text-amber-600" style={{fontFamily: 'Cormorant Garamond'}}>Adbhuta (Wonder)</p>
                    </div>
                    
                  <p className="text-body font-body text-gray-700 leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
                      Hojai captures the essence of surprise and discovery—the moment when everything shifts, and something ordinary becomes extraordinary. Deep, smoky oud and amber blend with the warmth of saffron and pink pepper, evoking the thrill of finding beauty in unexpected places.
                    </p>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-amber-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>TOP</h4>
                        <p className="text-gray-600 text-xs">Pink Pepper<br/>Bergamot</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-amber-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>HEART</h4>
                        <p className="text-gray-600 text-xs">Oud, Rose<br/>Saffron</p>
                    </div>
                      <div className="text-center p-4 bg-white/70 rounded-lg border border-amber-200">
                      <h4 className="font-bold text-amber-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>BASE</h4>
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
                        {/* <div className="absolute inset-0 border border-amber-200 rounded-xl transition-all duration-500 group-hover:border-amber-400"></div>
                          <div className="absolute inset-2 border border-amber-300 rounded-lg transition-all duration-500 group-hover:border-amber-500"></div>
                         */}
                          {/* Corner Flourishes */}
                        {/* <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-amber-400 rounded-tl-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-amber-400 rounded-tr-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-amber-400 rounded-bl-lg transition-all duration-500 group-hover:border-amber-600"></div>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-amber-400 rounded-br-lg transition-all duration-500 group-hover:border-amber-600"></div>
                         */}
                          {/* Subtle Corner Accents */}
                          <div className="absolute -top-2 -left-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -top-2 -right-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-amber-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-amber-500 group-hover:opacity-80"></div>
                          
                          {/* Image */}
                        {/* <Image
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
            </div> */}
              </div>
        {/* </div>
      </div> */}
      </section>

      {/* Product Promise Section */}
      <section className="py-20 bg-gray-50 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-bold text-center text-gray-900 mb-12" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing:'-0.02em' }}>
            Our Product Promises
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

      {/* Explore The Discovery Set Heading */}
      <div className="text-center py-8 bg-white -mt-20">
        <h2 className="text-[48px] font-bold text-black mb-4" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing:'-0.02em' }}>
          The Discovery Set
        </h2>
            </div>

      {/* The Discovery Set Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 w-full h-full">
              <video
                // src="/images/Sequence01.mp4"
                autoPlay
                loop
                muted
                playsInline
            className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    
        {/* Content Overlay - Visible on Hover */}
        <div className="absolute inset-0 flex items-end justify-center group pb-20">
          <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out transform translate-y-4 group-hover:translate-y-0">
            <div className="space-y-4">
              <h2 className="text-[60px] font-bold text-center" style={{fontFamily: 'Cormorant Garamond'}}>
                      The Discovery Set
                    </h2>
              
              <p className="text-xl font-body leading-tight max-w-4xl mx-auto px-8 text-center" style={{fontFamily: 'Cormorant Garamond'}}>
                From the quiet hills of Nahan to the restless lights of New York, this curated set of five perfumes captures the spirit of India's landscapes and emotions—carried across oceans to find their place in the heart of the city.
              </p>
              
              <p className="text-lg font-body text-center" style={{fontFamily: 'Cormorant Garamond'}}>
                Each 10 ml vial holds a chapter of the journey—Hojai, Moti, Neel, Baag, and Raas.
              </p>
              
              <div className="pt-6 text-center">
                <a href="/discovery" className="inline-block bg-white/20 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/30 transition-all duration-300 px-8 py-3 rounded-full border border-white/30 hover:border-white/50">
                  <span className="font-body" style={{fontFamily: 'Cormorant Garamond'}}>Discover</span>
                </a>
                    </div>
                    </div>
                    </div>
                  </div>
      </section>

      {/* Signature Fragrance Section - Split Screen Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Left Section - Lifestyle Image (60% width) */}
            <div className="lg:col-span-3 relative h-[600px] overflow-hidden">
                          <Image
                src="/images/01.jpg"
                alt="House of Ozo Signature Fragrance Experience"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-20 left-16">
                <div className="w-16 h-16 bg-[#ffaa45] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-2xl font-bold">O</span>
                        </div>
                      </div>
              
              {/* Floating Text Overlay */}
              <div className="absolute bottom-20 left-16 text-white">
                <p className="text-lg font-light italic mb-2">"A gift from a memory returns"</p>
                <p className="text-sm opacity-80">House of Ozo</p>
              </div>
            </div>

            {/* Right Section - Product Details (40% width) */}
            <div className="lg:col-span-2 bg-gradient-to-br from-purple-50 to-white p-6 flex flex-col justify-start">
              <div className="max-w-sm">
                {/* Product Image with Hover Effect */}
                <div className="mb-6">
                  <div className="relative group">
                    <div className="w-48 h-48 mx-auto transition-all duration-500 group-hover:scale-105">
                      {/* Default Image - Visible before hover */}
                      <Image
                        src="/images/scent01.png"
                        alt="House of Ozo Signature Fragrance"
                        width={192}
                        height={192}
                        className="object-contain transition-opacity duration-500 group-hover:opacity-0"
                      />
                      {/* Hover Image - Visible after hover */}
                      <Image
                        src="/images/scent02.png"
                        alt="House of Ozo Signature Fragrance Hover"
                        width={192}
                        height={192}
                        className="object-contain absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </div>
                    
                    {/* Star Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#ffaa45] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">★</span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="mb-6 text-center">
                  <button className="bg-[#847a69] hover:bg-[#6b5f52] text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    ADD TO CART
                  </button>
                </div>

                {/* Product Details */}
                <div className="text-center">
                  {/* Product Name */}
                  <h3 className="text-[28px] font-bold text-gray-900 mb-3" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.05em'}}>
                    Signature Collection
                  </h3>

                  {/* Price */}
                  <div className="text-[#847a69] font-semibold text-xl mb-3">
                    ₹2,999.00
                  </div>

                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#ffaa45]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-2 text-sm">(5.0)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white -mt-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-bold text-center text-gray-900 mb-16" style={{fontFamily: 'Cormorant Garamond', wordSpacing: '-0.09em',letterSpacing:'-0.02em' }}>
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="border-b border-[#847a69] pb-4">
              <button 
                className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                onClick={() => toggleFAQ(0)}
              >
                <span className="text-lg font-medium text-gray-900">How long do your perfumes last?</span>
                <span className="text-gray-500 text-xl font-light">{openFAQ === 0 ? '−' : '+'}</span>
              </button>
              {openFAQ === 0 && (
                <div className="mt-3">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Our perfumes are crafted with high-quality essential oils and natural ingredients, providing 6-8 hours of longevity on average. The actual duration may vary depending on your skin type, application method, and environmental factors.
                  </p>
                    </div>
              )}
                  </div>
                  
            {/* FAQ Item 2 */}
            <div className="border-b border-[#847a69] pb-4">
              <button 
                className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                onClick={() => toggleFAQ(1)}
              >
                <span className="text-lg font-medium text-gray-900">Are your perfumes cruelty-free?</span>
                <span className="text-gray-500 text-xl font-light">{openFAQ === 1 ? '−' : '+'}</span>
              </button>
              {openFAQ === 1 && (
                <div className="mt-3">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Yes, all our perfumes are 100% cruelty-free. We never test on animals and use only ethically sourced ingredients. Our commitment to cruelty-free practices extends to our entire production process.
                  </p>
                    </div>
              )}
                  </div>
                  
            {/* FAQ Item 3 */}
            <div className="border-b border-[#847a69] pb-4">
              <button 
                className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                onClick={() => toggleFAQ(2)}
              >
                <span className="text-lg font-medium text-gray-900">How should I apply perfume for best results?</span>
                <span className="text-gray-500 text-xl font-light">{openFAQ === 2 ? '−' : '+'}</span>
              </button>
              {openFAQ === 2 && (
                <div className="mt-3">
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Apply perfume to pulse points like wrists, neck, and behind ears. Spray from a distance of 6-8 inches and avoid rubbing the fragrance into your skin, as this can break down the molecular structure and reduce longevity.
                  </p>
                </div>
              )}
                      </div>

            {/* Show More Button */}
            <div className="pt-2">
              <button 
                className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                onClick={toggleShowAllFAQs}
              >
                <span className="text-lg font-medium text-gray-900">Show More Questions</span>
                <span className="text-gray-500 text-xl font-light">{showAllFAQs ? '−' : '+'}</span>
              </button>
              {showAllFAQs && (
                <div className="mt-4 space-y-4">
                  {/* FAQ Item 4 */}
                  <div className="border-b border-[#847a69] pb-4">
                    <button 
                      className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                      onClick={() => toggleFAQ(3)}
                    >
                      <span className="text-lg font-medium text-gray-900">Can I layer different perfumes from your collection?</span>
                      <span className="text-gray-500 text-xl font-light">{openFAQ === 3 ? '−' : '+'}</span>
                    </button>
                    {openFAQ === 3 && (
                      <div className="mt-3">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Absolutely! Our perfumes are designed to be layered. Start with lighter notes and build up to deeper, richer fragrances. We recommend starting with 1-2 sprays and adjusting based on your preference and the occasion.
                        </p>
            </div>
                    )}
                </div>
                
                  {/* FAQ Item 5 */}
                  <div className="border-b border-[#847a69] pb-4">
                    <button 
                      className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                      onClick={() => toggleFAQ(4)}
                    >
                      <span className="text-lg font-medium text-gray-900">What's the difference between Eau de Parfum and Eau de Toilette?</span>
                      <span className="text-gray-500 text-xl font-light">{openFAQ === 4 ? '−' : '+'}</span>
                    </button>
                    {openFAQ === 4 && (
                      <div className="mt-3">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Eau de Parfum contains 15-20% fragrance oil concentration, offering longer-lasting scent and more intense projection. Eau de Toilette has 5-15% concentration, providing a lighter, more subtle fragrance that's perfect for daily wear.
                        </p>
                      </div>
                    )}
                </div>
                
                  {/* FAQ Item 6 */}
                  <div className="border-b border-[#847a69] pb-4">
                    <button 
                      className="w-full text-left flex justify-between items-center hover:text-gray-700 transition-colors"
                      onClick={() => toggleFAQ(5)}
                    >
                      <span className="text-lg font-medium text-gray-900">How do I store my perfume to maintain its quality?</span>
                      <span className="text-gray-500 text-xl font-light">{openFAQ === 5 ? '−' : '+'}</span>
                    </button>
                    {openFAQ === 5 && (
                      <div className="mt-3">
                        <p className="text-gray-600 leading-relaxed text-sm">
                          Store your perfume in a cool, dark place away from direct sunlight and heat. Keep the bottle tightly closed and avoid storing in humid areas like bathrooms. Proper storage can extend the life of your fragrance by several years.
                        </p>
                </div>
                    )}
              </div>
            </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Commented Out
      {/* Testimonials Section - Commented Out
      <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="text-center mb-20">
            <h2 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide">
              Testimonials
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
      */}



      {/* Crafted with Care */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6" style={{fontFamily: 'Cormorant Garamond'}}>
            Crafted with care since 2010
          </h2>
          <p className="text-body font-body text-gray-600">
            Immerse yourself in a world of timeless botanical scents.
          </p>
        </div>
      </section> */}

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
