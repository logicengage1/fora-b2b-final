'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Godina iskustva' },
  { value: '10000+', label: 'Završenih projekata' },
  { value: '24h', label: 'Rok izrade ponude' },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-white border-b border-slate-200">
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 flex-grow flex flex-col justify-center items-center">
        <div className="max-w-4xl pt-8 flex flex-col items-center text-center">

          {/* Badge & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-full px-4 py-1.5"
            >
              <span className="text-slate-600 text-sm font-medium">Pleksiglas · Polikarbonat · PVC · Polipropilen</span>
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Precizna izrada i obrada{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fora-red to-orange-500">
              polimernih materijala.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto px-4 sm:px-0"
          >
            Vaš industrijski partner u Srpcu — od prodaje ploča i izrade proizvoda do kompletnih polimernih sistema i opreme.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-16 px-4"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full sm:w-auto group flex items-center justify-center gap-2 bg-fora-red hover:bg-[#d52b28] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-fora-red/20 hover:shadow-fora-red/40 hover:-translate-y-0.5 text-base"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#capabilities')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-slate-900 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-200 text-base"
            >
              Istražite naše usluge
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col items-center gap-6 px-4"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500 mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="inline-flex items-center border border-slate-200 rounded-full px-4 py-1.5 text-xs sm:text-sm text-slate-500 bg-slate-50">
              Srbac, Republika Srpska — Bosna i Hercegovina
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}