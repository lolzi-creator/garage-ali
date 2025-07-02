import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'oil-change',
    title: 'Ölwechsel',
    description: 'Kompletter Ölwechsel Service mit Filterwechsel und Fahrzeuginspektion.',
    icon: 'Wrench',
    price: 'Ab CHF 89.-',
    duration: '30 Minuten',
    features: [
      'Premium Motoröl',
      'Ölfilter Wechsel',
      'Flüssigkeitskontrolle',
      'Batterie Test',
      'Reifendruck Kontrolle'
    ]
  },
  {
    id: 'brake-service',
    title: 'Bremsen Service',
    description: 'Professionelle Bremseninspektion, Reparatur und Austausch.',
    icon: 'CircleStop',
    price: 'Ab CHF 299.-',
    duration: '1-2 Stunden',
    features: [
      'Bremsbeläge Wechsel',
      'Bremsscheiben Kontrolle',
      'Bremsflüssigkeit Prüfung',
      'Bremszangen Service',
      'Testfahrt'
    ]
  },
  {
    id: 'tire-service',
    title: 'Reifen Service',
    description: 'Reifenmontage, Auswuchtung, Rotation und Reparatur.',
    icon: 'CircleDot',
    price: 'Ab CHF 45.-',
    duration: '45 Minuten',
    features: [
      'Reifen Montage & Auswuchtung',
      'Reifen Rotation',
      'Platten Reparatur',
      'Druckkontrolle',
      'Spureinstellung'
    ]
  },
  {
    id: 'engine-diagnostics',
    title: 'Motor Diagnose',
    description: 'Moderne Computer-Diagnose zur Erkennung von Motorproblemen.',
    icon: 'Search',
    price: 'Ab CHF 150.-',
    duration: '1 Stunde',
    features: [
      'Computer Diagnose',
      'Fehlercode Analyse',
      'Leistungstest',
      'Sensor Kontrolle',
      'Detaillierter Bericht'
    ]
  },
  {
    id: 'ac-service',
    title: 'Klima Service',
    description: 'Klimaanlagen Inspektion, Reparatur und Befüllung.',
    icon: 'Snowflake',
    price: 'Ab CHF 120.-',
    duration: '1 Stunde',
    features: [
      'Klimaanlage Inspektion',
      'Kältemittel Auffüllung',
      'Leckage Erkennung',
      'Filter Wechsel',
      'Leistungstest'
    ]
  },
  {
    id: 'transmission-service',
    title: 'Getriebe Service',
    description: 'Komplette Getriebe Wartung und Reparatur.',
    icon: 'Cog',
    price: 'Ab CHF 350.-',
    duration: '2-3 Stunden',
    features: [
      'Getriebeöl Wechsel',
      'Filter Austausch',
      'System Kontrolle',
      'Leistungstest',
      'Diagnose Scan'
    ]
  }
]; 