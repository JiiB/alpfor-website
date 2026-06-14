import './index.css'

import { I18n, useI18n, useSyncLng } from './i18n.tsx'
import { Suspense, useEffect, useState } from 'react'

import { Head } from 'vite-react-ssg'
import { Link, Outlet } from 'react-router-dom'
import { LanguageSwitch } from './components/LanguageSwitch.tsx'
import { Nav } from './components/Nav.tsx'
import logo from './assets/logo.svg'

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

      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  )
}
