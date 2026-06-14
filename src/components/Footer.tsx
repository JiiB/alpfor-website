import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useI18n } from '../i18n.tsx'
import logoWithText from '../assets/logo-with-text.svg'

export const Footer = () => {
  const { t } = useTranslation()
  const { withLngBase } = useI18n()

  return (
    <footer className="bg-alpfor-blue text-white">
      <div
        className="mx-auto px-lg py-xl"
        style={{ maxWidth: 'var(--container-standard)' }}
      >
        {/* Main row: logo + address */}
        <div className="flex flex-col md:flex-row md:items-start gap-xl">
          {/* Logo */}
          <Link to={withLngBase('/')} className="shrink-0">
            <img
              src={logoWithText}
              alt="ALPFOR — Alpine Forschungs- und Ausbildungsstation Furka"
              className="h-auto"
              style={{ width: '250px' }}
            />
          </Link>

          {/* Address */}
          <address className="not-italic font-sans text-sm text-white/70 leading-relaxed">
            <p className="font-semibold text-white mb-xs">ALPFOR</p>
            <p>Universität Basel</p>
            <p>Departement Umweltwissenschaften</p>
            <p>Schönbeinstrasse 6</p>
            <p>4056 Basel (Schweiz)</p>
            <p className="mt-sm">
              <a
                href="mailto:sekretariat-botschoen@unibas.ch"
                className="hover:text-white transition-colors"
              >
                sekretariat-botschoen@unibas.ch
              </a>
            </p>
            <p>
              <a
                href="tel:+41612072311"
                className="hover:text-white transition-colors"
              >
                +41 61 207 23 11
              </a>
            </p>
          </address>
        </div>

        {/* Bottom bar */}
        <div className="mt-xl pt-sm border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-sm">
          <p className="font-sans text-xs text-white/50">
            {t('footer.copyright')}
          </p>
          <nav className="flex items-center gap-md">
            <Link
              to={withLngBase('/links')}
              className="font-sans text-xs text-white/60 hover:text-white transition-colors"
            >
              {t('footer.links')}
            </Link>
            <Link
              to={withLngBase('/impressum')}
              className="font-sans text-xs text-white/60 hover:text-white transition-colors"
            >
              {t('footer.impressum')}
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
