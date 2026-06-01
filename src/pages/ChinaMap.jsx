import { useEffect, useMemo, useRef, useState } from 'react'
import * as echarts from 'echarts'
import chinaGeoJson from 'china-map-data/china'
import BackToTop from '../components/BackToTop'
import { chinaProvinces } from '../data/chinaMapData'

const provincePhotoModules = import.meta.glob('../../pic/*/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}', {
  eager: true,
  query: '?url',
  import: 'default',
})

function formatPhotoTitle(fileName) {
  const title = decodeURIComponent(fileName)
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

  return title || 'Travel Memory'
}

function buildProvinceImageLibrary() {
  return Object.entries(provincePhotoModules).reduce((library, [path, url]) => {
    const match = path.match(/\/pic\/([^/]+)\/([^/]+)$/)
    if (!match) {
      return library
    }

    const [, provinceId, fileName] = match
    const images = library[provinceId] || []
    images.push({
      title: formatPhotoTitle(fileName),
      url,
    })
    library[provinceId] = images.sort((a, b) => a.title.localeCompare(b.title))

    return library
  }, {})
}

const provinceImageLibrary = buildProvinceImageLibrary()

const regionColors = {
  North: '#E8C86A',
  Northeast: '#A8DADC',
  East: '#B7D8A8',
  Central: '#F2B5A7',
  South: '#9DD6C5',
  Southwest: '#C9B6E4',
  Northwest: '#E7C7A5',
}

function resolveImages(provinceId) {
  return provinceImageLibrary[provinceId] || []
}

function resolveProvinceByChineseName(name) {
  return chinaProvinces.find((province) => province.chineseName === name)
}

function getProvince(provinceId) {
  return chinaProvinces.find((province) => province.id === provinceId)
}

function buildMapData(activeProvinceId) {
  return chinaProvinces.map((province) => ({
    name: province.chineseName,
    value: province.id === activeProvinceId ? 100 : 30,
    itemStyle: {
      areaColor: province.id === activeProvinceId
        ? '#C41E3A'
        : regionColors[province.region] || '#D9D0C3',
      borderColor: '#ffffff',
      borderWidth: province.id === activeProvinceId ? 1.8 : 1,
    },
    emphasis: {
      itemStyle: {
        areaColor: '#C41E3A',
        borderColor: '#ffffff',
        borderWidth: 2,
      },
      label: {
        color: '#ffffff',
      },
    },
  }))
}

const photoSlots = [
  { x: 13, y: 19, rotate: -6 },
  { x: 87, y: 19, rotate: 5 },
  { x: 13, y: 51, rotate: 4, orientation: 'landscape' },
  { x: 87, y: 51, rotate: -5, orientation: 'landscape' },
  { x: 18, y: 80, rotate: -3, orientation: 'landscape' },
  { x: 82, y: 80, rotate: 4, orientation: 'landscape' },
]

function buildProvincePhotos(activeProvince, orientationByUrl) {
  return resolveImages(activeProvince.id).map((image, index) => ({
    ...photoSlots[index],
    ...image,
    id: `${activeProvince.id}-${image.title}`,
    province: activeProvince,
    active: true,
    orientation: orientationByUrl[image.url] || image.orientation || 'landscape',
  })).slice(0, photoSlots.length)
}

function PhotoWall({ photos, onActivateProvince, onOpenImage, onImageLoad }) {
  return (
    <>
      {photos.map((photo) => (
        <button
          key={photo.id}
          type="button"
          onFocus={() => onActivateProvince(photo.province.id)}
          onClick={() => onOpenImage(photo)}
          className={`absolute z-30 origin-center rounded-sm bg-white p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2 ${
            photo.orientation === 'landscape'
              ? 'w-[132px] sm:w-[168px] md:w-[210px]'
              : 'w-[96px] sm:w-[122px] md:w-[150px]'
          } ${
            'scale-110 shadow-2xl ring-2 ring-china-red hover:scale-125'
          }`}
          style={{
            left: `${photo.x}%`,
            top: `${photo.y}%`,
            transform: `translate(-50%, -50%) rotate(${photo.rotate}deg)`,
          }}
          aria-label={`View original image for ${photo.province.name}`}
        >
          <img
            src={photo.url}
            alt={`${photo.province.name} - ${photo.title}`}
            onLoad={(event) => onImageLoad(photo.url, event.currentTarget)}
            className={`w-full object-cover ${
              photo.orientation === 'landscape' ? 'aspect-[16/10]' : 'aspect-[4/5]'
            }`}
          />
          <span className="mt-2 block truncate text-xs font-semibold text-deep-blue">
            {photo.province.chineseName}
          </span>
        </button>
      ))}
    </>
  )
}

