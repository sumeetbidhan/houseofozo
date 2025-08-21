import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Search, Menu, User } from "lucide-react"

export function RoyalHeader() {
  return (
    <header className="bg-white border-b border-stone-200 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative">
              <Image
                src="/images/logo.png"
                alt="House of Ozo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div>
              <div className="font-serif text-xl font-normal text-stone-800 tracking-wide">house of ozo</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/collections"
              className="text-stone-700 hover:text-stone-900 font-light tracking-wide transition-colors"
            >
              Products
            </Link>
            <Link
              href="/collections"
              className="text-stone-700 hover:text-stone-900 font-light tracking-wide transition-colors"
            >
              Scents
            </Link>
            <Link
              href="/heritage"
              className="text-stone-700 hover:text-stone-900 font-light tracking-wide transition-colors"
            >
              About
            </Link>
            <Link href="#" className="text-stone-700 hover:text-stone-900 font-light tracking-wide transition-colors">
              Heritage
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-900">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-stone-600 hover:text-stone-900">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative text-stone-600 hover:text-stone-900">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export function RoyalFooter() {
  return (
    <footer className="bg-stone-900 text-stone-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/images/logo.png"
                alt="House of Ozo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <div className="font-serif text-lg font-normal text-stone-200">house of ozo</div>
              </div>
            </div>
            <p className="text-stone-300 font-light leading-relaxed max-w-md">
              Crafting exceptional royal fragrances inspired by the timeless elegance and artistry of traditional Indian
              perfumery.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-normal text-stone-200 mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Royal Heritage
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Palace Collection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Imperial Series
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-normal text-stone-200 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-stone-300 hover:text-stone-100 transition-colors font-light">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="text-stone-400 font-light">© 2024 House of Ozo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
