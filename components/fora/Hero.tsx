'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers, Zap, Shield, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import * as HoverCard from '@radix-ui/react-hover-card';

const stats = [
  { value: '15+', label: 'Godina iskustva' },
  { value: '500+', label: 'Završenih projekata' },
  { value: '48h', label: 'Rok izrade ponude' },
];

const partners = ['IKEA', 'Mercedes-Benz', 'ZARA', 'Bosch', 'H&M', 'Siemens', 'Porsche'];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-900 border-b border-white/5">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png"
          alt="CNC Machine"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 flex-grow flex flex-col justify-center items-center">
        <div className="max-w-4xl pt-20 flex flex-col items-center text-center">
          {/* Badge & Status */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5"
            >
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-300 text-sm font-medium">Primamo projekte</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-4 py-1.5"
            >
              <span className="text-slate-300 text-sm font-medium">Precizna CNC obrada pleksiglasa</span>
            </motion.div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
          >
            Vrhunska obrada{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fora-red to-orange-500">
              pleksiglasa
            </span>{' '}
            po vašoj mjeri.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Specijalizovana proizvodnja i CNC obrada u Srpcu. Partner za arhitekte, retail i
            industriju širom regiona.
          </motion.p>

          {/* CTA group & Tech Specs Hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={() => scrollToSection('#contact')}
              className="group flex items-center justify-center gap-2 bg-fora-red hover:bg-[#d52b28] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-fora-red/20 hover:shadow-fora-red/40 hover:-translate-y-0.5 text-base"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('#capabilities')}
              className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-white font-semibold px-7 py-3.5 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-200 text-base"
            >
              Istražite naše usluge
            </button>

            {/* HoverCard for Tech Specs */}
            <div className="sm:ml-4">
              <HoverCard.Root openDelay={100} closeDelay={200}>
                <HoverCard.Trigger asChild>
                  <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 border border-white/10 rounded-full transition-colors backdrop-blur-md">
                    <Layers className="w-4 h-4" />
                    Tehničke specifikacije
                  </button>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content 
                    className="z-50 w-80 bg-slate-900/95 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl animate-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2"
                    sideOffset={12}
                    align="center"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 bg-fora-red/20 rounded-lg flex items-center justify-center border border-fora-red/30">
                        <Layers className="w-4 h-4 text-fora-red" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold text-sm">Kapaciteti obrade</p>
                        <p className="text-slate-400 text-xs">Industrijska preciznost</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { icon: Zap, label: 'CNC tolerancija', value: '±0.1 mm' },
                        { icon: Layers, label: 'Debljina materijala', value: '2 — 100 mm' },
                        { icon: Shield, label: 'Format ploče', value: 'do 3050×2050 mm' },
                      ].map(({ icon: Icon, label, value }, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div className="flex items-center gap-2">
                            <Icon className="w-3.5 h-3.5 text-slate-400" />
                            <span className="text-slate-300 text-xs">{label}</span>
                          </div>
                          <span className="text-fora-red text-xs font-semibold font-mono">{value}</span>
                        </div>
                      ))}
                    </div>
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-8 items-center justify-center"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                  {stat.value}
                </span>
                <span className="text-sm text-slate-400 mt-0.5">{stat.label}</span>
              </div>
            ))}
            <div className="h-10 w-px bg-white/10 hidden sm:block mx-2"></div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-fora-red opacity-80" />
              <div className="flex flex-col text-left">
                <span className="text-sm font-semibold text-slate-200">ISO 9001</span>
                <span className="text-xs text-slate-400">Certifikovan kvalitet</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Proof Bar */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="w-full relative z-10 border-t border-white/5 bg-slate-950/40 backdrop-blur-md py-6 mt-auto"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap">
            Brendovi koji nam vjeruju:
          </p>
          <div className="flex-1 w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <div className="flex items-center justify-between min-w-full gap-8 px-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {partners.map((partner, i) => (
                <div key={i} className="text-xl font-bold font-serif text-slate-600 hover:text-slate-400 transition-colors whitespace-nowrap px-4">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
