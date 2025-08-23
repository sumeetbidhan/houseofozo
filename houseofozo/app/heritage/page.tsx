import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flower, Leaf, Star, Clock, MapPin, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function HeritagePage() {
  const traditions = [
    {
      title: "Ayurvedic Perfumery",
      description: "Ancient Indian science of using natural fragrances for healing and wellness",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      details: "For over 5000 years, Indian perfumers have used essential oils and natural fragrances in Ayurvedic medicine, believing that certain scents can balance the body's doshas and promote healing."
    },
    {
      title: "Royal Fragrance Traditions",
      description: "Luxury perfumes crafted exclusively for maharajas and royal courts",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      details: "The royal families of India commissioned master perfumers to create signature fragrances that became symbols of their power and prestige, using the rarest and most precious ingredients."
    },
    {
      title: "Temple Incense & Sacred Scents",
      description: "Spiritual fragrances used in religious ceremonies and meditation",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center",
      details: "Indian temples have long used specific fragrances like sandalwood, jasmine, and frankincense to create sacred atmospheres and aid in spiritual practices."
    }
  ]

  const regions = [
    {
      name: "Kashmir",
      specialty: "Saffron & Rose",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=200&fit=crop&crop=center",
      description: "Known for the world's finest saffron and Damask roses, Kashmir has been a center of luxury perfumery for centuries."
    },
    {
      name: "Mysore",
      specialty: "Sandalwood",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=200&fit=crop&crop=center",
      description: "The sacred sandalwood from Mysore is renowned worldwide for its unique, creamy, and woody fragrance profile."
    },
    {
      name: "Assam",
      specialty: "Oud & Agarwood",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=200&fit=crop&crop=center",
      description: "Home to some of the world's most precious agarwood, Assam oud is treasured for its deep, complex aroma."
    },
    {
      name: "Karnataka",
      specialty: "Jasmine & Tuberose",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=300&h=200&fit=crop&crop=center",
      description: "The 'Raat ki Rani' (Queen of the Night) jasmine from Karnataka is celebrated for its intoxicating evening fragrance."
    }
  ]

  const techniques = [
    {
      name: "Steam Distillation",
      description: "Traditional method of extracting essential oils using steam",
      icon: Flower,
      benefits: ["Preserves natural properties", "Pure extraction", "Traditional method"]
    },
    {
      name: "Cold Pressing",
      description: "Gentle extraction method for citrus and delicate oils",
      icon: Leaf,
      benefits: ["Maintains freshness", "No heat damage", "Authentic scent"]
    },
    {
      name: "Aging & Maturation",
      description: "Allowing fragrances to develop complexity over time",
      icon: Clock,
      benefits: ["Enhanced depth", "Balanced notes", "Mature character"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-purple-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-purple-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Indian Fragrance Heritage
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Discover the rich traditions, ancient techniques, and cultural significance that make Indian perfumery truly extraordinary.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-8">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                India's fragrance heritage spans over 5000 years, making it one of the world's oldest and most sophisticated perfumery traditions. From the sacred texts of Ayurveda to the royal courts of maharajas, fragrance has always held a special place in Indian culture.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What makes Indian perfumery unique is not just the ingredients, but the deep understanding of how fragrances affect the mind, body, and spirit. Each scent is carefully crafted to tell a story, evoke an emotion, or create a specific atmosphere.
              </p>
              <p className="text-lg text-gray-700">
                House of Ozo honors this rich heritage by combining traditional Indian techniques with modern perfumery science, creating fragrances that are both authentic and contemporary.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop&crop=center"
                alt="Traditional Indian perfumery"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-lg">
                <p className="text-2xl font-serif text-amber-600 mb-2">"5000+ Years of Tradition"</p>
                <p className="text-sm text-gray-600">Ancient Indian Perfumery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Practices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Ancient Traditions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the time-honored practices that have shaped Indian perfumery for millennia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {traditions.map((tradition, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-amber-50 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={tradition.image}
                    alt={tradition.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-gray-900">{tradition.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tradition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{tradition.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Specialties */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Regional Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each region of India contributes unique ingredients and techniques to the country's rich perfumery heritage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={region.image}
                    alt={region.name}
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-amber-600 text-white">
                    {region.specialty}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-serif text-gray-900">{region.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{region.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Techniques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Time-Honored Techniques
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The methods we use today have been perfected over centuries of practice and refinement.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-50 to-amber-50 border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <technique.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">{technique.name}</CardTitle>
                  <CardDescription className="text-gray-600">{technique.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {technique.benefits.map((benefit, benefitIndex) => (
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

      {/* Cultural Significance */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-8">
                More Than Just Fragrance
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In Indian culture, fragrance is deeply intertwined with spirituality, wellness, and social customs. From the morning ritual of applying sandalwood paste to the evening practice of burning incense, scents mark the rhythm of daily life.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our fragrances are designed to honor this cultural significance while making it accessible to modern audiences. Each scent is crafted not just to smell beautiful, but to evoke the rich tapestry of Indian life and tradition.
              </p>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-purple-600" />
                <span className="text-gray-700">Rooted in Indian Heritage</span>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-serif text-gray-900 mb-6">Cultural Elements in Our Fragrances</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Traditional ingredient sourcing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Ayurvedic principles</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Emotional storytelling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-700">Seasonal considerations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">
            Experience the Heritage
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Discover how centuries of Indian perfumery tradition come together in every House of Ozo fragrance.
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
