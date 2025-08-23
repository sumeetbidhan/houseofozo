import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Leaf, Flower, Trees, Star, Sparkles } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ScentsPage() {
  const scentCategories = [
    {
      name: "Floral Notes",
      description: "The heart of Indian perfumery, capturing the essence of blooming gardens",
      icon: Flower,
      scents: [
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center", description: "Raat ki Rani - Queen of the Night", origin: "Karnataka, India" },
        { name: "Rose", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop&crop=center", description: "Bulgarian Rose with Indian heritage", origin: "Bulgaria & India" },
        { name: "Tuberose", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center", description: "Intoxicating white floral", origin: "Tamil Nadu, India" }
      ]
    },
    {
      name: "Spice Notes",
      description: "Warm and aromatic spices that add depth and complexity",
      icon: Sparkles,
      scents: [
        { name: "Saffron", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "World's most precious spice", origin: "Kashmir, India" },
        { name: "Pink Pepper", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "Mild heat with citrus undertones", origin: "Kerala, India" },
        { name: "Black Pepper", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "Classic Indian spice", origin: "Malabar Coast, India" }
      ]
    },
    {
      name: "Wood Notes",
      description: "Grounding and earthy notes that provide lasting foundation",
      icon: Trees,
      scents: [
        { name: "Sandalwood", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "Sacred Indian wood", origin: "Mysore, India" },
        { name: "Cedarwood", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "Himalayan cedar essence", origin: "Himalayas, India" },
        { name: "Oud", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=300&fit=crop&crop=center", description: "Agarwood from Assam", origin: "Assam, India" }
      ]
    }
  ]

  const ingredients = [
    {
      name: "Natural Essential Oils",
      description: "100% pure essential oils extracted through traditional methods",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      benefits: ["No synthetic fragrances", "Therapeutic properties", "Long-lasting scent"]
    },
    {
      name: "Indian Raw Materials",
      description: "Sourced directly from Indian farmers and artisans",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      benefits: ["Supporting local communities", "Authentic Indian heritage", "Sustainable sourcing"]
    },
    {
      name: "Traditional Methods",
      description: "Using age-old techniques passed down through generations",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      benefits: ["Preserving heritage", "Superior quality", "Unique character"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-purple-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-800 via-amber-700 to-purple-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading font-heading text-white mb-6">
            The Art of Scent
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover the carefully selected ingredients and traditional methods that make our fragrances truly exceptional.
          </p>
        </div>
      </section>

      {/* Scent Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading font-heading text-gray-900 mb-6">
              Our Scent Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each fragrance is composed of carefully selected notes that work together to create a harmonious and memorable scent experience.
            </p>
          </div>

          <div className="space-y-16">
            {scentCategories.map((category, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <category.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-heading font-heading text-gray-900">{category.name}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{category.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {category.scents.map((scent, scentIndex) => (
                      <div key={scentIndex} className="text-center">
                        <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden">
                          <Image
                            src={scent.image}
                            alt={scent.name}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{scent.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{scent.description}</p>
                        <p className="text-xs text-amber-600">{scent.origin}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <h4 className="text-xl font-serif text-gray-900 mb-4">Featured in Our Collection</h4>
                    <div className="space-y-3">
                      {category.scents.map((scent, scentIndex) => (
                        <div key={scentIndex} className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                          <span className="text-gray-700">{scent.name}</span>
                          <Badge variant="outline" className="text-xs">{scent.origin}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients & Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-heading font-heading text-gray-900 mb-6">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that exceptional fragrances come from exceptional ingredients and methods.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-amber-50 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-gray-900">{ingredient.name}</CardTitle>
                  <CardDescription className="text-gray-600">{ingredient.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {ingredient.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-amber-500 fill-current" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Discover how our commitment to quality ingredients and traditional methods creates fragrances that are truly extraordinary.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3">
            Explore Our Collection
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
} 