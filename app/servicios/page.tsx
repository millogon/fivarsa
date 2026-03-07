import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const servicios = [
  {
    numero: "01",
    icon: "⚙️",
    titulo: "Metalmecánica General",
    descripcion:
      "Fabricación, corte, soldado y ensamblaje de piezas metálicas con los más altos estándares de calidad y precisión industrial.",
    detalles: [
      "Corte de acero con maquinaria de precisión",
      "Soldadura estructural y de precisión",
      "Ensamblaje de estructuras metálicas",
      "Fabricación de piezas a medida",
    ],
  },
  {
    numero: "02",
    icon: "🏗️",
    titulo: "Juntas de Pilotes",
    descripcion:
      "Fabricación de juntas rápidas tipo LEIMET y azuches metálicos para proyectos de construcción e infraestructura de gran escala.",
    detalles: [
      "Juntas rápidas tipo LEIMET",
      "Azuches metálicos a medida",
      "Control de calidad en cada pieza",
      "Entrega puntual para obra",
    ],
  },
  {
    numero: "03",
    icon: "📏",
    titulo: "Figurado de Varillas",
    descripcion:
      "Corte y figurado automatizado de acero para construcción, con exactitud milimétrica en cada pieza producida según planos del cliente.",
    detalles: [
      "Figurado automatizado de alta precisión",
      "Corte según especificaciones del cliente",
      "Acero para estructuras de hormigón",
      "Volúmenes industriales disponibles",
    ],
  },
];

export default function Servicios() {
  return (
    <>
      <Header />

      {/* Page header */}
      <div className="bg-[#111] pt-28 pb-16 border-b border-[#2d6a2d]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#2d6a2d]" />
            <Link href="/" className="text-gray-600 text-xs hover:text-[#4a9a4a] transition-colors">Inicio</Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-[#4a9a4a] text-xs font-bold uppercase tracking-widest">Servicios</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Nuestros Servicios</h1>
        </div>
      </div>

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-6">
          {servicios.map((s, i) => (
            <div
              key={s.titulo}
              className={`grid md:grid-cols-2 gap-10 items-start p-10 border border-gray-200 hover:border-[#2d6a2d]/40 hover:shadow-sm transition-all ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#2d6a2d] font-black text-xs tracking-widest">{s.numero}</span>
                  <span className="w-6 h-px bg-[#2d6a2d]" />
                </div>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-2xl font-black text-[#111] mb-3">{s.titulo}</h2>
                <p className="text-gray-600 leading-relaxed">{s.descripcion}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Incluye</p>
                {s.detalles.map((d) => (
                  <div key={d} className="flex items-start gap-3 text-sm text-gray-600 py-2 border-b border-gray-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2d6a2d] mt-1.5 shrink-0" />
                    {d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#2d6a2d] to-transparent" />

      {/* CTA */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Necesita cotizar un proyecto?</h3>
            <p className="text-gray-500 text-sm">Contáctenos y le responderemos a la brevedad posible.</p>
          </div>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-2 border-[#2d6a2d] hover:bg-[#222] transition-colors shrink-0"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
