import { useEffect, useMemo, useRef, useState } from 'react'
import * as echarts from 'echarts'
import chinaGeoJson from 'china-map-data/china'
import BackToTop from '../components/BackToTop'
import { chinaProvinces } from '../data/chinaMapData'

const provincePhotoModules = import.meta.glob('../../pic/province/*/*.{jpg,jpeg,png,webp,avif,gif,JPG,JPEG,PNG,WEBP,AVIF,GIF}', {
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
    const match = path.match(/\/pic\/province\/([^/]+)\/([^/]+)$/)
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

const minProvincePhotos = 5
const maxProvincePhotos = 7

function resolveImages(provinceId) {
  const imageMap = new Map()

  ;(provinceImageLibrary[provinceId] || []).forEach((image) => {
    if (!image?.url || imageMap.has(image.url)) {
      return
    }

    imageMap.set(image.url, image)
  })

  return Array.from(imageMap.values())
}

function pickRandomImages(images) {
  if (images.length <= minProvincePhotos) {
    return images
  }

  const photoCount = Math.min(
    images.length,
    minProvincePhotos + Math.floor(Math.random() * (maxProvincePhotos - minProvincePhotos + 1))
  )

  return [...images]
    .sort(() => Math.random() - 0.5)
    .slice(0, photoCount)
}

function resolveProvinceByChineseName(name) {
  return chinaProvinces.find((province) => province.chineseName === name)
}

function getProvinceDisplayName(province) {
  return province.id === 'beijing' ? `★ ${province.name}` : province.name
}

function ProvinceDisplayName({ province }) {
  if (province.id !== 'beijing') {
    return province.name
  }

  return (
    <span className="inline-flex items-center gap-1">
      <span className="text-[#FFD400] drop-shadow-[0_1px_2px_rgba(91,59,0,0.65)]" aria-label="Capital">★</span>
      {province.name}
    </span>
  )
}

function formatProvinceLabel(params) {
  const province = resolveProvinceByChineseName(params.name)
  return province?.id === 'beijing' ? `{capital|★} ${province.name}` : province?.name || params.name
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
  { x: 50, y: 11, rotate: 2, orientation: 'landscape' },
  { x: 13, y: 51, rotate: 4, orientation: 'landscape' },
  { x: 87, y: 51, rotate: -5, orientation: 'landscape' },
  { x: 18, y: 80, rotate: -3, orientation: 'landscape' },
  { x: 82, y: 80, rotate: 4, orientation: 'landscape' },
]

function buildProvincePhotos(activeProvince, images, orientationByUrl) {
  return images.map((image, index) => ({
    ...photoSlots[index],
    ...image,
    id: `${activeProvince.id}-${image.title}`,
    province: activeProvince,
    active: true,
    orientation: orientationByUrl[image.url] || image.orientation || 'landscape',
  })).slice(0, photoSlots.length)
}

function PhotoWall({ photos, onOpenImage, onImageLoad }) {
  return (
    <div className="relative z-30 mt-5 grid grid-cols-2 gap-3 md:static md:mt-0 md:block">
      {photos.map((photo) => (
        <button
          key={photo.id}
          type="button"
          onClick={() => onOpenImage(photo)}
          className={`origin-center rounded-sm bg-white p-2 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2 md:absolute md:z-30 md:left-[var(--photo-left)] md:top-[var(--photo-top)] md:[transform:translate(-50%,-50%)_rotate(var(--photo-rotate))] md:hover:[transform:translate(-50%,-50%)_rotate(var(--photo-rotate))_scale(1.16)] ${
            photo.orientation === 'landscape'
              ? 'w-full md:w-[clamp(160px,14vw,260px)]'
              : 'mx-auto w-[76%] md:w-[clamp(120px,10vw,180px)]'
          } ${
            'shadow-2xl ring-2 ring-china-red hover:scale-105 md:hover:scale-100'
          }`}
          style={{
            '--photo-left': `${photo.x}%`,
            '--photo-top': `${photo.y}%`,
            '--photo-rotate': `${photo.rotate}deg`,
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
            <ProvinceDisplayName province={photo.province} />
          </span>
        </button>
      ))}
    </div>
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
          <p className="font-display text-xl font-bold text-deep-blue">
            <ProvinceDisplayName province={photo.province} />
          </p>
          <p className="text-sm text-gray-600">
            Travel memory
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ChinaMap() {
  const chartRef = useRef(null)
  const chartInstanceRef = useRef(null)
  const mapOptionInitializedRef = useRef(false)
  const [selectedProvinceId, setSelectedProvinceId] = useState('beijing')
  const [hoverProvinceId, setHoverProvinceId] = useState(null)
  const [previewPhoto, setPreviewPhoto] = useState(null)
  const [orientationByUrl, setOrientationByUrl] = useState({})
  const selectedProvince = getProvince(selectedProvinceId) || chinaProvinces[0]
  const displayProvince = getProvince(hoverProvinceId) || selectedProvince
  const activeImages = useMemo(
    () => pickRandomImages(resolveImages(selectedProvince.id)),
    [selectedProvince.id]
  )
  const wallPhotos = useMemo(
    () => buildProvincePhotos(selectedProvince, activeImages, orientationByUrl),
    [selectedProvince, activeImages, orientationByUrl]
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
        setHoverProvinceId(province.id)
      }
    }

    const handleProvinceSelect = (params) => {
      const province = resolveProvinceByChineseName(params.name)
      if (province) {
        setSelectedProvinceId(province.id)
        setHoverProvinceId(null)
      }
    }

    const handleMapOut = () => {
      setHoverProvinceId(null)
    }

    chart.on('mouseover', 'series.map', handleProvinceHover)
    chart.on('click', 'series.map', handleProvinceSelect)
    chart.on('globalout', handleMapOut)

    const handleResize = () => chart.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      chart.dispose()
      chartInstanceRef.current = null
      mapOptionInitializedRef.current = false
    }
  }, [])

  useEffect(() => {
    const chart = chartInstanceRef.current
    if (!chart) {
      return
    }

    if (!mapOptionInitializedRef.current) {
      chart.setOption({
        backgroundColor: 'transparent',
        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            const province = resolveProvinceByChineseName(params.name)
            return province
              ? `${province.name}<br/>${province.region}`
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
            formatter: formatProvinceLabel,
            rich: {
              capital: {
                color: '#FFD400',
                fontWeight: 'bold',
                fontSize: 14,
              },
            },
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
              formatter: formatProvinceLabel,
              rich: {
                capital: {
                  color: '#FFE66D',
                  fontWeight: 'bold',
                  fontSize: 15,
                },
              },
            },
            itemStyle: {
              areaColor: '#C41E3A',
            },
          },
        },
        series: [
          {
            id: 'china-province-series',
            type: 'map',
            map: 'china',
            geoIndex: 0,
            name: 'China Provinces',
            selectedMode: false,
            label: {
              show: true,
              formatter: formatProvinceLabel,
              rich: {
                capital: {
                  color: '#FFD400',
                  fontWeight: 'bold',
                  fontSize: 14,
                },
              },
            },
            emphasis: {
              label: {
                show: true,
                formatter: formatProvinceLabel,
                rich: {
                  capital: {
                    color: '#FFE66D',
                    fontWeight: 'bold',
                    fontSize: 15,
                  },
                },
              },
            },
            data: buildMapData(displayProvince.id),
          },
        ],
      })
      mapOptionInitializedRef.current = true
    } else {
      chart.setOption({
        series: [
          {
            id: 'china-province-series',
            data: buildMapData(displayProvince.id),
          },
        ],
      })
    }

    chart.dispatchAction({ type: 'downplay', seriesIndex: 0 })
    chart.dispatchAction({ type: 'highlight', seriesIndex: 0, name: displayProvince.chineseName })
  }, [displayProvince])

  return (
    <div className="min-h-screen bg-[#f5f0eb] pt-20">
      <section className="px-3 py-5 sm:px-5 lg:px-6 lg:py-6">
        <div className="mx-auto w-full">
          <div className="mb-5 text-center lg:mb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-china-red font-semibold">
              Province Photo Wall
            </p>
            <h1 className="section-title mb-3">China Travel Memory Map</h1>
            <p className="section-subtitle">
              Hover to highlight a province, click to switch its photos, then select a photo for a closer look.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-deep-blue/10 bg-[#d9d0c3] p-4 shadow-2xl md:h-[calc(100vh-13rem)] md:min-h-[760px] lg:h-[calc(100vh-12rem)]">
            <div className="pointer-events-none absolute inset-4 rounded-2xl border border-white/50"></div>

            <svg className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
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

            <div className="relative z-20 mt-5 h-[56vh] min-h-[360px] overflow-hidden rounded-2xl border border-white/60 bg-[#ebe3d6] shadow-2xl md:absolute md:left-1/2 md:top-[45%] md:mt-0 md:h-[min(78%,820px)] md:w-[min(72%,1120px)] md:min-h-0 md:-translate-x-1/2 md:-translate-y-1/2 xl:w-[min(68%,1280px)]">
              <div ref={chartRef} className="h-full w-full" aria-label="Interactive ECharts China map" />
              <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-deep-blue shadow">
                <ProvinceDisplayName province={displayProvince} />
              </div>
            </div>

            <PhotoWall
              photos={wallPhotos}
              onOpenImage={setPreviewPhoto}
              onImageLoad={handleImageLoad}
            />

            <div className="relative z-40 mt-5 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur md:absolute md:bottom-5 md:left-1/2 md:mt-0 md:w-[min(92%,900px)] md:-translate-x-1/2">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-china-red font-semibold">
                    {selectedProvince.region}
                  </p>
                  <h2 className="text-2xl font-display font-bold text-deep-blue">
                    <ProvinceDisplayName province={selectedProvince} />
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeImages.length > 0 ? activeImages.map((image) => (
                    <button
                      key={image.title}
                      type="button"
                      onClick={() => setPreviewPhoto({ ...image, province: selectedProvince })}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-warm-gray p-1 transition-colors hover:bg-china-red focus:outline-none focus:ring-2 focus:ring-china-red focus:ring-offset-2"
                      aria-label={`Open ${selectedProvince.name} photo`}
                    >
                      <img
                        src={image.url}
                        alt={image.title}
                        onLoad={(event) => handleImageLoad(image.url, event.currentTarget)}
                        className="h-8 w-8 rounded-full object-cover"
                      />
                    </button>
                  )) : (
                    <span className="rounded-full bg-warm-gray px-4 py-2 text-xs font-medium text-gray-500">
                      Add photos to pic/province/{selectedProvince.id}
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
