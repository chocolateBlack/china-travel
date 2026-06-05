import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'
import { beijingAttractions, beijingDayTrips, beijingPracticalInfo } from '../data/beijingAttractions'

export default function Beijing() {
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
        image="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600&h=900&fit=crop"
        title="Beijing: The Imperial Capital"
        subtitle="Where 3,000 years of history meets tomorrow's skyline"
        overlay="bg-black/45"
      />

      {/* Anchor Navigation */}
      <nav className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-2 scrollbar-hide">
            {beijingAttractions.map((attr) => (
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
            <h2 className="section-title">Explore Beijing</h2>
            <p className="section-subtitle">
              Eight unforgettable experiences in China's magnificent capital
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {beijingAttractions.map((attraction, index) => (
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
                      {attraction.highlight && (
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

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info Section */}
      <section className="py-12 md:py-20 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Practical Info</h2>
            <p className="section-subtitle">
              Everything you need to plan your Beijing adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">📅</span> Best Time to Visit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {beijingPracticalInfo.bestTimeToVisit}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">✈️</span> Getting There
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {beijingPracticalInfo.gettingThere}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3 flex items-center gap-2">
                <span className="text-2xl">💡</span> Local Tips
              </h3>
              <ul className="space-y-2">
                {beijingPracticalInfo.localTips.map((tip, i) => (
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

      {/* Day Trips */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Nearby Day Trips</h2>
            <p className="section-subtitle">
              Venture beyond the city for even more unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beijingDayTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-2xl overflow-hidden shadow-md card-hover fade-in">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-china-red/90 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      {trip.distance}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-deep-blue mb-1">
                    {trip.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mb-3">{trip.chineseName}</p>
                  <p className="text-gray-600 leading-relaxed">{trip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
