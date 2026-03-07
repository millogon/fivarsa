import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Eventos() {
  return (
    <>
      <Header />

      <div className="bg-[#111] pt-28 pb-16 border-b border-[#6ab82c]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <Link href="/" className="text-gray-600 text-xs hover:text-[#6ab82c] transition-colors">Inicio</Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Eventos</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Eventos</h1>
          <p className="text-gray-500 mt-3 text-sm max-w-xl">
            Ferias, exposiciones y actividades en las que FIVAR S.A participa a nivel nacional e internacional.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="w-16 h-16 border-2 border-[#6ab82c] flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">📅</span>
          </div>
          <h2 className="text-2xl font-black text-[#111] mb-3">Próximamente</h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">
            Estamos preparando los próximos eventos. Vuelva pronto para ver novedades o contáctenos para más información.
          </p>
          <div className="w-12 h-px bg-[#6ab82c] mx-auto mb-8" />
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-[3px] border-[#6ab82c] hover:bg-[#222] transition-colors"
          >
            Contáctenos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
