import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'
import { chengduAttractions, chengduFoodGuide, chengduPracticalInfo } from '../data/chengduAttractions'

function SpiceLevel({ level }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-lg ${i <= level ? 'opacity-100' : 'opacity-20'}`}>
          🌶️
        </span>
      ))}
    </div>
  )
}

export default function Chengdu() {
  const fadeRef = useFadeIn()
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  return (
    <div ref={fadeRef}>
      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1600&h=900&fit=crop"
        title="Chengdu: Land of Pandas & Spice"
        subtitle="Where ancient traditions simmer alongside fiery flavors"
        overlay="bg-black/45"
      />

      {/* Anchor Navigation */}
      <nav className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-2 scrollbar-hide">
            {chengduAttractions.map((attr) => (
              <a
                key={attr.id}
                href={`#${attr.id}`}
                className="flex-shrink-0 text-sm font-medium text-gray-600 hover:text-china-red px-3 py-1.5 rounded-full hover:bg-china-red/5 transition-colors whitespace-nowrap"
              >
                {attr.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Attractions */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Explore Chengdu</h2>
            <p className="section-subtitle">
              Eight incredible experiences in China's most charming city
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {chengduAttractions.map((attraction, index) => (
              <div
                key={attraction.id}
                id={attraction.id}
                className="scroll-mt-32 fade-in"
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl">
                    <img
                      src={attraction.imageLarge || attraction.image}
                      alt={attraction.name}
                      className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-china-red/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {attraction.chineseName}
                      </span>
                      {attraction.isDayTrip && (
                        <span className="bg-deep-blue/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Day Trip
                        </span>
                      )}
                      {attraction.isMultiDayTrip && (
                        <span className="bg-deep-blue/80 text-white text-xs font-bold px-2 py-1 rounded-full">
                          2–3 Day Trip
                        </span>
                      )}
                      {attraction.highlight && !attraction.isDayTrip && !attraction.isMultiDayTrip && (
                        <span className="bg-gold/90 text-deep-blue text-xs font-bold px-2 py-1 rounded-full">
                          ★ Must Visit
                        </span>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-deep-blue text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1">
                      <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      {attraction.rating}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 space-y-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-deep-blue mb-2">
                        {attraction.name}
                      </h3>
                      <p className="text-gold font-medium italic">
                        {attraction.tagline}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {attraction.description.map((para, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed">
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Practical Info */}
                    <div className="bg-warm-gray rounded-xl p-5 space-y-3">
                      <h4 className="font-display font-bold text-deep-blue text-sm uppercase tracking-wider">
                        Practical Information
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="text-china-red mt-0.5">🕐</span>
                          <div>
                            <span className="font-semibold text-deep-blue">Hours:</span>
                            <p className="text-gray-600">{attraction.openingHours}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-china-red mt-0.5">🎫</span>
                          <div>
                            <span className="font-semibold text-deep-blue">Tickets:</span>
                            <p className="text-gray-600">{attraction.ticketPrice}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-china-red mt-0.5">📅</span>
                          <div>
                            <span className="font-semibold text-deep-blue">Best Time:</span>
                            <p className="text-gray-600">{attraction.bestTime}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-china-red mt-0.5">🚇</span>
                          <div>
                            <span className="font-semibold text-deep-blue">Getting There:</span>
                            <p className="text-gray-600">{attraction.howToGetThere}</p>
                          </div>
                        </div>
                      </div>
                      {attraction.tips && (
                        <div className="flex items-start gap-2 pt-2 border-t border-gray-200">
                          <span className="text-gold mt-0.5">💡</span>
                          <p className="text-gray-600 text-sm">
                            <span className="font-semibold text-deep-blue">Tip:</span> {attraction.tips}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Guide */}
      <section className="py-12 md:py-20 bg-warm-gray" id="food-guide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Food Guide</h2>
            <p className="section-subtitle">
              Chengdu is a UNESCO City of Gastronomy — here's what you must try
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chengduFoodGuide.map((food) => (
              <div key={food.id} className="bg-white rounded-2xl p-6 shadow-md card-hover fade-in">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-display font-bold text-deep-blue">
                      {food.name}
                    </h3>
                    <p className="text-gold text-sm font-medium">{food.chineseName}</p>
                  </div>
                  <SpiceLevel level={food.spiceLevel} />
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {food.description}
                </p>
                <div className="bg-china-red/5 rounded-lg p-3 mb-3">
                  <p className="text-sm">
                    <span className="font-semibold text-china-red">Must Try: </span>
                    <span className="text-gray-700">{food.mustTry}</span>
                  </p>
                </div>
                <p className="text-deep-blue font-semibold text-sm">
                  {food.priceRange}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Practical Info</h2>
            <p className="section-subtitle">
              Everything you need to plan your Chengdu adventure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">📅</span> Best Time to Visit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {chengduPracticalInfo.bestTimeToVisit}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">✈️</span> Getting There
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {chengduPracticalInfo.gettingThere}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span> Local Tips
              </h3>
              <ul className="space-y-2">
                {chengduPracticalInfo.localTips.map((tip, i) => (
                  <li key={i} className="text-gray-600 text-sm flex items-start gap-2">
                    <span className="text-china-red mt-1">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
