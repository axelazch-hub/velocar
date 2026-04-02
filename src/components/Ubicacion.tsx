export default function Ubicacion() {
  return (
    <section id="ubicacion" className="bg-velocar-dark-alt py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-white mb-4">
            ¿Dónde estamos?
          </h2>
          <p className="text-gray-300 text-lg">
            Barrio Las Brisas, contiguo taller INFADAJO, Guápiles
          </p>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-8">
          <iframe
            title="Ubicación de Velocar en Guápiles"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.0!2d-83.5225!3d10.0025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e3c1c8f9a0e7%3A0x0!2sGu%C3%A1piles%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1700000000000!5m2!1ses!2scr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Horario - placeholder, confirmar con el dueño */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            <span className="text-white font-semibold">Horario:</span>{" "}
            Lunes a Sábado · 8:00 am - 5:00 pm
          </p>
        </div>
      </div>
    </section>
  );
}
