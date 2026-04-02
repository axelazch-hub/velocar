const WHATSAPP_URL =
  "https://wa.me/50686932431?text=Hola,%20me%20gustaría%20agendar%20una%20cita%20en%20Velocar";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-velocar-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-velocar-dark via-velocar-dark-alt to-velocar-dark" />

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            #FFFFFF 40px,
            #FFFFFF 41px
          )`,
        }}
      />

      {/* Orange glow accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-velocar-orange/5 to-transparent skew-x-[-12deg] translate-x-1/4" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Badge */}
        <span className="inline-block text-velocar-orange text-sm font-bold uppercase tracking-wider px-4 py-1.5 rounded-sm border border-velocar-orange/30 mb-6">
          Mecánica rápida en Guápiles
        </span>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
          Tu vehículo en las{" "}
          <span className="text-velocar-orange">mejores manos.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          Mantenimiento preventivo y correctivo para vehículos livianos. Calidad,
          rapidez y confianza.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-velocar-orange hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
          >
            Agendá tu cita
          </a>
          <a
            href="#servicios"
            className="border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-md transition-colors w-full sm:w-auto"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
