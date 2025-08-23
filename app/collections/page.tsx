import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Filter, Grid } from "lucide-react"
import { RoyalHeader, RoyalFooter } from "@/components/RoyalLayout"

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Royal Heritage",
      description: "Our most iconic fragrances inspired by ancient Indian royalty",
      productCount: 8,
      image: "/images/perfume-bottle-1.png",
      featured: true,
    },
    {
      id: 2,
      name: "Palace Collection",
      description: "Exclusive fragrances crafted for modern maharajas",
      productCount: 6,
      image: "/images/perfume-bottle-2.png",
    },
    {
      id: 3,
      name: "Imperial Series",
      description: "Limited edition fragrances with precious ingredients",
      productCount: 4,
      image: "/images/perfume-bottle-3.png",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Maharaja Oud",
      collection: "Royal Heritage",
      price: 485,
      originalPrice: 550,
      image: "/images/perfume-bottle-1.png",
      badge: "Signature",
      rating: 4.9,
      reviews: 234,
      description: "Rich Assam oud with precious saffron threads",
    },
    {
      id: 2,
      name: "Golden Saffron",
      collection: "Royal Heritage",
      price: 425,
      image: "/images/perfume-bottle-2.png",
      badge: "New",
      rating: 4.8,
      reviews: 156,
      description: "Kashmiri saffron with warm amber notes",
    },
    {
      id: 3,
      name: "Royal Rose",
      collection: "Palace Collection",
      price: 365,
      image: "/images/perfume-bottle-3.png",
      rating: 4.7,
      reviews: 189,
      description: "Bulgarian rose with Indian jasmine",
    },
    {
      id: 4,
      name: "Imperial Musk",
      collection: "Imperial Series",
      price: 525,
      image: "/images/perfume-bottle-4.png",
      badge: "Limited",
      rating: 5.0,
      reviews: 67,
      description: "White musk with precious sandalwood",
    },
    {
      id: 5,
      name: "Velvet Orchid",
      collection: "Palace Collection",
      price: 395,
      image: "/images/perfume-bottle-1.png",
      rating: 4.6,
      reviews: 143,
      description: "Luxurious orchid with creamy vanilla",
    },
    {
      id: 6,
      name: "Diamond Essence",
      collection: "Imperial Series",
      price: 595,
      image: "/images/perfume-bottle-2.png",
      badge: "Exclusive",
      rating: 4.9,
      reviews: 89,
      description: "Pure essence with crystalline clarity",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <RoyalHeader />

      {/* Page Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/background.png" alt="Royal Background Pattern" fill className="object-cover" />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl lg:text-7xl font-light tracking-wide mb-6 text-stone-800">COLLECTIONS</h1>
          <div className="w-24 h-px bg-stone-400 mx-auto mb-8"></div>
          <p className="text-xl font-light max-w-3xl mx-auto leading-relaxed text-stone-700">
            Explore our curated selection of luxury fragrances, where each collection tells its own unique story of
            royal artistry and heritage.
          </p>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            {collections.map((collection, index) => (
              <div key={collection.id} className="group cursor-pointer text-center">
                {collection.featured && (
                  <Badge className="mb-6 bg-stone-200 text-stone-700 font-light text-xs px-3 py-1">
                    FEATURED COLLECTION
                  </Badge>
                )}
                <div className="aspect-[3/4] overflow-hidden bg-white mb-8">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-normal text-stone-800 tracking-wide">{collection.name}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{collection.description}</p>
                  <div className="flex items-center justify-center pt-4">
                    <span className="text-sm text-stone-500 font-light">{collection.productCount} PRODUCTS</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-serif text-3xl font-light text-stone-800 tracking-wide">ALL FRAGRANCES</h2>
            <div className="flex items-center space-x-6">
              <Button
                variant="outline"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 font-light tracking-wide bg-transparent"
              >
                <Filter className="w-4 h-4 mr-2" />
                FILTER
              </Button>
              <Button variant="ghost" size="sm" className="text-stone-700 bg-stone-200">
                <Grid className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group text-center bg-white p-8 transition-all duration-500"
              >
                <div className="relative mb-8">
                  {product.badge && (
                    <Badge className="absolute -top-3 right-4 z-10 bg-stone-200 text-stone-700 font-light text-xs px-3 py-1">
                      {product.badge}
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -top-3 left-4 z-10 bg-white/80 hover:bg-white rounded-full border border-stone-200"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-stone-500 font-light tracking-wide uppercase">{product.collection}</div>
                  <h3 className="font-serif text-lg font-normal text-stone-800 tracking-wide">{product.name}</h3>
                  <p className="text-sm text-stone-600 font-light leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-stone-300"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-stone-500 ml-2">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-lg font-light text-stone-800">£{product.price}.00</span>
                    {product.originalPrice && (
                      <span className="text-sm text-stone-400 line-through font-light">
                        £{product.originalPrice}.00
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RoyalFooter />
    </div>
  )
}
