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
        index: true,
        lazy: () => defaultToComponent(import('./pages/index.tsx')),
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

const defaultToComponent = async (routePromise: Promise<RouteRecord & { default: unknown }>) => {
  const routeModule = await routePromise
  return { ...routeModule, Component: routeModule.default }
}
