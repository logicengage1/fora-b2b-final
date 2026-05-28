'use client';

import { MapPin, Mail, Phone, Target, Linkedin, Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Usluge', href: '#capabilities' },
  { label: 'Proces', href: '#process' },
  { label: 'Kontakt', href: '#contact' },
];

const services = [
  'Prodaja pločastih materijala',
  'Izrada proizvoda od pleksiglasa',
  'Izrada polimernih sistema',
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Grid: Stacks vertically and centers on mobile, splits neatly on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col items-center sm:items-start">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <img
                src="/fora_logo-removebg-preview.png"
                alt="Fora Logo"
                className="h-10 w-auto object-contain"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Prodaja pločastih materijala, izrada proizvoda i industrijske opreme od polimernih materijala.
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
          <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center sm:items-start">
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
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Kontakt</h4>
            <ul className="space-y-4 w-full flex flex-col items-center sm:items-start">

              <li className="flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <MapPin className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 text-sm font-medium">Srbac</p>
                  <p className="text-slate-500 text-xs">Zdravka Čelara 5</p>
                </div>
              </li>

              <li className="flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <Mail className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div className="flex flex-col items-center sm:items-start">
                  <a href="mailto:plexiglas@forasrbac.com" className="text-slate-300 hover:text-fora-red text-sm transition-colors break-all">
                    plexiglas@forasrbac.com
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">Za tehničke upite</p>
                </div>
              </li>

              <li className="flex flex-col items-center sm:flex-row sm:items-start gap-2 sm:gap-3 text-center sm:text-left">
                <Phone className="w-4 h-4 text-fora-red flex-shrink-0 mt-0.5" />
                <div className="flex flex-col items-center sm:items-start">
                  <a href="tel:+387 51 740 909" className="text-slate-300 hover:text-fora-red text-sm transition-colors">
                    +387 51 740 909
                  </a>
                  <a href="tel:+387 63 995 343" className="text-slate-300 hover:text-fora-red text-sm transition-colors mt-0.5 block">
                    +387 63 995 343
                  </a>
                  <p className="text-slate-500 text-xs mt-1">Pon–Pet 08:00–16:00</p>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} fora. Sva prava zadržana.
          </p>
          <p className="text-slate-600 text-xs">
            Polimerni materijali · Srbac, BiH
          </p>
        </div>
      </div>
    </footer>
  );
}