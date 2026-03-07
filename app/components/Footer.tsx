export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-black text-white tracking-widest">FIVAR</span>
            <span className="text-sm text-orange-400 font-semibold">S.A</span>
          </div>
          <p className="text-sm leading-relaxed">
            Especialistas en metalmecánica de precisión con más de 15 años de experiencia en Ecuador.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Navegación</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#inicio" className="hover:text-orange-400 transition-colors">Inicio</a></li>
            <li><a href="#quienes-somos" className="hover:text-orange-400 transition-colors">Quiénes Somos</a></li>
            <li><a href="#productos" className="hover:text-orange-400 transition-colors">Productos</a></li>
            <li><a href="#obras" className="hover:text-orange-400 transition-colors">Obras Destacadas</a></li>
            <li><a href="#contacto" className="hover:text-orange-400 transition-colors">Contáctenos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-orange-400">Email:</span>{" "}
              <a href="mailto:Info@fivarsa.com" className="hover:text-white transition-colors">Info@fivarsa.com</a>
            </li>
            <li>
              <span className="text-orange-400">Tel:</span> 0994148100
            </li>
            <li>
              <span className="text-orange-400">Tel:</span> 0996767956
            </li>
            <li>
              <span className="text-orange-400">Ubicación:</span> Guayaquil, Ecuador
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} FIVAR S.A - Todos los derechos reservados
      </div>
    </footer>
  );
}
