import './a.css'

import { ClientOnly } from 'vite-react-ssg'
import { Link } from 'react-router-dom'
import { lazy } from 'react'
import { useI18n } from '../i18n.tsx'
import { useTranslation } from 'react-i18next'

const ACount = lazy(() => import('../components/a-count.tsx'))

export default function A() {
  const { withLngBase } = useI18n()
  const { t } = useTranslation()
  return (
    <>
      <h1 className="a">{t('hello')} Page A</h1>
      <Link to={withLngBase('/')}>to index</Link>
      <ACount />
      <ClientOnly>
        {() => {
          return <div>{window.location.href}</div>
        }}
      </ClientOnly>
    </>
  )
}

export const Component = A

export const entry = 'src/pages/a.tsx'
