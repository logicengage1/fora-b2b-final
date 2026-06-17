'use client';

import { motion } from 'framer-motion';
import { FileSearch, Calculator, Cog, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Tehnička analiza',
    description:
      'Dostavljate nam tehničku dokumentaciju — PDF, DXF ili AI fajlove. Naš tim analizira specifikacije, dimenzije i tehničke zahtjeve vašeg projekta.',
    detail: 'Prihvatamo PDF, DXF, AI, DWG',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Izrada ponude',
    description:
      'Na osnovu tehničke analize, pripremamo detaljnu i transparentnu ponudu s preciznim cijenama, rokovima i materijalnim specifikacijama.',
    detail: 'Odgovor u roku 24 sata',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Precizna izrada',
    description:
      'Vaš projekat ulazi u produkciju na modernoj CNC opremi. Svaki komad prolazi kontrolu kvaliteta i mjerenje dimenzija.',
    detail: 'ISO kontrola kvaliteta',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Sigurna dostava',
    description:
      'Proizvodi se pažljivo pakuju s zaštitnom folijom i ambalažom po mjeri. Organizujemo transport na vašu lokaciju širom regiona.',
    detail: 'Dostava cijela država',
  },
];

export default function Process() {
  return (
    <section id="process" className="pt-24 lg:pt-32 pb-0 bg-white">
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
            Naš proces
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Od ideje do isporuke
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Transparentan i efikasan proces koji vam garantuje precizne rezultate i predvidljive rokove.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative px-4 sm:px-0">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  /* Added 'group' class here so the child elements know when the whole card is hovered */
                  className="group relative flex flex-col cursor-pointer"
                >
                  {/* Step number + icon */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-50 border-2 border-slate-100 flex flex-col items-center justify-center gap-1 relative">
                      <span className="absolute top-2 right-3 text-[10px] sm:text-xs font-bold text-slate-300 font-mono">{step.number}</span>

                      {/* 
                        FIX: Removed constant blinking animations.
                        Added 'transition-transform duration-300 group-hover:scale-110' 
                        This smoothly expands the red box when hovering anywhere on the card card.
                      */}
                      <div className="w-10 h-10 bg-fora-red rounded-xl flex items-center justify-center shadow-lg shadow-fora-red/30 transition-transform duration-300 ease-out group-hover:scale-110">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Connector dot */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-2 h-2 bg-fora-red rounded-full last:hidden" />
                  </div>

                  <h3 className="text-slate-900 font-bold text-lg mb-3 text-center transition-colors duration-300 group-hover:text-fora-red">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-center flex-grow">{step.description}</p>

                  {/* Detail badge */}
                  <div className="mt-5 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 bg-fora-red rounded-full" />
                      {step.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 px-4 sm:px-0"
        >
          {[
            { value: '±0.1 mm', label: 'Tolerancija izrade', sub: 'Garantovana preciznost' },
            { value: '24h', label: 'Rok za ponudu', sub: 'Brz odgovor na upit' },
            { value: '100%', label: 'Kvalitet kontrola', sub: 'Svaki komad se mjeri' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1 font-mono">{item.value}</div>
              <div className="text-slate-900 font-semibold text-sm mb-1">{item.label}</div>
              <div className="text-slate-400 text-[10px] sm:text-xs">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}