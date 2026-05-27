import { Link } from 'react-router-dom'

export default function AttractionCard({ attraction, basePath = '' }) {
  const { name, chineseName, image, tagline, rating } = attraction

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md card-hover fade-in group">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-3 left-3">
          <span className="bg-gold/90 text-deep-blue text-xs font-semibold px-2 py-1 rounded-full">
            {chineseName}
          </span>
        </div>
        {rating && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-deep-blue text-sm font-semibold px-2 py-1 rounded-lg flex items-center gap-1">
            <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            {rating}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-bold text-deep-blue mb-1 group-hover:text-china-red transition-colors">
          {name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {tagline}
        </p>
        {basePath && (
          <Link
            to={`${basePath}#${attraction.id}`}
            className="mt-3 inline-flex items-center text-china-red text-sm font-medium hover:text-china-red-dark transition-colors"
          >
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  )
}
