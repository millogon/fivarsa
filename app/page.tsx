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
  { value: "100%", label: "Compromiso con calidad" },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center pt-28"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #2d3a2d 50%, #1a2a1a 100%)",
        }}
      >
        {/* Diagonal overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #5cb85c 0, #5cb85c 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block border border-[#5cb85c] text-[#5cb85c] text-xs font-bold px-5 py-1.5 mb-6 tracking-widest uppercase">
            Guayaquil, Ecuador · Más de 15 años
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4 tracking-tight">
            DISEÑO Y FABRICACIÓN<br />
            <span className="text-[#5cb85c]">METALMECÁNICA</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Especialistas en figurado de varillas, juntas de pilotes y metalmecánica general para proyectos de gran envergadura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#productos"
              className="bg-[#2d6a2d] hover:bg-[#245224] text-white font-bold px-10 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="bg-transparent border border-gray-500 hover:border-[#5cb85c] hover:text-[#5cb85c] text-white font-bold px-10 py-4 text-sm uppercase tracking-widest transition-colors"
            >
              Contáctenos
            </a>
          </div>
        </div>

        {/* Bottom diagonal */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,60 1440,0 1440,60" fill="white" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-black text-[#2d6a2d]">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Nuestra empresa</span>
              <h2 className="text-4xl font-black text-[#1a1a1a] mt-2 mb-6 leading-tight">
                Quiénes Somos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong className="text-[#1a1a1a]">FIVAR S.A</strong> (Figuradora de Varillas) es una empresa
                ecuatoriana líder en metalmecánica de precisión, con sede en Guayaquil. Con más de{" "}
                <strong className="text-[#1a1a1a]">15 años de experiencia</strong>, brindamos soluciones de alta
                calidad en el sector de la construcción e industria metalmecánica.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Atendemos proyectos de gran envergadura a lo largo de todo el Ecuador, con tecnología de punta y
                un equipo altamente capacitado.
              </p>
              <a
                href="#contacto"
                className="inline-block bg-[#2d6a2d] hover:bg-[#245224] text-white font-bold px-8 py-3 text-sm uppercase tracking-widest transition-colors"
              >
                Solicitar Información
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {valores.map((v) => (
                <div
                  key={v.label}
                  className="flex items-start gap-4 p-4 border-l-4 border-[#2d6a2d] bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div>
                    <div className="font-bold text-[#1a1a1a] text-sm">{v.label}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="productos"
        className="py-20 bg-[#f5f5f5]"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Lo que hacemos</span>
            <h2 className="text-4xl font-black text-[#1a1a1a] mt-2">Nuestros Servicios</h2>
            <div className="w-16 h-1 bg-[#2d6a2d] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-0 border border-gray-200">
            {servicios.map((s, i) => (
              <div
                key={s.titulo}
                className={`p-10 bg-white hover:bg-[#2d6a2d] group transition-all duration-300 ${
                  i < servicios.length - 1 ? "border-r border-gray-200" : ""
                }`}
              >
                <div className="w-16 h-16 bg-[#1a1a1a] group-hover:bg-white/20 flex items-center justify-center text-2xl mb-6 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a] group-hover:text-white mb-3 transition-colors">
                  {s.titulo}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-200 text-sm leading-relaxed transition-colors">
                  {s.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OBRAS DESTACADAS */}
      <section id="obras" className="py-20 bg-[#2d3a2d]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#5cb85c] text-xs font-bold uppercase tracking-widest">Portafolio</span>
            <h2 className="text-4xl font-black text-white mt-2">Obras Destacadas</h2>
            <div className="w-16 h-1 bg-[#5cb85c] mx-auto mt-4" />
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
              Proyectos emblemáticos ejecutados con precision y calidad en todo el Ecuador.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {obras.map((obra, i) => (
              <div
                key={obra}
                className="bg-[#1a2a1a] border border-[#3a5a3a] p-6 text-center hover:bg-[#2d6a2d] hover:border-[#5cb85c] transition-all duration-300 group"
              >
                <div className="text-[#5cb85c] text-3xl font-black mb-3 group-hover:text-white transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-300 font-semibold text-sm group-hover:text-white transition-colors">
                  {obra}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Hablemos</span>
            <h2 className="text-4xl font-black text-[#1a1a1a] mt-2">Contáctenos</h2>
            <div className="w-16 h-1 bg-[#2d6a2d] mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Información de contacto</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d6a2d] flex items-center justify-center text-white text-sm shrink-0">
                    ✉
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Email</div>
                    <a href="mailto:Info@fivarsa.com" className="text-[#1a1a1a] hover:text-[#2d6a2d] font-medium transition-colors">
                      Info@fivarsa.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d6a2d] flex items-center justify-center text-white text-sm shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Teléfonos</div>
                    <p className="text-[#1a1a1a] font-medium">0994148100</p>
                    <p className="text-[#1a1a1a] font-medium">0996767956</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#2d6a2d] flex items-center justify-center text-white text-sm shrink-0">
                    📍
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Ubicación</div>
                    <p className="text-[#1a1a1a] font-medium">Guayaquil, Ecuador</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-6">Envíenos un mensaje</h3>
              <form className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="col-span-2 sm:col-span-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="col-span-2 sm:col-span-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className="col-span-2 sm:col-span-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <input
                  type="text"
                  placeholder="Asunto"
                  className="col-span-2 sm:col-span-1 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
                <textarea
                  placeholder="Mensaje"
                  rows={4}
                  className="col-span-2 border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="col-span-2 bg-[#2d6a2d] hover:bg-[#245224] text-white font-bold py-4 text-sm uppercase tracking-widest transition-colors"
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
