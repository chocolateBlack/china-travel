export default function SnapshotGallery({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl group ${
            index === 0 || index === 5 ? 'row-span-2' : ''
          }`}
        >
          <img
            src={img.url}
            alt={img.alt}
            className="w-full h-full min-h-[180px] object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
            <p className="text-white text-sm font-medium p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              {img.alt}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
