export default function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md card-hover fade-in text-center group">
      <div className="w-16 h-16 bg-china-red/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-china-red/20 transition-colors">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-lg font-display font-bold text-deep-blue mb-2">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
