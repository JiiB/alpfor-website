import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Geologie() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('sections.geology.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">
          {t('sections.geology.body')}
        </p>
      </article>
    </>
  )
}
