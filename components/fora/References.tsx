'use client';

import { motion } from 'framer-motion';

interface CompanyReference {
    id: string;
    name: string;
    logo: string;
}

const COMPANY_REFERENCES = [
    { id: "centrum", name: "Centrum Trade", logo: "/assets/references/centrum-logo.webp", isDarkBackground: false },
    { id: "dm", name: "DM Drogerie", logo: "/assets/references/dm-logo.webp", isDarkBackground: false },
    { id: "drvoprodex", name: "Drvoprodex", logo: "/assets/references/drvoprodex-logo.webp", isDarkBackground: false },
    { id: "elnos", name: "Elnos Group", logo: "/assets/references/elnos-group-logo.webp", isDarkBackground: true },
    { id: "eurodis", name: "Eurodis", logo: "/assets/references/eurodis-logo.webp", isDarkBackground: false },
    { id: "feal", name: "Feal Široki Brijeg", logo: "/assets/references/feal-logo.webp", isDarkBackground: false },
    { id: "fk-borac", name: "FK Borac", logo: "/assets/references/fk-borac-logo.webp", isDarkBackground: false },
    { id: "fortuna", name: "Fortuna Marketi", logo: "/assets/references/fortuna-logo.webp", isDarkBackground: false },
    { id: "fructa", name: "Fructa Trade", logo: "/assets/references/fructa-trade.webp", isDarkBackground: false },
    { id: "juventa", name: "Juventa Sport", logo: "/assets/references/juventa-sport-logo.webp", isDarkBackground: false },
    { id: "kolektor", name: "Kolektor CCI", logo: "/assets/references/kolektor-logo.webp", isDarkBackground: false },
    { id: "konzum", name: "Konzum", logo: "/assets/references/konzum-logo.webp", isDarkBackground: false },
    { id: "krajina-klas", name: "Krajina Klas", logo: "/assets/references/krajina-klas-logo.webp", isDarkBackground: true },
    { id: "leburic", name: "Leburić Komerc", logo: "/assets/references/leburic-komerc-logo.webp", isDarkBackground: true },
    { id: "msurs", name: "Muzej Savremene Umjetnosti RS", logo: "/assets/references/logo-msurs-1.webp", isDarkBackground: false },
    { id: "mahle", name: "Mahle", logo: "/assets/references/mahle-logo.webp", isDarkBackground: false },
    { id: "mf-banka", name: "MF Banka", logo: "/assets/references/mf-banka-logo.webp", isDarkBackground: false },
    { id: "orfej", name: "Orfej", logo: "/assets/references/orfej-logo.webp", isDarkBackground: true },
    { id: "perutnina", name: "Perutnina Ptuj", logo: "/assets/references/perutnina-logo.webp", isDarkBackground: false },
    { id: "komora-rs", name: "Privredna Komora RS", logo: "/assets/references/privredna-komora-rs-logo.webp", isDarkBackground: false },
    { id: "sector", name: "Sector Security", logo: "/assets/references/sector-security-logo.webp", isDarkBackground: false },
    { id: "siki", name: "Šiki Komerc", logo: "/assets/references/siki-komerc.webp", isDarkBackground: false },
    { id: "toyota", name: "Sladaboni Toyota", logo: "/assets/references/sladaboni-toyota-logo.webp", isDarkBackground: false },
    { id: "sportek", name: "Fabrika obuće Sportek", logo: "/assets/references/sportek-logo.webp", isDarkBackground: true },
    { id: "tropic", name: "Tropic", logo: "/assets/references/tropic-logo.webp", isDarkBackground: false },
    { id: "tulumovic", name: "MI Tulumović", logo: "/assets/references/tulumovic-logo.webp", isDarkBackground: true },
    { id: "violeta", name: "Violeta", logo: "/assets/references/violeta-logo.webp", isDarkBackground: false }
];

export default function References() {
    return (
        <section className="bg-slate-50/50 py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <span className="text-fora-red font-bold uppercase tracking-wider text-xs">Naše Reference</span>
                <h2 className="text-slate-900 font-bold text-3xl sm:text-4xl mt-2 mb-4">Kompanije koje nam vjeruju</h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-16">
                    Sarađujemo s kompanijama iz maloprodaje, industrije, sporta i javnog sektora širom regiona.
                </p>


                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto justify-center items-center">
                    {COMPANY_REFERENCES.map((company) => (
                        <div
                            key={company.id}
                            className={`w-full h-24 flex items-center justify-center p-4 rounded-xl transition-all duration-300 ${company.isDarkBackground
                                    ? 'bg-slate-900 shadow-sm'
                                    : 'bg-white/60 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100'
                                }`}
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                className="max-h-12 max-w-full object-contain filter contrast-125"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}