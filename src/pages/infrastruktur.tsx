import { useTranslation } from 'react-i18next'
import { PageBanner } from '../components/PageBanner.tsx'
import { useI18n } from '../i18n.tsx'
import b1 from '../assets/buildings/1.jpg'
import b2 from '../assets/buildings/2.jpg'
import b3 from '../assets/buildings/3.jpg'
import b4 from '../assets/buildings/4.jpg'
import b5 from '../assets/buildings/5.jpg'
import b6 from '../assets/buildings/6.jpg'
import b7 from '../assets/buildings/7.jpg'
import b8 from '../assets/buildings/8.jpg'
import b9 from '../assets/buildings/9.jpg'
import b10 from '../assets/buildings/10.jpg'
import b11 from '../assets/buildings/11.jpg'
import b12 from '../assets/buildings/12.jpg'
import b13 from '../assets/buildings/13.jpg'
import b14 from '../assets/buildings/14.jpg'
import b15 from '../assets/buildings/15.jpg'

const content = {
  de: {
    intro: 'Der Verein ALPFOR verfügt über 12 Gebäude des ehemaligen Truppenlagers, wovon bereits drei Häuser für den täglichen Gebrauch renoviert wurden (vier weitere Häuser werden zur Zeit aufgewertet). Diese Häuser sind nach prominenten Organismen benannt:',
    carexName: 'Haus Carex',
    carexDesc: 'Benannt nach der Pflanzengattung der Seggen, welche in alpinen Gebieten weit verbreitet sind. Dieses Haus ist zweistöckig und diente zu Militärszeiten zuerst als Kantine und später als Sanitätsgebäude. Es verfügt über eine Küche, einen Essraum sowie Betten für bis zu 12 Personen, welche vom ALPFOR Personal während der ganzen Sommersaison genutzt werden (keine Unterkunft für Besucher).',
    rumexName: 'Haus Rumex',
    rumexDesc: 'Der Name bezieht sich auf die Pflanze Rumex alpinus (Blacke), welche auf Lägerfluren überhand nimmt und somit den Einfluss der Menschen auf alpine Lebensräume versinnbildlicht. Es ist ebenfalls zweistöckig und verfügt über einen Vorlesungsraum für 25 Personen, ein ausgestelltes Herbar, eine kleine Teeküche sowie einen 10-Bett-Schlafraum im oberen Stock mit Dusche und WC.',
    ibexName: 'Haus Ibex',
    ibexDesc: 'Benannt nach dem Alpensteinbock (Capra ibex), ist die ehemalige Kantine und Offiziersunterkunft. Es ist das grösste Gebäude, mit drei Stöcken, einer sehr grossen Küche im Parterre, einem Essraum/Vorlesungssaal für rund 80 Personen und 8 Schlafzimmer mit 2–4 Betten für bis zu 20 Personen.',
    capacityHeading: 'Kapazität & Betrieb',
    capacity: 'ALPFOR kann rund 45 Personen beherbergen und verfügt über zwei Vorlesungsräume für 25 (Rumex) bis 80 Personen (Ibex). Der letztere Raum ist gross genug, um gleichzeitig als Praktikums- und Essraum genutzt zu werden. Das alte Munitionsdepot rund 100 m nördlich der Station kann als Zwischenlager bei wissenschaftlichen Experimenten verwendet werden. Dort ist auch die ALPFOR Wetterstation situiert, welche ganzjährig Daten erfasst.',
    hoursHeading: 'Betriebszeiten',
    hours: 'Die Station wird je nach Schneeschmelze und Passöffnung zwischen der letzten Maiwoche und der zweiten Juniwoche geöffnet und schliesst Ende September. Bis ca. Anfangs Juli hat es noch viel Schnee um die Station. Die beste Zeit für Feldkurse ist erfahrungsgemäss zwischen dem 10. Juli und 10. August.',
    costsHeading: 'Kosten',
    costs: 'ALPFOR verfügt über keine Drittmittel zur Deckung von laufenden Kosten, weshalb diese durch die Nutzer beglichen werden müssen. Wissenschaftlerinnen und Besucher (Kurse, Exkursionen, Kurzprojekte) zahlen 25.– CHF pro Nacht, wobei die Räume in einem sauberen und aufgeräumten Zustand verlassen werden. Zusätzlich fallen Kosten für den Kurs- bzw. Essraum im Ibex und die Nutzung der Küche an (bitte anfragen). Erfahrungsgemäss belaufen sich die Kosten für Verpflegung auf rund 25.– CHF pro Tag und Person, inklusive den Kosten für einen Koch.',
    accomHeading: 'Unterkunft',
    accom: 'ALPFOR ist ein gemeinnütziger Verein für alpine Forschung und Lehre und stellt seine Infrastruktur daher nicht für Tourismus zur Verfügung. Allerdings können gewisse Räumlichkeiten für Kurse und Forschungsarbeiten gemietet werden, wobei Verpflegung und Küchenpersonal selbst organisiert werden müssen. Die nächste Einkaufsmöglichkeit befindet sich in Andermatt (ca. 15 km entfernt). Handy-Empfang ist sehr gut.',
  },
  en: {
    intro: 'The ALPFOR association owns 12 buildings from the former military compound, three of which have already been renovated for daily use (four more are currently being upgraded). These buildings are named after prominent organisms:',
    carexName: 'House Carex',
    carexDesc: 'Named after the genus of sedges, which are widespread in alpine areas. This two-storey building served as a canteen and later a medical facility during military times. It has a kitchen, dining room and beds for up to 12 people, used exclusively by ALPFOR staff throughout the summer season (no visitor accommodation).',
    rumexName: 'House Rumex',
    rumexDesc: 'The name refers to the plant Rumex alpinus (monk\'s rhubarb), which proliferates on heavily used alpine ground, symbolising human impact on alpine habitats. Also two-storey, it has a lecture room for 25 people, a displayed herbarium, a small tea kitchen, and a 10-bed dormitory on the upper floor with shower and WC.',
    ibexName: 'House Ibex',
    ibexDesc: 'Named after the Alpine ibex (Capra ibex), this is the former canteen and officers\' quarters — the largest building, with three floors, a very large kitchen on the ground floor, a dining/lecture hall for around 80 people, and 8 bedrooms with 2–4 beds for up to 20 people.',
    capacityHeading: 'Capacity & Operations',
    capacity: 'ALPFOR can accommodate around 45 people and has two lecture rooms for 25 (Rumex) and 80 persons (Ibex). The latter is large enough to serve simultaneously as a practical laboratory and dining room. The old ammunition depot about 100 m north of the station can be used as temporary storage for scientific experiments. The ALPFOR weather station is also located there, collecting data year-round.',
    hoursHeading: 'Operating Season',
    hours: 'The station opens between the last week of May and the second week of June, depending on snowmelt and pass opening, and closes at the end of September. Until around early July there is still significant snow around the station. The best time for field courses is typically between 10 July and 10 August.',
    costsHeading: 'Costs',
    costs: 'ALPFOR has no third-party funding to cover running costs, which must therefore be covered by users. Scientists and visitors (courses, excursions, short projects) pay CHF 25.– per night, leaving rooms clean and tidy. Additional charges apply for use of the lecture/dining room in Ibex and the kitchen (please enquire). Catering costs are typically around CHF 25.– per person per day, including kitchen staff.',
    accomHeading: 'Accommodation',
    accom: 'ALPFOR is a non-profit association for alpine research and education and does not make its infrastructure available for tourism. However, certain rooms can be hired for courses and research, with catering and kitchen staff to be organised independently. The nearest shops are in Andermatt (approx. 15 km away). Mobile reception is very good.',
  },
} as const

