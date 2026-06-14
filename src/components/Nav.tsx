import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useI18n } from '../i18n.tsx'
import { LanguageSwitch } from './LanguageSwitch.tsx'

type NavLeaf = { labelKey: string; to: string }
type NavGroup = { labelKey: string; children: NavLeaf[] }
type NavItem = NavLeaf | NavGroup

const isGroup = (item: NavItem): item is NavGroup => 'children' in item

const navItems: NavItem[] = [
  { labelKey: 'nav.home', to: '/' },
  {
    labelKey: 'nav.organisation',
    children: [
      { labelKey: 'nav.verein', to: '/verein' },
      { labelKey: 'nav.infra', to: '/infrastruktur' },
    ],
  },
  {
    labelKey: 'nav.science',
    children: [
      { labelKey: 'nav.research', to: '/forschung' },
      { labelKey: 'nav.lehre', to: '/lehre' },
      { labelKey: 'nav.geology', to: '/geologie' },
      { labelKey: 'nav.biodiversity', to: '/flora-fauna' },
    ],
  },
  {
    labelKey: 'nav.location',
    children: [
      { labelKey: 'nav.map', to: '/karte' },
      { labelKey: 'nav.webcam', to: '/webcam' },
    ],
  },
  { labelKey: 'nav.contact', to: '/kontakt' },
]

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    className={`inline-block ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
  >
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Nav = () => {
  const { t } = useTranslation()
  const { withLngBase } = useI18n()
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null)
  const [activeMobile, setActiveMobile] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-xs flex-1 justify-center">
        {navItems.map(item => {
          if (!isGroup(item)) {
            return (
              <Link
                key={item.labelKey}
                to={withLngBase(item.to)}
                className="font-sans text-base text-white/80 hover:text-white transition-colors px-xs py-1 whitespace-nowrap"
              >
                {t(item.labelKey)}
              </Link>
            )
          }

          const open = activeDesktop === item.labelKey
          return (
            <div
              key={item.labelKey}
              className="relative"
              onMouseEnter={() => setActiveDesktop(item.labelKey)}
              onMouseLeave={() => setActiveDesktop(null)}
            >
              <button
                type="button"
                className="flex items-center font-sans text-base text-white/80 hover:text-white transition-colors px-xs py-1 whitespace-nowrap cursor-pointer bg-transparent border-none"
              >
                {t(item.labelKey)}
                <Chevron open={open} />
              </button>

              {open && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[160px] bg-alpfor-blue border border-white/10 rounded-md shadow-lg overflow-hidden">
                  {item.children.map(child => (
                    <Link
                      key={child.labelKey}
                      to={withLngBase(child.to)}
                      className="block font-sans text-base text-white/80 hover:text-white hover:bg-white/8 transition-colors px-sm py-xs whitespace-nowrap"
                    >
                      {t(child.labelKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        onClick={() => setMobileOpen(v => !v)}
        aria-label="Toggle menu"
        className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none p-1 shrink-0"
      >
        <span className={`block h-px w-full bg-white transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
        <span className={`block h-px w-full bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-px w-full bg-white transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
      </button>

      {/* Mobile dropdown panel */}
      {mobileOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-alpfor-blue border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-xs">
            {navItems.map(item => {
              if (!isGroup(item)) {
                return (
                  <Link
                    key={item.labelKey}
                    to={withLngBase(item.to)}
                    onClick={() => setMobileOpen(false)}
                    className="font-sans text-base text-white/80 hover:text-white hover:bg-white/5 transition-colors px-lg py-sm"
                  >
                    {t(item.labelKey)}
                  </Link>
                )
              }

              const expanded = activeMobile === item.labelKey
              return (
                <div key={item.labelKey}>
                  <button
                    type="button"
                    onClick={() => setActiveMobile(expanded ? null : item.labelKey)}
                    className="w-full flex items-center justify-between font-sans text-base text-white/80 hover:text-white transition-colors px-lg py-sm cursor-pointer bg-transparent border-none text-left"
                  >
                    {t(item.labelKey)}
                    <Chevron open={expanded} />
                  </button>
                  {expanded && (
                    <div className="bg-white/5 border-t border-white/10">
                      {item.children.map(child => (
                        <Link
                          key={child.labelKey}
                          to={withLngBase(child.to)}
                          onClick={() => setMobileOpen(false)}
                          className="block font-sans text-base text-white/70 hover:text-white transition-colors pl-xxl pr-lg py-xs"
                        >
                          {t(child.labelKey)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
          <div className="px-lg py-sm border-t border-white/10">
            <LanguageSwitch />
          </div>
        </div>
      )}
    </>
  )
}
