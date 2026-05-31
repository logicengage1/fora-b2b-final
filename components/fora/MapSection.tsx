'use client';

export default function MapSection() {
    /* 
      Official Google Maps embed string built directly from your provided business URL.
      This locks in the exact location card for "Fora d.o.o. Proizvodnja".
    */
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2816.0381665492473!2d17.527292112411516!3d45.10187087900742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475df3624ea61f5d%3A0xc0643c68578a80fc!2sFora%20d.o.o.%20Proizvodnja!5e0!3m2!1sen!2sba!4v1717165000000!5m2!1sen!2sba";

    return (
        <section className="w-full bg-slate-950 relative">
            {/* Top separator line matching your theme */}
            <div className="absolute top-0 left-0 right-0 h-px bg-slate-800/40" />

            {/* Full-width responsive container */}
            <div className="w-full h-[400px] sm:h-[450px] relative overflow-hidden group">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Fora d.o.o. Proizvodnja Lokacija"
                    /* Premium dark filter that strips away default bright map colors until hovered */
                    className="w-full h-full opacity-65 contrast-125 invert-[0.92] hue-rotate-[195deg] saturate-[0.7] transition-all duration-700 ease-out group-hover:opacity-100 group-hover:filter-none"
                />

                {/* Soft edge shading to blend map perfectly into dark layout sections */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(2,6,23,0.85)]" />
            </div>
        </section>
    );
}