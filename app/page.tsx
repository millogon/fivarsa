import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <section className="relative min-h-screen flex items-center bg-[#111]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-[#111]/50" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#6ab82c] to-transparent" />

        <div className="relative max-w-6xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#6ab82c]" />
              <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Guayaquil, Ecuador</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-6">
              Metalmecánica<br />
              <span className="text-gray-400 font-light">de Precisión</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Más de <strong className="text-gray-200">15 años</strong> especializados en figurado de varillas,
              juntas de pilotes y fabricación metálica para proyectos de gran envergadura.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/servicios"
                className="px-8 py-3.5 bg-white text-[#111] font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors"
              >
                Ver Servicios
              </Link>
              <Link
                href="/contacto"
                className="px-8 py-3.5 border border-[#6ab82c] text-[#6ab82c] font-bold text-sm uppercase tracking-widest hover:bg-[#6ab82c]/10 transition-colors"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="border border-gray-600 bg-black/30 backdrop-blur-sm p-6 hover:border-[#6ab82c] transition-colors group"
              >
                <div className="text-5xl font-black text-white mb-2 group-hover:text-[#6ab82c] transition-colors drop-shadow-lg">
                  {s.value}
                </div>
                <div className="text-sm font-black text-[#6ab82c] uppercase tracking-widest">{s.label}</div>
                <div className="w-8 h-px bg-[#6ab82c] mt-3 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
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
            <div className="text-4xl font-black text-white">{s.value}</div>
            <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      {/* OBRAS DESTACADAS */}
      <section className="py-24 bg-[#111] relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#6ab82c 1px, transparent 1px), linear-gradient(90deg, #6ab82c 1px, transparent 1px)", backgroundSize: "80px 80px" }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Encabezado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-[#6ab82c]" />
                <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Portafolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Obras<br /><span className="text-[#6ab82c]">Destacadas</span>
              </h2>
            </div>
            <Link href="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#6ab82c] uppercase tracking-widest transition-colors shrink-0 border-b border-gray-700 hover:border-[#6ab82c] pb-1"
            >
              Ver portfolio completo <span>→</span>
            </Link>
          </div>

          {/* Bloque 1: Juntas LEIMET */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 border border-[#6ab82c] flex items-center justify-center shrink-0">
                <span className="text-[#6ab82c] font-black text-xs">01</span>
              </div>
              <h3 className="text-lg font-black text-white">Juntas rápidas (LEIMET) para pilote de hormigón</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 ml-14">
              {["Hotel Radisson", "SOLCA Machala", "Hospital Santiago", "Puerto Santa Ana", "Aires Batán", "Midtown 100"].map((obra) => (
                <div key={obra}
                  className="border border-gray-800 hover:border-[#6ab82c] p-4 text-center transition-all duration-200 group cursor-default"
                >
                  <div className="w-4 h-px bg-gray-700 group-hover:bg-[#6ab82c] mx-auto mb-2 transition-colors" />
                  <span className="text-gray-400 text-xs font-semibold group-hover:text-white transition-colors leading-tight block">
                    {obra}
                  </span>
                </div>
              ))}
            </div>
            <p className="ml-14 mt-3 text-gray-600 text-xs italic">entre otras obras a nivel nacional</p>
          </div>

          {/* Bloque 2: Azuches + Proyectos */}
          <div className="border-t border-gray-800 pt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-[#6ab82c] flex items-center justify-center shrink-0">
                <span className="text-[#6ab82c] font-black text-xs">02</span>
              </div>
              <h3 className="text-lg font-black text-white">Azuches metálicos para pilotes & Proyectos especiales</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-14">
              {[
                { num: "1", nombre: "Ocean Club – Playas", tipo: "Estructura metálica" },
                { num: "2", nombre: "Sports Garden", tipo: "Estructura metálica" },
                { num: "3", nombre: "Sky Building", tipo: "Aisladores sísmicos" },
                { num: "4", nombre: "Business Plaza", tipo: "Estructura metálica" },
                { num: "5", nombre: "Proyecto Neptuno", tipo: "Corte, rolado y soldadura para tendido de tubería" },
                { num: "6", nombre: "Microtuneleadora", tipo: "Soporte metálico" },
                { num: "7", nombre: "Boyas de mar 600–800mm", tipo: "Estructura para boyas" },
              ].map((p) => (
                <div key={p.nombre}
                  className="bg-white/[0.03] border border-gray-800 hover:border-[#6ab82c]/60 hover:bg-white/[0.06] p-5 transition-all duration-200 group cursor-default"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#6ab82c] font-black text-xl leading-none mt-0.5">{p.num}</span>
                    <div>
                      <div className="text-white font-bold text-sm group-hover:text-[#6ab82c] transition-colors">{p.nombre}</div>
                      <div className="text-gray-600 text-xs mt-1">{p.tipo}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-[3px] bg-[#6ab82c]" />

      {/* PREVIEW SECCIONES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Explore nuestra empresa</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Quiénes Somos", desc: "Más de 15 años de trayectoria en metalmecánica de precisión.", href: "/quienes-somos" },
              { title: "Nuestros Servicios", desc: "Metalmecánica, juntas de pilotes y figurado de varillas.", href: "/servicios" },
              { title: "Obras Destacadas", desc: "Proyectos emblemáticos ejecutados a nivel nacional.", href: "/obras" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group border border-gray-200 p-8 hover:shadow-md hover:border-t-2 hover:border-t-[#6ab82c] transition-all duration-200 block"
              >
                <h3 className="text-lg font-bold text-[#111] mb-3 group-hover:text-[#6ab82c] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
                <span className="text-xs font-bold text-[#6ab82c] uppercase tracking-widest flex items-center gap-2">
                  Ver más <span>→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
