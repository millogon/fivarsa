import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const figuradoFotos = [
  "20180814_140823.jpg",
  "20180814_140851.jpg",
  "20181019_083004.jpg",
  "20181109_112804.jpg",
  "20181109_113024.jpg",
  "20190311_144924.jpg",
  "20190311_144938.jpg",
];

const juntasFotos = [
  "135F671D-D4DF-4A26-BFCB-83AC01923F16.jpg",
  "1FBD82B8-B531-4358-8FC0-B72A4DDFC2FD.jpg",
  "45E77C97-E4C9-46E3-9DC8-C10D15C56324.jpg",
  "7E427FD0-B079-4D8C-8F07-D4462D7164E1.jpg",
  "IMG_0401.JPEG","IMG_0402.JPEG","IMG_0407.JPEG","IMG_0408.JPEG",
  "IMG_0730.JPEG","IMG_0731.JPEG","IMG_0737.JPEG","IMG_0740.JPEG",
  "IMG_0753.JPEG","IMG_0805.JPEG","IMG_0810.JPEG","IMG_0823.JPEG",
  "IMG_0824.JPEG","IMG_0995.JPEG","IMG_1069.JPEG","IMG_1193.JPEG",
  "IMG_1197.JPEG","IMG_1198.JPEG","IMG_1214.JPEG","IMG_1312.JPEG",
  "IMG_1313.JPEG","IMG_1728.JPEG","IMG_1729.JPEG","IMG_1731.JPEG",
  "IMG_1733.JPEG","IMG_1739.JPEG","IMG_2230.JPEG","IMG_2231.JPEG",
  "IMG_2252.JPEG","IMG_2253.JPEG","IMG_2307.JPEG","IMG_2348.JPEG",
  "IMG_2944.JPEG","IMG_2949.JPEG","IMG_2952.JPEG","IMG_2956.JPEG",
  "IMG_3122.JPEG","IMG_3123.JPEG","IMG_3125.JPEG","IMG_3127.JPEG",
  "IMG_3157.JPEG","IMG_3170.JPEG",
  "wp_01.jpeg","wp_02.jpeg","wp_03.jpeg","wp_04.jpeg","wp_05.jpeg",
  "wp_06.jpeg","wp_07.jpeg","wp_08.jpeg","wp_09.jpeg","wp_10.jpeg",
  "wp_11.jpeg","wp_12.jpeg","wp_13.jpeg","wp_14.jpeg","wp_15.jpeg",
  "wp_16.jpeg","wp_17.jpeg","wp_18.jpeg","wp_19.jpeg","wp_20.jpeg",
  "wp_21.jpeg","wp_22.jpeg","wp_23.jpeg","wp_24.jpeg","wp_25.jpeg",
  "wp_26.jpeg","wp_27.jpeg","wp_28.jpeg",
];

function GaleriaSeccion({
  titulo,
  subtitulo,
  numero,
  fotos,
  carpeta,
}: {
  titulo: string;
  subtitulo: string;
  numero: string;
  fotos: string[];
  carpeta: string;
}) {
  return (
    <section className="py-20 border-b border-gray-100 last:border-0">
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado sección */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 border-2 border-[#6ab82c] flex items-center justify-center shrink-0">
            <span className="text-[#6ab82c] font-black text-sm">{numero}</span>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-[#111]">{titulo}</h2>
            <p className="text-gray-500 text-sm mt-0.5">{subtitulo}</p>
          </div>
          <div className="ml-auto hidden md:block">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {fotos.length} fotos
            </span>
          </div>
        </div>

        {/* Grid fotos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {fotos.map((foto, i) => (
            <div
              key={foto}
              className="relative aspect-square overflow-hidden bg-gray-100 group"
            >
              <Image
                src={`/portfolio/${carpeta}/${foto}`}
                alt={`${titulo} ${i + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  return (
    <>
      <Header />

      <div className="bg-[#111] pt-28 pb-16 border-b border-[#6ab82c]/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <Link href="/" className="text-gray-600 text-xs hover:text-[#6ab82c] transition-colors">Inicio</Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Portfolio</h1>
          <p className="text-gray-500 mt-3 text-sm max-w-xl">
            Trabajos realizados por FIVAR S.A en metalmecánica de precisión a nivel nacional.
          </p>
        </div>
      </div>

      {/* Índice rápido */}
      <div className="bg-white border-b border-gray-100 sticky top-[88px] z-40">
        <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          <a href="#figurado"
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap text-gray-500 hover:text-[#6ab82c] border border-gray-200 hover:border-[#6ab82c] transition-colors"
          >
            Figurado de Varillas
          </a>
          <a href="#juntas"
            className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest whitespace-nowrap text-gray-500 hover:text-[#6ab82c] border border-gray-200 hover:border-[#6ab82c] transition-colors"
          >
            Juntas Pilote
          </a>
        </div>
      </div>

      <div className="bg-[#f8f8f8]">
        <div id="figurado">
          <GaleriaSeccion
            numero="01"
            titulo="Figurado de Varillas"
            subtitulo="Corte y figurado de acero según planos — diámetros 8mm a 32mm"
            fotos={figuradoFotos}
            carpeta="figurado-de-varillas"
          />
        </div>
        <div id="juntas">
          <GaleriaSeccion
            numero="02"
            titulo="Juntas Pilote"
            subtitulo="Juntas rápidas LEIMET para pilotes de hormigón prefabricado"
            fotos={juntasFotos}
            carpeta="juntas-pilote"
          />
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#6ab82c] to-transparent" />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-black text-[#111] mb-1">¿Su proyecto puede ser el próximo?</h3>
            <p className="text-gray-500 text-sm">Trabajemos juntos en su próxima obra.</p>
          </div>
          <Link
            href="/contacto"
            className="px-10 py-4 bg-[#111] text-white font-bold text-sm uppercase tracking-widest border-b-[3px] border-[#6ab82c] hover:bg-[#222] transition-colors shrink-0"
          >
            Contáctenos
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
