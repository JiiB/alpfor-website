import { PageBanner } from '../components/PageBanner.tsx'
import furkaMap from '../assets/misc/furka_map.webp'
import { useTranslation } from 'react-i18next'

export default function Karte() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.karte.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <figure>
          <a href="https://maps.app.goo.gl/aMen1Rcu3KkAZXnG7" target="_blank" rel="noopener noreferrer">
            <img
              src={furkaMap}
              alt="Karte ALPFOR Furkapass"
              className="w-full rounded-lg shadow-md"
            />
          </a>
          <figcaption className="mt-sm text-sm text-alpfor-rock italic text-center">
            {t('pages.karte.caption')}
          </figcaption>
        </figure>
      </article>
    </>
  )
}
