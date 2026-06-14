import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'
import { useI18n } from '../i18n.tsx'

export default function Kontakt() {
  const { t } = useTranslation()
  const { getLng } = useI18n()
  const isDE = getLng() === 'de'

  return (
    <>
      <PageBanner title={t('sections.contact.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-reading)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-lg">
          {isDE
            ? 'Bitte beachten Sie, dass ALPFOR auf einer non-profit Basis funktioniert und wissenschaftliche Mitarbeiter für den Betrieb der Station zuständig sind. Dementsprechend gibt es keine Telefon- oder Bürozeiten, aber wir sind per Mail erreichbar:'
            : 'Please note that ALPFOR operates on a non-profit basis and scientific staff are responsible for running the station. Accordingly there are no telephone or office hours, but we can be reached by email:'}
        </p>

        <div className="font-sans text-base text-alpfor-forest leading-relaxed mb-lg">
          <p className="mb-xs">
            Erika Hiltbrunner:{' '}
            <a href="mailto:erika.hiltbrunner@unibas.ch" className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              erika.hiltbrunner@unibas.ch
            </a>
          </p>
          <p>
            Christian Körner:{' '}
            <a href="mailto:ch.koerner@unibas.ch" className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              ch.koerner@unibas.ch
            </a>
          </p>
        </div>

        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">
          {isDE
            ? 'Sie können sich auch bei der Geschäftsstelle in Basel melden:'
            : 'You can also contact the administrative office in Basel:'}
        </p>

        <address className="not-italic font-sans text-base text-alpfor-forest leading-relaxed">
          <p className="font-semibold">ALPFOR</p>
          <p>Universität Basel</p>
          <p>Departement Umweltwissenschaften</p>
          <p>Schönbeinstrasse 6</p>
          <p className="mb-sm">4056 Basel (Schweiz)</p>
          <p>
            <a href="mailto:sekretariat-botschoen@unibas.ch" className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              sekretariat-botschoen@unibas.ch
            </a>
          </p>
          <p>
            <a href="tel:+41612072311" className="text-alpfor-blue hover:text-alpfor-forest transition-colors">
              +41 61 207 23 11
            </a>
          </p>
        </address>
      </article>
    </>
  )
}
