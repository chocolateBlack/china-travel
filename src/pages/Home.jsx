import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import DestinationCard from '../components/DestinationCard'
import AttractionCard from '../components/AttractionCard'
import InfoCard from '../components/InfoCard'
import FAQItem from '../components/FAQItem'
import SnapshotGallery from '../components/SnapshotGallery'
import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'
import { beijingAttractions } from '../data/beijingAttractions'
import { chengduAttractions } from '../data/chengduAttractions'
import { xinjiangAttractions } from '../data/xinjiangAttractions'
import { faqData } from '../data/faqData'

const heroImages = [
  'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1600&h=900&fit=crop',
  'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=1600&h=900&fit=crop',
]

const travelEssentials = [
  {
    icon: '🛂',
    title: 'Visa Info',
    description: 'Everything you need to know about Chinese visas, including the 144-hour visa-free transit option for eligible travelers.',
  },
  {
    icon: '💳',
    title: 'How to Pay',
    description: 'Set up Alipay and WeChat Pay before you arrive — China is virtually cashless and these apps are essential.',
  },
  {
    icon: '🚄',
    title: 'Getting Around',
    description: 'Navigate China like a pro with high-speed rail, modern subways, and ride-hailing apps that work in English.',
  },
  {
    icon: '🌤️',
    title: 'Weather & Packing',
    description: 'Seasonal guides and packing tips across China, from humid summers to mountain weather and desert sun.',
  },
]

const destinations = [
  {
    title: 'Beijing',
    chineseTitle: '北京',
    description: 'Walk in the footsteps of emperors through the Forbidden City, stand atop the Great Wall as it stretches endlessly across mountain ridges, and lose yourself in the ancient hutong alleyways where old Beijing still thrives. The imperial capital is a city where 3,000 years of history and cutting-edge modernity exist side by side.',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&h=600&fit=crop',
    link: '/beijing',
  },
  {
    title: 'Chengdu',
    chineseTitle: '成都',
    description: 'Meet adorable giant pandas, savor the legendary numbing-spicy flavors of Sichuan cuisine, and discover a city that has perfected the art of living well. Chengdu\'s laid-back charm, ancient tea houses, and vibrant street life make it one of China\'s most lovable cities.',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&h=600&fit=crop',
    link: '/chengdu',
  },
  {
    title: 'Xinjiang',
    chineseTitle: '新疆',
    description: 'Travel across China\'s far west, where Silk Road cities, alpine lakes, desert highways, and Tianshan mountain views create routes on a grand scale. Xinjiang is for travelers who want big landscapes, layered cultures, and the feeling of distance in every direction.',
    image: 'https://images.unsplash.com/photo-1774686030653-770296f85625?w=800&h=600&fit=crop',
    link: '/xinjiang',
  },
]

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&h=800&fit=crop', alt: 'Great Wall at sunset' },
  { url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=400&fit=crop', alt: 'Forbidden City' },
  { url: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&h=400&fit=crop', alt: 'Giant Panda' },
  { url: 'https://images.unsplash.com/photo-1774686030653-770296f85625?w=600&h=400&fit=crop', alt: 'Kanas Lake in Xinjiang' },
  { url: 'https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=600&h=400&fit=crop', alt: 'Temple of Heaven' },
  { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&h=400&fit=crop', alt: 'Chengdu street scene' },
  { url: 'https://images.unsplash.com/photo-1599707367812-042b7e3a6345?w=600&h=800&fit=crop', alt: 'Summer Palace' },
  { url: 'https://images.unsplash.com/photo-1546956223-7ead4ec7b858?w=600&h=400&fit=crop', alt: 'Mount Qingcheng' },
  { url: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=600&h=400&fit=crop', alt: 'Chinese landscape' },
]

export default function Home() {
  const fadeRef = useFadeIn()

  const beijingHighlights = beijingAttractions.slice(0, 4)
  const chengduHighlights = chengduAttractions.slice(0, 4)
  const xinjiangHighlights = xinjiangAttractions.slice(0, 4)
  const destinationHighlights = [
    { name: 'Beijing', basePath: '/beijing', attractions: beijingHighlights },
    { name: 'Chengdu', basePath: '/chengdu', attractions: chengduHighlights },
    { name: 'Xinjiang', basePath: '/xinjiang', attractions: xinjiangHighlights },
  ]

  return (
    <div ref={fadeRef}>
      <HeroSection
        image={heroImages[0]}
        title="Discover the Magic of China"
        subtitle="From ancient wonders to modern marvels — your journey starts here"
        primaryCta="Explore Destinations"
        primaryCtaLink="/#featured-destinations"
        secondaryCta="Read Travel Guide"
        secondaryCtaLink="/travel-guide"
      />

      {/* Featured Destinations */}
      <section id="featured-destinations" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center mb-12 fade-in">
          <h2 className="section-title">Featured Destinations</h2>
          <p className="section-subtitle">
            Iconic cities, western frontiers, and unforgettable routes
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.title}
              {...destination}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* Must-See Highlights */}
      <section className="py-16 md:py-24 bg-warm-gray">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Must-See Highlights</h2>
            <p className="section-subtitle">
              The essential experiences you cannot miss
            </p>
          </div>

          {destinationHighlights.map((destination, index) => (
            <div key={destination.name} className={index < destinationHighlights.length - 1 ? 'mb-12' : ''}>
              <h3 className="text-2xl font-display font-bold text-deep-blue mb-6 fade-in flex items-center gap-2">
                <span className="w-8 h-1 bg-china-red rounded"></span>
                {destination.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {destination.attractions.map((attraction) => (
                  <AttractionCard
                    key={attraction.id}
                    attraction={attraction}
                    basePath={destination.basePath}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Essentials */}
      <section className="py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Travel Essentials</h2>
            <p className="section-subtitle">
              Everything you need to know before you go
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {travelEssentials.map((item) => (
              <InfoCard key={item.title} {...item} />
            ))}
          </div>
          <div className="text-center mt-10 fade-in">
            <Link to="/travel-guide" className="btn-primary inline-flex items-center gap-2">
              Read Full Travel Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Snapshots Gallery */}
      <section className="py-16 md:py-24 bg-warm-gray">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Snapshots of China</h2>
            <p className="section-subtitle">
              A visual journey through Beijing, Chengdu, and Xinjiang
            </p>
          </div>
          <SnapshotGallery images={galleryImages} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-12 fade-in">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common travel questions
            </p>
          </div>
          <div className="space-y-3">
            {faqData.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
