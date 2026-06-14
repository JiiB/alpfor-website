import { useI18n } from '../i18n.tsx'
import { PageBanner } from '../components/PageBanner.tsx'
import hotspotPdf from '../assets/pdf/alpfor furka hotspot WEB 2018.pdf?url'
import titelblatt from '../assets/misc/Titelblatt_Hotspot_Furka.png'
import f01 from '../assets/flora/01.jpg'
import f02 from '../assets/flora/02.jpg'
import f03 from '../assets/flora/03.jpg'
import f04 from '../assets/flora/04.jpg'
import f05 from '../assets/flora/05.jpg'
import f06 from '../assets/flora/06.jpg'
import f07 from '../assets/flora/07.jpg'
import f08 from '../assets/flora/08.jpg'
import f09 from '../assets/flora/09.jpg'
import f10 from '../assets/flora/10.jpg'
import f11 from '../assets/flora/11.jpg'
import f12 from '../assets/flora/12.jpg'
import f13 from '../assets/flora/13.jpg'
import f14 from '../assets/flora/14.jpg'
import f15 from '../assets/flora/15.jpg'
import f16 from '../assets/flora/16.jpg'
import f17 from '../assets/flora/17.jpg'
import f18 from '../assets/flora/18.jpg'
import f19 from '../assets/flora/19.jpg'
import f20 from '../assets/flora/20.jpg'
import f21 from '../assets/flora/21.jpg'
import f22 from '../assets/flora/22.jpg'
import f23 from '../assets/flora/23.jpg'
import f24 from '../assets/flora/24.jpg'

const species = [
  { src: f01, name: 'Dryas octopetala', family: 'Rosaceae' },
  { src: f02, name: 'Loiseleuria procumbens', family: 'Ericaceae' },
  { src: f03, name: 'Silene exscapa', family: 'Caryophyllaceae' },
  { src: f04, name: 'Ranunculus alpestris', family: 'Ranunculaceae' },
  { src: f05, name: 'Ranunculus küpferi', family: 'Ranunculaceae' },
  { src: f06, name: 'Saxifraga seguieri', family: 'Saxifragaceae' },
  { src: f07, name: 'Gentiana verna', family: 'Gentianaceae' },
  { src: f08, name: 'Dracocephalum ruyschiana', family: 'Lamiaceae' },
  { src: f09, name: 'Phyteuma hemisphaericum', family: 'Campanulaceae' },
  { src: f10, name: 'Viola calcarata', family: 'Violaceae' },
  { src: f11, name: 'Gentiana purpurea', family: 'Gentianaceae' },
  { src: f12, name: 'Aster alpinus', family: 'Asteraceae' },
  { src: f13, name: 'Lilium martagon', family: 'Liliaceae' },
  { src: f14, name: 'Trifolium alpinum', family: 'Fabaceae' },
  { src: f15, name: 'Pedicularis verticillata', family: 'Scrophulariaceae' },
  { src: f16, name: 'Carex curvula', family: 'Cyperaceae' },
  { src: f17, name: 'Eriophorum scheuchzeri', family: 'Cyperaceae' },
  { src: f18, name: 'Festuca violacea', family: 'Poaceae' },
  { src: f19, name: 'Adenostyles alliariae', family: 'Asteraceae' },
  { src: f20, name: 'Polygonum viviparum', family: 'Polygonaceae' },
  { src: f21, name: 'Alnus viridis', family: 'Betulaceae' },
  { src: f22, name: 'Campanula thyrsoides', family: 'Campanulaceae' },
  { src: f23, name: 'Gentiana punctata', family: 'Gentianaceae' },
  { src: f24, name: 'Nigritella nigra', family: 'Orchidaceae' },
]

