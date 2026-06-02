import BackToTop from '../components/BackToTop'
import useFadeIn from '../hooks/useFadeIn'

const advantages = [
  'Quick response - 24/7 customer support, always ready to help',
  'High standard of service - Consistent quality from inquiry to drop-off',
  'No shopping stops, no hidden costs - Truly transparent pricing',
  'Very experienced guide & driver - Professional, knowledgeable, and reliable',
  'Comfortable air-conditioned vehicles - Safe and pleasant travel in every season',
]

const teamMembers = [
  { name: 'Leo Li', role: 'CEO', featured: true },
  { name: 'Luisa Liu', role: 'English guide', featured: true },
  { name: 'Jack Zhang', role: 'English / Italian guide', note: '10+ years leading tours' },
  { name: 'Jack Wang', role: 'Spanish guide' },
  { name: 'Wendy Liu', role: 'France guide' },
  { name: 'Linda Zhao', role: 'English guide' },
  { name: 'Jason Liu', role: 'English guide' },
  { name: 'Elisa Ma', role: 'Italian guide' },
  { name: 'Lucia Lin', role: 'Italian guide' },
  { name: 'Ethan Lin', role: 'France guide' },
  { name: 'James Liu', role: 'Spanish guide' },
  { name: 'Lucas Zhou', role: 'Driver leader' },
  { name: 'Anna Su', role: 'Planner' },
  { name: 'Roy Liu', role: 'Planner' },
  { name: 'David Zhang', role: 'Planner' },
  { name: 'Mark Liu', role: 'Business connection' },
]

const comments = [
  'We traveled to China with our child and were so lucky to have Mr. Zhang as our guide. He did not just show us the Great Wall and Forbidden City - he brought them to life with stories and history. The local market tour was a highlight for our whole family. We learned so much about Chinese culture and daily life. Mr. Zhang and his team were warm, professional, and incredibly kind to our kid. We will definitely come back and book with him again. Highly recommended!',
  'We have had many tour guides in different countries, but Mr. Wang stands out for his deep knowledge of Chinese history and philosophy. At the Forbidden City, he did not just tell us the names of halls - he explained the ideas of Confucius and how they shaped the emperor’s rule. On the Great Wall, he spoke about military strategies and ancient border control. Our minds were as enriched as our eyes. This is the guide you want if you truly want to understand China.',
  'Before meeting Mr. Zhang, we almost booked a big group tour. Thank goodness we did not. With Mr. Zhang and his small team, we never felt rushed or herded like sheep. He gave us time to linger where we wanted - our child spent 20 minutes watching a kite maker in a park, and Mr. Zhang did not mind at all. He also avoided all the tourist-trap shops. Every recommendation he made was honest and high-quality. If you hate rigid itineraries and pushy sales, go with Mr. Zhang.',
  'This was the trip of a lifetime for our family, thanks to Mr. Li. He is not just a guide - he is a storyteller, a teacher, and a friend. He took us beyond the tourist spots: local markets, hidden alleys, and family-run eateries. Our child was engaged the whole time, asking questions and learning about Chinese culture. The Great Wall and Forbidden City were incredible, but Mr. Zhang’s warmth made the real difference. We will definitely return and will recommend him to everyone we know.',
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function TeamMemberCard({ member }) {
  return (
    <article className="rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-deep-blue/5 transition-shadow hover:shadow-md">
      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-deep-blue text-xl font-display font-bold text-gold shadow-inner">
        {getInitials(member.name)}
      </div>
      <h3 className="font-display text-lg font-bold text-deep-blue">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-china-red">{member.role}</p>
      {member.note && (
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-gray-500">{member.note}</p>
      )}
      {member.featured && (
        <p className="mt-3 rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-deep-blue">
          Photo ready
        </p>
      )}
    </article>
  )
}

export default function About() {
  const fadeRef = useFadeIn()

  return (
    <div ref={fadeRef}>
      <section className="bg-deep-blue px-4 pb-16 pt-32 text-center text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
            Chinatravel.com
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Your trusted local travel expert for memorable journeys across China
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-china-red">Who We Are</p>
            <h2 className="section-title mt-3">Local Expertise, Thoughtful Service</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 fade-in">
            <p className="text-xl font-medium text-deep-blue">
              Your trusted local travel expert, offering quality tour packages across China’s top cities.
            </p>
            <p>
              Founded in 2012 and headquartered in Beijing, Chinatravel.com is one of China’s leading online travel agencies. We specialize in providing professional, distinctive, and diverse travel services for inbound visitors, turning every trip into a truly memorable vacation.
            </p>
            <p>
              With over a decade of experience, honest business practices, and efficient customer service, we have earned an excellent reputation among travelers from around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm-gray py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-china-red">Why Choose Us</p>
            <h2 className="section-title mt-3">Just Go. We’ll Handle the Rest.</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {advantages.map((advantage, index) => (
              <div key={advantage} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-deep-blue/5 fade-in">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-china-red text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-gray-700">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-china-red">Our Team</p>
            <h2 className="section-title mt-3">Guides, Planners, and Drivers You Can Trust</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep-blue py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center fade-in">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">Leave a Comment</p>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Traveler Stories</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {comments.map((comment) => (
              <blockquote key={comment.slice(0, 40)} className="rounded-xl bg-white/10 p-6 text-white/85 shadow-sm ring-1 ring-white/10 fade-in">
                <p className="leading-relaxed">“{comment}”</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <BackToTop />
    </div>
  )
}
