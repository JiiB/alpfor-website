import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Kontakt() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('sections.contact.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        {t('sections.contact.body').split('\n').map((line, i) => (
          <p key={i} className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{line}</p>
        ))}
      </article>
    </>
  )
}
