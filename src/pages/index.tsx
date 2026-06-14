import { useTranslation } from 'react-i18next'

type SectionProps = {
  id: string
  title: string
  body: string
  body2?: string
}

const Section = ({ id, title, body, body2 }: SectionProps) => (
  <section id={id} className="border-t border-alpfor-rock/25 pt-xl">
    <h2 className="font-heading text-4xl font-semibold text-alpfor-blue mb-md leading-tight">
      {title}
    </h2>
    {body.split('\n').map((line, i) => (
      <p key={i} className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">
        {line}
      </p>
    ))}
    {body2 && (
      <p className="font-sans text-lg text-alpfor-forest leading-relaxed">
        {body2}
      </p>
    )}
  </section>
)

export default function Index() {
  const { t } = useTranslation()

  return (
    <article
      className="mx-auto px-lg py-xxl"
      style={{ maxWidth: 'var(--container-standard)' }}
    >
      <div className="flex flex-col gap-xl">
        <Section
          id="about"
          title={t('sections.about.title')}
          body={t('sections.about.body')}
          body2={t('sections.about.body2')}
        />
        <Section
          id="research"
          title={t('sections.research.title')}
          body={t('sections.research.body')}
          body2={t('sections.research.body2')}
        />
        <Section
          id="biodiversity"
          title={t('sections.biodiversity.title')}
          body={t('sections.biodiversity.body')}
          body2={t('sections.biodiversity.body2')}
        />
        <Section
          id="geology"
          title={t('sections.geology.title')}
          body={t('sections.geology.body')}
          body2={t('sections.geology.body2')}
        />
        <Section
          id="contact"
          title={t('sections.contact.title')}
          body={t('sections.contact.body')}
        />
      </div>
    </article>
  )
}
