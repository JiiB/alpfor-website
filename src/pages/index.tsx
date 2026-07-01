import { useEffect, useState } from 'react'

import { Lightbox } from '../components/Lightbox.tsx'
import gletscherImg from '../assets/misc/gletschervorfeld.webp'
import hotspotPdf from '../assets/pdf/alpfor furka hotspot WEB 2018.pdf?url'
import img1 from '../assets/background/furka-summer.webp'
import img2 from '../assets/background/IMG_3036.webp'
import img3 from '../assets/background/IMG_3046.webp'
import stationImg from '../assets/misc/alpfor_station.webp'
import summerSchoolPdf from '../assets/pdf/Flyer_SummerSchool2026.pdf?url'
import { useTranslation } from 'react-i18next'

const slides = [img1, img2, img3]

const newsItems = [
  { label: 'HOTSPOT FURKA — Biologische Vielfalt im Gebirge', href: hotspotPdf },
  { label: 'Alpine Plant Ecology — Summer School 2026', href: summerSchoolPdf },
]

const PdfIcon = ({ size = 22 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 256 256"
    className="shrink-0 mt-[2px] text-alpfor-orange"
  >
    <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
  </svg>
)

export default function Index() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Full-bleed hero slideshow */}
      <div className="relative overflow-hidden" style={{ height: '100svh', minHeight: '480px' }}>
        {slides.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === active ? 1 : 0 }}
          />
        ))}

        {/* Top gradient scrim for header legibility */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{ height: '240px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
        />

        {/* Bottom gradient scrim */}
        <div
          className="absolute inset-x-0 bottom-0 z-10 pointer-events-none"
          style={{ height: '280px', background: 'linear-gradient(to top, rgba(0,20,50,0.72) 0%, transparent 100%)' }}
        />

        {/* Bottom-left corner gradient for news panel */}
        <div
          className="absolute bottom-0 left-0 z-10 pointer-events-none"
          style={{ width: '520px', height: '420px', background: 'radial-gradient(ellipse at bottom left, rgba(0,20,50,0.70) 0%, transparent 70%)' }}
        />

        {/* News panel — floating, left-aligned, above bottom */}
        <div className="absolute left-lg z-20" style={{ bottom: '80px', maxWidth: 'calc(100% - var(--spacing-lg) * 2)' }}>
          <h2 className="font-heading text-4xl font-bold text-white/70 mb-md leading-none">
            {t('news.title')}
          </h2>
          <ul className="flex flex-col gap-sm">
            {newsItems.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-sm text-white/85 hover:text-white transition-colors"
                >
                  <PdfIcon />
                  <span className="font-sans text-base leading-snug">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to content"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70 hover:text-white transition-colors"
        >
          <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
            <path d="M6 10l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* About section */}
      <article
        className="mx-auto px-lg py-xxl"
        style={{ maxWidth: 'var(--container-standard)' }}
      >
        <section id="about">
          <h2 className="font-heading text-4xl font-semibold text-alpfor-blue mb-md leading-tight">
            {t('sections.about.title')}
          </h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">
            {t('sections.about.body')}
          </p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">
            {t('sections.about.body2')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <button type="button" onClick={() => setLightbox({ src: stationImg, alt: 'ALPFOR Station' })} className="block w-full cursor-zoom-in">
              <img src={stationImg} alt="ALPFOR Station" className="w-full aspect-[3/2] object-cover rounded-lg" />
            </button>
            <button type="button" onClick={() => setLightbox({ src: gletscherImg, alt: 'Gletschervorfeld Furka' })} className="block w-full cursor-zoom-in">
              <img src={gletscherImg} alt="Gletschervorfeld Furka" className="w-full aspect-[3/2] object-cover rounded-lg" />
            </button>
          </div>
        </section>
      </article>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  )
}
