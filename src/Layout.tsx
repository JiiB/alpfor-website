import './index.css'

import { I18n, useI18n, useSyncLng } from './i18n.tsx'
import { Suspense, useEffect, useState } from 'react'

import { Head } from 'vite-react-ssg'
import { Link, Outlet } from 'react-router-dom'
import { LanguageSwitch } from './components/LanguageSwitch.tsx'
import { Nav } from './components/Nav.tsx'
import logo from './assets/logo.svg'
import heroImage from './assets/background/furka-summer.jpg'

export default function Layout() {
  return (
    <I18n>
      <LayoutContent />
    </I18n>
  )
}

const LayoutContent = () => {
  useSyncLng()
  const { withLngBase } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>ALPFOR</title>
      </Head>

      {/* Fixed header */}
      <header
        className={[
          'fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-lg px-lg py-xs transition-all duration-300',
          scrolled ? 'bg-alpfor-blue/85 backdrop-blur-md' : 'bg-transparent',
        ].join(' ')}
      >
        <Link to={withLngBase('/')} className="shrink-0">
          <img
            src={logo}
            alt="ALPFOR"
            className="h-20 w-auto"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>
        <Nav />
        <div className="hidden lg:flex">
          <LanguageSwitch />
        </div>
      </header>

      {/* Hero image — full viewport height, sits behind fixed header */}
      <div className="relative">
        {/* Gradient scrim for header legibility at top */}
        <div
          className="absolute inset-x-0 top-0 z-10 pointer-events-none"
          style={{ height: '240px', background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
        />
        <img
          src={heroImage}
          alt="Furka Pass in summer"
          className="w-full object-cover object-top"
          style={{ height: '100svh', minHeight: '480px' }}
        />

        {/* Scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/70 hover:text-white transition-colors"
        >
          <svg width="44" height="44" viewBox="0 0 28 28" fill="none">
            <path d="M6 10l8 8 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      {/* Page content */}
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
