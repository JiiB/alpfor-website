import './index.css'

import { I18n, useSyncLng } from './i18n.tsx'
import { Suspense, useEffect, useState } from 'react'

import { Head } from 'vite-react-ssg'
import { Outlet } from 'react-router-dom'
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
          'fixed inset-x-0 top-0 z-30 flex items-center justify-between gap-lg px-lg py-sm transition-all duration-300',
          scrolled ? 'bg-alpfor-blue/85 backdrop-blur-md' : 'bg-transparent',
        ].join(' ')}
      >
        <img
          src={logo}
          alt="ALPFOR"
          className="h-16 w-auto shrink-0"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
        <Nav />
        <LanguageSwitch />
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
          className="w-full object-cover"
          style={{ height: '100svh', minHeight: '480px' }}
        />
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
