import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#111] text-gray-500">
      {/* Green top border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#2d6a2d] to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="mb-4">
            <Image src="/logo.gif" alt="FIVAR S.A" width={140} height={55} className="h-12 w-auto object-contain brightness-90" unoptimized />
          </div>
          <p className="text-sm leading-relaxed text-gray-600">
            Especialistas en metalmecánica de precisión con más de 15 años de experiencia en Ecuador.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-[#2d6a2d] inline-block" /> Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              ["Inicio", "#inicio"],
              ["Quiénes Somos", "#quienes-somos"],
              ["Servicios", "#productos"],
              ["Obras Destacadas", "#obras"],
              ["Contáctenos", "#contacto"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-[#2d6a2d] transition-all duration-200 inline-block" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-4 h-px bg-[#2d6a2d] inline-block" /> Contacto
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="mailto:Info@fivarsa.com" className="hover:text-white transition-colors">
                Info@fivarsa.com
              </a>
            </li>
            <li>0994148100</li>
            <li>0996767956</li>
            <li className="border-t border-gray-800 pt-3 mt-1 text-gray-600">Guayaquil, Ecuador</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-700">
        &copy; {year} FIVAR S.A &mdash; Todos los derechos reservados
      </div>
    </footer>
  );
}
