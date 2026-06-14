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
          body: 'The ALPFOR station is managed by the association «Alpine Research and Education Station Furka, ALPFOR». The association is affiliated with the University of Basel and cooperates with the regional authority Korporation Ursern. Financial support is received from the Korporation Ursern, the Canton of Uri, and various foundations. The activities of ALPFOR are dedicated to science and education. The board consists of scientists from the University of Basel, local representatives, former doctoral students, and members of the «Stiftung zur Förderung der Pflanzenkenntnisse» in Basel — a foundation that has contributed substantially to building renovation and supports plant identification courses.',
          personnelHeading: 'Board',
          executiveLabel: 'Executive Secretary & Station Manager',
          presidentLabel: 'President of ALPFOR',
          vpLabel: 'Vice-President',
          financeLabel: 'Finance',
          statutesHeading: 'Excerpt from the Statutes',
          statute1: 'The association operates the station for the purpose of nature-based research and education.',
          statute2: 'It is non-profit oriented.',
          statute3: 'It is committed to long-term research as well as education and training in alpine ecology, while simultaneously promoting sustainable management of mountain ecosystems.',
        },
        infrastruktur: {
          title: 'Infrastructure',
        },
        lehre: {
          title: 'Teaching',
        },
        karte: {
          title: 'Map',
          caption: 'Map of the ALPFOR station area at the Furka Pass.',
        },
        webcam: {
          title: 'Webcam / Weather',
          furkaLabel: 'Live image (Furka)',
          bidmerLabel: 'Live image (Bidmer — Oberwald)',
        },
        links: {
          title: 'Links',
          korporation: 'Korporation Ursern',
          gemeinden: 'Local Municipalities',
          nachbarn: 'Our Neighbours',
          unibasel: 'University of Basel',
          wissenschaft: 'Mountain Science',
        },
        impressum: {
          title: 'Imprint',
          publisherHeading: 'Publisher',
          publisherName: 'Alpine Research and Education Station ALPFOR (Association)',
          publisherLine2: 'c/o University of Basel, Botany',
          publisherAddress: 'Schönbeinstrasse 6, 4056 Basel',
          creditsHeading: 'Images & Content',
          creditsText: 'Christian Körner and Erika Hiltbrunner',
          creditsContact: 'For questions and suggestions:',
          creditsEmail: 'franziska.grob@unibas.ch',
          disclaimerHeading: 'Disclaimer',
          disclaimer: 'The association endeavours to provide correct and up-to-date information on its website. However, it assumes no guarantee or warranty regarding the completeness of the information contained or referenced on the website. Access, use of the website, and use of services is at the user\'s own risk. Neither the ALPFOR association nor any person involved in the production, information entry, or dissemination of this website is liable for any damages in connection with access, use, or possible disruptions. The association reserves the right to change the content of this website at any time, for any reason and in any manner, without prior notice. Any responsibility for the consequences of such changes is disclaimed. Any reproduction, retransmission, or other use of the information on this website is prohibited for commercial purposes.',
          photoHeading: 'Photo Credits',
          photoText: 'Images used on this website were provided by members of the association and document the various areas of interest and research of the association.',
          websiteHeading: 'Website',
          websiteText: 'Website development by',
        },
      },
      news: { title: 'News' },
      footer: {
        links: 'Links',
        impressum: 'Imprint',
        copyright: '© ALPFOR / University of Basel',
      },
      sections: {
        about: {
          title: 'About ALPFOR',
          body: 'ALPFOR stands for «Alpine Research and Education Station Furka». ALPFOR is simultaneously the name of the station and of the non-profit association founded in 2005, which operates the station near the Furka Pass in the Swiss Central Alps.',
          body2: 'Located at 2430 m a.s.l., in the municipality of Realp (Canton Uri) on the pass road from Uri to Valais (46° 34\' 37" N, 8° 25\' 18" E). ALPFOR began at the Furka with the rental and, subsequently, renovation of buildings from the former military barracks (2008–2019). Academically associated with the University of Basel, the Korporation Ursern (Andermatt) is the local partner. Since September 2019, ALPFOR owns the entire former compound of 12 buildings. ALPFOR has become a centre for research and education in alpine ecology (11 doctorates, 40 master\'s degrees by 2022; annual international graduate courses, international conferences). Located in the heart of the alpine zone, 250 m above the climatic tree line, embedded between crystalline (granite, gneiss) and carbonate (marl, shale) formations with nearby glaciers, the surroundings of ALPFOR are a biodiversity hotspot. Half of the Swiss alpine flora can be found around the station (305 species of flowering plants).',
        },
        geology: {
          title: 'Geology',
          body: 'The Furka Pass, like the Oberalp Pass near Andermatt, forms a saddle that interrupts the great tectonic east–west furrow along the main Alpine ridge (Inn–Rhine–Reuss–Rhone traverse). Predominantly in the gneiss and granite of the Aar and Gotthard Massifs, a strip of softer metamorphic marl and dolomite layers (Ursern Zone) crosses the pass, dominating the south-facing slopes near the road between ALPFOR and the pass to the west. The immediate proximity of soils on carbonate and silicate substrates with transitional zones explains the exceptional species richness of the Furka zone. The pass and surrounding peaks (Grosses Furkahorn 3169 m, Galenstock 3586 m, Wittenwassernstock 3084 m) form the continental watershed between the great European river systems — the Rhine (with the Reuss as tributary) and the Rhône, flowing to the North Sea and the Mediterranean. A third system, the Po, drains from the south slope into the Adriatic. A few kilometres to the east, the Inn rises to feed the Danube (Black Sea). Because of this central position, and the abundant precipitation, the Alps are often called the water tower of Europe. All glaciers in the Furka region are in rapid retreat, creating new open — often unstable — terrain that attracts mineral hunters.',
        },
        contact: {
          title: 'Contact',
          body: 'Please note that ALPFOR operates on a non-profit basis and scientific staff are responsible for running the station. Accordingly there are no telephone or office hours, but we can be reached by email:\n\nErika Hiltbrunner: erika.hiltbrunner@unibas.ch\nChristian Körner: ch.koerner@unibas.ch\n\nYou can also contact the administrative office in Basel:\n\nALPFOR / Universität Basel\nDepartement Umweltwissenschaften\nSchönbeinstrasse 6\n4056 Basel (Schweiz)\nsekretariat-botschoen@unibas.ch\nPhone: +41 61 207 23 11',
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
          body: 'Die Station ALPFOR wird durch den gleichnamigen Verein «Alpine Forschungs- und Ausbildungsstation Furka, ALPFOR» verwaltet. Der Verein ist mit der Universität Basel assoziiert und kooperiert mit der regionalen Behörde «Korporation Ursern». Finanzielle Hilfe erhält der Verein von der Korporation Ursern, dem Kanton Uri und verschiedenen Stiftungen. Die Aktivitäten von ALPFOR sind der Wissenschaft und Ausbildung gewidmet. Der Vorstand besteht aus Wissenschaftlern der Universität Basel, lokalen Vertretungen, ehemaligen Doktoranden und Mitgliedern der «Stiftung zur Förderung der Pflanzenkenntnisse» in Basel — einer Stiftung, die substantiell zur Renovation der Gebäude beigetragen hat und Ausbildungskurse zur Pflanzenkenntnisse unterstützt.',
          personnelHeading: 'Vorstand',
          executiveLabel: 'Geschäftsführerin und Stationsleiterin',
          presidentLabel: 'Präsident von ALPFOR',
          vpLabel: 'Vizepräsident',
          financeLabel: 'Finanzen',
          statutesHeading: 'Auszug aus den Statuten',
          statute1: 'Der Verein betreibt die Station zum Zweck der naturkundlichen Forschung und Ausbildung.',
          statute2: 'Er ist nicht gewinnorientiert.',
          statute3: 'Er engagiert sich für langfristig wirkende Forschung, sowie Aus- und Weiterbildung in alpiner Ökologie und will damit zugleich den nachhaltigen Umgang mit dem Ökosystem Gebirge fördern.',
        },
        infrastruktur: {
          title: 'Infrastruktur',
        },
        lehre: {
          title: 'Lehre',
        },
        karte: {
          title: 'Karte',
          caption: 'Karte des ALPFOR Stationsgebietes am Furkapass.',
        },
        webcam: {
          title: 'Webcam / Wetter',
          furkaLabel: 'Aktuelles Bild (Furka)',
          bidmerLabel: 'Aktuelles Bild (Bidmer — Oberwald)',
        },
        links: {
          title: 'Links',
          korporation: 'Korporation Ursern',
          gemeinden: 'Die Gemeinden im Tal',
          nachbarn: 'Unsere Nachbarn',
          unibasel: 'Universität Basel',
          wissenschaft: 'Wissenschaft im Gebirge',
        },
        impressum: {
          title: 'Impressum',
          publisherHeading: 'Herausgeber',
          publisherName: 'Alpine Forschungs-und Ausbildungsstation ALPFOR (Verein)',
          publisherLine2: 'c/o Universität Basel, Botanik',
          publisherAddress: 'Schönbeinstrasse 6, 4056 Basel',
          creditsHeading: 'Bilder und Inhalt',
          creditsText: 'Christian Körner und Erika Hiltbrunner',
          creditsContact: 'Für Fragen und Anregungen:',
          creditsEmail: 'franziska.grob@unibas.ch',
          disclaimerHeading: 'Disclaimer / Haftungserklärung',
          disclaimer: 'Der Verein bemüht sich um richtige und aktualisierte Informationen auf seiner Homepage. Indes übernimmt er keinerlei Garantien oder Zusicherungen betr. Vollständigkeit der in der Homepage enthaltenen bzw. referenzierten Information. Der Zugang, die Benutzung der Homepage und die Inanspruchnahme der Dienstleistungen geschieht auf eigenes Risiko des Benutzers/der Benutzerin. Weder der Verein ALPFOR noch eine von ihnen beigezogene Hilfsperson, die bei der Herstellung, Informationseingabe und -weitergabe dieser Homepage involviert ist, sind haftbar für irgendwelche Schäden und Investitionen im Zusammenhang mit dem Zugang, der Benutzung oder allfälligen Störungen im Gebrauch der Homepage. Der Verein behält sich das Recht vor, jederzeit aus welchem Grund und in welcher Art und Weise auch immer, den Inhalt dieser Homepage ohne vorgehende Ankündigung zu ändern. Jegliche Verantwortung für irgendwelche Folgen aus solchen Änderungen wird abgelehnt. Jegliche Wiedergabe, Weiterübertragung oder sonstiger Gebrauch der Information auf dieser Homepage ist für kommerzielle Zwecke untersagt.',
          photoHeading: 'Abbildungsnachweis',
          photoText: 'Die auf der Webseite verwendeten Bilder wurden von Mitgliedern des Vereins zur Verfügung gestellt und dokumentieren die verschiedenen Interessen- und Forschungsgebiete des Vereins.',
          websiteHeading: 'Website',
          websiteText: 'Website-Entwicklung durch',
        },
      },
      news: { title: 'Aktuell' },
      footer: {
        links: 'Links',
        impressum: 'Impressum',
        copyright: '© ALPFOR / Universität Basel',
      },
      sections: {
        about: {
          title: 'Über ALPFOR',
          body: 'ALPFOR steht für «Alpine Forschungs- und Ausbildungsstation Furka». ALPFOR ist gleichzeitig der Name der Station und des 2005 gegründeten, gemeinnützigen Vereins, der die Station nahe dem Furkapass in den Schweizerischen Zentralalpen betreibt.',
          body2: 'Ort: 2430 m, Gemeinde Realp (Kanton Uri) an der Passstrasse von Uri ins Wallis (46° 34\' 37" N, 8° 25\' 18" E). ALPFOR begann auf der Furka mit der Anmietung und Renovation von Gebäuden des ehemaligen militärischen Truppenlagers (2008–2019). Akademisch mit der Universität Basel assoziiert, ist die Korporation Ursern (Andermatt) der lokale Partner. Seit September 2019 ist ALPFOR Eigentümer des gesamten, aus 12 Gebäuden bestehenden ehemaligen Truppenlagers. ALPFOR wurde zu einem Zentrum der Forschung und Ausbildung in alpiner Ökologie (11 Doktorate, 40 Masterabschlüsse bis 2022; jährliche internationale Graduiertenkurse, internationale Konferenzen). Im Herzen der alpinen Stufe gelegen, 250 m über der klimatischen Baumgrenze, eingebettet zwischen kristallinen (Granit, Gneis) und karbonatischen (Mergel, Schiefer) Formationen mit nahen Gletschern, ist die Umgebung von ALPFOR ein Hotspot der Artenvielfalt. Die Hälfte der Schweizer Alpenflora findet sich im Umfeld der Station (305 Arten von Blütenpflanzen).',
        },
        geology: {
          title: 'Geologie',
          body: 'Der Furkapass, ähnlich wie der Oberalppass bei Andermatt, bildet einen Sattel, der die grosse tektonische Ost-West-Furche entlang des Alpenhauptkamms unterbricht (Inn–Rhein–Reuss–Rhone Traverse). Mehrheitlich im Gneis und Granit der Aare- und Gotthard-Massive durchzieht den Pass ein Streifen von weicherem, metamorphem Mergel und Dolomitschichten (Ursernzone), der zwischen ALPFOR und dem westlich liegenden Pass die Südflanken nahe der Strasse dominiert. Die unmittelbare Nähe von Böden auf Karbonat und Silikat mit Übergangszonen erklärt den aussergewöhnlichen Artenreichtum der Furkazone. Der Pass und die umliegenden Gipfel (Grosses Furkahorn 3169 m, Galenstock 3586 m, Wittenwassernstock 3084 m) bilden die kontinentale Wasserscheide zwischen den grossen europäischen Flusssystemen — des Rheins (mit der Reuss als Zufluss) und der Rhone, welche zur Nordsee und ins Mittelmeer fliessen. Als Drittes entwässert der Po von der Südflanke ins Adriatische Meer. Einige Kilometer östlich entspringt der Inn, der die Donau speist (Schwarzes Meer). Alle Gletscher in der Furkaregion befinden sich in raschem Rückzug, mit neuem offenem, oft auch instabilem Land, das Mineraliensucher anzieht.',
        },
        contact: {
          title: 'Kontakt',
          body: 'Bitte beachten Sie, dass ALPFOR auf einer non-profit Basis funktioniert und wissenschaftliche Mitarbeiter für den Betrieb der Station zuständig sind. Dementsprechend gibt es keine Telefon- oder Bürozeiten, aber wir sind per Mail erreichbar:\n\nErika Hiltbrunner: erika.hiltbrunner@unibas.ch\nChristian Körner: ch.koerner@unibas.ch\n\nSie können sich auch bei der Geschäftsstelle in Basel melden:\n\nALPFOR / Universität Basel\nDepartement Umweltwissenschaften\nSchönbeinstrasse 6\n4056 Basel (Schweiz)\nsekretariat-botschoen@unibas.ch\nTelefon: +41 61 207 23 11',
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