function ImageLightbox({ photo, onClose }) {
  if (!photo) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Original image preview"
      onClick={onClose}
    >
      <div className="relative max-h-[90vh] w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-deep-blue shadow-lg transition-colors hover:bg-white"
          aria-label="Close image preview"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
        <img
          src={photo.url}
          alt={`${photo.province.name} - ${photo.title}`}
          className="max-h-[82vh] w-full rounded-xl object-contain shadow-2xl"
        />
        <div className="mt-3 rounded-xl bg-white/95 px-4 py-3 shadow-xl">
          <p className="font-display text-xl font-bold text-deep-blue">{photo.title}</p>
          <p className="text-sm text-gray-600">
            {photo.province.name} / {photo.province.chineseName}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ChinaMap() {
  const chartRef = useRef(null)
  const chartInstanceRef = useRef(null)
  const [activeProvinceId, setActiveProvinceId] = useState('beijing')
  const [previewPhoto, setPreviewPhoto] = useState(null)
  const [orientationByUrl, setOrientationByUrl] = useState({})
  const activeProvince = getProvince(activeProvinceId) || chinaProvinces[0]
  const activeImages = useMemo(() => resolveImages(activeProvince.id), [activeProvince.id])
  const wallPhotos = useMemo(
    () => buildProvincePhotos(activeProvince, orientationByUrl),
    [activeProvince, orientationByUrl]
  )

  const handleImageLoad = (url, image) => {
    const orientation = image.naturalHeight > image.naturalWidth ? 'portrait' : 'landscape'
    setOrientationByUrl((current) => (
      current[url] === orientation ? current : { ...current, [url]: orientation }
    ))
  }

  useEffect(() => {
    echarts.registerMap('china', chinaGeoJson)
  }, [])

  useEffect(() => {
    if (!chartRef.current) {
      return undefined
    }

    const chart = echarts.init(chartRef.current)
    chartInstanceRef.current = chart

    const handleProvinceHover = (params) => {
      const province = resolveProvinceByChineseName(params.name)
      if (province) {
        setActiveProvinceId(province.id)
      }
    }

    chart.on('mouseover', 'series.map', handleProvinceHover)
    chart.on('click', 'series.map', handleProvinceHover)

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.dispose()
      chartInstanceRef.current = null
    }
  }, [])

  useEffect(() => {
    const chart = chartInstanceRef.current
    if (!chart) {
      return
    }

    chart.setOption({
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          const province = resolveProvinceByChineseName(params.name)
          return province
            ? `${province.name}<br/>${province.chineseName}<br/>${province.region}`
            : params.name
        },
      },
      geo: {
        map: 'china',
        roam: true,
        zoom: 1.15,
        scaleLimit: {
          min: 1,
          max: 4,
        },
        label: {
          show: true,
          color: '#1B2A4A',
          fontSize: 10,
        },
        itemStyle: {
          areaColor: '#D9D0C3',
          borderColor: '#ffffff',
          borderWidth: 1,
        },
        emphasis: {
          label: {
            show: true,
            color: '#ffffff',
            fontWeight: 'bold',
          },
          itemStyle: {
            areaColor: '#C41E3A',
          },
        },
      },
      series: [
        {
          type: 'map',
          map: 'china',
          geoIndex: 0,
          name: 'China Provinces',
          selectedMode: false,
          data: buildMapData(activeProvinceId),
        },
      ],
    }, true)

    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, name: activeProvince.chineseName })
  }, [activeProvince, activeProvinceId])

  return (
    <div className="min-h-screen bg-[#f5f0eb] pt-20">
      <section className="px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-china-red font-semibold">
              Province Photo Wall
            </p>
            <h1 className="section-title mb-3">China Travel Memory Map</h1>
            <p className="section-subtitle">
              Move across the provinces to reveal travel memories, then open each photo for a closer look.
            </p>
          </div>

          <div className="relative min-h-[820px] overflow-hidden rounded-2xl border border-deep-blue/10 bg-[#d9d0c3] p-4 shadow-2xl">
            <div className="absolute inset-4 rounded-2xl border border-white/50"></div>

            <svg className="pointer-events-none absolute inset-0 z-10 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {wallPhotos.map((photo) => (
                <line
                  key={photo.id}
                  x1={photo.province.x}
                  y1={photo.province.y}
                  x2={photo.x}
                  y2={photo.y}
                  stroke={photo.active ? '#C41E3A' : '#6b4f3c'}
                  strokeWidth={photo.active ? 0.35 : 0.12}
                  strokeOpacity={photo.active ? 0.8 : 0.22}
                />
              ))}
            </svg>

            <PhotoWall
              photos={wallPhotos}
              onActivateProvince={setActiveProvinceId}
              onOpenImage={setPreviewPhoto}
              onImageLoad={handleImageLoad}
            />

            <div className="absolute left-1/2 top-[45%] z-20 h-[620px] w-[min(58%,660px)] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-white/60 bg-[#ebe3d6] shadow-2xl">
              <div ref={chartRef} className="h-full w-full" aria-label="Interactive ECharts China map" />
              <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-deep-blue shadow">
                {activeProvince.name} / {activeProvince.chineseName}
              </div>
            </div>

            <div className="absolute bottom-5 left-1/2 z-40 w-[min(92%,760px)] -translate-x-1/2 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-china-red font-semibold">
                    {activeProvince.region}
                  </p>
                  <h2 className="text-2xl font-display font-bold text-deep-blue">
                    {activeProvince.name} / {activeProvince.chineseName}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeImages.length > 0 ? activeImages.map((image) => (
                    <button
                      key={image.title}
                      type="button"
                      onClick={() => setPreviewPhoto({ ...image, province: activeProvince })}
                      className="inline-flex items-center gap-2 rounded-full bg-warm-gray py-1 pl-1 pr-3 text-xs font-medium text-deep-blue transition-colors hover:bg-china-red hover:text-white"
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        onLoad={(event) => handleImageLoad(image.url, event.currentTarget)}
                        className="h-7 w-7 rounded-full object-cover"
                      />
                      {image.title}
                    </button>
                  )) : (
                    <span className="rounded-full bg-warm-gray px-4 py-2 text-xs font-medium text-gray-500">
                      No photos yet
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageLightbox photo={previewPhoto} onClose={() => setPreviewPhoto(null)} />
      <BackToTop />
    </div>
  )
}
