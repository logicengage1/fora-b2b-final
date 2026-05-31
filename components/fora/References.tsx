import React from 'react';

const COMPANY_REFERENCES = [
    { id: "centrum", name: "Centrum Trade", logo: "/assets/references/centrum-logo.webp", logoSize: "h-11" },
    { id: "dm", name: "DM Drogerie", logo: "/assets/references/dm-logo.webp", logoSize: "h-14" },
    { id: "drvoprodex", name: "Drvoprodex", logo: "/assets/references/drvoprodex-logo.webp", logoSize: "h-12" },
    { id: "elnos", name: "Elnos Group", logo: "/assets/references/elnos-group-logo.webp", logoSize: "h-12" },
    { id: "eurodis", name: "Eurodis", logo: "/assets/references/eurodis-logo.webp", logoSize: "h-11" },
    { id: "feal", name: "Feal Široki Brijeg", logo: "/assets/references/feal-logo.webp", logoSize: "h-11" },
    { id: "fk-borac", name: "FK Borac", logo: "/assets/references/fk-borac-logo.webp", logoSize: "h-[85px]" },
    { id: "fortuna", name: "Fortuna Marketi", logo: "/assets/references/fortuna-logo.webp", logoSize: "h-13" },
    { id: "fructa", name: "Fructa Trade", logo: "/assets/references/fructa-trade.webp", logoSize: "h-[75px]" },
    { id: "juventa", name: "Juventa Sport", logo: "/assets/references/juventa-sport-logo.webp", logoSize: "h-13" },
    { id: "kolektor", name: "Kolektor CCI", logo: "/assets/references/kolektor-logo.webp", logoSize: "h-11" },
    { id: "konzum", name: "Konzum", logo: "/assets/references/konzum-logo.webp", logoSize: "h-11" },
    { id: "krajina-klas", name: "Krajina Klas", logo: "/assets/references/krajina-klas-logo.webp", logoSize: "h-14" },
    { id: "leburic", name: "Leburić Komerc", logo: "/assets/references/leburic-komerc-logo.webp", logoSize: "h-12" },
    { id: "msurs", name: "Muzej Savremene Umjetnosti RS", logo: "/assets/references/logo-msurs-1.webp", logoSize: "h-14" },
    { id: "mahle", name: "Mahle", logo: "/assets/references/mahle-logo.webp", logoSize: "h-12" },
    { id: "mf-banka", name: "MF Banka", logo: "/assets/references/mf-banka-logo.webp", logoSize: "h-11" },
    { id: "orfej", name: "Orfej", logo: "/assets/references/orfej-logo.webp", logoSize: "h-[75px]" },
    { id: "perutnina", name: "Perutnina Ptuj", logo: "/assets/references/perutnina-logo.webp", logoSize: "h-[85px]" },
    { id: "komora-rs", name: "Privredna Komora RS", logo: "/assets/references/privredna-komora-rs-logo.webp", logoSize: "h-14" },
    { id: "sector", name: "Sector Security", logo: "/assets/references/sector-security-logo.webp", logoSize: "h-10" },
    { id: "siki", name: "Šiki Komerc", logo: "/assets/references/siki-komerc.webp", logoSize: "h-14" },
    { id: "toyota", name: "Sladaboni Toyota", logo: "/assets/references/sladaboni-toyota-logo.webp", logoSize: "h-14" },
    { id: "sportek", name: "Fabrika obuće Sportek", logo: "/assets/references/sportek-logo.webp", logoSize: "h-14" },
    { id: "tropic", name: "Tropic", logo: "/assets/references/tropic-logo.webp", logoSize: "h-13" },
    { id: "tulumovic", name: "MI Tulumović", logo: "/assets/references/tulumovic-logo.webp", logoSize: "h-13" },
    { id: "violeta", name: "Violeta", logo: "/assets/references/violeta-logo.webp", logoSize: "h-[65px]" }
];

export default function References() {
    return (
        /* CRITICAL FIX 1: Added id="references" and scroll-mt-24 so the navigation anchor functions perfectly */
        <section id="references" className="bg-white py-24 px-4 scroll-mt-24">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-fora-red font-bold uppercase tracking-wider text-xs">Naše Reference</span>
                <h2 className="text-slate-900 font-bold text-3xl sm:text-4xl mt-2 mb-4">Kompanije koje nam vjeruju</h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto mb-20">
                    Sarađujemo s kompanijama iz maloprodaje, industrije, sporta i javnog sektora širom regiona.
                </p>

                {/* Clean layout alignment container */}
                <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-12 max-w-5xl mx-auto">
                    {COMPANY_REFERENCES.map((company) => (
                        <div
                            key={company.id}
                            className="flex items-center justify-center min-w-[130px] max-w-[190px] transition-all duration-300 hover:scale-105"
                        >
                            <img
                                src={company.logo}
                                alt={`${company.name} logo`}
                                /* CRITICAL FIX 2: Removed the broken filters. Back to clean colors with standard soft opacity blend */
                                className={`${company.logoSize} w-auto object-contain opacity-95 hover:opacity-100 transition-all duration-300`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}