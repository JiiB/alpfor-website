import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Karte() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('pages.karte.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{t('pages.karte.body')}</p>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.karte.body2')}</p>
      </article>
    </>
  )
}
