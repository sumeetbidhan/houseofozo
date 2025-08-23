import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, ShoppingBag, Heart } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "HOJAI - Adbhuta (Wonder)",
      price: 180,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop&crop=center",
      description: "Deep, smoky oud and amber blend with the warmth of saffron and pink pepper",
      rating: 5.0,
      reviews: 127,
      badge: "Bestseller",
      notes: "Top: Pink Pepper, Bergamot | Heart: Oud, Rose, Saffron | Base: Leather, Cedarwood, Amber"
    },
    {
      id: 2,
      name: "MOTI - Śṛṅgāra (Love & Desire)",
      price: 180,
      image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop&crop=center",
      description: "Indian rose and almond, subtly spiced with saffron and creamy vanilla",
      rating: 4.9,
      reviews: 89,
      notes: "Top: Pink Pepper, Bergamot, Lychee | Heart: Jasmine, Rose, Tuberose | Base: Vanilla, Tonka Bean, Patchouli, Amber"
    },
    {
      id: 3,
      name: "NEEL - Vīra (Courage)",
      price: 180,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=500&fit=crop&crop=center",
      description: "Fresh burst of bergamot and pink pepper with grounding cedarwood and vanilla",
      rating: 4.8,
      reviews: 156,
      notes: "Top: Bergamot, Black Pepper, Grapefruit | Heart: Lavender, Geranium, Aquatic Accord | Base: Ambroxan, Patchouli, Cedarwood"
    },
    {
      id: 4,
      name: "BAAG - Śānta (Peace & Belonging)",
      price: 180,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=500&fit=crop&crop=center",
      description: "Jasmine vines and orange blossoms with rich earth and grounding patchouli",
      rating: 4.9,
      reviews: 98,
      notes: "Top: Saffron, Mandarin, Pink Pepper | Heart: Jasmine, Tuberose, Peony | Base: Musk, Vetiver, Vanilla"
    },
    {
      id: 5,
      name: "RAAS - Hāsya (Joy)",
      price: 180,
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=500&fit=crop&crop=center",
      description: "Sparkling bergamot and grapefruit with lavender, amber, and musk",
      rating: 4.7,
      reviews: 134,
      notes: "Top: Bergamot, Blackcurrant, Mandarin | Heart: Jasmine, Orange Blossom, Orris | Base: Patchouli, Tonka Bean, Amberwood"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-amber-50">
      <Header />
      {/* Hero Section with Background Image - Extended above navbar */}
      <section className="relative py-48 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700">
        {/* Background Image - Extended above navbar */}
        <div className="absolute inset-0 w-full h-full -top-20">
          <Image
            src="/images/02.jpg"
            alt="Products Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-purple-800/15 to-purple-700/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading font-heading text-white mb-6">
            Our Fragrance Collection
          </h1>
          <p className="text-body font-body text-purple-100 max-w-3xl mx-auto">
            Discover the essence of India through our carefully crafted perfumes, each telling a unique story of emotion and heritage.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={500}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-amber-600 text-white">
                      {product.badge}
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-body font-subheading text-gray-900">{product.name}</CardTitle>
                  <CardDescription className="text-gray-600">{product.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">({product.rating})</span>
                    <span className="text-sm text-gray-500">• {product.reviews} reviews</span>
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <p className="font-medium mb-2">Scent Notes:</p>
                    <p>{product.notes}</p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-body font-body text-gray-900">₹{product.price}</span>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Set CTA */}
      <section className="py-20 bg-purple-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-subheading font-subheading text-gray-900 mb-6">
            Try Our Discovery Set
          </h2>
          <p className="text-body font-body text-gray-700 mb-8">
            Experience all five fragrances in our curated discovery set. Each 10ml vial allows you to explore the full range of emotions and find your perfect scent.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-4 mb-6">
              {products.slice(0, 5).map((product, index) => (
                <div key={index} className="w-12 h-16 bg-gradient-to-b from-purple-200 to-purple-300 rounded"></div>
              ))}
            </div>
            <h3 className="text-subheading font-subheading text-gray-900 mb-4">Complete Navarasa Collection</h3>
            <p className="text-gray-600 mb-6">₹450 (Save ₹450)</p>
            <Button size="lg" className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3">
              Shop Discovery Set
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
} 