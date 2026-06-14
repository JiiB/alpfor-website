import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/background/furka-summer.jpg'
import img2 from '../assets/background/IMG_3036.jpeg'
import img3 from '../assets/background/IMG_3046.jpeg'
import hotspotPdf from '../assets/pdf/alpfor furka hotspot WEB 2018.pdf?url'
import summerSchoolPdf from '../assets/pdf/Flyer_SummerSchool2026.pdf?url'

const slides = [img1, img2, img3]

const newsItems = [
  { label: 'HOTSPOT FURKA — Biologische Vielfalt im Gebirge', href: hotspotPdf },
  { label: 'alpine plant ecology — Summer School 2026', href: summerSchoolPdf },
]

const PdfIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className="shrink-0 mt-[2px] text-alpfor-orange"
  >
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9 13h1.5a1 1 0 0 1 0 2H9v-4h1.5a1 1 0 0 1 0 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <path d="M14 11v4m0 0h1.5a1 1 0 0 0 0-2H14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Index() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {/* Full-bleed hero slideshow */}
      <div className="relative" style={{ height: '100svh', minHeight: '480px' }}>
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
        <div className="absolute left-lg z-20" style={{ bottom: '80px' }}>
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
                  <PdfIcon size={22} />
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70 hover:text-white transition-colors"
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
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed">
            {t('sections.about.body2')}
          </p>
        </section>
      </article>
    </>
  )
}
