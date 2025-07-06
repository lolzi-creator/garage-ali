import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'kfz-service',
    title: 'KFZ Service',
    description: 'Service Arbeiten und Reparaturen aller Marken, nach Herstellervorgaben.',
    icon: 'Wrench',
    price: 'Auf Anfrage',
    duration: '1-3 Stunden',
    features: [
      'Wartung nach Herstellervorgaben',
      'Reparaturen aller Marken',
      'Original-Ersatzteile',
      'Professionelle Diagnose',
      'Qualitätsgarantie'
    ]
  },
  {
    id: 'klima-service',
    title: 'Klima Service',
    description: 'Kompletter Klimaanlagen-Service für optimale Funktionalität. Empfohlen alle 2 Jahre.',
    icon: 'Snowflake',
    price: 'Ab CHF 100.-',
    duration: '1-2 Stunden',
    features: [
      'Betriebsdruck & Austrittstemperatur prüfen',
      'Kältemittel absaugen & füllen',
      'Vakuum erzeugen & Dichtheit prüfen',
      'Kondensatorlüfter prüfen',
      'Niveaukontrolle'
    ]
  },
  {
    id: 'reifen-service',
    title: 'Reifenservice',
    description: 'Autoreifen sind die entscheidende Verbindung Ihres Fahrzeugs mit der Strasse. Professioneller Service für beste Sicherheit.',
    icon: 'CircleDot',
    price: 'Ab CHF 50.-',
    duration: '30-60 Min',
    features: [
      'Reifenwechsel und Montage',
      'Auswuchten und Kontrolle',
      'Kompletträder-Einlagerung',
      'Reifenberatung',
      'Sicherheitsprüfung'
    ]
  }
]; 