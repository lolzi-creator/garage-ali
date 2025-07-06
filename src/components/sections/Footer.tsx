import { Phone, MapPin, Mail, Facebook, Instagram } from 'lucide-react';
import { contactInfo, businessInfo } from '@/data/contact';
import SmallMap from '@/components/SmallMap';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2 leading-tight">
                <div>
                  <span className="text-blue-400 font-mono tracking-wider">AUTO</span>{' '}
                  <span className="text-yellow-400 font-mono tracking-wider">CHECKPOINT</span>
                </div>
                <div className="text-red-500 font-mono tracking-wider">GARAGE</div>
              </h3>
              <p className="text-gray-400 text-sm mt-2 uppercase tracking-wide">Premium Autohaus</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Exklusive Automobile seit {businessInfo.established}. Über 10 verkaufte Premium-Fahrzeuge. 
              Ihr vertrauensvoller Partner für erstklassige Automobile in Lengnau.
            </p>
            <div className="flex gap-3 pt-4">
              {contactInfo.socialMedia?.facebook && (
                <a 
                  href={contactInfo.socialMedia.facebook}
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center hover:border-orange-500 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {contactInfo.socialMedia?.instagram && (
                <a 
                  href={contactInfo.socialMedia.instagram}
                  className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-2xl flex items-center justify-center hover:border-orange-500 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide">KONTAKT</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gray-300" />
                </div>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-700 border border-gray-600 rounded-lg flex items-center justify-center mt-0.5">
                  <MapPin className="w-4 h-4 text-gray-300" />
                </div>
                <div className="text-white font-medium">
                  <p>{contactInfo.address.street}</p>
                  <p>{contactInfo.address.zipCode} {contactInfo.address.city}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Small Map */}
          <SmallMap />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} <span className="text-blue-400 font-mono tracking-wider">AUTO</span>{' '}
              <span className="text-yellow-400 font-mono tracking-wider">CHECKPOINT</span>{' '}
              <span className="text-red-500 font-mono tracking-wider">GARAGE</span>. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-8 text-sm">
              <a href="/datenschutz" className="text-gray-500 hover:text-orange-400 transition-colors font-medium">DATENSCHUTZ</a>
              <a href="/impressum" className="text-gray-500 hover:text-orange-400 transition-colors font-medium">IMPRESSUM</a>
              <a href="/agb" className="text-gray-500 hover:text-orange-400 transition-colors font-medium">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 