const photoStrip = (srcs: string[], alt: string) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-xs my-md">
    {srcs.map((src, i) => (
      <img key={i} src={src} alt={alt} className="object-cover h-48 w-full rounded" />
    ))}
  </div>
)

export default function Infrastruktur() {
  const { t } = useTranslation()
  const { getLng } = useI18n()
  const c = content[getLng() as 'de' | 'en'] ?? content.de

  return (
    <>
      <PageBanner title={t('pages.infrastruktur.title')} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        {/* Top overview strip */}
        <div className="grid grid-cols-3 gap-md mb-lg">
          {[b1, b2, b3].map((src, i) => (
            <img key={i} src={src} alt="ALPFOR Stationsgebäude" className="object-cover h-56 w-full rounded-lg" />
          ))}
        </div>

        <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">{c.intro}</p>

        {/* Haus Carex */}
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.carexName}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed mb-sm">{c.carexDesc}</p>
          {photoStrip([b8, b9, b10, b11], c.carexName)}
        </section>

        {/* Haus Rumex */}
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.rumexName}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed mb-sm">{c.rumexDesc}</p>
          {photoStrip([b12, b13, b14, b15], c.rumexName)}
        </section>

        {/* Haus Ibex */}
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.ibexName}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed mb-sm">{c.ibexDesc}</p>
          {photoStrip([b4, b5, b6, b7], c.ibexName)}
        </section>

        {/* Capacity, hours, costs */}
        <section className="border-t border-alpfor-rock/25 pt-xl mb-lg">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.capacityHeading}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{c.capacity}</p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl mb-lg">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.hoursHeading}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{c.hours}</p>
        </section>

        <section className="border-t border-alpfor-rock/25 pt-xl mb-lg">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.accomHeading}</h2>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed mb-md">{c.accom}</p>
          <h3 className="font-heading text-lg font-semibold text-alpfor-blue mb-sm">{c.costsHeading}</h3>
          <p className="font-sans text-base text-alpfor-forest leading-relaxed">{c.costs}</p>
        </section>
      </article>
    </>
  )
}
