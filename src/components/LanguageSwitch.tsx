import { useI18n } from '../i18n.tsx'
import type { resources } from '../i18n.tsx'

type Lng = keyof typeof resources

const languages: { code: Lng; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'en', label: 'EN' },
]

export const LanguageSwitch = () => {
  const { getLng, changeLng } = useI18n()
  const currentLng = getLng() as Lng

  return (
    <div className="flex items-center gap-1 font-sans text-sm font-medium tracking-widest uppercase">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          {i > 0 && (
            <span className="text-white/30 select-none">|</span>
          )}
          <button
            type="button"
            onClick={() => changeLng(lang.code)}
            className={[
              'transition-colors cursor-pointer bg-transparent border-none p-0 uppercase tracking-widest font-medium font-sans text-sm',
              currentLng === lang.code
                ? 'text-white'
                : 'text-white/50 hover:text-white/80',
            ].join(' ')}
          >
            {lang.label}
          </button>
        </span>
      ))}
    </div>
  )
}
