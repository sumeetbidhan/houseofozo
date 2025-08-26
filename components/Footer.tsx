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
              <button className="w-10 h-10 bg-[#ffaa45] rounded-full flex items-center justify-center hover:bg-[#ffaa45]/90 transition-colors">
                <span className="text-black">f</span>
              </button>
              <button className="w-10 h-10 bg-[#ffaa45] rounded-full flex items-center justify-center hover:bg-[#ffaa45]/90 transition-colors">
                <span className="text-black">in</span>
              </button>
              <button className="w-10 h-10 bg-[#ffaa45] rounded-full flex items-center justify-center hover:bg-[#ffaa45]/90 transition-colors">
                <span className="text-black">ig</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <Link href="/contact" className="font-body text-gray-700 hover:text-gray-900 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section Below Collections and Company */}
            <div className="mt-5">
              <h3 className="font-subheading text-gray-900 mb-0 -mt-2">Newsletter</h3>
              <p className="font-body text-gray-700 mb-3 text-sm">
                Be the first to know about our biggest and best sales.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:border-purple-400 text-sm"
                />
                <button className="w-full bg-[#ffaa45] hover:bg-[#ffaa45]/90 text-black px-4 py-2 rounded-lg font-medium transition-colors text-sm">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-600">© 2025, House of Ozo - All rights reserved</p>
          {/* <p className="font-body text-gray-600">Powered by Next.js</p> */}
        </div>
      </div>
    </footer>
  )
} 