import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="text-gray-900 py-16" style={{backgroundColor: 'rgb(243, 232, 255)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/logo.png"
                  alt="House of Ozo Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="font-subheading text-gray-900">House of Ozo</div>
              </div>
            </div>
            <p className="font-body text-gray-700 max-w-md mb-6">
              From the hills of Nahan to the streets of New York, House of Ozo blends generations of Indian fragrance craftsmanship with a modern sensibility.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-white">f</span>
              </button>
              <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-white">in</span>
              </button>
              <button className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                <span className="text-white">ig</span>
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-subheading text-gray-900 mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                  Navarasa Collection
                </Link>
              </li>
              <li>
                <Link href="/products" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                  Discovery Set
                </Link>
              </li>
              <li>
                <Link href="/scents" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                  Scent Notes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-subheading text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/heritage" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Our Heritage
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-600">© 2025, House of Ozo - All rights reserved</p>
          <p className="font-body text-gray-600">Powered by Next.js</p>
        </div>
      </div>
    </footer>
  )
} 