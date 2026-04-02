{/* TODO: Reemplazar estas reseñas placeholder con reseñas reales del dueño */}
const resenas = [
  {
    text: "Excelente servicio, rápido y a buen precio. Muy recomendado.",
    author: "Carlos M.",
  },
  {
    text: "Siempre llevo mi carro aquí. Son honestos y trabajan bien.",
    author: "María L.",
  },
  {
    text: "Me atendieron de emergencia y me solucionaron rápido. Muy agradecido.",
    author: "José R.",
  },
];

export default function Resenas() {
  return (
    <section className="bg-velocar-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-velocar-dark mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resenas.map((resena) => (
            <div
              key={resena.author}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-velocar-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">
                &ldquo;{resena.text}&rdquo;
              </p>
              <p className="font-semibold text-velocar-dark">— {resena.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
