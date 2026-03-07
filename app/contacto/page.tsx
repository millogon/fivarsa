import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const info = [
  { label: "Email", value: "Info@fivarsa.com", href: "mailto:Info@fivarsa.com" },
  { label: "Teléfono", value: "0994148100", href: "tel:0994148100" },
  { label: "Teléfono", value: "0996767956", href: "tel:0996767956" },
  { label: "Ubicación", value: "Guayaquil, Ecuador", href: undefined },
];

export default function Contacto() {
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
            <span className="text-[#4a9a4a] text-xs font-bold uppercase tracking-widest">Contacto</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Contáctenos</h1>
        </div>
      </div>

      {/* Contenido */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          {/* Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Información</span>
            </div>
            <h2 className="text-2xl font-black text-[#111] mb-8">Estamos listos para atender su proyecto</h2>

            <div className="space-y-6">
              {info.map((item, i) => (
                <div key={i} className="border-l-2 border-[#2d6a2d] pl-4">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-[#111] font-semibold text-sm hover:text-[#2d6a2d] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#111] font-semibold text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-[#f8f8f8] border-l-2 border-[#2d6a2d]">
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestro equipo le atenderá a la brevedad posible para brindarle una cotización personalizada según las necesidades de su proyecto.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#2d6a2d]" />
              <span className="text-[#2d6a2d] text-xs font-bold uppercase tracking-widest">Formulario</span>
            </div>
            <h2 className="text-2xl font-black text-[#111] mb-8">Envíenos un mensaje</h2>

            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Nombre completo</label>
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Teléfono</label>
                <input
                  type="tel"
                  placeholder="09XXXXXXXX"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Asunto</label>
                <input
                  type="text"
                  placeholder="Ej. Cotización figurado de varillas"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1">
                <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Mensaje</label>
                <textarea
                  placeholder="Cuéntenos sobre su proyecto..."
                  rows={5}
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#2d6a2d] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="col-span-2 bg-[#111] hover:bg-[#222] text-white font-bold py-4 text-sm uppercase tracking-widest transition-colors border-b-2 border-[#2d6a2d]"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
