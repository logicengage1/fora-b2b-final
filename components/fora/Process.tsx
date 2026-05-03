'use client';

import { motion } from 'framer-motion';
import { FileSearch, Calculator, Cog, PackageCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Tehnička Analiza',
    description:
      'Dostavljate nam tehničku dokumentaciju — PDF, DXF ili AI fajlove. Naš tim analizira specifikacije, dimenzije i tehničke zahtjeve vašeg projekta.',
    detail: 'Prihvatamo PDF, DXF, AI, DWG',
  },
  {
    number: '02',
    icon: Calculator,
    title: 'Izrada Ponude',
    description:
      'Na osnovu tehničke analize, pripremamo detaljnu i transparentnu ponudu s preciznim cijenama, rokovima i materijalnim specifikacijama.',
    detail: 'Odgovor u roku 48 sati',
  },
  {
    number: '03',
    icon: Cog,
    title: 'Precizna Izrada',
    description:
      'Vaš projekat ulazi u produkciju na modernoj CNC opremi. Svaki komad prolazi kontrolu kvaliteta i mjerenje dimenzija.',
    detail: 'ISO kontrola kvaliteta',
  },
  {
    number: '04',
    icon: PackageCheck,
    title: 'Sigurna Dostava',
    description:
      'Proizvodi se pažljivo pakuju s zaštitnom folijom i ambalažom po mjeri. Organizujemo transport na vašu lokaciju širom regiona.',
    detail: 'Dostava cijela regija',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
            Naš proces
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Od ideje do isporuke
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Transparentan i efikasan proces koji vam garantuje precizne rezultate i predvidive rokove.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-16" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col"
                >
                  {/* Step number + icon */}
                  <div className="relative flex items-center justify-center mb-6">
                    <div className="w-28 h-28 rounded-2xl bg-slate-50 border-2 border-slate-100 flex flex-col items-center justify-center gap-1 relative">
                      <span className="absolute top-2 right-3 text-xs font-bold text-slate-300 font-mono">{step.number}</span>
                      <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                    </div>
                    {/* Connector dot */}
                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 w-2 h-2 bg-blue-500 rounded-full last:hidden" />
                  </div>

                  <h3 className="text-slate-900 font-bold text-lg mb-3 text-center">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-center flex-grow">{step.description}</p>

                  {/* Detail badge */}
                  <div className="mt-5 flex justify-center">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { value: '±0.1 mm', label: 'Tolerancija izrade', sub: 'Garantovana preciznost' },
            { value: '48h', label: 'Rok za ponudu', sub: 'Brz odgovor na upit' },
            { value: '100%', label: 'Kvalitet kontrola', sub: 'Svaki komad se mjeri' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-slate-900 mb-1 font-mono">{item.value}</div>
              <div className="text-slate-900 font-semibold text-sm mb-1">{item.label}</div>
              <div className="text-slate-400 text-xs">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
