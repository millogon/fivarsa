import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const valores = [
  { label: "Calidad", desc: "Cada pieza cumple los más altos estándares del sector metalmecánico." },
  { label: "Precisión", desc: "Procesos automatizados que garantizan resultados exactos en cada trabajo." },
  { label: "Compromiso", desc: "Cumplimiento de plazos y compromisos adquiridos con cada cliente." },
  { label: "Integridad", desc: "Relaciones transparentes y honestas en cada etapa del proyecto." },
  { label: "Transparencia", desc: "Comunicación clara y directa durante todo el proceso de trabajo." },
];

export default function QuienesSomos() {
  return (
    <>
      <Header />

      {/* Page header */}
      <div className="bg-[#111] pt-28 pb-16 border-b border-[#6ab82c]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <Link href="/" className="text-gray-600 text-xs hover:text-[#6ab82c] transition-colors">Inicio</Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Quiénes Somos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Quiénes Somos</h1>
        </div>
      </div>

      {/* Contenido principal */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#6ab82c]" />
              <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Nuestra historia</span>
            </div>
            <h2 className="text-3xl font-black text-[#111] mb-6 leading-tight">
              Más de 15 años en metalmecánica de precisión
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong className="text-[#111]">FIVAR S.A</strong> (Figuradora de Varillas) es una empresa ecuatoriana
              fundada con el propósito de brindar soluciones metalmecánicas de alta calidad para el sector de la
              construcción e industria. Tenemos nuestra sede en Guayaquil, Ecuador.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A lo largo de más de 15 años de trayectoria, hemos participado en proyectos emblemáticos de construcción
              a nivel nacional, consolidándonos como un socio confiable para empresas del sector.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Contamos con tecnología de punta y un equipo de profesionales altamente capacitados, lo que nos permite
              garantizar calidad, precisión y puntualidad en cada trabajo que realizamos.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-3 text-sm font-bold text-[#111] uppercase tracking-widest border-b-2 border-[#6ab82c] pb-0.5 hover:text-[#6ab82c] transition-colors"
            >
              Contáctenos <span className="text-[#6ab82c]">→</span>
            </Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Nuestros valores</p>
            {valores.map((v, i) => (
              <div
                key={v.label}
                className="flex items-start gap-4 p-5 border border-gray-100 hover:border-l-[3px] hover:border-l-[#6ab82c] hover:shadow-sm transition-all cursor-default"
              >
                <span className="text-[#6ab82c] font-black text-xs mt-0.5 w-5 shrink-0">
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
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      {/* Stats */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "8+", label: "Obras emblemáticas" },
            { value: "3", label: "Líneas de servicio" },
            { value: "100%", label: "Calidad garantizada" },
          ].map((s) => (
            <div key={s.label} className="text-center border-l-2 border-[#6ab82c] pl-4">
              <div className="text-4xl font-black text-[#111]">{s.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
