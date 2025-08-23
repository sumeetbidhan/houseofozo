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
                      <Button size="lg" className="bg-[#A3264C] hover:bg-[#A3264C]/90 text-white px-12 py-4 text-lg font-medium tracking-wide transition-all duration-300 rounded-full shadow-xl border-2 border-[#A3264C]/20 hover:border-[#A3264C]/40 hover:scale-105">
              Explore More
          </Button>
        </div>


      </section>

      {/* Announcement Bar */}
      <section className="bg-[#F49AC1] py-6 overflow-hidden">
        <div className="relative">
          {/* Marquee Container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of text */}
            <div className="flex items-center space-x-8 mx-4">
              
              <span className="text-xl text-[#A3264C] font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              
              
              <span className="text-xl text-[#A3264C] font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 mx-4">
              
              <span className="text-xl text-[#A3264C] font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              
              
              <span className="text-xl text-[#A3264C] font-semibold">Fresh and uplifting floral scent with a modern feel</span>
              
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading font-heading text-center text-violet-800 mb-16 italic tracking-wide">
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
                  
                        image: "/images/scent01.png"
                })}
              >
                ADD TO CART
              </Button>
            </div>
                </div>
                </div>
              
              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Adbhuta</p>
              <p className="text-sm font-body text-gray-600 mb-0">Price:₹199</p>
              
              <div className="flex items-center justify-center mb-0">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
              </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              {/* <p className="text-body font-body text-gray-900 mb-3"></p>
              <div className="text-xs text-gray-600 space-y-1">
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
                 
                        image: "/images/scent02.png"
                })}
              >
                ADD TO CART
              </Button>
            </div>
                </div>
                </div>
              
              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Śṛṅgāra</p>
              <p className="text-sm font-body text-gray-600 mb-0">Price:₹199</p>
             
              <div className="flex items-center justify-center mb-0">
                <div className="flex space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                  <span className="text-gray-400 text-sm">☆</span>
              </div>
                <span className="text-gray-600 text-xs ml-2">(4.0)</span>
              </div>
              <p className="text-body font-body text-gray-900 mb-3"></p>
              
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
              
                              <p className="text-body font-body text-gray-600 mb-0 -mt-5">Vīra</p>
                              <p className="text-sm font-body text-gray-600 mb-0">Price:₹199</p>
                
              <div className="flex items-center justify-center mb-0">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-500 text-sm">★</span>
                  ))}
                </div>
                <span className="text-gray-600 text-xs ml-2">(5.0)</span>
              </div>
              {/* <p className="text-body font-body text-gray-900 mb-3"></p>
              <div className="text-xs text-gray-600 space-y-1">
                <p><span className="font-medium">Top:</span> Bergamot, Black Pepper, Grapefruit</p>
                <p><span className="font-medium">Heart:</span> Lavender, Geranium, Aquatic Accord</p>
                <p><span className="font-medium">Base:</span> Ambroxan, Patchouli, Cedarwood</p>
              </div> */}
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

     

      
      
      {/* The Discovery Set Section */}
      <section 
        className="relative overflow-hidden h-screen group cursor-pointer"
        style={{ 
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)'
        }}
      >
        {/* Full Screen Video Background */}
        <video
          ref={(video) => {
            if (video) {
              // Force autoplay and ensure it covers full viewport
              video.play().catch(console.error);
            }
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          onLoadedData={() => console.log('Video loaded and playing full screen')}
          onError={(e) => console.error('Video error:', e)}
        >
          <source src="/images/Sequence01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Text Content - Very light overlay, visible on hover */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10 pointer-events-none group-hover:pointer-events-auto">
          <div className="max-w-4xl mx-auto px-8 text-center text-white">
              <div className="space-y-8">
              <h2 className="text-heading font-heading text-white mb-6 italic tracking-wide drop-shadow-2xl">
                      The Discovery Set
                    </h2>
                
              <p className="text-body font-body text-white leading-relaxed italic tracking-wide drop-shadow-xl">
                    From the quiet hills of Nahan to the restless lights of New York, this curated set of five perfumes captures the spirit of India's landscapes and emotions- carried across oceans to find their place in the heart of the city. Each 10 ml vial holds a chapter of the journey-Hojai, Moti, Neel, Baag, and Raas.
                  </p>
                
                <div className="pt-4">
                <a href="/discovery" className="inline-flex items-center text-white font-medium text-lg hover:text-white/90 transition-colors duration-300 drop-shadow-2xl">
                  <span className="italic tracking-wide font-body">Discover</span>
                    {/* <svg 
                    className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
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
                    </svg> */}
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading font-heading text-center text-gray-900 mb-16">
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




      {/* Crafted with Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading font-heading text-gray-900 mb-6">
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
