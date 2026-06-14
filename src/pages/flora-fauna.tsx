import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function FloraFauna() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('sections.biodiversity.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{t('sections.biodiversity.body')}</p>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('sections.biodiversity.body2')}</p>
      </article>
    </>
  )
}
