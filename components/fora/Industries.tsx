'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Stethoscope, Building2, Settings2 } from 'lucide-react';

const industries = [
  {
    icon: ShoppingBag,
    title: 'Maloprodaja (POS)',
    description:
      'Displeje, police, reklamni materijali i POS sistemi koji privlače pažnju kupaca i povećavaju konverzije.',
    examples: ['Reklamni displeje', 'Transparentne police', 'POS rješenja', 'Brendirani pultovi'],
    image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Stethoscope,
    title: 'Medicina i Farmacija',
    description:
      'Higijenska i steribilna rješenja od medicinskog pleksiglasa za klinike, laboratorije i ljekarne.',
    examples: ['Zaštitne pregrade', 'Laboratorijska oprema', 'Farmaceutski displeje', 'Medicinski ekrani'],
    image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Building2,
    title: 'Arhitektura i Dizajn',
    description:
      'Arhitektonski elementi, staklene ograde, fasadni detalji i dekorativni interijer od premium pleksiglasa.',
    examples: ['Ograde i geländeri', 'Fasadni elementi', 'Interijerni detalji', 'Krovni svjetlici'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Settings2,
    title: 'Industrijska Oprema',
    description:
      'Zaštitni poklopci, mašinska stakla, kućišta i komponente za industrijska postrojenja i strojeve.',
    examples: ['Mašinska stakla', 'Zaštitni poklopci', 'Industrijska kućišta', 'Technička rješenja'],
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="pt-24 lg:pt-32 pb-0 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-fora-red text-sm font-semibold tracking-widest uppercase mb-4">
            Industrije
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Rješenja za svaki sektor
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Naše iskustvo obuhvata raznolike industrije — od maloprodaje do visoko-regulisane medicinske opreme.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-2xl transition-all duration-400 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-fora-red rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">{industry.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-[10px] sm:text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-full px-3 py-1"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-lg sm:text-xl mb-1">Ne vidite svoju industriju?</p>
            <p className="text-slate-300 text-xs sm:text-sm">Kontaktirajte nas i zajedno ćemo pronaći optimalno rješenje za vaš projekat.</p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto flex-shrink-0 bg-fora-red hover:bg-[#d52b28] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-fora-red/30 whitespace-nowrap"
          >
            Razgovarajmo o projektu
          </button>
        </motion.div>
      </div>
    </section>
  );
}
