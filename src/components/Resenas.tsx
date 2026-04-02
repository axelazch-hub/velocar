const resenas = [
  {
    text: "El servicio es súper bueno recomendado, son personas súper respetuosas y responsables con su trabajo.",
    author: "Carlos Solano",
    detail: "Local Guide",
  },
  {
    text: "Buen trato y servicio. Las reparaciones realizadas (frenos) al vehículo se hicieron de forma eficiente y de calidad, con buena asesoría y un precio justo. Muy satisfecho con el trabajo y 100% recomendado.",
    author: "Ricardo Bedoya",
    detail: null,
  },
  {
    text: "Excelente servicio de mecánica. Taller muy ordenado y confiable.",
    author: "Jona Porras",
    detail: null,
  },
  {
    text: "Excelente servicio.",
    author: "Carlos Pérez",
    detail: null,
  },
  {
    text: null,
    author: "Giovanni Chaves",
    detail: null,
  },
];

export default function Resenas() {
  return (
    <section className="bg-velocar-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-extrabold text-velocar-dark uppercase tracking-wider mb-4">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Google rating summary */}
        <div className="flex items-center justify-center gap-2 mb-14">
          <div className="flex gap-0.5 text-velocar-orange">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-gray-600 font-semibold">5.0 en Google</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resenas.filter((r) => r.text).map((resena) => (
            <div
              key={resena.author}
              className="bg-white border border-gray-200 border-l-4 border-l-velocar-orange rounded-sm p-8"
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-velocar-orange mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &ldquo;{resena.text}&rdquo;
              </p>
              <div>
                <p className="font-bold text-velocar-dark">{resena.author}</p>
                {resena.detail && (
                  <p className="text-sm text-gray-400">{resena.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
