'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = ['tocak-srece.webp', 'tocak-srece-1.webp'];

const features = [
  'Izrada po mjeri i dizajnu klijenta',
  'Kvalitetan i izdržljiv pleksiglas',
  'Prilagodljive dimenzije i boje',
  'Idealno za nagradne igre i promocije',
];

export default function FeaturedProduct() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const scrollToContact = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="featured-product" className="pt-24 lg:pt-32 pb-0 bg-slate-50 scroll-mt-24">
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
            Istaknuti proizvod
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight">
            Kolo sreće
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Personalizovano kolo sreće izrađeno od kvalitetnog pleksiglasa — idealno rješenje za nagradne igre, sajmove i promotivne aktivnosti u maloprodaji.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Images */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {images.map((img, index) => (
              <div
                key={img}
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
                className="group/thumb relative aspect-square rounded-xl overflow-hidden border border-slate-200 bg-slate-100 cursor-pointer transition-all duration-300 hover:shadow-md hover:border-fora-red/30"
              >
                <img
                  src={`/assets/thumbs/proizvodi/${img}`}
                  alt="Kolo sreće od pleksiglasa"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover/thumb:opacity-100 flex items-center justify-center">
                  <span className="text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 bg-fora-red/90 rounded-full shadow-lg">
                    Pregledaj
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Copy */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <div className="space-y-2 w-full flex flex-col items-center md:items-start">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-left w-full max-w-xs md:max-w-none justify-start px-4 md:px-0">
                  <div className="w-1.5 h-1.5 bg-fora-red rounded-full flex-shrink-0" />
                  <span className="text-slate-600 text-xs sm:text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-1.5 text-fora-red text-sm font-semibold hover:gap-3 transition-all duration-200"
            >
              Zatražite ponudu
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={photoIndex}
          slides={images.map((img) => ({
            src: `/assets/lightbox/proizvodi/${img}`,
          }))}
        />
      )}
    </section>
  );
}
