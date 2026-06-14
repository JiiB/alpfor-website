import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Impressum() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.impressum.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-reading)' }}>
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
            {t('pages.impressum.publisherHeading')}
          </h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.publisherName')}</p>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.publisherLine2')}</p>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.publisherAddress')}</p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
            {t('pages.impressum.creditsHeading')}
          </h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.creditsText')}</p>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed mt-sm">
            {t('pages.impressum.creditsContact')}{' '}
            <a
              href={`mailto:${t('pages.impressum.creditsEmail')}`}
              className="text-alpfor-blue hover:text-alpfor-forest transition-colors"
            >
              {t('pages.impressum.creditsEmail')}
            </a>
          </p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
            {t('pages.impressum.disclaimerHeading')}
          </h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.disclaimer')}</p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
            {t('pages.impressum.photoHeading')}
          </h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.photoText')}</p>
        </section>
      </article>
    </>
  )
}
