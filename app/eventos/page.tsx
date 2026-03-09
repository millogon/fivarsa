import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

export default function Eventos() {
  return (
    <>
      <Header />

      <PageHero
        seccion="Eventos"
        titulo="Eventos"
        descripcion="Ferias, exposiciones y actividades en las que FIVAR S.A participa a nivel nacional e internacional."
        imagen="/heroes/aisladores.jpg"
      />

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
