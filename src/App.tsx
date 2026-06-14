import Layout from './Layout.tsx'
import type { RouteRecord } from 'vite-react-ssg'
import { resources } from './i18n.tsx'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const routes: RouteRecord[] = [
  {
    path: '/:lng',
    Component: Layout,
    getStaticPaths: () => Object.keys(resources),
    children: [
      { index: true, lazy: () => defaultToComponent(import('./pages/index.tsx')) },
      { path: 'verein', lazy: () => defaultToComponent(import('./pages/verein.tsx')) },
      { path: 'infrastruktur', lazy: () => defaultToComponent(import('./pages/infrastruktur.tsx')) },
      { path: 'forschung', lazy: () => defaultToComponent(import('./pages/forschung.tsx')) },
      { path: 'lehre', lazy: () => defaultToComponent(import('./pages/lehre.tsx')) },
      { path: 'geologie', lazy: () => defaultToComponent(import('./pages/geologie.tsx')) },
      { path: 'flora-fauna', lazy: () => defaultToComponent(import('./pages/flora-fauna.tsx')) },
      { path: 'karte', lazy: () => defaultToComponent(import('./pages/karte.tsx')) },
      { path: 'webcam', lazy: () => defaultToComponent(import('./pages/webcam.tsx')) },
      { path: 'kontakt', lazy: () => defaultToComponent(import('./pages/kontakt.tsx')) },
      { path: 'links', lazy: () => defaultToComponent(import('./pages/links.tsx')) },
      { path: 'impressum', lazy: () => defaultToComponent(import('./pages/impressum.tsx')) },
    ],
  },
  {
    path: '/',
    Component: () => {
      const navigate = useNavigate()
      useEffect(() => {
        navigate('/en', { replace: true })
      }, [navigate])
      return null
    },
  },
]

const defaultToComponent = async (routePromise: Promise<RouteRecord & { default: unknown }>) => {
  const routeModule = await routePromise
  return { ...routeModule, Component: routeModule.default }
}
