import type { i18n } from 'i18next'
import type { ReactNode } from 'react'
import { createInstance } from 'i18next'
import { use, useEffect, useRef } from 'react'
import { I18nContext, I18nextProvider } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import './@types/i18next.d.ts'

export const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        organisation: 'Organisation',
        verein: 'Association',
        infra: 'Infrastructure',
        science: 'Science',
        research: 'Research',
        lehre: 'Teaching',
        geology: 'Geology',
        biodiversity: 'Flora & Fauna',
        location: 'Location',
        map: 'Map',
        webcam: 'Webcam / Weather',
        contact: 'Contact',
      },
      pages: {
        verein: {
          title: 'Association',
          body: 'ALPFOR is constituted as a non-profit association under Swiss law. The association brings together universities, research institutes, and individual scientists committed to long-term ecological monitoring in the alpine zone. Membership is open to institutions and individuals who support the station\'s scientific mission.',
          body2: 'The association\'s board oversees strategic direction, fundraising, and partnerships with public agencies and private foundations. Annual general assemblies provide members with full transparency on financial accounts, research outputs, and operational decisions.',
        },
        infrastruktur: {
          title: 'Infrastructure',
          body: 'The research station at the Furka Pass provides a fully equipped base for year-round fieldwork at high altitude. Facilities include a heated laboratory, instrument storage, sample preparation rooms, meteorological masts, and dormitory accommodation for visiting researchers.',
          body2: 'Instrument networks deployed across the study area include automatic weather stations, soil temperature and moisture loggers, eddy-covariance flux towers, and a network of time-lapse cameras monitoring snow cover dynamics and phenological events.',
        },
        lehre: {
          title: 'Teaching',
          body: 'ALPFOR hosts intensive field courses for graduate students in ecology, earth sciences, and environmental biology. Courses are designed around primary data collection in the field, giving students direct experience with professional monitoring protocols, statistical analysis, and scientific reporting.',
          body2: 'Partner universities include ETH Zurich, the University of Bern, and several European institutions. Teaching activities are coordinated with the research calendar to minimise disruption to long-term monitoring and to maximise the value of field time.',
        },
        karte: {
          title: 'Map',
          body: 'The ALPFOR study area covers approximately 12 km² centred on the Furka Pass (2429 m a.s.l.), spanning elevations from 2200 m to 3100 m. Permanent study plots, transects, sensor networks, and infrastructure are georeferenced and maintained in a GIS database updated annually.',
          body2: 'Interactive maps of the study area, sensor locations, and biodiversity survey plots are available to registered researchers through the ALPFOR data portal.',
        },
        webcam: {
          title: 'Webcam / Weather',
          body: 'Live images from cameras positioned across the Furka Pass area provide real-time documentation of weather conditions, snow cover, and seasonal phenology. Images are archived at hourly intervals and contribute to the station\'s long-term visual record dating back to 2004.',
          body2: 'Current meteorological data — air temperature, precipitation, wind speed and direction, global radiation, and snow depth — are transmitted in real time from the station\'s automatic weather station network and displayed here with a 15-minute update interval.',
        },
      },
      sections: {
        about: {
          title: 'About ALPFOR',
          body: 'ALPFOR — the Alpine Biodiversity Research Station Furka — is a scientific research facility dedicated to long-term monitoring of alpine ecosystems in the Swiss Alps. Since its founding, the station has generated continuous ecological datasets that underpin our understanding of how high-altitude environments respond to climate change, land use, and atmospheric deposition.',
          body2: 'Located at 2440 m a.s.l. on the Furka Pass, the station operates year-round and provides infrastructure for field ecologists, botanists, zoologists, and earth scientists from Swiss and international institutions.',
        },
        research: {
          title: 'Research',
          body: 'Our research programmes span plant community dynamics, invertebrate diversity, soil biogeochemistry, glacial retreat, and microclimate monitoring. Standardised survey protocols applied consistently since the 1990s allow detection of subtle long-term trends that short-term studies cannot reveal.',
          body2: 'Current projects investigate phenological shifts in flowering plants, altitudinal range expansions of thermophilic invertebrates, and carbon flux dynamics in subalpine meadows. All primary data are archived and made available to the scientific community under open-access principles.',
        },
        biodiversity: {
          title: 'Flora & Fauna',
          body: 'The Furka region harbours exceptional species richness for its elevation. To date, more than 340 vascular plant species, 180 bryophyte taxa, and over 600 invertebrate species have been recorded within the station\'s study area. Flagship species include Gentiana acaulis, Leontopodium nivale, and several rare Lepidoptera endemic to the central Alpine arc.',
          body2: 'Annual biodiversity surveys follow GLORIA and SwissMetNet protocols, ensuring comparability with monitoring networks across the European mountain system.',
        },
        geology: {
          title: 'Geology',
          body: 'The Furka Pass sits at the intersection of the Aar Massif and the Gotthard Nappe, exposing Variscan granites and Mesozoic metamorphic series that record more than 300 million years of Alpine tectonic history. Periglacial landforms — including active rock glaciers, proglacial moraines, and sorted polygon fields — provide natural laboratories for studying geomorphic response to temperature rise.',
          body2: 'The station maintains a network of permafrost boreholes and displacement sensors installed in collaboration with the Swiss Permafrost Monitoring Network (PERMOS).',
        },
        contact: {
          title: 'Contact',
          body: 'ALPFOR — Alpine Biodiversity Research Station Furka\nFurka Pass, 3999 Obergoms, Switzerland\ninfo@alpfor.ch',
        },
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: 'Home',
        organisation: 'Organisation',
        verein: 'Verein',
        infra: 'Infrastruktur',
        science: 'Wissenschaft',
        research: 'Forschung',
        lehre: 'Lehre',
        geology: 'Geologie',
        biodiversity: 'Flora & Fauna',
        location: 'Standort',
        map: 'Karte',
        webcam: 'Webcam / Wetter',
        contact: 'Kontakt',
      },
      pages: {
        verein: {
          title: 'Verein',
          body: 'ALPFOR ist als gemeinnütziger Verein nach Schweizer Recht konstituiert. Der Verein vereint Universitäten, Forschungsinstitute und einzelne Wissenschaftlerinnen und Wissenschaftler, die dem Langzeitmonitoring im alpinen Raum verpflichtet sind. Die Mitgliedschaft steht Institutionen und Einzelpersonen offen, die die wissenschaftliche Mission der Station unterstützen.',
          body2: 'Der Vorstand des Vereins verantwortet die strategische Ausrichtung, die Mittelbeschaffung sowie Partnerschaften mit öffentlichen Stellen und privaten Stiftungen. Jährliche Generalversammlungen bieten den Mitgliedern vollständige Transparenz über Jahresabschlüsse, Forschungsergebnisse und operative Entscheide.',
        },
        infrastruktur: {
          title: 'Infrastruktur',
          body: 'Die Forschungsstation am Furkapass bietet eine vollständig ausgestattete Basis für ganzjährige Feldarbeit auf grosser Höhe. Zur Ausstattung gehören ein beheiztes Labor, Gerätekammern, Probenvorbereitungsräume, meteorologische Masten sowie Unterkunftsmöglichkeiten für Gastforschende.',
          body2: 'Die im Untersuchungsgebiet installierten Gerätenetze umfassen automatische Wetterstationen, Boden-Temperatur- und Feuchtigkeitsdatenlogger, Eddy-Kovarianz-Fluxtürme sowie ein Netz von Zeitrafferungskameras zur Überwachung der Schneebedeckungsdynamik und phänologischer Ereignisse.',
        },
        lehre: {
          title: 'Lehre',
          body: 'ALPFOR bietet intensive Feldkurse für Doktorierende und Masterstudierende in Ökologie, Geowissenschaften und Umweltbiologie an. Die Kurse sind auf die primäre Datenerhebung im Gelände ausgerichtet und vermitteln den Studierenden direkte Erfahrung mit professionellen Monitoring-Protokollen, statistischer Auswertung und wissenschaftlicher Berichterstattung.',
          body2: 'Zu den Partneruniversitäten zählen die ETH Zürich, die Universität Bern und mehrere europäische Institutionen. Die Lehrveranstaltungen werden mit dem Forschungskalender abgestimmt, um das Langzeitmonitoring möglichst wenig zu beeinträchtigen und den Mehrwert der Feldzeit zu maximieren.',
        },
        karte: {
          title: 'Karte',
          body: 'Das ALPFOR-Untersuchungsgebiet umfasst rund 12 km² mit dem Furkapass (2429 m ü.M.) als Zentrum und erstreckt sich über Höhenlagen von 2200 m bis 3100 m. Dauerbeobachtungsflächen, Transekte, Sensornetzwerke und Infrastruktur sind georeferenziert und in einer jährlich aktualisierten GIS-Datenbank erfasst.',
          body2: 'Interaktive Karten des Untersuchungsgebiets, der Sensorstandorte und der Biodiversitäts-Erhebungsflächen stehen registrierten Forschenden über das ALPFOR-Datenportal zur Verfügung.',
        },
        webcam: {
          title: 'Webcam / Wetter',
          body: 'Live-Aufnahmen von Kameras an verschiedenen Standorten rund um den Furkapass ermöglichen die Echtzeitdokumentation von Wetterbedingungen, Schneebedeckung und saisonaler Phänologie. Die Bilder werden stündlich archiviert und ergänzen die visuelle Langzeitdokumentation der Station, die bis ins Jahr 2004 zurückreicht.',
          body2: 'Aktuelle Meteorologiedaten — Lufttemperatur, Niederschlag, Windgeschwindigkeit und -richtung, Globalstrahlung und Schneehöhe — werden in Echtzeit vom automatischen Wetterstationnetz der Station übertragen und hier im 15-Minuten-Takt aktualisiert angezeigt.',
        },
      },
      sections: {
        about: {
          title: 'Über ALPFOR',
          body: 'ALPFOR — die Alpine Biodiversitäts-Forschungsstation Furka — ist eine wissenschaftliche Forschungseinrichtung für das Langzeitmonitoring alpiner Ökosysteme in den Schweizer Alpen. Seit ihrer Gründung erzeugt die Station kontinuierliche ökologische Datensätze, die unser Verständnis davon vertiefen, wie Hochgebirgslebensräume auf Klimawandel, Landnutzung und atmosphärische Deposition reagieren.',
          body2: 'Die Station liegt auf 2440 m ü.M. am Furkapass, ist ganzjährig in Betrieb und bietet Feldökologen, Botanikern, Zoologen und Geowissenschaftlern aus Schweizer und internationalen Institutionen Infrastruktur für ihre Forschung.',
        },
        research: {
          title: 'Forschung',
          body: 'Unsere Forschungsprogramme umfassen Pflanzengemeinschaftsdynamik, Wirbellosendiversität, Bodenbiogeochemie, Gletscherrückgang und Mikroklima-Monitoring. Standardisierte Erhebungsprotokolle, die seit den 1990er-Jahren konsequent angewendet werden, ermöglichen die Erfassung subtiler Langzeittrends, die kurzfristige Studien nicht aufdecken können.',
          body2: 'Aktuelle Projekte untersuchen phänologische Verschiebungen bei Blütenpflanzen, Höhenausdehnungen thermophiler Wirbellosenpopulationen sowie Kohlenstofffluss-Dynamiken in subalpinen Wiesen. Alle Primärdaten werden archiviert und der wissenschaftlichen Gemeinschaft nach Open-Access-Grundsätzen zugänglich gemacht.',
        },
        biodiversity: {
          title: 'Flora & Fauna',
          body: 'Die Furka-Region beherbergt für ihre Höhenlage eine aussergewöhnliche Artenvielfalt. Bisher wurden im Untersuchungsgebiet der Station mehr als 340 Gefässpflanzenarten, 180 Bryophyten-Taxa und über 600 Wirbellosenarten nachgewiesen. Zu den Leitarten gehören Gentiana acaulis, Leontopodium nivale und mehrere seltene Lepidoptera, die im zentralen Alpenbogen endemisch sind.',
          body2: 'Die jährlichen Biodiversitätserhebungen folgen den GLORIA- und SwissMetNet-Protokollen, was die Vergleichbarkeit mit Monitoringnetzwerken im gesamten europäischen Gebirgssystem gewährleistet.',
        },
        geology: {
          title: 'Geologie',
          body: 'Der Furkapass liegt an der Schnittstelle von Aarmassiv und Gotthard-Decke und legt variszische Granite sowie mesozoische Metamorphitserien frei, die über 300 Millionen Jahre alpine Tektonikgeschichte dokumentieren. Periglaziale Landformen — darunter aktive Blockgletscher, Proglazialmoränen und Strukturböden — bieten natürliche Laboratorien zur Erforschung geomorphologischer Reaktionen auf den Temperaturanstieg.',
          body2: 'Die Station unterhält ein Netz von Permafrost-Bohrlöchern und Verschiebungssensoren, die in Zusammenarbeit mit dem Schweizerischen Permafrost-Monitoringnetz (PERMOS) installiert wurden.',
        },
        contact: {
          title: 'Kontakt',
          body: 'ALPFOR — Alpine Biodiversitäts-Forschungsstation Furka\nFurkapass, 3999 Obergoms, Schweiz\ninfo@alpfor.ch',
        },
      },
    },
  },
} as const