const content = {
  de: {
    title: 'Flora & Fauna',
    hotspotHeading: 'Hotspot Furka',
    hotspot1: 'In der Nähe des Furkapasses, in 2440 m über Meer der Schweizerischen Zentralalpen, kamen 47 Fachleute zusammen, um die Vielfalt des Lebens im Hochgebirge unter die Lupe zu nehmen. Mitten im alpinen Lebensraum gelegen und umgeben von der Hälfte der gesamten Blütenpflanzenflora der Hochalpen bot die Alpine Forschungs- und Ausbildungsstation Furka ALPFOR dafür einen idealen Rahmen.',
    hotspot2: 'Es sollte ein möglichst umfassendes Inventar der alpinen Organismenarten erstellt werden. Neben den 300 Arten an Blütenpflanzen — ein wahrer «Hotspot» der Vielfalt — wurden Algen, Moose, Flechten, Pilze, Käfer, Fliegen, Hummeln, Schmetterlinge, die Lebewesen in den Gewässern und in den Böden, sowie Vögel und andere Wirbeltiere erfasst, insgesamt mehr als 2000 Arten. Dabei wurden auch für die Schweiz neue Arten entdeckt.',
    hotspotBookTitle: 'HOTSPOT FURKA — Biologische Vielfalt im Gebirge',
    hotspotBookMeta: 'Herausgeber: Erika Hiltbrunner und Christian Körner, ALPFOR und Universität Basel. ISBN 978-3-033-06701-1',
    hotspotPdfLabel: 'HOTSPOT FURKA — Biologische Vielfalt im Gebirge (PDF)',
    plantsHeading: 'Alpine Pflanzen',
    plants1: 'Der Furkapass ist floristisch eine der reichsten Regionen der Alpen. Auf einem Quadratkilometer in der Umgebung der ALPFOR Station finden sich über 300 Blütenpflanzenarten. Die hohe Diversität hängt mit der topographischen Diversität und dem Einfluss der kalkhaltigen Substrate zusammen. Die beiden verbreitetsten Vegetationseinheiten sind Carex curvula-dominierte Alpinrasen und offene Felsvegetation.',
    plants2: 'Darüberhinaus verfügt die Furkaregion über eine Reihe spezifischer Lebensräume, die entscheidend zur Erhöhung der gesamten Artendiversität beitragen: nasse und sehr trockene Kleinstandorte (Wollgras bzw. Sukkulenten), extrem nährstoffarme bzw. -reiche Standorte (darunter Naturwiesen mit Lilium) und eine Granitflora in nächster Nachbarschaft zur Kalkflora.',
  },
  en: {
    title: 'Flora & Fauna',
    hotspotHeading: 'Furka Hotspot',
    hotspot1: 'Near the Furka Pass, at 2440 m above sea level in the Swiss Central Alps, 47 experts gathered to examine the diversity of life in the high mountains. Located in the heart of the alpine habitat and surrounded by half of the entire flowering plant flora of the high Alps, the Alpine Research and Education Station Furka ALPFOR provided an ideal setting.',
    hotspot2: 'The goal was to compile the most comprehensive inventory possible of alpine organism species. In addition to 300 species of flowering plants — a true «hotspot» of diversity — algae, mosses, lichens, fungi, beetles, flies, bumblebees, wasps, butterflies, aquatic and soil organisms, as well as birds and other vertebrates were recorded, totalling more than 2000 species. Several species new to Switzerland were discovered.',
    hotspotBookTitle: 'HOTSPOT FURKA — Biological Diversity in the Mountains',
    hotspotBookMeta: 'Editors: Erika Hiltbrunner and Christian Körner, ALPFOR and University of Basel. ISBN 978-3-033-06701-1',
    hotspotPdfLabel: 'HOTSPOT FURKA — Biological Diversity in the Mountains (PDF)',
    plantsHeading: 'Alpine Plants',
    plants1: 'The Furka Pass is floristically one of the richest regions in the Alps. Over 300 flowering plant species can be found within one square kilometre around the ALPFOR station. The high diversity is linked to topographic diversity and the influence of calcareous substrates. The two most widespread vegetation types are Carex curvula-dominated alpine grasslands and open rock vegetation.',
    plants2: 'Furthermore, the Furka region has a series of specific habitats that contribute decisively to overall species diversity: wet and very dry micro-sites (cottongrass vs. succulents), extremely nutrient-poor and nutrient-rich sites (including natural meadows with Lilium), and a granite flora immediately adjacent to the calcareous flora.',
  },
} as const

export default function FloraFauna() {
  const { getLng } = useI18n()
  const c = content[getLng() as 'de' | 'en'] ?? content.de

  return (
    <>
      <PageBanner title={c.title} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        {/* Hotspot Furka */}
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">{c.hotspotHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{c.hotspot1}</p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-lg">{c.hotspot2}</p>

          {/* Book reference box */}
          <div className="flex items-start gap-lg p-md border border-alpfor-rock/30 rounded-lg bg-alpfor-glacier/10">
            <img
              src={titelblatt}
              alt={c.hotspotBookTitle}
              className="h-32 w-auto shrink-0 rounded shadow-sm"
            />
            <div>
              <p className="font-sans text-sm font-semibold text-alpfor-blue mb-xs">{c.hotspotBookTitle}</p>
              <p className="font-sans text-xs text-alpfor-rock leading-relaxed mb-sm">{c.hotspotBookMeta}</p>
              <a
                href={hotspotPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 256 256">
                  <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
                </svg>
                {c.hotspotPdfLabel}
              </a>
            </div>
          </div>
        </section>

        {/* Alpine plants */}
        <section className="border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-md">{c.plantsHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-sm">{c.plants1}</p>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-xl">{c.plants2}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-md">
            {species.map(sp => (
              <figure key={sp.name}>
                <img
                  src={sp.src}
                  alt={sp.name}
                  className="object-cover aspect-square w-full rounded-lg"
                />
                <figcaption className="mt-xs text-sm italic text-alpfor-rock">
                  <span className="font-medium">{sp.name}</span>
                  <span className="text-xs not-italic ml-xs text-alpfor-rock/70">{sp.family}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </article>
    </>
  )
}
