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
        <dl className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl grid grid-cols-1 sm:grid-cols-[auto_1fr] sm:gap-x-lg sm:gap-y-xs">
          {([
            [t('pages.verein.executiveLabel'), 'Dr. Erika Hiltbrunner'],
            [t('pages.verein.presidentLabel'), 'Prof. em. Dr. Christian Körner'],
            [t('pages.verein.vpLabel'), 'Prof. em. Dr. Jürg Stöcklin'],
            [t('pages.verein.financeLabel'), 'Franziska Grob'],
          ] as [string, string][]).map(([label, name]) => (
            <div key={name} className="contents">
              <dt className="text-alpfor-rock">{label}:</dt>
              <dd className="font-medium mb-sm sm:mb-0">{name}</dd>
            </div>
          ))}
        </dl>

        <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">
          {t('pages.verein.statutesHeading')}
        </h2>
        <ul className="font-sans text-lg text-alpfor-forest leading-relaxed flex flex-col gap-sm list-disc pl-lg">
          <li>{t('pages.verein.statute1')}</li>
          <li>{t('pages.verein.statute2')}</li>
          <li>{t('pages.verein.statute3')}</li>
        </ul>
      </article>
    </>
  )
}
