import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'
import furkaMap from '../assets/misc/furka_map.png'

export default function Karte() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.karte.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <figure>
          <img
            src={furkaMap}
            alt="Karte ALPFOR Furkapass"
            className="w-full rounded-lg shadow-md"
          />
          <figcaption className="mt-sm text-sm text-alpfor-rock italic text-center">
            {t('pages.karte.caption')}
          </figcaption>
        </figure>
      </article>
    </>
  )
}
