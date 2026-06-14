import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import img1 from '../assets/background/furka-summer.jpg'
import img2 from '../assets/background/IMG_3036.jpeg'
import img3 from '../assets/background/IMG_3046.jpeg'

const slides = [img1, img2, img3]

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
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{ height: '240px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
        />
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
