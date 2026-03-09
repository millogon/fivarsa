import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const servicios = [
  {
    key: "cortes",
    titulo: "Servicio de Cortes",
    descripcion: "Realizamos cortes de precisión en acero y metales mediante tecnología de oxicorte, plasma y láser, garantizando bordes limpios y medidas exactas según especificaciones del cliente.",
    detalles: ["Oxicorte para acero de gran espesor", "Corte plasma de alta velocidad", "Corte láser de máxima precisión", "Planchas, perfiles y tubería"],
    fotos: ["/servicios/cortes_1.jpg", "/servicios/cortes_2.jpg"],
  },
  {
    key: "curvado",
    titulo: "Servicio de Curvado",
    descripcion: "Curvado y doblado de barras, varillas y perfiles metálicos con equipos especializados, logrando geometrías precisas para estructuras y elementos constructivos.",
    detalles: ["Curvado de varillas de acero", "Doblado de perfiles estructurales", "Tolerancias milimétricas", "Producción en serie o a medida"],
    fotos: ["/servicios/curvado_1.jpg", "/servicios/curvado_2.jpg"],
  },
  {
    key: "perforado",
    titulo: "Servicio de Perforado",
    descripcion: "Perforación industrial en planchas y estructuras metálicas con control dimensional riguroso, para aplicaciones de anclaje, unión y montaje en obra.",
    detalles: ["Perforación en planchas y perfiles", "Diámetros desde 6mm hasta 100mm", "Posicionamiento CNC", "Acabado interior limpio"],
    fotos: ["/servicios/perforado_1.jpg", "/servicios/perforado_2.jpg"],
  },
  {
    key: "plegado",
    titulo: "Servicio de Plegado",
    descripcion: "Plegado de láminas y planchas de acero con prensa hidráulica de alta tonelaje, obteniendo ángulos y formas precisas para fabricación de estructuras y componentes.",
    detalles: ["Plegado en frío de planchas", "Ángulos y radios a medida", "Acero al carbono e inoxidable", "Capacidad hasta 6m de longitud"],
    fotos: ["/servicios/plegado_1.jpg", "/servicios/plegado_2.jpg"],
  },
  {
    key: "rolado",
    titulo: "Servicio de Rolado",
    descripcion: "Rolado de planchas, perfiles y tubos para la fabricación de elementos curvos, cilindros, arcos y estructuras circulares con acabado homogéneo.",
    detalles: ["Rolado de planchas y láminas", "Cilindros y conos estructurales", "Perfiles HEB, IPE, UPN", "Rolado de tubería de gran diámetro"],
    fotos: ["/servicios/rolado_1.jpg", "/servicios/rolado_2.jpg"],
  },
  {
    key: "soldadura",
    titulo: "Servicio de Soldadura y Fabricación",
    descripcion: "Fabricación de estructuras metálicas y soldadura certificada en acero al carbono e inoxidable, para proyectos industriales, comerciales y de infraestructura.",
    detalles: ["Soldadura MIG/MAG, TIG y SMAW", "Acero al carbono e inoxidable", "Fabricación de estructuras a medida", "Control de calidad por inspección visual y dimensional"],
    fotos: ["/servicios/soldadura_1.jpg", "/servicios/soldadura_2.jpg"],
  },
];

export default function Servicios() {
  return (
    <>
      <Header />

      <PageHero
        seccion="Servicios"
        titulo="Nuestros Servicios"
        descripcion="Soluciones metalmecánicas integrales con tecnología de precisión y más de 15 años de experiencia."
        video="/videos/corte-laser2.mp4"
      />

      {/* Servicios */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {servicios.map((s, i) => (
            <div
              key={s.key}
              className={`grid md:grid-cols-2 gap-0 border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                i % 2 !== 0 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Fotos */}
              <div className="grid grid-cols-2 gap-2 p-2 h-72 md:h-auto bg-[#f0f0f0]">
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={s.fotos[0]}
                    alt={s.titulo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-sm">
                  <Image
                    src={s.fotos[1]}
                    alt={s.titulo}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  {/* Número superpuesto */}
                  <div className="absolute bottom-0 right-0 bg-[#6ab82c] px-3 py-1.5">
                    <span className="text-white font-black text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white border-t md:border-t-0 md:border-l border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-[#6ab82c]" />
                  <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Servicio</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-[#111] mb-4 leading-tight">
                  {s.titulo}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.descripcion}</p>
                <ul className="space-y-2">
                  {s.detalles.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c] mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Necesita cotizar un servicio?</h3>
            <p className="text-gray-500 text-sm">Contáctenos y le responderemos a la brevedad posible.</p>
          </div>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-[3px] border-[#6ab82c] hover:bg-[#222] transition-colors shrink-0"
          >
            Solicitar Cotización
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
