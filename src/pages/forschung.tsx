import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Forschung() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('sections.research.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{t('sections.research.body')}</p>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('sections.research.body2')}</p>
      </article>
    </>
  )
}
