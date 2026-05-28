'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Cpu, FlaskConical, ArrowRight } from 'lucide-react';
import { galleryData } from '@/lib/gallery';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const capabilities = [
  {
    icon: Layers,
    title: "Prodaja pleksiglasa i pločastih materijala",
    description: "Prodajemo i isporučujemo polikarbonat, forex, polipropilen, polietilen i PET ploče u različitim debljinama i formatima. Vršimo sječenje ploča po vašoj mjeri.",
    features: ["Polikarbonat", "Forex", "Polipropilen", "Polietilen", "PET", "Sječenje po mjeri"],
    hasGallery: false,
    materials: [
      { name: "Polikarbonat", props: ["Proziran", "UV otporan", "Jak"] },
      { name: "Forex", props: ["Lagan", "Mat površina", "Rezan po mjeri"] },
      { name: "Polipropilen", props: ["Hemijski otporan", "Tvrd", "Savitljiv"] },
      { name: "Polietilen", props: ["Fleksibilan", "Otporan na udar", "Izdržljiv"] },
      { name: "PET", props: ["Proziran", "Jak", "Reciklabilan"] },
      { name: "Sječenje po mjeri", props: ["Bilo koji format", "Precizno", "Brza isporuka"] },
    ],
  },
  {
    icon: Cpu,
    title: "Izrada proizvoda od pleksiglasa i ostalih pločastih materijala",
    description: "Izrađujemo gotove proizvode za B2B klijente: govornice, kutije za rinfuznu robu, zaštite za CNC i ostale mašine, šibere za rashladne vitrine, držače cjenovnika, elemente enterijera, kola sreće i košarkaške table.",
    features: ["Govornice", "Kutije za rinfuznu robu", "Zaštite za CNC i ostale mašine", "Zaštite za maske za varenje", "Šiberi za rashladne vitrine", "Držači cjenovnika", "Košarkaške table", "Kola sreće", "Elementi enterijera"],
    hasGallery: true,
    materials: [],
  },
  {
    icon: FlaskConical,
    title: "Izrada opreme od polimernih materijala",
    description: "Projektujemo i izrađujemo industrijsku opremu: rezervoare do 60.000 litara, ventilacione sisteme, galvanske kade i opremu za tretman otpadnih voda. Ekstruziono zavarivanje polipropilena, polietilena i PVC-a.",
    features: ["Propilen", "PVC", "Polietilen", "Rezervoari do 60.000 L", "Ventilacioni sistemi", "Galvanske kade", "Tretman otpadnih voda", "Ekstruziono zavarivanje"],
    hasGallery: true,
    materials: [],
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
  const [activeCategory, setActiveCategory] = useState<'proizvodi' | 'oprema' | null>(null);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

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

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          {capabilities.map((cap, index) => {
            const isProducts = cap.title.toLowerCase().includes('proizvoda');
            const isEquipment = cap.title.toLowerCase().includes('opreme');
            const dirName = isProducts ? 'proizvodi' : isEquipment ? 'oprema' : '';
            const images = isProducts ? galleryData.proizvodi : isEquipment ? galleryData.oprema : [];
            const limit = isProducts ? 6 : 4;
            const hasMore = images.length > limit;
            const previewImages = hasMore ? images.slice(0, limit) : images;
            const remainingCount = images.length - limit;

            const Icon = cap.icon;

            if (index === 0) {
              return (
                <motion.div
                  key={cap.title}
                  variants={itemVariants}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col items-center"
                >
                  <div className="w-12 h-12 bg-fora-red text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-3 leading-tight text-center">
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed text-center max-w-2xl mb-8">
                    {cap.description}
                  </p>
                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {cap.materials.map((mat, matIndex) => (
                      <motion.div
                        key={mat.name}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: matIndex * 0.07 }}
                        className="relative bg-slate-50 border border-slate-200 rounded-xl p-4 text-center overflow-hidden group/mat
        hover:border-fora-red/40 hover:bg-white hover:shadow-md transition-all duration-300
        before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5
        before:bg-fora-red before:scale-x-0 before:origin-left
        hover:before:scale-x-100 before:transition-transform before:duration-300"
                      >
                        <p className="text-slate-900 font-semibold text-sm mb-2">
                          {mat.name}
                        </p>
                        <div className="flex flex-col gap-1">
                          {mat.props.map((prop) => (
                            <span
                              key={prop}
                              className="text-slate-500 text-xs flex items-center justify-center gap-1.5"
                            >
                              <div className="w-1 h-1 bg-fora-red rounded-full flex-shrink-0" />
                              {prop}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-fora-red text-sm font-semibold hover:gap-3 transition-all duration-200"
                  >
                    Zatražite ponudu
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className={`group bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 flex flex-col gap-6 md:gap-8 ${index === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
              >
                {/* Left column - Centers fully on mobile, left-aligns on desktop grids */}
                <div className="w-full md:w-72 flex-shrink-0 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-12 h-12 bg-fora-red text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg sm:text-xl mb-5 leading-tight max-w-sm">
                    {cap.title}
                  </h3>
                  <div className="space-y-2 mt-auto md:mt-0 w-full flex flex-col items-center md:items-start">
                    {cap.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-left w-full max-w-xs md:max-w-none justify-start px-4 md:px-0">
                        <div className="w-1.5 h-1.5 bg-fora-red rounded-full flex-shrink-0" />
                        <span className="text-slate-600 text-xs sm:text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right column */}
                <div className="flex-grow flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                    {cap.description}
                  </p>
                  {cap.hasGallery && images.length > 0 && (
                    <div
                      className={
                        isProducts
                          ? 'grid grid-cols-3 gap-2 w-full'
                          : 'grid grid-cols-2 gap-2 w-full'
                      }
                    >
                      {previewImages.map((img, imgIndex) => {
                        const isLast = imgIndex === limit - 1;
                        return (
                          <div
                            key={img}
                            onClick={() => {
                              setActiveCategory(dirName as 'proizvodi' | 'oprema');
                              setPhotoIndex(imgIndex);
                            }}
                            className="group/thumb relative aspect-[4/3] max-h-24 sm:max-h-28 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-fora-red/30"
                          >
                            <img
                              src={`/assets/thumbs/${dirName}/${img}`}
                              alt={img.replace('.webp', '').replace(/-/g, ' ')}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                            />
                            {isLast && hasMore ? (
                              <div className="absolute inset-0 bg-black/60 group-hover/thumb:bg-black/70 transition-colors duration-300 flex flex-col items-center justify-center text-center p-1.5">
                                <span className="text-white text-base sm:text-lg font-bold">+{remainingCount}</span>
                                <span className="text-white/80 text-[9px] sm:text-xs font-medium mt-0.5">Pregledaj galeriju</span>
                              </div>
                            ) : (
                              <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100 flex items-center justify-center">
                                <span className="text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-fora-red/90 rounded-full shadow-lg">
                                  Pregledaj
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <button
                    onClick={() => {
                      const el = document.querySelector('#contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-1.5 text-fora-red text-sm font-semibold hover:gap-3 transition-all duration-200 self-center md:self-start mt-2"
                  >
                    Zatražite ponudu
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      {activeCategory && (
        <Lightbox
          open={activeCategory !== null}
          close={() => setActiveCategory(null)}
          index={photoIndex}
          slides={galleryData[activeCategory].map((img: string) => ({
            src: `/assets/lightbox/${activeCategory}/${img}`,
          }))}
        />
      )}
    </section>
  );
}