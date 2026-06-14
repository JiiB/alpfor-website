import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Verein() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('pages.verein.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{t('pages.verein.body')}</p>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.verein.body2')}</p>
      </article>
    </>
  )
}
