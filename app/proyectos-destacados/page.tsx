import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const proyectos = [
  {
    id: 1,
    slug: "juntas-leimet",
    titulo: "Juntas rápidas (LEIMET) para pilote de hormigón",
    descripcion: "Suministro de juntas metálicas de unión rápida para pilotes de hormigón prefabricado en diversas obras emblemáticas: Hotel Radisson, SOLCA Machala, Hospital Santiago, Puerto Santa Ana, Aires Batán, Midtown 100, entre otras.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 2,
    slug: "azuches-metalicos",
    titulo: "Azuches metálicos para pilotes",
    descripcion: "Fabricación de azuches metálicos diseñados para facilitar la hinca de pilotes y proteger su integridad durante la cimentación de proyectos de gran envergadura.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 3,
    slug: "ocean-club",
    titulo: "Ocean Club – Playas · Estructura metálica",
    descripcion: "Fabricación y montaje de estructura metálica para el complejo turístico Ocean Club en la ciudad de Playas, Ecuador.",
    fotos: ["p1.jpg", "p2.heic"],
  },
  {
    id: 4,
    slug: "sports-garden",
    titulo: "Estructura metálica – Sports Garden",
    descripcion: "Metalmecánica general y figurado de acero estructural para el complejo deportivo Sports Garden.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 5,
    slug: "sky-building",
    titulo: "Aisladores sísmicos – Sky Building",
    descripcion: "Fabricación de aisladores sísmicos para el edificio Sky Building, contribuyendo a la seguridad estructural ante eventos sísmicos.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 6,
    slug: "business-plaza",
    titulo: "Estructura metálica obra – Business Plaza",
    descripcion: "Suministro completo de metalmecánica y estructura metálica para el centro de negocios Business Plaza.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 7,
    slug: "proyecto-neptuno",
    titulo: "Proyecto Neptuno – Corte, rolado y soldadura para tendido de tubería",
    descripcion: "Fabricación de tuberías de gran diámetro mediante corte, rolado y soldadura certificada para el tendido del Proyecto Neptuno.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 8,
    slug: "microtuneleadora",
    titulo: "Soporte metálico para microtuneleadora",
    descripcion: "Diseño y fabricación de soportes metálicos especializados para el sistema de microtunelización.",
    fotos: ["p1.heic", "p2.heic"],
  },
  {
    id: 9,
    slug: "boyas-mar",
    titulo: "Estructura para Boyas de mar 600–800mm",
    descripcion: "Fabricación de estructuras metálicas para boyas marinas de 600 a 800mm de diámetro, para uso en entornos costeros.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 10,
    slug: "soportes-tuberia",
    titulo: "Soportes metálicos para tubería – Línea impulsión Ebar – Pradera – Ptar",
    descripcion: "Fabricación de soportes metálicos para la línea de impulsión de la Estación de Bombeo Ebar hasta la Planta de Tratamiento Ptar.",
    fotos: ["p1.heic", "p2.heic"],
  },
  {
    id: 11,
    slug: "estructuras-cercha",
    titulo: "Estructuras tipo cercha",
    descripcion: "Fabricación de estructuras tipo cercha en acero estructural para distintos proyectos de construcción industrial y comercial.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
  {
    id: 12,
    slug: "planta-tratamiento",
    titulo: "Planta de tratamiento de aguas – Las Esclusas",
    descripcion: "Fabricación de elementos metálicos de gran escala para la planta de tratamiento de aguas Las Esclusas.",
    fotos: ["p1.jpg", "p2.jpg"],
  },
];

export default function ProyectosDestacados() {
  return (
    <>
      <Header />

      <PageHero
        seccion="Proyectos Destacados"
        titulo="Proyectos Destacados"
        descripcion="Trabajos emblemáticos ejecutados por FIVAR S.A en metalmecánica de precisión a nivel nacional."
        video="/videos/soldadura.mp4"
      />

      {/* Índice */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-40 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 py-3 scrollbar-hide w-max">
          {proyectos.map((p) => (
            <a
              key={p.id}
              href={`#${p.slug}`}
              className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap text-gray-500 hover:text-[#6ab82c] border border-gray-200 hover:border-[#6ab82c] transition-colors"
            >
              {p.id.toString().padStart(2, "0")}. {p.titulo.split("–")[0].split("·")[0].trim()}
            </a>
          ))}
        </div>
      </div>

      {/* Proyectos */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {proyectos.map((p) => (
            <div key={p.id} id={p.slug} className="scroll-mt-20">
              {/* Header proyecto */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 border-2 border-[#6ab82c] flex items-center justify-center shrink-0">
                  <span className="text-[#6ab82c] font-black text-xs">{String(p.id).padStart(2, "0")}</span>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-black text-[#111]">{p.titulo}</h2>
                  <p className="text-gray-500 text-sm mt-1 max-w-2xl">{p.descripcion}</p>
                </div>
              </div>

              {/* Fotos */}
              <div className="grid grid-cols-2 gap-3 ml-14">
                {p.fotos.map((foto, i) => (
                  <div key={i} className="relative aspect-video overflow-hidden bg-gray-200 group">
                    <Image
                      src={`/proyectos/${p.id}/${foto}`}
                      alt={`${p.titulo} ${i + 1}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>

              <div className="border-b border-gray-200 mt-16" />
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Su proyecto puede ser el próximo?</h3>
            <p className="text-gray-500 text-sm">Contáctenos para una cotización personalizada.</p>
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
