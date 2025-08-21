import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, Globe, Heart, Leaf, Star, Users, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Authenticity",
      description: "Every fragrance tells a true story of Indian heritage and tradition"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Supporting local communities and preserving natural resources"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to the highest quality in every aspect of our craft"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing Indian fragrances to the world while honoring our roots"
    }
  ]

  const milestones = [
    {
      year: "2010",
      title: "The Beginning",
      description: "House of Ozo was founded with a vision to share India's fragrance heritage"
    },
    {
      year: "2015",
      title: "First Collection",
      description: "Launched our debut fragrance collection inspired by Indian emotions"
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Started exporting to Middle East and American markets"
    },
    {
      year: "2023",
      title: "Navarasa Collection",
      description: "Introduced our signature collection of five emotional fragrances"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-amber-50">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-amber-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            From the hills of Nahan to the streets of New York, discover the journey that brought House of Ozo to life.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                House of Ozo was born from a search for something missing. Studying in New York, I wandered beauty stores lined with global brands, yet none captured the vibrant, evolving spirit of India I knew.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Returning home, the colors, celebrations, and scents of my heritage revealed their true power. From my grandmother's blends of chandan and raat ki rani to my father's modern twists, generations of craft had been quietly shaping my story.
              </p>
              <p className="text-lg text-gray-700">
                What Dhaka muslin is to fabric, House of Ozo is to perfume - rare, intricate, and rooted in skill passed down through time.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop&crop=center"
                alt="Indian heritage and tradition"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-6 shadow-lg">
                <p className="text-2xl font-serif text-purple-600 mb-2">"India's soul, bottled for the world."</p>
                <p className="text-sm text-gray-600">- House of Ozo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind House of Ozo, bringing together Indian heritage and global expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Eshita Sharma */}
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-serif text-purple-600">E</span>
                </div>
                <CardTitle className="text-2xl font-serif text-gray-900">ESHITA SHARMA</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600">Founder & Creative Director</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-center">
                  We are a growing family business, rooted in India's deep connection with natural fragrance.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">BBA Design and Management graduate from Parsons School of Design, New York</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Over 5 years of experience in the fragrance industry</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Consultant for Indian brands on fragrance trends in India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">Oversees fragrance exports to the Middle East and America</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Judah Abraham */}
            <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-32 h-32 bg-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-serif text-amber-600">J</span>
                </div>
                <CardTitle className="text-2xl font-serif text-gray-900">JUDAH ABRAHAM</CardTitle>
                <CardDescription className="text-lg font-semibold text-amber-600">Co-Founder & Business Director</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 text-center">
                  A multi-faceted fragrance entrepreneur & marketing expert with deep industry knowledge.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Based in New York</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Over 13 years of experience in the beauty and personal care industry</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Deep involvement in production, distribution, and sales</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-amber-600" />
                    <span className="text-gray-700">Expert in international market expansion</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every fragrance we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl font-serif text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped House of Ozo into what it is today.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-amber-400"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-purple-100">
                      <Badge className="mb-3 bg-purple-600 text-white">{milestone.year}</Badge>
                      <h3 className="text-xl font-serif text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-amber-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-white mb-6">
            Join Our Story
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Be part of the journey as we continue to bring the essence of India to fragrance lovers around the world.
          </p>
          <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-3">
            Discover Our Collection
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  )
} 