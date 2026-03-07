import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const proyectos = [
  { nombre: "Hotel Radisson", categoria: "Hotelería", descripcion: "Suministro de varillas figuradas y estructuras metálicas para el proyecto hotelero." },
  { nombre: "SOLCA Machala", categoria: "Salud", descripcion: "Fabricación de estructuras y elementos metálicos para el complejo hospitalario." },
  { nombre: "Hospital Santiago", categoria: "Salud", descripcion: "Juntas de pilotes y figurado de varillas para la cimentación del hospital." },
  { nombre: "Puerto Santa Ana", categoria: "Infraestructura", descripcion: "Provisión de elementos metálicos para el desarrollo del puerto urbano." },
  { nombre: "Ocean Club Playas", categoria: "Turismo", descripcion: "Estructuras metálicas y varillas figuradas para el complejo turístico." },
  { nombre: "Sports Garden", categoria: "Deportes", descripcion: "Metalmecánica general y figurado de acero para el complejo deportivo." },
  { nombre: "Sky Building", categoria: "Edificios", descripcion: "Figurado de varillas y juntas de pilotes para el edificio de gran altura." },
  { nombre: "Business Plaza", categoria: "Comercial", descripcion: "Suministro completo de metalmecánica para el centro de negocios." },
];

const categorias = ["Todos", "Hotelería", "Salud", "Infraestructura", "Turismo", "Deportes", "Edificios", "Comercial"];

export default function Portfolio() {
  return (
    <>
      <Header />

      <div className="bg-[#111] pt-28 pb-16 border-b border-[#6ab82c]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <Link href="/" className="text-gray-600 text-xs hover:text-[#6ab82c] transition-colors">Inicio</Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Portfolio</h1>
          <p className="text-gray-500 mt-3 text-sm max-w-xl">
            Proyectos emblemáticos en los que FIVAR S.A ha participado con soluciones metalmecánicas de precisión a nivel nacional.
          </p>
        </div>
      </div>

      {/* Categorías */}
      <div className="bg-white border-b border-gray-100 sticky top-[88px] z-40">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {categorias.map((cat) => (
            <span
              key={cat}
              className={`px-4 py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap cursor-default transition-colors
                ${cat === "Todos" ? "bg-[#6ab82c] text-white" : "text-gray-500 hover:text-[#6ab82c] border border-gray-200 hover:border-[#6ab82c]"}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {proyectos.map((p, i) => (
            <div
              key={p.nombre}
              className="bg-white border border-gray-200 hover:border-[#6ab82c]/50 hover:shadow-lg transition-all duration-200 group overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="h-40 bg-[#1a1a1a] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]" />
                <div className="relative text-center">
                  <div className="text-[#6ab82c] font-black text-3xl">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="w-8 h-px bg-[#6ab82c] mx-auto mt-2" />
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-bold text-[#6ab82c] border border-[#6ab82c]/40 px-2 py-0.5 uppercase tracking-widest">
                  {p.categoria}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-[#111] mb-2 group-hover:text-[#6ab82c] transition-colors">
                  {p.nombre}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Su proyecto puede ser el próximo?</h3>
            <p className="text-gray-500 text-sm">Trabajemos juntos en su próxima obra.</p>
          </div>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-[3px] border-[#6ab82c] hover:bg-[#222] transition-colors shrink-0"
          >
            Contáctenos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
