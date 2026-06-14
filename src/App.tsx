import './App.css'

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
      {
        path: 'a',
        lazy: () => import('./pages/a.tsx'),
      },
      {
        index: true,
        lazy: () => defaultToComponent(import('./pages/index.tsx')),
      },
      {
        path: 'nest/:b',
        lazy: () => defaultToComponent(import('./pages/nest/[b].tsx')),
      },
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

async function defaultToComponent(routePromise: Promise<RouteRecord & { default: any }>) {
  const routeModule = await routePromise

  return { ...routeModule, Component: routeModule.default }
}
