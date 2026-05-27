import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'

export default function About() {
  const fadeRef = useFadeIn()

  return (
    <div ref={fadeRef}>
      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1546956223-7ead4ec7b858?w=1600&h=900&fit=crop"
        title="About ChinaTravel"
        subtitle="Bridging cultures through the wonder of travel"
        overlay="bg-black/55"
      />

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Our Mission</h2>
          </div>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed fade-in">
            <p>
              ChinaTravel was born from a simple belief: that the best way to bridge cultures
              is through personal experience. China is one of the world's most fascinating
              destinations, yet many travelers hesitate because of perceived barriers — language,
              payments, navigation, or simply not knowing where to start.
            </p>
            <p>
              We created this guide to change that. Our mission is to make China accessible,
              inviting, and unforgettable for English-speaking travelers who have never visited
              before. We provide practical, honest, and up-to-date information that helps you
              plan with confidence and travel with ease.
            </p>
            <p>
              Every recommendation on this site comes from real travel experience. We believe
              that China's ancient wonders and modern marvels deserve to be explored firsthand,
              not just seen in photos. And we are here to help you take that first step.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 md:py-24 bg-warm-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              Comprehensive resources to plan your perfect China trip
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md card-hover fade-in text-center">
              <div className="w-16 h-16 bg-china-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl">🗺️</span>
              </div>
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3">
                Curated Destinations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In-depth guides to Beijing and Chengdu with detailed attraction information,
                practical tips, and insider recommendations. Every entry includes dual-currency
                pricing, transport directions, and honest advice.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md card-hover fade-in text-center">
              <div className="w-16 h-16 bg-china-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3">
                Practical Travel Guide
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From visa requirements and payment setup to getting around and cultural etiquette,
                our comprehensive travel guide covers everything you need to know before and during
                your trip to China.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md card-hover fade-in text-center">
              <div className="w-16 h-16 bg-china-red/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <span className="text-4xl">🍜</span>
              </div>
              <h3 className="text-xl font-display font-bold text-deep-blue mb-3">
                Food & Culture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore China's incredible culinary scene with our food guides, spice-level
                ratings, and must-try recommendations. We also cover cultural norms, etiquette,
                and useful phrases to help you connect with locals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="fade-in flex items-start gap-4">
              <div className="w-12 h-12 bg-china-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-deep-blue mb-2">Accuracy First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We verify every piece of information — prices, opening hours, transport details —
                  to ensure you can plan with confidence. Travel info changes fast, and we strive
                  to keep everything current.
                </p>
              </div>
            </div>
            <div className="fade-in flex items-start gap-4">
              <div className="w-12 h-12 bg-china-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌍</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-deep-blue mb-2">Cultural Respect</h3>
                <p className="text-gray-600 leading-relaxed">
                  We promote respectful, responsible tourism. Our guides include cultural etiquette,
                  local customs, and tips for being a thoughtful guest in the communities you visit.
                </p>
              </div>
            </div>
            <div className="fade-in flex items-start gap-4">
              <div className="w-12 h-12 bg-china-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🤝</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-deep-blue mb-2">Accessibility</h3>
                <p className="text-gray-600 leading-relaxed">
                  China can seem intimidating to first-time visitors. We break down barriers with
                  clear, jargon-free information that makes travel planning simple and stress-free.
                </p>
              </div>
            </div>
            <div className="fade-in flex items-start gap-4">
              <div className="w-12 h-12 bg-china-red/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-deep-blue mb-2">Authentic Experience</h3>
                <p className="text-gray-600 leading-relaxed">
                  We go beyond tourist hotspots to recommend authentic local experiences — the
                  hidden teahouses, the family-run noodle shops, the neighborhoods where real life
                  unfolds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Have questions about traveling to China? Want to share your travel story?
            We would love to hear from you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📧</span>
              <h3 className="font-display font-semibold text-gold mb-1">Email</h3>
              <p className="text-white/70 text-sm">hello@chinatravel.com</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📱</span>
              <h3 className="font-display font-semibold text-gold mb-1">WeChat</h3>
              <p className="text-white/70 text-sm">ChinaTravel_Official</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <span className="text-3xl mb-3 block">📸</span>
              <h3 className="font-display font-semibold text-gold mb-1">Instagram</h3>
              <p className="text-white/70 text-sm">@chinatravel</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/beijing" className="btn-primary inline-flex items-center justify-center gap-2">
              Explore Beijing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/chengdu" className="btn-gold inline-flex items-center justify-center gap-2">
              Explore Chengdu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
