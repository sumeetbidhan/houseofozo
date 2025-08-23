"use client"

import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Search, Heart, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeaderProps {
  cartItems?: any[]
  onCartClick?: () => void
}

export default function Header({ cartItems = [], onCartClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#F49AC1] text-black text-center py-2 text-sm font-body font-medium">
        Buy now, pay later, Klarna available at checkout
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b border-gray-100 shadow-sm' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 items-center h-20">
            {/* Left Navigation */}
            <div className="flex items-center justify-self-start">
              <button className="md:hidden text-gray-700 hover:text-purple-600 transition-colors mr-4">
                <Menu className="h-6 w-6" />
              </button>
              <nav className="hidden md:flex space-x-8">
                <Link href="/products" className={`font-body transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
                }`}>
                  Products
                </Link>
                <Link href="/scents" className={`font-body transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
                }`}>
                  Scents
                </Link>
                <Link href="/about" className={`font-body transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-600 drop-shadow-lg'
                }`}>
                  About
                </Link>
                <Link href="/heritage" className={`font-body transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
                }`}>
                  Heritage
                </Link>
              </nav>
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center items-center justify-self-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="House of Ozo"
                  width={80}
                  height={80}
                  className="w-20 h-20 object-contain"
                  priority
                  quality={100}
                />
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 justify-self-end">
              <button className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
              }`}>
                <Search className="h-5 w-5" />
              </button>
              <button className={`transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
              }`}>
                <Heart className="h-5 w-5" />
              </button>
              <button 
                className={`transition-colors relative ${
                  isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-amber-300 drop-shadow-lg'
                }`}
                onClick={onCartClick}
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 