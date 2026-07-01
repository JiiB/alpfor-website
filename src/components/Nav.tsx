import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { LanguageSwitch } from './LanguageSwitch.tsx'
import { useI18n } from '../i18n.tsx'
import { useTranslation } from 'react-i18next'

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

const Chevron = ({ open, className = '' }: { open: boolean; className?: string }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    className={`inline-block ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''} ${className}`}
  >
    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Nav = ({ onMobileOpenChange }: { onMobileOpenChange?: (open: boolean) => void }) => {
  const { t } = useTranslation()
  const { withLngBase } = useI18n()
  const { pathname } = useLocation()
  const [activeDesktop, setActiveDesktop] = useState<string | null>(null)
  const [activeMobile, setActiveMobile] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const setMobile = (open: boolean) => {
    setMobileOpen(open)
    onMobileOpenChange?.(open)
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (to: string) => pathname === withLngBase(to)
  const isGroupActive = (group: NavGroup) => group.children.some(c => isActive(c.to))

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
                className={[
                  'font-sans text-base transition-colors px-xs py-1 whitespace-nowrap border-b-2 [text-shadow:0_0_2px_black]',
                  isActive(item.to)
                    ? 'text-white border-white'
                    : 'text-white border-transparent',
                ].join(' ')}
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
                className={[
                  'flex items-center font-sans text-base transition-colors px-xs py-1 whitespace-nowrap cursor-pointer bg-transparent border-x-0 border-t-0 border-b-2 [text-shadow:0_0_2px_black]',
                  isGroupActive(item)
                    ? 'text-white border-white'
                    : 'text-white border-transparent',
                ].join(' ')}
              >
                {t(item.labelKey)}
                <Chevron open={open} className="[filter:drop-shadow(0_0_2px_black)]" />
              </button>

              {open && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 min-w-[160px] bg-white shadow-xl rounded-md overflow-hidden">
                  {item.children.map(child => (
                    <Link
                      key={child.labelKey}
                      to={withLngBase(child.to)}
                      className={[
                        'block font-sans text-base transition-colors px-sm py-xs whitespace-nowrap',
                        isActive(child.to)
                          ? 'text-alpfor-blue font-semibold bg-alpfor-blue/5'
                          : 'text-alpfor-forest hover:text-alpfor-blue hover:bg-alpfor-blue/5',
                      ].join(' ')}
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
        onClick={() => setMobile(!mobileOpen)}
        aria-label="Toggle menu"
        className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer bg-transparent border-none p-1 shrink-0"
      >
        <span className={`block h-px w-full bg-white transition-all duration-200 origin-center ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
        <span className={`block h-px w-full bg-white transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block h-px w-full bg-white transition-all duration-200 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
      </button>

      {/* Mobile dropdown panel */}
      {mobileOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-alpfor-blue border-t border-white/10 shadow-lg overflow-y-auto" style={{ minHeight: 'calc(100dvh - 100%)' }}>
          <nav className="flex flex-col py-xs">
            {navItems.map(item => {
              if (!isGroup(item)) {
                return (
                  <Link
                    key={item.labelKey}
                    to={withLngBase(item.to)}
                    onClick={() => setMobile(false)}
                    className={[
                      'font-sans text-base hover:bg-white/5 transition-colors px-lg py-sm',
                      isActive(item.to) ? 'text-white font-medium' : 'text-white/80 hover:text-white',
                    ].join(' ')}
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
                    className={[
                      'w-full flex items-center justify-between font-sans text-base transition-colors px-lg py-sm cursor-pointer bg-transparent border-none text-left',
                      isGroupActive(item) ? 'text-white font-medium' : 'text-white/80 hover:text-white',
                    ].join(' ')}
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
                          onClick={() => setMobile(false)}
                          className={[
                            'block font-sans text-base transition-colors pl-xl pr-lg py-xs',
                            isActive(child.to) ? 'text-white font-medium' : 'text-white/70 hover:text-white',
                          ].join(' ')}
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
