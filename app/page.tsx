import Header from "./components/Header";
import Footer from "./components/Footer";

const servicios = [
  {
    icon: "⚙️",
    titulo: "Metalmecánica General",
    descripcion:
      "Fabricación, corte, soldado y ensamblaje de piezas metálicas con los más altos estándares de calidad y precisión.",
  },
  {
    icon: "🏗️",
    titulo: "Juntas de Pilotes",
    descripcion:
      "Fabricación de juntas rápidas LEIMET y azuches metálicos para proyectos de construcción e infraestructura.",
  },
  {
    icon: "📏",
    titulo: "Figurado de Varillas",
    descripcion:
      "Corte y figurado automatizado de acero para construcción, garantizando exactitud en cada pieza producida.",
  },
];

const valores = [
  { label: "Calidad", desc: "Cada pieza cumple los más altos estándares del sector." },
  { label: "Precisión", desc: "Procesos automatizados para resultados exactos." },
  { label: "Compromiso", desc: "Cumplimiento de plazos y compromisos con el cliente." },
  { label: "Integridad", desc: "Relaciones transparentes y honestas en cada proyecto." },
  { label: "Transparencia", desc: "Comunicación clara en cada etapa del trabajo." },
];

const obras = [
  "Hotel Radisson",
  "SOLCA Machala",
  "Hospital Santiago",
  "Puerto Santa Ana",
  "Ocean Club Playas",
  "Sports Garden",
  "Sky Building",
  "Business Plaza",
];

const stats = [
  { value: "15+", label: "Años de experiencia" },
  { value: "8+", label: "Obras emblemáticas" },
  { value: "3", label: "Líneas de servicio" },
  { value: "100%", label: "Calidad garantizada" },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center bg-[#111] pt-28"
      >
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Green left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#2d6a2d] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#4a9a4a] text-xs font-bold uppercase tracking-widest">Guayaquil, Ecuador</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Metalmecánica<br />
              <span className="text-gray-400 font-light">de Precisión</span>
            </h1>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Más de <strong className="text-gray-300">15 años</strong> especializados en figurado de varillas,
              juntas de pilotes y fabricación metálica para proyectos de gran envergadura.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#productos"
                className="px-8 py-3.5 bg-white text-[#111] font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                Ver Servicios
              </a>
              <a
                href="#contacto"
                className="px-8 py-3.5 border border-[#2d6a2d] text-[#4a9a4a] font-bold text-sm uppercase tracking-widest hover:bg-[#2d6a2d]/10 transition-colors"
              >
                Cotizar Proyecto
              </a>
            </div>
          </div>

          {/* Right side: decorative stats */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-gray-800 p-6 hover:border-[#2d6a2d] transition-colors group"
              >
                <div className="text-4xl font-black text-white mb-1 group-hover:text-[#4a9a4a] transition-colors">
                  {s.value}
                </div>
                <div className="text-xs text-gray-600 uppercase tracking-widest">{s.label}</div>
                <div className="w-8 h-px bg-[#2d6a2d] mt-3 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS MOBILE */}
      <section className="md:hidden bg-[#111] border-t border-gray-800 grid grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-6 text-center ${i % 2 === 0 ? "border-r border-gray-800" : ""} border-b border-gray-800`}
          >
            <div className="text-3xl font-black text-white">{s.value}</div>
            <div className="text-xs text-gray-600 uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2d6a2d] to-transparent" />

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#2d6a2d]" />
                <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Nuestra empresa</span>
              </div>
              <h2 className="text-4xl font-black text-[#111] leading-tight mb-6">
                Quiénes Somos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-base">
                <strong className="text-[#111]">FIVAR S.A</strong> es una empresa ecuatoriana dedicada a la metalmecánica
                de precisión, con sede en Guayaquil. Con más de 15 años en el sector, hemos participado en proyectos
                emblemáticos de construcción a nivel nacional.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">
                Contamos con tecnología de punta y personal altamente calificado, garantizando calidad y precisión en
                cada trabajo que realizamos.
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 text-sm font-bold text-[#111] uppercase tracking-widest border-b-2 border-[#2d6a2d] pb-0.5 hover:text-[#2d6a2d] transition-colors"
              >
                Solicitar información
                <span className="text-[#2d6a2d]">→</span>
              </a>
            </div>

            <div className="space-y-3">
              {valores.map((v, i) => (
                <div
                  key={v.label}
                  className="flex items-start gap-4 p-5 border border-gray-100 hover:border-l-[3px] hover:border-l-[#2d6a2d] hover:shadow-sm transition-all group cursor-default"
                >
                  <span className="text-[#2d6a2d] font-black text-xs mt-0.5 w-5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="font-bold text-[#111] text-sm">{v.label}</div>
                    <div className="text-gray-500 text-sm mt-0.5 leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2d6a2d] to-transparent" />

      {/* SERVICIOS */}
      <section id="productos" className="py-24 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Lo que hacemos</span>
            </div>
            <h2 className="text-4xl font-black text-[#111]">Nuestros Servicios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="bg-white border border-gray-200 p-8 hover:shadow-md hover:border-t-2 hover:border-t-[#2d6a2d] transition-all duration-200 group"
              >
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="text-lg font-bold text-[#111] mb-3 group-hover:text-[#2d6a2d] transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
                <div className="w-0 group-hover:w-8 h-px bg-[#2d6a2d] mt-5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS */}
      <section id="obras" className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#4a9a4a] text-xs font-bold uppercase tracking-widest">Portafolio</span>
            </div>
            <h2 className="text-4xl font-black text-white">Obras Destacadas</h2>
            <p className="text-gray-600 mt-3 text-sm max-w-lg">
              Proyectos de construcción e infraestructura ejecutados con precisión a nivel nacional.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-800">
            {obras.map((obra, i) => (
              <div
                key={obra}
                className="bg-[#111] p-7 hover:bg-[#1a1a1a] group transition-colors cursor-default"
              >
                <div className="text-xs font-black text-[#2d6a2d] mb-3 tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-6 h-px bg-gray-700 group-hover:bg-[#2d6a2d] mb-3 transition-colors" />
                <p className="text-gray-400 font-semibold text-sm group-hover:text-white transition-colors">
                  {obra}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#2d6a2d] to-transparent" />

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Hablemos</span>
            </div>
            <h2 className="text-4xl font-black text-[#111]">Contáctenos</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12">
            {/* Info */}
            <div className="md:col-span-2 space-y-6">
              {[
                { label: "Email", value: "Info@fivarsa.com", href: "mailto:Info@fivarsa.com" },
                { label: "Teléfono 1", value: "0994148100", href: "tel:0994148100" },
                { label: "Teléfono 2", value: "0996767956", href: "tel:0996767956" },
                { label: "Ubicación", value: "Guayaquil, Ecuador", href: undefined },
              ].map((item) => (
                <div key={item.label} className="border-l-2 border-[#2d6a2d] pl-4">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-[#111] font-semibold text-sm hover:text-[#2d6a2d] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#111] font-semibold text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="col-span-2 sm:col-span-1 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="col-span-2 sm:col-span-1 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="col-span-2 sm:col-span-1 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="col-span-2 sm:col-span-1 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <textarea
                  placeholder="Cuéntenos sobre su proyecto..."
                  rows={5}
                  className="col-span-2 border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="col-span-2 bg-[#111] hover:bg-[#222] text-white font-bold py-4 text-sm uppercase tracking-widest transition-colors border-b-2 border-[#2d6a2d]"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
