import { Link } from 'react-router-dom'

export default function HeroSection({
  image,
  title,
  subtitle,
  primaryCta,
  primaryCtaLink,
  secondaryCta,
  secondaryCtaLink,
  overlay = 'bg-black/40',
}) {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute inset-0 ${overlay}`}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 text-shadow-lg leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-body font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {primaryCta && (
            <Link
              to={primaryCtaLink || '#'}
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              {primaryCta}
            </Link>
          )}
          {secondaryCta && (
            <Link
              to={secondaryCtaLink || '#'}
              className="btn-outline text-lg px-8 py-4 inline-block"
            >
              {secondaryCta}
            </Link>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
