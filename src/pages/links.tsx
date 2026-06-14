import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

const externalLinks = [
  { label: 'University of Basel — Department of Environmental Sciences', href: 'https://duw.unibas.ch' },
  { label: 'GLORIA — Global Observation Research Initiative in Alpine Environments', href: 'https://gloria.ac.at' },
  { label: 'Swiss National Park', href: 'https://www.nationalpark.ch' },
  { label: 'MeteoSwiss', href: 'https://www.meteoswiss.admin.ch' },
  { label: 'PERMOS — Swiss Permafrost Monitoring Network', href: 'https://www.permos.ch' },
  { label: 'InfoFlora — National Data and Information Centre for the Swiss Flora', href: 'https://www.infoflora.ch' },
  { label: 'SwissBIOTA', href: 'https://www.swissbiota.ch' },
]

export default function Links() {
  const { t } = useTranslation()
  return (
    <>
      <PageBanner title={t('pages.links.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">
          {t('pages.links.body')}
        </p>
        <ul className="flex flex-col gap-sm">
          {externalLinks.map(link => (
            <li key={link.href} className="border-t border-alpfor-rock/25 pt-sm">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base text-alpfor-blue hover:text-alpfor-forest transition-colors"
              >
                {link.label}
              </a>
              <p className="font-sans text-sm text-alpfor-rock mt-xs">{link.href}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  )
}
