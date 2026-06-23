import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'
import { useI18n } from '../i18n.tsx'
import kurs1 from '../assets/misc/kurs1.jpg'
import kurs2 from '../assets/misc/kurs2.jpg'
import leistungsnachweisPdf from '../assets/pdf/ALPFOR_Leistungsnachweis_2023.pdf?url'
import summerSchoolPdf from '../assets/pdf/Flyer_SummerSchool2026.pdf?url'

const PdfIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 256 256" className="shrink-0">
    <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
  </svg>
)

const content = {
  de: {
    intro: 'ALPFOR bietet Masterprojekte und Doktorarbeiten in Zusammenarbeit mit der Universität Basel an, wobei über die letzten 20 Jahre bereits fast 40 Masterarbeiten und 11 Doktorarbeiten abgeschlossen wurden. Daneben wird alpine Ökologie für fortgeschrittene Masterstudierende und Doktorierende als Sommerkurs in der 3. Juliwoche gelehrt. Diese Kurse ziehen seit Jahren Studierende aus vielen Ländern und Disziplinen an. Wir unterrichten einen empirischen Ansatz der alpinen Ökologie, welcher auf Prozessverständnis basiert. Während wir moderne Instrumente einsetzen, liegt uns auch sehr daran, die Studierenden mit der alpinen Biodiversität vertraut zu machen. ALPFOR engagiert sich auch in der Öffentlichkeitsarbeit (interessierte Laien, Schulen, Vereine und regionale Interessensgruppen).',
    textbookNote: 'Alpine Plant Life (Körner C., Springer 2021) ist das Lehrbuch für unsere Kurse. Wir bieten auch einen «open access» e-Learning Kurs auf Englisch und Spanisch an, der ein Kondensat der wichtigsten Themen vermittelt:',
    leistungsLabel: 'Leistungsnachweis Stand 2023',
    summerSchoolLabel: 'Flyer Summer School 2026',
    alpineBookLabel: 'Alpine Plant Life (Körner C., Springer 2021)',
    elearningLabel: 'alpandino.org — e-Learning alpine Ökologie',
  },
  en: {
    intro: 'ALPFOR offers master\'s projects and doctoral research in collaboration with the University of Basel; over the past 20 years nearly 40 master\'s theses and 11 doctoral theses have been completed. In addition, alpine ecology is taught to advanced master\'s students and doctoral candidates as a summer course in the 3rd week of July. These courses have attracted students from many countries and disciplines for years. We teach an empirical approach to alpine ecology based on process understanding. While we use modern instruments, we also strongly emphasise familiarising students with alpine biodiversity. ALPFOR is also engaged in public outreach (interested lay people, schools, associations and regional interest groups).',
    textbookNote: 'Alpine Plant Life (Körner C., Springer 2021) is the textbook for our courses. We also offer an open-access e-learning course in English and Spanish covering the key topics:',
    leistungsLabel: 'Track record (as of 2023)',
    summerSchoolLabel: 'Summer School 2026 Flyer',
    alpineBookLabel: 'Alpine Plant Life (Körner C., Springer 2021)',
    elearningLabel: 'alpandino.org — e-learning alpine ecology',
  },
} as const

export default function Lehre() {
  const { t } = useTranslation()
  const { getLng } = useI18n()
  const c = content[getLng() as 'de' | 'en'] ?? content.de

  return (
    <>
      <PageBanner title={t('pages.lehre.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-lg">{c.intro}</p>

        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.textbookNote}</p>

        <ul className="flex flex-col gap-sm mb-xl">
          <li>
            <a href={leistungsnachweisPdf} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-xs font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors">
              <PdfIcon />{c.leistungsLabel}
            </a>
          </li>
          <li>
            <a href={summerSchoolPdf} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-xs font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors">
              <PdfIcon />{c.summerSchoolLabel}
            </a>
          </li>
          <li>
            <a href="https://link.springer.com/book/10.1007/978-3-030-59538-8" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors">
              {c.alpineBookLabel}
            </a>
          </li>
          <li>
            <a href="https://www.alpandino.org" target="_blank" rel="noopener noreferrer"
              className="font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors">
              {c.elearningLabel}
            </a>
          </li>
        </ul>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
          <img src={kurs1} alt="ALPFOR Sommerkurs" className="w-full rounded-lg object-cover aspect-[4/3]" />
          <img src={kurs2} alt="ALPFOR Sommerkurs" className="w-full rounded-lg object-cover aspect-[4/3]" />
        </div>
      </article>
    </>
  )
}
