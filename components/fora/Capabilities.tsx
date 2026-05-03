'use client';

import { motion } from 'framer-motion';
import { Cpu, Flame, Sparkles, FlaskConical } from 'lucide-react';

const capabilities = [
  {
    icon: Cpu,
    title: 'CNC Sječenje i Graviranje',
    description:
      'Precizno sječenje i graviranje kompleksnih oblika s tolerancijom ±0.1 mm. Obrada svih vrsta akrila, od tankostjenih do masivnih ploča.',
    features: ['Tolerancija ±0.1 mm', 'Formati do 3050×2050 mm', 'DXF / PDF / AI fajlovi'],
    accent: 'blue',
  },
  {
    icon: Flame,
    title: 'Savijanje i Termoformiranje',
    description:
      'Oblikovanje kompleksnih 3D formi topljenjem i savijanjem pleksiglasa. Idealno za pultove, displeje i arhitektonske elemente.',
    features: ['3D oblikovanje', 'Uglovi od 0° do 180°', 'Bez vidljivih šavova'],
    accent: 'orange',
  },
  {
    icon: Sparkles,
    title: 'Dijamantsko Poliranje',
    description:
      'Kristalno prozirni bridovi bez ikakvog tragova obrade. Visijalni kvalitet koji zadovoljava i najzahtjevnije arhitektonske projekte.',
    features: ['Optička bistrina', 'Bez mikro-ogrebotina', 'Završna obrada po mjeri'],
    accent: 'cyan',
  },
  {
    icon: FlaskConical,
    title: 'Izrada Prototipa',
    description:
      'Od ideje do fizičkog prototipa u kratkom roku. Idealno za R&D, POS materijale i arhitektonske modele prije serijske proizvodnje.',
    features: ['Brza izrada', 'Iterativni dizajn', 'Jedan ili mala serija'],
    accent: 'emerald',
  },
];

const accentConfig: Record<string, { bg: string; border: string; icon: string; badge: string; dot: string }> = {
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-100',   icon: 'bg-blue-500 text-white',   badge: 'bg-blue-50 text-blue-700 border-blue-100',   dot: 'bg-blue-400' },
  orange:  { bg: 'bg-orange-50',  border: 'border-orange-100', icon: 'bg-orange-500 text-white', badge: 'bg-orange-50 text-orange-700 border-orange-100', dot: 'bg-orange-400' },
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-100',   icon: 'bg-cyan-500 text-white',   badge: 'bg-cyan-50 text-cyan-700 border-cyan-100',   dot: 'bg-cyan-400' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100',icon: 'bg-emerald-500 text-white',badge: 'bg-emerald-50 text-emerald-700 border-emerald-100', dot: 'bg-emerald-400' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 lg:py-32 bg-white">
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
            Naše usluge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Kompletna obrada pleksiglasa
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Od tehničkih crteža do gotovog proizvoda — sve pod jednim krovom s industrijskom preciznošću.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {capabilities.map((cap) => {
            const config = accentConfig[cap.accent];
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${config.icon} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-slate-900 font-bold text-lg mb-3 leading-tight">{cap.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">{cap.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {cap.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 ${config.dot} rounded-full flex-shrink-0`} />
                      <span className="text-slate-600 text-xs font-medium">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
        />
      </div>
    </section>
  );
}
