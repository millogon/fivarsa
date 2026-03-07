"use client";
import { useState } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes Somos", href: "#quienes-somos" },
  { label: "Servicios", href: "#productos" },
  { label: "Obras Destacadas", href: "#obras" },
  { label: "Contáctenos", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Top bar */}
      <div className="bg-[#1a1a1a] text-gray-300 text-xs px-4 py-2">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex gap-6">
            <span>📞 0994148100 / 0996767956</span>
            <span>✉ Info@fivarsa.com</span>
          </div>
          <span>Guayaquil, Ecuador</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#2d6a2d] flex items-center justify-center rounded">
              <span className="text-white font-black text-sm">F</span>
            </div>
            <div>
              <span className="text-xl font-black text-[#1a1a1a] tracking-widest">FIVAR</span>
              <span className="text-xs font-semibold text-[#2d6a2d] ml-1">S.A</span>
              <div className="text-[10px] text-gray-500 leading-none tracking-wider">FIGURADORA DE VARILLAS</div>
            </div>
          </a>

          <nav className="hidden md:flex gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-[#333] hover:text-[#2d6a2d] hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-[#333] focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-gray-100 px-4 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm font-semibold text-[#333] hover:text-[#2d6a2d] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
