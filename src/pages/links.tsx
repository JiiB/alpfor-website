import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

const linkGroups = [
  {
    key: 'korporation',
    links: [
      { label: 'Korporation Ursern — Talamman, Talkanzlei', href: 'http://www.gemeinde-andermatt.ch/xml_1/internet/de/application/d13/f23.cfm' },
      { label: 'Korporation Ursern — Kurze Darstellung', href: 'http://www.ew-ursern.ch/29.0.html' },
    ],
  },
  {
    key: 'gemeinden',
    links: [
      { label: 'Andermatt — Gemeinde & Tourismus', href: 'http://www.gemeinde-andermatt.ch/' },
      { label: 'Hospental — Tourismus', href: 'http://www.hospental.ch/' },
      { label: 'Realp — Gemeinde & Tourismus', href: 'http://www.realp.ch/' },
    ],
  },
  {
    key: 'nachbarn',
    links: [
      { label: 'Hotel Furkablick', href: 'http://www.swissguide.ch/de/Restaurant/Realp/1037292_hotelfurkablick.html' },
    ],
  },
  {
    key: 'unibasel',
    links: [
      { label: 'Universität Basel', href: 'https://www.unibas.ch' },
      { label: 'Departement Umweltwissenschaften, Universität Basel', href: 'https://duw.unibas.ch' },
      { label: 'Alpecole — e-Learning alpine Ökologie', href: 'https://www.alpandino.org' },
    ],
  },
  {
    key: 'wissenschaft',
    links: [
      { label: 'GMBA — Global Mountain Biodiversity Assessment', href: 'http://www.gmba.unibe.ch/' },
      { label: 'eLTER — European Long-Term Ecosystem Research', href: 'https://elter-ri.eu/' },
      { label: 'Nationalpark Hohe Tauern', href: 'https://hohetauern.at/de/' },
    ],
  },
] as const

export default function Links() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.links.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        {linkGroups.map(group => (
          <section key={group.key} className="mb-xl">
            <h2 className="font-heading text-xl font-semibold text-alpfor-blue mb-md">
              {t(`pages.links.${group.key}`)}
            </h2>
            <ul className="flex flex-col gap-sm">
              {group.links.map(link => (
                <li key={link.href} className="border-t border-alpfor-rock/25 pt-sm">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-base text-alpfor-blue hover:text-alpfor-forest transition-colors"
                  >
                    {link.label}
                  </a>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-sans text-sm text-alpfor-rock hover:text-alpfor-forest transition-colors mt-xs"
                  >
                    {link.href}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </article>
    </>
  )
}
