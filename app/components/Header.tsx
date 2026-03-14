"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Productos", href: "/productos" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Eventos", href: "/eventos" },
];

const proyectosDestacados = [
  { id: 1, slug: "juntas-leimet", label: "Juntas rápidas (LEIMET)" },
  { id: 2, slug: "azuches-metalicos", label: "Azuches metálicos para pilotes" },
  { id: 3, slug: "ocean-club", label: "Ocean Club – Estructura metálica" },
  { id: 4, slug: "sports-garden", label: "Estructura metálica – Sports Garden" },
  { id: 5, slug: "sky-building", label: "Aisladores sísmicos – Sky Building" },
  { id: 6, slug: "business-plaza", label: "Estructura metálica – Business Plaza" },
  { id: 7, slug: "proyecto-neptuno", label: "Proyecto Neptuno – Tubería" },
  { id: 8, slug: "microtuneleadora", label: "Soporte para microtuneleadora" },
  { id: 9, slug: "boyas-mar", label: "Estructura para Boyas 600–800mm" },
  { id: 10, slug: "soportes-tuberia", label: "Soportes metálicos – Línea impulsión" },
  { id: 11, slug: "estructuras-cercha", label: "Estructuras tipo cercha" },
  { id: 12, slug: "planta-tratamiento", label: "Planta de tratamiento – Las Esclusas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isProyectosActive = pathname === "/proyectos-destacados";

  return (
    <header className={`relative w-full z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#111] text-gray-400 text-xs px-4 py-2 border-b border-[#6ab82c]/30">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c] inline-block" />
              0994148100 / 0996767956
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c] inline-block" />
              Info@fivarsa.com
            </span>
          </div>
          <span className="text-gray-500">Guayaquil, Ecuador</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/logo.gif"
              alt="FIVAR S.A"
              width={160}
              height={60}
              className="h-14 w-auto object-contain"
              unoptimized
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center h-full">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex items-center h-full px-4 py-5 text-sm font-semibold transition-all duration-250 ease-out group
                    ${active ? "text-[#6ab82c]" : "text-gray-600 hover:text-[#6ab82c]"}`}
                >
                  <span className="transition-transform duration-200 ease-out group-hover:scale-105 inline-block">
                    {link.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] bg-[#6ab82c] rounded-full transition-all duration-200 ease-out
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}

            {/* Dropdown Proyectos Destacados — antes de Contacto */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/proyectos-destacados"
                className={`relative flex items-center gap-1 h-full px-4 py-5 text-sm font-semibold transition-all duration-250 ease-out
                  ${isProyectosActive ? "text-[#6ab82c]" : "text-gray-600 hover:text-[#6ab82c]"}`}
              >
                <span>Proyectos Destacados</span>
                <svg className="w-3.5 h-3.5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#6ab82c] rounded-full transition-all duration-250 ease-out
                    ${isProyectosActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white border border-gray-200 shadow-xl z-50">
                  {proyectosDestacados.map((p) => (
                    <Link
                      key={p.id}
                      href={`/proyectos-destacados#${p.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:text-[#6ab82c] hover:bg-gray-50 border-b border-gray-50 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="text-[#6ab82c] font-black text-xs w-5 shrink-0">{String(p.id).padStart(2, "0")}</span>
                      <span className="font-medium">{p.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contacto — último botón */}
            {(() => {
              const active = pathname === "/contacto";
              return (
                <Link href="/contacto"
                  className={`relative flex items-center h-full px-4 py-5 text-sm font-semibold transition-all duration-250 ease-out group
                    ${active ? "text-[#6ab82c]" : "text-gray-600 hover:text-[#6ab82c]"}`}
                >
                  <span className="transition-transform duration-200 ease-out group-hover:scale-105 inline-block">Contacto</span>
                  <span className={`absolute bottom-0 left-0 h-[3px] bg-[#6ab82c] rounded-full transition-all duration-200 ease-out
                    ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              );
            })()}
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden text-[#333] focus:outline-none p-2"
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

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3.5 text-sm font-semibold border-b border-gray-50 transition-colors
                    ${active ? "text-[#6ab82c] bg-[#6ab82c]/5 border-l-4 border-l-[#6ab82c]" : "text-gray-600 hover:text-[#6ab82c] hover:bg-gray-50"}`}
                >
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c]" />}
                  {link.label}
                </Link>
              );
            })}
            {/* Mobile - Proyectos Destacados */}
            <Link
              href="/proyectos-destacados"
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-6 py-3.5 text-sm font-semibold border-b border-gray-50 transition-colors
                ${isProyectosActive ? "text-[#6ab82c] bg-[#6ab82c]/5 border-l-4 border-l-[#6ab82c]" : "text-gray-600 hover:text-[#6ab82c] hover:bg-gray-50"}`}
            >
              {isProyectosActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6ab82c]" />}
              Proyectos Destacados
            </Link>
            {proyectosDestacados.map((p) => (
              <Link
                key={p.id}
                href={`/proyectos-destacados#${p.slug}`}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 pl-10 pr-6 py-2.5 text-xs font-semibold border-b border-gray-50 text-gray-500 hover:text-[#6ab82c] hover:bg-gray-50 transition-colors"
              >
                <span className="text-[#6ab82c] font-black">{String(p.id).padStart(2, "0")}</span>
                {p.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
