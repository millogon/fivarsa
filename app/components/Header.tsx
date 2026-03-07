"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes Somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Obras", href: "/obras" },
  { label: "Contacto", href: "/contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
      {/* Top bar */}
      <div className="bg-[#111] text-gray-400 text-xs px-4 py-2 border-b border-[#2d6a2d]/40">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a9a4a] inline-block" />
              0994148100 / 0996767956
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4a9a4a] inline-block" />
              Info@fivarsa.com
            </span>
          </div>
          <span className="text-gray-500">Guayaquil, Ecuador</span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-[#2d6a2d] flex items-center justify-center">
              <span className="text-[#2d6a2d] font-black text-base">F</span>
            </div>
            <div>
              <div className="text-lg font-black text-[#111] tracking-widest leading-none">FIVAR<span className="text-[#2d6a2d]">.</span>SA</div>
              <div className="text-[9px] text-gray-400 tracking-[0.2em] uppercase leading-none mt-0.5">Figuradora de Varillas</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors group ${
                    active ? "text-[#2d6a2d]" : "text-gray-600 hover:text-[#1a1a1a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#2d6a2d] transition-transform origin-left ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contacto"
              className="ml-3 px-5 py-2 border border-[#2d6a2d] text-[#2d6a2d] text-sm font-bold hover:bg-[#2d6a2d] hover:text-white transition-colors"
            >
              Cotizar
            </Link>
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
          <div className="md:hidden border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-6 py-3 text-sm font-semibold border-b border-gray-50 transition-colors ${
                  pathname === link.href ? "text-[#2d6a2d]" : "text-gray-600 hover:text-[#2d6a2d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-3">
              <Link href="/contacto" className="block text-center py-2 border border-[#2d6a2d] text-[#2d6a2d] text-sm font-bold">
                Cotizar
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
