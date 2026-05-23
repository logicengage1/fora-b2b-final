'use client';

import { motion } from 'framer-motion';

const references = [
    'Tropic', 'Violeta Grude', 'Elnos BL',
    'Jaćimović – Juventa Sport', 'Komora RS', 'Centrum Trade',
    'Feal Široki Brijeg', 'Kolektor CCl', 'Euro Dis',
    'Fructa Trade', 'Leburic Fortuna', 'Konzum',
    'DM Drogerie', 'FK Borac', 'Fabrika obuće Sportek',
    'ŠIKI KOMERC', 'Perutnina PPS', 'Sector Security',
    'Mahle', 'Muzej Savremene umjetnosti BL',
    'Fortuna marketi', 'Drvoprodex', 'Krajina Klas',
    'MF Banka', 'Slababoni – Toyota', 'MI Tulumović', 'Orfej',
];

export default function References() {
    return (
        <section id="references" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block text-fora-red text-sm font-semibold tracking-widest uppercase mb-4">
                        Naše reference
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">
                        Kompanije koje nam vjeruju
                    </h2>
                    <p className="text-slate-500 text-base max-w-xl mx-auto">
                        Sarađujemo s kompanijama iz maloprodaje, industrije,
                        sporta i javnog sektora širom regiona.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {references.map((name, i) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: i * 0.03 }}
                            className="border border-slate-200 rounded-xl px-4 py-3 text-center text-slate-700 text-sm font-medium hover:border-fora-red/50 hover:text-fora-red transition-colors duration-200"
                        >
                            {name}
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center text-slate-400 text-xs mt-10"
                >
                    * Logo reference dostupne na upit.
                </motion.p>
            </div>
        </section>
    );
}