import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const obras = [
  { nombre: "Hotel Radisson", categoria: "Hotelería" },
  { nombre: "SOLCA Machala", categoria: "Salud" },
  { nombre: "Hospital Santiago", categoria: "Salud" },
  { nombre: "Puerto Santa Ana", categoria: "Infraestructura" },
  { nombre: "Ocean Club Playas", categoria: "Turismo" },
  { nombre: "Sports Garden", categoria: "Deportes" },
  { nombre: "Sky Building", categoria: "Edificios" },
  { nombre: "Business Plaza", categoria: "Comercial" },
];

export default function Obras() {
  return (
    <>
      <Header />

      <PageHero
        seccion="Obras"
        titulo="Obras Destacadas"
        descripcion="Proyectos emblemáticos en los que FIVAR S.A ha participado brindando soluciones metalmecánicas de precisión."
        imagen="/heroes/tanque.jpg"
      />

      {/* Grid de obras */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {obras.map((obra, i) => (
              <div
                key={obra.nombre}
                className="bg-white p-10 hover:bg-[#f8f8f8] group transition-colors cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-[#6ab82c] font-black text-sm tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-2 py-0.5">
                    {obra.categoria}
                  </span>
                </div>
                <div className="w-8 h-px bg-gray-300 group-hover:bg-[#6ab82c] mb-4 transition-colors" />
                <h3 className="text-xl font-black text-[#111] group-hover:text-[#6ab82c] transition-colors">
                  {obra.nombre}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      {/* CTA */}
      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Su proyecto puede ser el próximo?</h3>
            <p className="text-gray-500 text-sm">Trabajemos juntos en su próxima obra.</p>
          </div>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-2 border-[#6ab82c] hover:bg-[#222] transition-colors shrink-0"
          >
            Contáctenos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
