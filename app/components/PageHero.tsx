import Link from "next/link";

interface PageHeroProps {
  titulo: string;
  descripcion?: string;
  seccion: string;
  video?: string;
}

export default function PageHero({ titulo, descripcion, seccion, video = "/videos/corte-laser.mp4" }: PageHeroProps) {
  return (
    <div className="relative bg-[#111] pt-16 pb-16 border-b border-[#6ab82c]/30 overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Gradiente oscuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#111]/90 via-[#111]/70 to-[#111]/40" />
      {/* Línea verde izquierda */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#6ab82c] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#6ab82c]" />
          <Link href="/" className="text-gray-500 text-xs hover:text-[#6ab82c] transition-colors">Inicio</Link>
          <span className="text-gray-700 text-xs">/</span>
          <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">{seccion}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white">{titulo}</h1>
        {descripcion && (
          <p className="text-gray-400 mt-3 text-sm max-w-xl">{descripcion}</p>
        )}
      </div>
    </div>
  );
}
