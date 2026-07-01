import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Lightbox } from '../components/Lightbox.tsx'
import { PageBanner } from '../components/PageBanner.tsx'
import img1 from '../assets/geology/mountain_hdr.webp'
import img2 from '../assets/geology/more_mountains_furka_pass.webp'
import img3 from '../assets/geology/gletscher.webp'
import img4 from '../assets/geology/mountain.webp'
import img5 from '../assets/geology/muttbach.webp'
import img6 from '../assets/geology/alpfor_with_mountains.webp'

const images = [img1, img2, img3, img4, img5, img6]

export default function Geologie() {
  const { t } = useTranslation()
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <PageBanner title={t('sections.geology.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">
          {t('sections.geology.body')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-md">
          {images.map((src, i) => (
            <button key={i} type="button" onClick={() => setLightbox({ src, alt: t('sections.geology.title') })} className="block w-full cursor-zoom-in">
              <img src={src} alt={t('sections.geology.title')} className="w-full rounded-lg object-cover aspect-[4/3]" loading="lazy" />
            </button>
          ))}
        </div>
      </article>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  )
}
