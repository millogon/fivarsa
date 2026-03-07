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

export default function Home() {
  return (
    <>
      <Header />

      {/* INICIO */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d1b2a] via-[#1a2e4a] to-[#0d1b2a] text-white pt-20"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
            Guayaquil, Ecuador
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            FIVAR <span className="text-orange-400">S.A</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            Figuradora de Varillas
          </p>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Más de <strong className="text-white">15 años</strong> de experiencia en metalmecánica de precisión,
            figurado de varillas de hierro y juntas de pilotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-widest"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="border border-white/30 hover:border-orange-400 hover:text-orange-400 text-white font-bold px-8 py-4 rounded-full transition-colors text-sm uppercase tracking-widest"
            >
              Contáctenos
            </a>
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Nuestra empresa</span>
            <h2 className="text-4xl font-black text-[#0d1b2a] mt-2">Quiénes Somos</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                <strong className="text-[#0d1b2a]">FIVAR S.A</strong> es una empresa ecuatoriana líder en metalmecánica
                de precisión, con sede en Guayaquil. Contamos con más de 15 años de experiencia brindando soluciones de
                alta calidad en el sector de la construcción e industria metalmecánica.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nos especializamos en el figurado de varillas de acero, fabricación de juntas de pilotes y servicios
                generales de metalmecánica, atendiendo proyectos de gran envergadura a lo largo de todo el Ecuador.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {valores.map((v) => (
                <div key={v.label} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold text-[#0d1b2a]">{v.label}</span>
                    <p className="text-sm text-gray-500 mt-0.5">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTOS / SERVICIOS */}
      <section id="productos" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Lo que hacemos</span>
            <h2 className="text-4xl font-black text-[#0d1b2a] mt-2">Nuestros Servicios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-orange-200 transition-all group"
              >
                <div className="text-5xl mb-5">{s.icon}</div>
                <h3 className="text-xl font-bold text-[#0d1b2a] mb-3 group-hover:text-orange-500 transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS DESTACADAS */}
      <section id="obras" className="py-24 bg-[#0d1b2a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold uppercase tracking-widest">Nuestro portafolio</span>
            <h2 className="text-4xl font-black text-white mt-2">Obras Destacadas</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Hemos participado en proyectos emblemáticos a lo largo de todo el Ecuador.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {obras.map((obra, i) => (
              <div
                key={obra}
                className="bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:bg-orange-500/20 hover:border-orange-400 transition-all"
              >
                <div className="text-orange-400 text-2xl font-black mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-white font-semibold text-sm">{obra}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">Hablemos</span>
            <h2 className="text-4xl font-black text-[#0d1b2a] mt-2">Contáctenos</h2>
            <p className="text-gray-500 mt-4">
              Estamos listos para atender su proyecto. Escríbanos o llámenos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">📧</div>
              <h4 className="font-bold text-[#0d1b2a] mb-1">Email</h4>
              <a
                href="mailto:Info@fivarsa.com"
                className="text-orange-500 hover:text-orange-600 text-sm transition-colors"
              >
                Info@fivarsa.com
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">📞</div>
              <h4 className="font-bold text-[#0d1b2a] mb-1">Teléfonos</h4>
              <p className="text-gray-600 text-sm">0994148100</p>
              <p className="text-gray-600 text-sm">0996767956</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="text-3xl mb-3">📍</div>
              <h4 className="font-bold text-[#0d1b2a] mb-1">Ubicación</h4>
              <p className="text-gray-600 text-sm">Guayaquil, Ecuador</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h3 className="text-xl font-bold text-[#0d1b2a] mb-6">Envíenos un mensaje</h3>
            <form className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Nombre completo"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="tel"
                placeholder="Teléfono"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <input
                type="text"
                placeholder="Asunto"
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors"
              />
              <textarea
                placeholder="Mensaje"
                rows={4}
                className="md:col-span-2 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
              />
              <button
                type="submit"
                className="md:col-span-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-sm uppercase tracking-widest"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
