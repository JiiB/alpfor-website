import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'

export default function Webcam() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner title={t('pages.webcam.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <section className="mb-xxl">
          <h2 className="font-heading text-xl font-semibold text-alpfor-blue mb-md">
            {t('pages.webcam.furkaLabel')}
          </h2>
          <iframe
            src="https://teamnino.com/furka-webcam-proxy/index.html"
            title="Webcam Furka"
            className="w-full rounded-lg border border-alpfor-rock/20"
            style={{ aspectRatio: '17/13', maxWidth: '1800px' }}
          />
        </section>

        <section>
          <h2 className="font-heading text-xl font-semibold text-alpfor-blue mb-md">
            {t('pages.webcam.bidmerLabel')}
          </h2>
          <a
            href="https://www.webcam-4insiders.com/de/Oberwald/15221-Oberwald.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.webcam-4insiders.com/current/original/15221.jpg"
              alt="Webcam Bidmer (Oberwald / Goms)"
              className="w-full rounded-lg border border-alpfor-rock/20"
              style={{ maxWidth: '1800px' }}
            />
          </a>
        </section>
      </article>
    </>
  )
}
