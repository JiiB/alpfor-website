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
        verein: 'Association',
        infra: 'Infrastructure',
        research: 'Research',
        lehre: 'Teaching',
        map: 'Map',
        webcam: 'Webcam / Weather',
        geology: 'Geology',
        biodiversity: 'Flora & Fauna',
        contact: 'Contact',
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
        verein: 'Verein',
        infra: 'Infrastruktur',
        research: 'Forschung',
        lehre: 'Lehre',
        map: 'Karte',
        webcam: 'Webcam / Wetter',
        geology: 'Geologie',
        biodiversity: 'Flora & Fauna',
        contact: 'Kontakt',
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
