import HeroSection from '../components/HeroSection'
import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'
import { travelGuideData } from '../data/travelGuideData'

function GuideSection({ data }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md card-hover fade-in">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl">{data.icon}</span>
        <h2 className="text-2xl font-display font-bold text-deep-blue">
          {data.title}
        </h2>
      </div>
      <div className="space-y-6">
        {data.sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-display font-semibold text-china-red mb-2">
              {section.heading}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TravelGuide() {
  const fadeRef = useFadeIn()

  const guideSections = [
    travelGuideData.visaAndEntry,
    travelGuideData.paymentInChina,
    travelGuideData.gettingAround,
    travelGuideData.communication,
    travelGuideData.etiquette,
    travelGuideData.emergency,
  ]

  return (
    <div ref={fadeRef}>
      {/* Hero */}
      <HeroSection
        image="https://images.unsplash.com/photo-1469521669194-babb45599def?w=1600&h=900&fit=crop"
        title="Travel Guide"
        subtitle="Your complete handbook for navigating China like a pro"
        overlay="bg-black/50"
      />

      {/* Quick Nav */}
      <nav className="sticky top-16 md:top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-3 gap-2 scrollbar-hide">
            {guideSections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex-shrink-0 text-sm font-medium text-gray-600 hover:text-china-red px-3 py-1.5 rounded-full hover:bg-china-red/5 transition-colors whitespace-nowrap flex items-center gap-1.5"
              >
                <span>{section.icon}</span>
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Guide Sections */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {guideSections.map((section) => (
            <div
              key={section.title}
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="scroll-mt-32"
            >
              <GuideSection data={section} />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference Card */}
      <section className="py-12 md:py-20 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Quick Reference
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <span className="text-3xl mb-2 block">🚨</span>
              <p className="text-white/60 text-xs mb-1">Emergency</p>
              <p className="font-bold text-lg">110</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <span className="text-3xl mb-2 block">🏥</span>
              <p className="text-white/60 text-xs mb-1">Ambulance</p>
              <p className="font-bold text-lg">120</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <span className="text-3xl mb-2 block">🔥</span>
              <p className="text-white/60 text-xs mb-1">Fire</p>
              <p className="font-bold text-lg">119</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <span className="text-3xl mb-2 block">📞</span>
              <p className="text-white/60 text-xs mb-1">Tourist Hotline</p>
              <p className="font-bold text-lg">12301</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <h3 className="font-display font-bold text-gold mb-2">Essential Apps</h3>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>📱 Alipay & WeChat — Payment</li>
                <li>🚗 Didi — Ride-hailing</li>
                <li>🗺️ Apple Maps / Baidu Maps — Navigation</li>
                <li>🔒 VPN — Access blocked sites</li>
                <li>🗣️ Google Translate — Communication</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-xl p-5 text-left">
              <h3 className="font-display font-bold text-gold mb-2">Useful Phrases</h3>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>你好 (Nǐ hǎo) — Hello</li>
                <li>谢谢 (Xiè xie) — Thank you</li>
                <li>多少钱？(Duō shǎo qián?) — How much?</li>
                <li>不辣 (Bù là) — Not spicy</li>
                <li>买单 (Mǎi dān) — Bill please</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
