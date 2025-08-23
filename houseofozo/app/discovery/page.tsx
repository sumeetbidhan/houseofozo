import Image from 'next/image';
import Link from 'next/link';

export default function DiscoveryPage() {
  const discoverySet = [
    {
      name: 'HOJAI',
      emotion: 'Adbhuta (Wonder)',
      description: 'Hojai captures the essence of surprise and discovery—the moment when everything shifts, and something ordinary becomes extraordinary. Deep, smoky oud and amber blend with the warmth of saffron and pink pepper, evoking the thrill of finding beauty in unexpected places.',
      topNotes: ['Pink Pepper', 'Bergamot'],
      heartNotes: ['Oud', 'Rose', 'Saffron'],
      baseNotes: ['Leather', 'Cedarwood', 'Amber'],
      materials: ['Saffron', 'Oud', 'Cedarwood', 'Amber'],
      color: 'amber',
      image: '/images/scent01.png'
    },
    {
      name: 'MOTI',
      emotion: 'Śṛṅgāra (Love & Desire)',
      description: 'Moti is the essence of romance and passion—a fragrance that speaks of stolen glances and whispered promises. Rich jasmine and rose dance with vanilla and amber, creating a scent that captures the intensity of love and the sweetness of desire.',
      topNotes: ['Pink Pepper', 'Bergamot', 'Lychee'],
      heartNotes: ['Jasmine', 'Rose', 'Tuberose'],
      baseNotes: ['Vanilla', 'Tonka', 'Patchouli', 'Amber'],
      materials: ['Jasmine', 'Rose', 'Vanilla', 'Amber'],
      color: 'pink',
      image: '/images/scent02.png'
    },
    {
      name: 'NEEL',
      emotion: 'Vīra (Courage)',
      description: 'Neel embodies the spirit of bravery and determination—the courage to face the unknown and embrace adventure. Fresh bergamot and black pepper blend with lavender and aquatic notes, creating a scent that inspires confidence and boldness.',
      topNotes: ['Bergamot', 'Black Pepper', 'Grapefruit'],
      heartNotes: ['Lavender', 'Geranium', 'Aquatic Accord'],
      baseNotes: ['Ambroxan', 'Patchouli', 'Cedarwood'],
      materials: ['Black Pepper', 'Lavender', 'Cedarwood', 'Ambroxan'],
      color: 'blue',
      image: '/images/scent03.png'
    },
    {
      name: 'BAAG',
      emotion: 'Śānta (Peace & Belonging)',
      description: 'Baag is a tribute to the family garden—a place of memories, love, and growth. Jasmine vines wrapped around old trellises, orange blossoms sweetening the air, and rich earth that holds the stories of generations.',
      topNotes: ['Saffron', 'Mandarin', 'Pink Pepper'],
      heartNotes: ['Jasmine', 'Tuberose', 'Peony'],
      baseNotes: ['Musk', 'Vetiver', 'Vanilla'],
      materials: ['Saffron', 'Jasmine', 'Tuberose (Raat ki Raani)', 'Vetiver'],
      color: 'green',
      image: '/images/scent01.png'
    },
    {
      name: 'RAAS',
      emotion: 'Hāsya (Joy)',
      description: 'Raas is the embodiment of pure joy and celebration. Inspired by dance and togetherness, it opens with sparkling notes of bergamot and grapefruit, capturing the exhilaration of a festive moment.',
      topNotes: ['Bergamot', 'Blackcurrant', 'Mandarin'],
      heartNotes: ['Jasmine', 'Orange Blossom', 'Orris'],
      baseNotes: ['Patchouli', 'Tonka Bean', 'Amberwood'],
      materials: ['Amberwood', 'Patchouli', 'Jasmine'],
      color: 'orange',
      image: '/images/scent02.png'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; accent: string } } = {
      amber: { bg: 'bg-amber-50', text: 'text-amber-800', border: 'border-amber-200', accent: 'bg-amber-100' },
      pink: { bg: 'bg-pink-50', text: 'text-pink-800', border: 'border-pink-200', accent: 'bg-pink-100' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-200', accent: 'bg-blue-100' },
      green: { bg: 'bg-green-50', text: 'text-green-800', border: 'border-green-200', accent: 'bg-green-100' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-800', border: 'border-orange-200', accent: 'bg-orange-100' }
    };
    return colorMap[color] || colorMap.amber;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-semibold text-gray-900">
              ← Back to Home
            </Link>
            <h1 className="text-2xl font-serif text-gray-900">The Discovery Set</h1>
          </div>
        </div>
      </header>

      {/* Hero Section with Video Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/images/Sequence01.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-gray-100/70 to-gray-50/80"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-heading font-heading text-violet-800 mb-6 italic tracking-wide">
            The Discovery Set
          </h1>
          <p className="text-body font-body text-gray-700 max-w-4xl mx-auto leading-relaxed italic tracking-wide">
            From the quiet hills of Nahan to the restless lights of New York, this curated set of five perfumes captures the spirit of India's landscapes and emotions—carried across oceans to find their place in the heart of the city.
          </p>
          <p className="text-body font-body text-gray-600 mt-4 italic tracking-wide">
            Each 10 ml vial holds a chapter of the journey—Hojai, Moti, Neel, Baag, and Raas.
          </p>
        </div>
      </section>

      {/* Discovery Set Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {discoverySet.map((perfume, index) => {
              const colors = getColorClasses(perfume.color);
              return (
                <div 
                  key={perfume.name}
                  className={`${colors.bg} rounded-3xl p-12 shadow-xl border ${colors.border} overflow-hidden`}
                >
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Text Content */}
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div>
                                    <h2 className={`text-heading font-heading ${colors.text} mb-3`}>
              {perfume.name}
            </h2>
                                    <p className={`text-body font-body ${colors.text} italic opacity-80`}>
              {perfume.emotion}
            </p>
                      </div>
                      
                                  <p className="text-body font-body text-gray-700 leading-relaxed italic tracking-wide">
              {perfume.description}
            </p>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-gray-200">
                          <h4 className={`font-bold ${colors.text} text-sm mb-1 italic tracking-wide font-body`}>TOP</h4>
                          <p className="text-gray-600 text-xs">{perfume.topNotes.join(', ')}</p>
                        </div>
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-gray-200">
                          <h4 className={`font-bold ${colors.text} text-sm mb-1 italic tracking-wide font-body`}>HEART</h4>
                          <p className="text-gray-600 text-xs">{perfume.heartNotes.join(', ')}</p>
                        </div>
                        <div className="text-center p-4 bg-white/70 rounded-lg border border-gray-200">
                          <h4 className={`font-bold ${colors.text} text-sm mb-1 italic tracking-wide font-body`}>BASE</h4>
                          <p className="text-gray-600 text-xs">{perfume.baseNotes.join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {perfume.materials.map((material) => (
                          <span key={material} className={`${colors.accent} ${colors.text} px-3 py-1 rounded-full text-xs font-medium border ${colors.border}`}>
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Image */}
                    <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="relative group">
                        <div className="w-80 h-96 p-4 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-2xl">
                          <div className="relative w-full h-full">
                            {/* Elegant Border Frame */}
                            <div className={`absolute inset-0 border ${colors.border} rounded-xl transition-all duration-500 group-hover:border-opacity-60`}></div>
                            <div className={`absolute inset-2 border ${colors.border} rounded-lg transition-all duration-500 group-hover:border-opacity-80`}></div>
                            
                            {/* Corner Flourishes */}
                            <div className={`absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 ${colors.border} rounded-tl-lg transition-all duration-500`}></div>
                            <div className={`absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 ${colors.border} rounded-tr-lg transition-all duration-500`}></div>
                            <div className={`absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 ${colors.border} rounded-bl-lg transition-all duration-500`}></div>
                            <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 ${colors.border} rounded-br-lg transition-all duration-500`}></div>
                            
                            {/* Subtle Corner Accents */}
                            <div className={`absolute -top-2 -left-2 w-2 h-2 ${colors.accent} rounded-full opacity-60 transition-all duration-500`}></div>
                            <div className={`absolute -top-2 -right-2 w-2 h-2 ${colors.accent} rounded-full opacity-60 transition-all duration-500`}></div>
                            <div className={`absolute -bottom-2 -left-2 w-2 h-2 ${colors.accent} rounded-full opacity-60 transition-all duration-500`}></div>
                            <div className={`absolute -bottom-2 -right-2 w-2 h-2 ${colors.accent} rounded-full opacity-60 transition-all duration-500`}></div>
                            
                            {/* Image */}
                            <Image
                              src={perfume.image}
                              alt={`${perfume.name} Perfume`}
                              fill
                              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-subheading font-subheading text-gray-900 mb-6">
            Experience the Journey
          </h2>
          <p className="text-body font-body text-gray-700 mb-8">
            Each fragrance tells a story, each scent carries a memory. Discover the essence of India's emotions in this carefully curated collection.
          </p>
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-300">
            Add to Cart - ₹900
          </button>
        </div>
      </section>
    </div>
  );
}
