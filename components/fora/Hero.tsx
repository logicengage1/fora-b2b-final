'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Layers, Zap, Shield } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Godina iskustva' },
  { value: '500+', label: 'Završenih projekata' },
  { value: '48h', label: 'Rok izrade ponude' },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl" />

      {/* Decorative acrylic panels */}
      <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden pointer-events-none hidden lg:block">
        <div className="absolute top-20 right-12 w-64 h-80 bg-white/3 backdrop-blur-sm border border-white/10 rounded-2xl transform rotate-6 shadow-2xl" />
        <div className="absolute top-40 right-32 w-48 h-64 bg-blue-500/5 backdrop-blur-sm border border-blue-400/20 rounded-2xl transform -rotate-3 shadow-2xl" />
        <div className="absolute bottom-20 right-8 w-56 h-40 bg-white/2 backdrop-blur-sm border border-white/8 rounded-2xl transform rotate-2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Precizna CNC obrada pleksiglasa</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Vrhunska obrada{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300">
              pleksiglasa
            </span>{' '}
            po vašoj mjeri.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl"
          >
            Specijalizovana proizvodnja i CNC obrada u Srpcu. Partner za arhitekte, retail i
            industriju širom regiona.
          </motion.p>

          {/* CTA group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 text-base"
            >
              Zatražite ponudu za vaš projekat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#capabilities')}
              className="flex items-center justify-center gap-2 bg-white/8 hover:bg-white/12 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/15 hover:border-white/25 transition-all duration-200 text-base backdrop-blur-sm"
            >
              Istražite naše usluge
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-slate-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Glassmorphism info card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-80"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Kapaciteti obrade</p>
                <p className="text-slate-400 text-xs">Industrijska preciznost</p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { icon: Zap, label: 'CNC tolerancija', value: '±0.1 mm' },
                { icon: Layers, label: 'Debljina materijala', value: '2 — 100 mm' },
                { icon: Shield, label: 'Format ploče', value: 'do 3050×2050 mm' },
              ].map(({ icon: Icon, label, value }, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-slate-300 text-sm">{label}</span>
                  </div>
                  <span className="text-blue-300 text-sm font-semibold font-mono">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-300 text-xs font-medium">Primamo projekte</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollToSection('#capabilities')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">Skrolujte</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
