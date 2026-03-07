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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : ""}`}>
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
                    ${active
                      ? "text-[#6ab82c]"
                      : "text-gray-600 hover:text-[#6ab82c]"
                    }`}
                >
                  <span className="transition-transform duration-250 ease-out group-hover:-translate-y-0.5">
                    {link.label}
                  </span>
                  {/* Bottom indicator — crece desde el centro */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] bg-[#6ab82c] rounded-full transition-all duration-250 ease-out
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
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
          </div>
        )}
      </div>
    </header>
  );
}
