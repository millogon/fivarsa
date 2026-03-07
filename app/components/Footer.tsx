export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-[#2d6a2d] flex items-center justify-center rounded">
              <span className="text-white font-black text-sm">F</span>
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-widest">FIVAR</span>
              <span className="text-xs font-semibold text-[#5cb85c] ml-1">S.A</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            Especialistas en metalmecánica de precisión con más de 15 años de experiencia en Ecuador.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest border-b border-gray-700 pb-2">Navegación</h4>
          <ul className="space-y-2 text-sm">
            {["Inicio", "Quiénes Somos", "Servicios", "Obras Destacadas", "Contáctenos"].map((item, i) => (
              <li key={i}>
                <a
                  href={["#inicio", "#quienes-somos", "#productos", "#obras", "#contacto"][i]}
                  className="hover:text-[#5cb85c] transition-colors flex items-center gap-2"
                >
                  <span className="text-[#2d6a2d]">›</span> {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest border-b border-gray-700 pb-2">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-[#5cb85c] mt-0.5">✉</span>
              <a href="mailto:Info@fivarsa.com" className="hover:text-white transition-colors">Info@fivarsa.com</a>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5cb85c] mt-0.5">📞</span>
              <span>0994148100 / 0996767956</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#5cb85c] mt-0.5">📍</span>
              <span>Guayaquil, Ecuador</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} FIVAR S.A - Todos los derechos reservados
      </div>
    </footer>
  );
}
