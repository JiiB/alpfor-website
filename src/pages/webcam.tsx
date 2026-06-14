import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Webcam() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('pages.webcam.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{t('pages.webcam.body')}</p>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.webcam.body2')}</p>
      </article>
    </>
  )
}
