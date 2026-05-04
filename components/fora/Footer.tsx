import { MapPin, Mail, Phone, Target, Linkedin, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Usluge', href: '#capabilities' },
  { label: 'Industrije', href: '#industries' },
  { label: 'Proces', href: '#process' },
  { label: 'Kontakt', href: '#contact' },
];

const services = [
  'CNC Sječenje i Graviranje',
  'Savijanje i Termoformiranje',
  'Dijamantsko Poliranje',
  'Izrada Prototipa',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img
                src="/fora_logo-removebg-preview.png"
                alt="Fora Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Specijalizovana obrada i CNC rezanje pleksiglasa za B2B klijente u Srbcu i cijeloj regiji.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-fora-red/20 border border-white/10 hover:border-fora-red/30 rounded-lg flex items-center justify-center text-slate-400 hover:text-fora-red transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigacija</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-fora-red text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Usluge</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-slate-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Srbac</p>
                  <p className="text-slate-500 text-xs">Republika Srpska, BiH</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@fora.ba" className="text-slate-300 hover:text-fora-red text-sm transition-colors">
                    info@fora.ba
                  </a>
                  <p className="text-slate-500 text-xs">Za tehničke upite</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+38751123456" className="text-slate-300 hover:text-fora-red text-sm transition-colors">
                    +387 51 123 456
                  </a>
                  <p className="text-slate-500 text-xs">Pon–Pet 08:00–16:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Fora d.o.o. Srbac. Sva prava zadržana.
          </p>
          <p className="text-slate-600 text-xs">
            Precizna obrada pleksiglasa · Srbac, BiH
          </p>
        </div>
      </div>
    </footer>
  );
}
