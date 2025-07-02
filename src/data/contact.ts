import { ContactInfo, NavigationItem } from '@/types';

export const contactInfo: ContactInfo = {
  businessName: "Auto Checkpoint Garage Ali",
  phone: "032 530 39 99",
  email: "info@autocheckpoint-ali.ch",
  address: {
    street: "Solothurnstrasse 92",
    city: "Lengnau",
    state: "BE",
    zipCode: "2543"
  },
  hours: {
    "Montag": "08:00 - 18:00",
    "Dienstag": "08:00 - 18:00", 
    "Mittwoch": "08:00 - 18:00",
    "Donnerstag": "08:00 - 18:00",
    "Freitag": "08:00 - 18:00",
    "Samstag": "09:00 - 16:00",
    "Sonntag": "Geschlossen"
  },
  socialMedia: {
    facebook: "https://facebook.com/alisautogarage",
    instagram: "https://instagram.com/alisautogarage",
    google: "https://maps.google.com"
  }
};

export const navigation: NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "Fahrzeuge", href: "/cars" },
  { label: "Service", href: "/service" },
  { label: "Über uns", href: "/about" },
  { label: "Kontakt", href: "/contact" }
];

export const businessInfo = {
  established: "2015",
  experience: "9+ Jahre Erfahrung",
  vehiclesSold: "500+",
  certification: "Lizenzierter Autohändler",
  specialties: [
    "Gebrauchtwagen Verkauf",
    "Fahrzeugbewertung", 
    "Finanzierung & Leasing",
    "Wartung & Service",
    "Ankauf & Inzahlungnahme"
  ],
  values: [
    "Ehrliche & Transparente Preise",
    "Qualitätsfahrzeuge",
    "Umfassender Service",
    "Faire Finanzierung"
  ]
}; 