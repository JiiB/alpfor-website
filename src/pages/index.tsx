import { useTranslation } from 'react-i18next'
import heroImage from '../assets/background/furka-summer.jpg'

export default function Index() {
  const { t } = useTranslation()

  return (
    <>
      {/* Full-bleed hero */}
      <div className="relative">
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{ height: '240px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
        />
        <img
          src={heroImage}
          alt="Furka Pass in summer"
          className="w-full object-cover object-top"
          style={{ height: '100svh', minHeight: '480px' }}
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
