import { Link } from 'react-router-dom'

export default function DestinationCard({ title, chineseTitle, description, image, link, reverse = false }) {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-6 md:gap-10 items-center fade-in`}>
      {/* Image */}
      <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-china-red/90 text-white text-sm font-medium px-3 py-1 rounded-full">
            {chineseTitle}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-deep-blue">
          {title}
        </h2>
        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
          {description}
        </p>
        <Link
          to={link}
          className="btn-primary inline-flex items-center gap-2 text-base"
        >
          Explore {title}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
