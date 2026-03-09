import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const productos = [
  {
    numero: "01",
    titulo: "Varillas Figuradas",
    descripcion: "Varillas de acero cortadas y figuradas según planos del cliente, con precisión milimétrica para estructuras de hormigón armado.",
    specs: ["Diámetros: 8mm a 32mm", "Acero A37 y A42", "Figurado según norma INEN", "Entrega en obra disponible"],
  },
  {
    numero: "02",
    titulo: "Juntas Rápidas LEIMET",
    descripcion: "Juntas metálicas de unión rápida para pilotes de hormigón prefabricado, fabricadas con acero de alta resistencia.",
    specs: ["Alta resistencia a compresión", "Instalación rápida en obra", "Compatibles con pilotes estándar", "Certificación de calidad"],
  },
  {
    numero: "03",
    titulo: "Azuches Metálicos",
    descripcion: "Puntas metálicas para pilotes de cimentación, diseñadas para facilitar la hinca y proteger la integridad del pilote.",
    specs: ["Acero estructural de alta resistencia", "Diseño optimizado para hinca", "Fabricación a medida", "Control dimensional riguroso"],
  },
  {
    numero: "04",
    titulo: "Estructuras Metálicas",
    descripcion: "Fabricación de estructuras metálicas a medida para proyectos de construcción e industria, con soldadura certificada.",
    specs: ["Acero estructural A36/A572", "Soldadura certificada AWS", "Tratamiento anticorrosivo", "Planos y memorias técnicas"],
  },
];

export default function Productos() {
  return (
    <>
      <Header />

      <PageHero
        seccion="Productos"
        titulo="Productos"
        descripcion="Fabricamos productos metálicos de alta precisión para la industria de la construcción."
        video="/videos/soldadura.mp4"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {productos.map((p) => (
            <div
              key={p.titulo}
              className="border border-gray-200 p-8 hover:border-[#6ab82c]/50 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#6ab82c] font-black text-xs tracking-widest">{p.numero}</span>
                <span className="w-6 h-px bg-[#6ab82c]" />
              </div>
              <h2 className="text-xl font-black text-[#111] mb-3 group-hover:text-[#6ab82c] transition-colors">
                {p.titulo}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.descripcion}</p>
              <ul className="space-y-2">
                {p.specs.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      <section className="py-16 bg-[#f8f8f8]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Necesita un producto específico?</h3>
            <p className="text-gray-500 text-sm">Fabricamos según las especificaciones de su proyecto.</p>
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
