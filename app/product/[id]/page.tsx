import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, ShoppingBag, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react"
import { RoyalHeader, RoyalFooter } from "@/components/RoyalLayout"

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Maharaja Oud Supreme",
    collection: "Royal Heritage",
    price: 485,
    originalPrice: 550,
    images: [
      "/images/royal-perfume-1.png",
      "/images/royal-perfume-2.png",
      "/images/royal-perfume-3.png",
      "/images/royal-perfume-4.png",
    ],
    badge: "Signature",
    rating: 4.9,
    reviews: 234,
    description:
      "A majestic blend of rare Assam oud and precious Kashmiri saffron, Maharaja Oud Supreme represents the pinnacle of Indian royal perfumery. This extraordinary scent opens with bright bergamot and pink pepper, leading to a heart of Bulgarian rose and precious oud, before settling into a base of sandalwood, amber, and white musk.",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Cardamom"],
      middle: ["Bulgarian Rose", "Oud", "Jasmine"],
      base: ["Sandalwood", "Amber", "White Musk", "Vanilla"],
    },
    sizes: [
      { size: "30ml", price: 285, inStock: true },
      { size: "50ml", price: 385, inStock: true },
      { size: "100ml", price: 485, inStock: true, popular: true },
      { size: "200ml", price: 750, inStock: false },
    ],
  }

  return (
    <div className="min-h-screen taj-gradient">
      <RoyalHeader />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <nav className="text-sm text-stone-500">
          <Link href="/" className="hover:text-amber-700">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/collections" className="hover:text-amber-700">
            Collections
          </Link>
          <span className="mx-2">/</span>
          <Link href="/collections/royal-heritage" className="hover:text-amber-700">
            {product.collection}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-700">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl ivory-gradient taj-shadow border-2 border-amber-400/20">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg border-2 border-stone-200 cursor-pointer hover:border-amber-400/50 transition-colors taj-shadow"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge className="subtle-gold text-stone-800 font-semibold border border-amber-400/30">
                  {product.badge}
                </Badge>
                <span className="text-stone-600 font-semibold">{product.collection}</span>
              </div>
              <h1 className="font-serif text-4xl font-bold text-stone-800 mb-6 tracking-wide">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-stone-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-stone-600 font-semibold">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-stone-800">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-2xl text-stone-400 line-through">${product.originalPrice}</span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive" className="bg-red-600 text-white">
                    Save ${product.originalPrice - product.price}
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-lg text-stone-700 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-serif font-bold text-stone-800 mb-4 text-xl">Select Size</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.sizes.map((sizeOption) => (
                  <div
                    key={sizeOption.size}
                    className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                      sizeOption.popular
                        ? "border-amber-400 subtle-gold"
                        : sizeOption.inStock
                          ? "border-stone-200 hover:border-amber-400/50 marble-gradient"
                          : "border-stone-200 opacity-50 cursor-not-allowed bg-stone-100"
                    }`}
                  >
                    {sizeOption.popular && (
                      <Badge className="absolute -top-2 left-2 subtle-gold text-stone-800 text-xs font-semibold border border-amber-400/30">
                        Most Popular
                      </Badge>
                    )}
                    <div className="text-center">
                      <div className="font-bold text-stone-800 text-lg">{sizeOption.size}</div>
                      <div className="text-xl font-bold text-stone-700">${sizeOption.price}</div>
                      {!sizeOption.inStock && <div className="text-sm text-red-600 font-semibold">Out of Stock</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-stone-800">Quantity:</span>
                <div className="flex items-center border-2 border-stone-200 rounded-lg marble-gradient">
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-amber-700">
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-6 py-2 font-bold text-lg">1</span>
                  <Button variant="ghost" size="icon" className="text-stone-600 hover:text-amber-700">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="flex-1 subtle-gold hover:gold-accent text-stone-800 font-semibold text-lg py-4 border border-amber-400/30 hover:scale-105 transition-all duration-300"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-400/50 text-stone-700 hover:bg-amber-50 bg-transparent py-4"
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-stone-400 text-stone-700 hover:bg-stone-50 bg-transparent font-semibold text-lg py-4"
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-stone-200">
              <div className="text-center">
                <Truck className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-sm font-bold text-stone-800">Free Shipping</div>
                <div className="text-xs text-stone-600">Orders over $200</div>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-sm font-bold text-stone-800">Authentic</div>
                <div className="text-xs text-stone-600">100% Genuine</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <div className="text-sm font-bold text-stone-800">Easy Returns</div>
                <div className="text-xs text-stone-600">30-day policy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <Tabs defaultValue="notes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-stone-100 rounded-xl">
              <TabsTrigger
                value="notes"
                className="data-[state=active]:subtle-gold data-[state=active]:text-stone-800 font-semibold"
              >
                Fragrance Notes
              </TabsTrigger>
              <TabsTrigger
                value="details"
                className="data-[state=active]:subtle-gold data-[state=active]:text-stone-800 font-semibold"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="data-[state=active]:subtle-gold data-[state=active]:text-stone-800 font-semibold"
              >
                Reviews
              </TabsTrigger>
            </TabsList>

            <TabsContent value="notes" className="mt-8">
              <Card className="border-2 border-amber-400/20 taj-shadow marble-gradient">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-800 mb-4">Top Notes</h3>
                      <ul className="space-y-3">
                        {product.notes.top.map((note) => (
                          <li key={note} className="text-stone-600 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mr-3"></div>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-800 mb-4">Heart Notes</h3>
                      <ul className="space-y-3">
                        {product.notes.middle.map((note) => (
                          <li key={note} className="text-stone-600 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mr-3"></div>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-800 mb-4">Base Notes</h3>
                      <ul className="space-y-3">
                        {product.notes.base.map((note) => (
                          <li key={note} className="text-stone-600 flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full mr-3"></div>
                            {note}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="mt-8">
              <Card className="border-2 border-amber-400/20 taj-shadow marble-gradient">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-800 mb-4">Product Information</h3>
                      <dl className="space-y-3">
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Brand:</dt>
                          <dd className="font-semibold text-stone-800">House of Ozo</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Collection:</dt>
                          <dd className="font-semibold text-stone-800">{product.collection}</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Fragrance Type:</dt>
                          <dd className="font-semibold text-stone-800">Eau de Parfum</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Concentration:</dt>
                          <dd className="font-semibold text-stone-800">20% Parfum Oil</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Longevity:</dt>
                          <dd className="font-semibold text-stone-800">8-12 hours</dd>
                        </div>
                        <div className="flex justify-between">
                          <dt className="text-stone-600">Sillage:</dt>
                          <dd className="font-semibold text-stone-800">Moderate to Strong</dd>
                        </div>
                      </dl>
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-stone-800 mb-4">Care Instructions</h3>
                      <ul className="space-y-2 text-stone-600">
                        <li>• Store in a cool, dry place away from direct sunlight</li>
                        <li>• Keep bottle upright to prevent leakage</li>
                        <li>• Avoid extreme temperatures</li>
                        <li>• Use within 3 years of opening for best quality</li>
                        <li>• Apply to pulse points for optimal projection</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card className="border-2 border-amber-400/20 taj-shadow marble-gradient">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-stone-800 mb-2">{product.rating}</div>
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-6 h-6 ${
                            i < Math.floor(product.rating) ? "fill-amber-500 text-amber-500" : "text-stone-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-stone-600">Based on {product.reviews} reviews</div>
                  </div>
                  <div className="text-center">
                    <Button className="subtle-gold hover:gold-accent text-stone-800 font-semibold border border-amber-400/30 hover:scale-105 transition-all duration-300">
                      Write a Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <RoyalFooter />
    </div>
  )
}
