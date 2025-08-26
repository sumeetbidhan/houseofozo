"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Heart, Globe, Leaf, Shield, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function CollectionsPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/01.jpg"
            alt="Navarasa Collection Background"
            fill
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-[60px] font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Cormorant Garamond'}}>
              Our Navarasa Collection
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
              Experience the nine emotions of life through our curated collection. Each fragrance captures a different rasa, from love and joy to courage and peace, enriched with rare Indian spices and precious oud.
            </p>
          </div>
        </div>
      </section>

      {/* MOTI - Premium Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-[36px] font-bold text-pink-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>MOTI</h3>
                <p className="text-body font-body text-pink-600" style={{fontFamily: 'Cormorant Garamond'}}>Śṛṅgāra (Love & Desire)</p>
              </div>
              
              <p className="text-body font-body text-gray-700 leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
                Moti captures the heart of desire—unexpected, alluring, and irresistible. Like the heady scents of a bustling Indian market, it draws you in with a blend of Indian rose and almond, subtly spiced with saffron. The creamy warmth of vanilla balances this intensity.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-pink-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>TOP</h4>
                  <p className="text-gray-600 text-xs">Pink Pepper<br/>Bergamot, Lychee</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-pink-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>HEART</h4>
                  <p className="text-gray-600 text-xs">Jasmine, Rose<br/>Tuberose</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-pink-200">
                  <h4 className="font-bold text-pink-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>BASE</h4>
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
            
            <div className="flex justify-center">
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
          </div>
        </div>
      </section>

      {/* HOJAI - Premium Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center order-1 lg:order-1">
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
            
            <div className="space-y-6 order-2 lg:order-2">
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
          </div>
        </div>
      </section>

      {/* NEEL - Premium Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-[36px] font-bold text-blue-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>NEEL</h3>
                <p className="text-body font-body text-blue-600" style={{fontFamily: 'Cormorant Garamond'}}>Vīra (Courage)</p>
              </div>
              
              <p className="text-body font-body text-gray-700 leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
                Neel embodies the spirit of courage and adventure—the fearless explorer who ventures into the unknown. A fresh, aquatic opening with bergamot and black pepper leads to a heart of lavender and geranium, creating a sense of calm determination.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>TOP</h4>
                  <p className="text-gray-600 text-xs">Bergamot<br/>Black Pepper, Grapefruit</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>HEART</h4>
                  <p className="text-gray-600 text-xs">Lavender, Geranium<br/>Aquatic Accord</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>BASE</h4>
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
      </section>

      {/* BAAG - Premium Layout */}
      <section className="py-20 bg-gray-50">
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
            
            <div className="space-y-6 order-2 lg:order-2">
              <div>
                <h3 className="text-[36px] font-bold text-green-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>BAAG</h3>
                <p className="text-body font-body text-green-600" style={{fontFamily: 'Cormorant Garamond'}}>Śānta (Peace & Belonging)</p>
              </div>
              
              <p className="text-body font-body text-gray-700 leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
                Baag is a tribute to the family garden—a place of memories, love, and growth. Jasmine vines wrapped around old trellises, orange blossoms sweetening the air, and rich earth that holds the stories of generations. Bright notes of bergamot and jasmine reflect the freshness of a new morning, while patchouli and vanilla offer grounding comfort. Baag is the scent of home and heritage.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>TOP</h4>
                  <p className="text-gray-600 text-xs">Saffron, Mandarin<br/>Pink Pepper</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>HEART</h4>
                  <p className="text-gray-600 text-xs">Jasmine, Tuberose<br/>Peony</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>BASE</h4>
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
      </section>

      {/* RAAS - Premium Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-[36px] font-bold text-orange-800 mb-2" style={{fontFamily: 'Inter, system-ui, sans-serif'}}>RAAS</h3>
                <p className="text-body font-body text-orange-600" style={{fontFamily: 'Cormorant Garamond'}}>Hāsya (Joy)</p>
              </div>
              
              <p className="text-body font-body text-gray-700 leading-relaxed" style={{fontFamily: 'Cormorant Garamond'}}>
                Raas is the embodiment of pure joy and celebration. Inspired by dance and togetherness, it opens with sparkling notes of bergamot and grapefruit, capturing the exhilaration of a festive moment. Lavender, amber, and musk provide grounding warmth, while tonka bean and vanilla add a sweet softness—reflecting the beauty of connection and shared happiness.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>TOP</h4>
                  <p className="text-gray-600 text-xs">Bergamot, Blackcurrant<br/>Mandarin</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>HEART</h4>
                  <p className="text-gray-600 text-xs">Jasmine, Orange Blossom<br/>Orris</p>
                </div>
                <div className="text-center p-4 bg-white/70 rounded-lg border border-orange-200">
                  <h4 className="font-bold text-orange-800 text-sm mb-1" style={{fontFamily: 'Cormorant Garamond'}}>BASE</h4>
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
                    <div className="absolute -bottom-2 -right-2 w-2 h-2 bg-orange-300 rounded-full opacity-60 transition-all duration-500 group-hover:bg-orange-500 group-hover:opacity-80"></div>
                    
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
      </section>

      {/* Product Promise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-bold text-center text-gray-900 mb-12" style={{fontFamily: 'Cormorant Garamond'}}>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[48px] font-bold text-center text-gray-900 mb-16" style={{fontFamily: 'Cormorant Garamond'}}>
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
                <span className="text-xl font-light">{openFAQ === 1 ? '−' : '+'}</span>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