export function I18n({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const currentLng = pathname.split('/')[1]
  const i18nRef = useRef<null | i18n>(null)
  if (!i18nRef.current) {
    i18nRef.current = createInstance({ lng: currentLng, defaultNS: 'translation', ns: ['translation'], resources })
    i18nRef.current.init()
  }

  return (
    <I18nextProvider i18n={i18nRef.current}>
      {children}
    </I18nextProvider>
  )
}

const lngs = Object.keys(resources)

export function useSyncLng() {
  const { pathname } = useLocation()
  const currentLng = pathname.split('/')[1]
  const { i18n } = use(I18nContext)

  const nav = useNavigate()
  useEffect(() => {
    if (!lngs.includes(currentLng)) {
      nav('/en')
      return
    }
    if (currentLng !== i18n.language) {
      i18n.changeLanguage(currentLng)
    }
  }, [nav, currentLng, i18n])
}

export function useI18n() {
  const nav = useNavigate()
  const { pathname, search } = useLocation()

  const withLngBase = (path: string) => {
    if (!path.startsWith('/')) {
      path = `/${path}`
    }
    if (path === '/') {
      path = ''
    }
    return `/${getLng()}${path}`
  }

  const getLng = () => pathname.split('/')[1]

  const changeLng = (lng: keyof typeof resources) => {
    const originLng = getLng()
    nav({ pathname: pathname.replace(`/${originLng}`, `/${lng}`), search }, { replace: true })
  }

  const { i18n } = use(I18nContext)

  return {
    withLngBase,
    getLng,
    changeLng,
    i18n,
  }
}
