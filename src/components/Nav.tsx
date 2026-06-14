import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const navItems = [
  { labelKey: 'nav.home',         href: '#' },
  { labelKey: 'nav.verein',       href: '#verein' },
  { labelKey: 'nav.infra',        href: '#infrastruktur' },
  { labelKey: 'nav.research',     href: '#research' },
  { labelKey: 'nav.lehre',        href: '#lehre' },
  { labelKey: 'nav.map',          href: '#karte' },
  { labelKey: 'nav.webcam',       href: '#webcam' },
  { labelKey: 'nav.geology',      href: '#geology' },
  { labelKey: 'nav.biodiversity', href: '#biodiversity' },
  { labelKey: 'nav.contact',      href: '#contact' },
] as const

export const Nav = () => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-xs flex-1 justify-center">
        {navItems.map(item => (
          <a
            key={item.labelKey}
            href={item.href}
            className="font-sans text-sm text-white/80 hover:text-white transition-colors px-xs py-1 whitespace-nowrap"
          >
            {t(item.labelKey)}
          </a>
        ))}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label="Toggle menu"
        className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none p-1"
      >
        <span
          className={`block h-px w-full bg-white transition-all duration-200 origin-center ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
        />
        <span
          className={`block h-px w-full bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-px w-full bg-white transition-all duration-200 origin-center ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
        />
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-alpfor-blue border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-sm">
            {navItems.map(item => (
              <a
                key={item.labelKey}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-sans text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors px-lg py-sm"
              >
                {t(item.labelKey)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
