import { useI18n } from '../i18n.tsx'
import { PageBanner } from '../components/PageBanner.tsx'
import pubListPdf from '../assets/pdf/Publikationsliste_ALPFOR_2023.pdf?url'
import bidmer from '../assets/forschung/bidmer.jpg'
import steilhang from '../assets/forschung/steilhang.jpg'
import camp from '../assets/forschung/camp.jpg'
import geum from '../assets/forschung/geum.jpg'
import gletschernorm from '../assets/forschung/gletschernorm.jpg'
import gletscherthermo from '../assets/forschung/gletscherthermo.jpg'
import ltrMonitoring from '../assets/forschung/LTR_monitoring.jpg'

const content = {
  de: {
    title: 'Forschung',
    introHeading: 'Alpine Ökologie — generell',
    intro: 'Die Forschung an ALPFOR erbrachte bisher etwa 100 Publikationen in internationalen Fachjournalen und trug zu mehreren Buch- und Syntheseprojekten bei. Das Standard-Fachbuch Alpine Plant Life (jetzt in 3. Auflage 2021, mit chinesischer Übersetzung) widerspiegelt 30 Jahre alpine Pflanzenforschung auf der Furka. Über die Jahre wurden folgende Forschungsthemen bearbeitet: Wirkung von erhöhter CO₂-Konzentration und der Stickstoffdeposition, Klimaerwärmung, ökosystemarer Wasserhaushalt, Populationsdynamik, Reproduktion und Frostresistenz alpiner Arten, Wirkungen variabler Schneedecke, alpines Mikroklima und Blühphänologie, mit einem neuen Schwerpunkt Wurzelökologie.',
    pubListLabel: 'Publikationsliste Stand 2023',
    co2Heading: 'Erhöhtes Kohlendioxid',
    co2: 'In 2500 m Höhe ist der Luftdruck und damit auch die Verfügbarkeit von CO₂ und Sauerstoff für Pflanzen und Tiere gegenüber Meeresniveau um rund ein Viertel reduziert. In bisher einzigartigen Versuchen zur Wirkung von erhöhter Kohlendioxid-Konzentration auf die hochalpine Flora (ca. 580 ppm CO₂) — zunächst vier Sommer auf dem nahen Bidmerplateau in einem Alpenrasen, später an Pflanzen des Gletschervorfeldes — änderte das erhöhte CO₂ in beiden Fällen nichts an der jährlichen Produktivität der Bestände. Einige Gletschervorfeldarten reagierten sogar negativ. Aus diesen Resultaten darf der Schluss gezogen werden, dass alpine Pflanzen in dieser Höhe und bei der heutigen CO₂-Konzentration in ihrem Wachstum nicht kohlenstofflimitiert sind.',
    co2Caption: 'Alpenrasen unter erhöhtem CO₂-Angebot. Forschungsstation Bidmer (Furkapass), 2500 m, 1992–1996.',
    nHeading: 'Atmosphärische Stickstoffdeposition',
    n: 'Die Gebirgsvegetation sichert die steilen Talflanken und damit das Leben im Tal — doch nicht alle Arten sind darin gleich wirkungsvoll. Stickstoff aus der Luft (aus intensiver Landwirtschaft und Verbrennungsprozessen) fördert raschwüchsige Arten, die dann die schwachwüchsigen unterdrücken. ALPFOR lieferte dazu eine Zeitreihe für die Alpen und zeigte, dass mit ca. 7–8 kg Stickstoff pro Hektar und Jahr ein Vielfaches der natürlichen Menge angeliefert wird. Bereits geringe Zusätze von 5–10 kg N/ha/Jahr bewirken messbare Veränderungen in der alpinen Artengemeinschaft.',
    nCaption: 'Versuchsfläche des NFP 48 Projektes (2001–2005).',
    popHeading: 'Populationsbiologie',
    pop: 'Jede Pflanzenart ist durch viele Individuen, also eine Population, vertreten. Wie schaffen es Gebirgspflanzen im kurzen Bergsommer erfolgreiche Nachkommen zu erzeugen, wie verhindern sie, dass durch die Zerklüftung des Lebensraumes isolierte Populationen durch Inzucht langsam zu Grunde gehen? Was sind die Bestäubungsmechanismen und wie erfolgreich erhalten sie die genetische Diversität aufrecht? Die Arbeitsgruppe von J. Stöcklin studiert dazu unter anderen Geum reptans (kriechende Nelkenwurz) und die gelbe straussblütige Campanula thyrsoides, die ihr 5–10-jähriges Leben mit der Blüte beendet.',
    popCaption1: 'Campanula thyrsoides',
    popCaption2: 'Geum reptans',
    microHeading: 'Mikroklima',
    micro: 'Für Pflanzen gibt es nicht «das» Gebirgsklima, sondern jenes Kleinklima das durch das Relief und durch die Gestalt der Pflanzen entsteht. Nahe am Boden und dicht gedrängt fängt sich Sonnenwärme, die der Wind nicht verblasen kann. Das Kleinklima kann sich über wenige Meter Distanz mehr ändern als über grosse Höhendistanzen in der freien Atmosphäre. Bei 10 °C Lufttemperatur erlebt eine niederliegende Pflanze 25–35 °C wenn die Sonne scheint. Dieses Mikroklima schafft ein Mosaik von Kleinlebensräumen. Alpenpflanzen erleben ein komplett anderes Klima als ein Bergwanderer.',
    microCaption1: 'Das Einzugsgebiet des Muttenbaches.',
    microCaption2: 'Derselbe Ausschnitt aufgelöst in 76.000 Bildpunkte einer Thermalkamera.',
    monHeading: 'Langzeitmonitoring',
    mon: 'In der alpinen Welt läuft das Leben etwas langsamer ab, weshalb Veränderungen in Lebensgemeinschaften als Folge von Umweltveränderungen für einen Beobachter in der Regel nicht offenkundig sind. Dank Langzeit-Monitoring von Dauerbeobachtungsflächen können solche langsamen Veränderungen erfasst werden. Steile Umweltgradienten wie an den Flanken eines Schneebodens sind ideale Objekte dafür. Seit 2016 wirkt ALPFOR an einem alpenübergreifenden Langzeitmonitoring aktiv mit (Partner im Nationalpark Hohe Tauern, Österreich und in Südtirol, Italien).',
  },
  en: {
    title: 'Research',
    introHeading: 'Alpine Ecology — General',
    intro: 'Research at ALPFOR has so far produced around 100 publications in international journals and contributed to several book and synthesis projects. The standard reference book Alpine Plant Life (now in its 3rd edition 2021, with Chinese translation) reflects 30 years of alpine plant research at Furka. Research topics have included: effects of elevated CO₂ and nitrogen deposition, climate warming, ecosystem water balance, population dynamics, reproduction and frost resistance of alpine species, variable snow cover effects, alpine microclimate and flowering phenology, with a new focus on root ecology.',
    pubListLabel: 'Publication list (as of 2023)',
    co2Heading: 'Elevated Carbon Dioxide',
    co2: 'At 2500 m altitude, air pressure — and thus the availability of CO₂ and oxygen for plants and animals — is reduced by about a quarter compared to sea level. In the first-ever experiments on the effect of elevated CO₂ on high-alpine flora (ca. 580 ppm CO₂) — first over four summers on the nearby Bidmer plateau in an alpine grassland, then at plants in the glacier forefield — elevated CO₂ in both cases had no effect on annual productivity. Some glacier forefield species even responded negatively. These results suggest that at this altitude and current CO₂ levels, alpine plants are not carbon-limited in their growth.',
    co2Caption: 'Alpine grassland under elevated CO₂. Bidmer research site (Furka Pass), 2500 m, 1992–1996.',
    nHeading: 'Atmospheric Nitrogen Deposition',
    n: 'Mountain vegetation stabilises steep valley slopes — but not all species are equally effective. Atmospheric nitrogen (from intensive agriculture and combustion) promotes fast-growing species that then suppress slow-growing ones. ALPFOR provided a long-term dataset for the Alps showing that approximately 7–8 kg nitrogen per hectare per year is deposited — far above natural levels. Even small additions of 5–10 kg N/ha/year produce measurable changes in alpine plant communities.',
    nCaption: 'NFP 48 project experimental plot (2001–2005).',
    popHeading: 'Population Biology',
    pop: 'How do mountain plants produce successful offspring in the short alpine summer, and how do isolated populations avoid inbreeding? What are the pollination mechanisms and how successfully do they maintain genetic diversity? The research group of J. Stöcklin studies, among others, Geum reptans (creeping avens) and the yellow-flowered Campanula thyrsoides, which ends its 5–10-year life cycle with flowering.',
    popCaption1: 'Campanula thyrsoides',
    popCaption2: 'Geum reptans',
    microHeading: 'Microclimate',
    micro: 'For plants there is no single "mountain climate" — what matters is the microclimate created by topography and plant structure. Close to the ground and densely packed, solar warmth accumulates where wind cannot dissipate it. The microclimate can change more over a few metres than over large altitude differences in the free atmosphere. At 10 °C air temperature, a cushion plant may experience 25–35 °C in sunshine. This creates a mosaic of micro-habitats that alpine plants exploit.',
    microCaption1: 'The Muttenbach catchment area.',
    microCaption2: 'The same scene resolved into 76,000 pixels by a thermal camera.',
    monHeading: 'Long-term Monitoring',
    mon: 'Life in the alpine zone moves somewhat slowly, so changes in plant communities resulting from environmental change are often not immediately apparent to observers. Long-term monitoring of permanent plots makes it possible to detect such slow changes. Steep environmental gradients at snowbed margins are ideal for this — showing a huge amplitude of alpine life across a small space. Since 2016, ALPFOR has actively participated in a trans-alpine long-term monitoring network (partners in the Hohe Tauern National Park, Austria, and in South Tyrol, Italy).',
  },
} as const

