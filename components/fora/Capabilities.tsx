'use client';

import { motion } from 'framer-motion';
import { Layers, Cpu, FlaskConical } from 'lucide-react';

const capabilities = [
  {
    icon: Layers,
    title: "Prodaja pleksiglasa i pločastih materijala",
    description: "Prodajemo i isporučujemo polikarbonat, forex, polipropilen, polietilen i PET ploče u različitim debljinama i formatima. Vršimo sječenje ploča po vašoj mjeri.",
    features: ["Polikarbonat", "Forex", "Polipropilen", "Polietilen", "PET", "Sječenje po mjeri"]
  },
  {
    icon: Cpu,
    title: "Izrada proizvoda od pleksiglasa i ostalih pločastih materijala",
    description: "Izrađujemo gotove proizvode za B2B klijente: govornice, kutije za rinfuznu robu, zaštite za CNC i ostale mašine, šibere za rashladne vitrine, držače cjenovnika, elemente enterijera, kola sreće i košarkaške table.",
    features: ["Govornice i kutije", "Zaštite za mašine", "Šiberi i držači cjenovnika", "Košarkaške table", "Kola sreće", "Elementi enterijera"]
  },
  {
    icon: FlaskConical,
    title: "Izrada opreme od polimernih materijala",
    description: "Projektujemo i izrađujemo industrijsku opremu: rezervoare do 60.000 litara, ventilacione sisteme, galvanske kade i opremu za tretman otpadnih voda. Ekstruziono zavarivanje polipropilena, polietilena i PVC-a.",
    features: ["Rezervoari do 60.000 L", "Ventilacioni sistemi", "Galvanske kade", "Tretman otpadnih voda", "Ekstruziono zavarivanje"]
  }
];

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
    <section id="capabilities" className="pt-24 lg:pt-32 pb-0 bg-white">
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
            Naše usluge
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Naše usluge i proizvodni program
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Tri osnovna programa — prodaja materijala, izrada proizvoda i industrijska oprema — sve pod jednim krovom.
          </p>
        </motion.div>

        {/* Cards stacked list */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8"
              >
                {/* Left column (fixed width ~288px) */}
                <div className="w-full md:w-72 flex-shrink-0 flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-fora-red text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-4 leading-tight">
                    {cap.title}
                  </h3>
                  {/* Features */}
                  <div className="space-y-2 mt-auto md:mt-0">
                    {cap.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-fora-red rounded-full flex-shrink-0" />
                        <span className="text-slate-600 text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column (flexible) */}
                <div className="flex-grow flex flex-col justify-between gap-6">
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {cap.description}
                  </p>
                  
                  {/* Placeholder image box */}
                  <div className="h-48 w-full border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex items-center justify-center text-sm font-medium text-slate-400">
                    Dodati fotografije — {cap.title}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
