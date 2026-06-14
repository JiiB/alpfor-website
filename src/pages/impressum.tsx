import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Impressum() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('pages.impressum.title')} />
      <article
        className="mx-auto px-lg py-xxl"
        style={{ maxWidth: 'var(--container-reading)' }}
      >
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
            {t('pages.impressum.responsible')}
          </h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.impressum.name')}</p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.impressum.institution')}</p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed">{t('pages.impressum.address')}</p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mt-sm">
            <a href={`mailto:${t('pages.impressum.email')}`} className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              {t('pages.impressum.email')}
            </a>
          </p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed">
            <a href="tel:+41612072311" className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              {t('pages.impressum.phone')}
            </a>
          </p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">Disclaimer</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.disclaimer')}</p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">Copyright</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{t('pages.impressum.copyright')}</p>
        </section>
      </article>
    </>
  )
}
