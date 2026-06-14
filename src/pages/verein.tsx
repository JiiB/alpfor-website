import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Verein() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.verein.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">
          {t('pages.verein.body')}
        </p>

        <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
          {t('pages.verein.personnelHeading')}
        </h2>
        <dl className="font-sans text-base text-alpfor-forest leading-relaxed mb-xl grid gap-xs" style={{ gridTemplateColumns: 'auto 1fr' }}>
          <dt className="text-alpfor-rock pr-lg">{t('pages.verein.executiveLabel')}:</dt>
          <dd className="font-medium">Dr. Erika Hiltbrunner</dd>
          <dt className="text-alpfor-rock pr-lg">{t('pages.verein.presidentLabel')}:</dt>
          <dd className="font-medium">Prof. em. Dr. Christian Körner</dd>
          <dt className="text-alpfor-rock pr-lg">{t('pages.verein.vpLabel')}:</dt>
          <dd className="font-medium">Prof. em. Dr. Jürg Stöcklin</dd>
          <dt className="text-alpfor-rock pr-lg">{t('pages.verein.financeLabel')}:</dt>
          <dd className="font-medium">Franziska Grob</dd>
        </dl>

        <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
          {t('pages.verein.statutesHeading')}
        </h2>
        <ul className="font-sans text-base text-alpfor-forest leading-relaxed flex flex-col gap-sm list-disc pl-lg">
          <li>{t('pages.verein.statute1')}</li>
          <li>{t('pages.verein.statute2')}</li>
          <li>{t('pages.verein.statute3')}</li>
        </ul>
      </article>
    </>
  )
}