export default function Forschung() {
  const { getLng } = useI18n()
  const c = content[getLng() as 'de' | 'en'] ?? content.de

  return (
    <>
      <PageBanner title={c.title} />
      <article className="mx-auto px-lg py-xxl" style={{ maxWidth: 'var(--container-standard)' }}>
        {/* Alpine ecology intro */}
        <section className="mb-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.introHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.intro}</p>
          <a
            href={pubListPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-xs font-sans text-sm text-alpfor-blue hover:text-alpfor-forest transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
            </svg>
            {c.pubListLabel}
          </a>
        </section>

        {/* CO2 */}
        <section className="mb-xl border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.co2Heading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.co2}</p>
          <figure>
            <img src={bidmer} alt={c.co2Caption} className="w-full rounded-lg" />
            <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.co2Caption}</figcaption>
          </figure>
        </section>

        {/* Nitrogen */}
        <section className="mb-xl border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.nHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.n}</p>
          <figure>
            <img src={steilhang} alt={c.nCaption} className="w-full rounded-lg" />
            <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.nCaption}</figcaption>
          </figure>
        </section>

        {/* Population biology */}
        <section className="mb-xl border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.popHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.pop}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <figure>
              <img src={camp} alt={c.popCaption1} className="w-full rounded-lg" />
              <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.popCaption1}</figcaption>
            </figure>
            <figure>
              <img src={geum} alt={c.popCaption2} className="w-full rounded-lg" />
              <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.popCaption2}</figcaption>
            </figure>
          </div>
        </section>

        {/* Microclimate */}
        <section className="mb-xl border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.microHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.micro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <figure>
              <img src={gletschernorm} alt={c.microCaption1} className="w-full rounded-lg aspect-[4/3] object-cover" />
              <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.microCaption1}</figcaption>
            </figure>
            <figure>
              <img src={gletscherthermo} alt={c.microCaption2} className="w-full rounded-lg aspect-[4/3] object-cover" />
              <figcaption className="mt-xs text-sm text-alpfor-rock italic text-center">{c.microCaption2}</figcaption>
            </figure>
          </div>
        </section>

        {/* Long-term monitoring */}
        <section className="border-t border-alpfor-rock/25 pt-xl">
          <h2 className="font-heading text-2xl font-semibold text-alpfor-blue mb-sm">{c.monHeading}</h2>
          <p className="font-sans text-lg text-alpfor-forest leading-relaxed mb-md">{c.mon}</p>
          <figure>
            <img src={ltrMonitoring} alt={c.monHeading} className="w-full rounded-lg" />
          </figure>
        </section>
      </article>
    </>
  )
}
