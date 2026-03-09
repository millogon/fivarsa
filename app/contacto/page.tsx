"use client";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";

const info = [
  { label: "Email", value: "Info@fivarsa.com", href: "mailto:Info@fivarsa.com" },
  { label: "Teléfono", value: "0994148100", href: "tel:0994148100" },
  { label: "Teléfono", value: "0996767956", href: "tel:0996767956" },
  { label: "Ubicación", value: "Guayaquil, Ecuador", href: undefined },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEstado("ok");
        setForm({ nombre: "", email: "", telefono: "", asunto: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  return (
    <>
      <Header />

      <PageHero
        seccion="Contacto"
        titulo="Contáctenos"
        video="/videos/corte-laser.mp4"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          {/* Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#6ab82c]" />
              <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Información</span>
            </div>
            <h2 className="text-2xl font-black text-[#111] mb-8">Estamos listos para atender su proyecto</h2>
            <div className="space-y-6">
              {info.map((item, i) => (
                <div key={i} className="border-l-2 border-[#6ab82c] pl-4">
                  <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-[#111] font-semibold text-sm hover:text-[#6ab82c] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-[#111] font-semibold text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 p-6 bg-[#f8f8f8] border-l-2 border-[#6ab82c]">
              <p className="text-sm text-gray-600 leading-relaxed">
                Nuestro equipo le atenderá a la brevedad posible para brindarle una cotización personalizada según las necesidades de su proyecto.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#6ab82c]" />
              <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Formulario</span>
            </div>
            <h2 className="text-2xl font-black text-[#111] mb-8">Envíenos un mensaje</h2>

            {estado === "ok" ? (
              <div className="border border-[#6ab82c] bg-[#6ab82c]/5 p-8 text-center">
                <div className="text-[#6ab82c] font-black text-lg mb-2">¡Mensaje enviado!</div>
                <p className="text-gray-500 text-sm">Nos pondremos en contacto a la brevedad.</p>
                <button onClick={() => setEstado("idle")} className="mt-4 text-xs font-bold text-gray-400 hover:text-[#6ab82c] uppercase tracking-widest transition-colors">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Nombre completo *</label>
                  <input name="nombre" value={form.nombre} onChange={handleChange} required type="text" placeholder="Ej. Juan Pérez"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#6ab82c] transition-colors" />
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Correo electrónico *</label>
                  <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="correo@empresa.com"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#6ab82c] transition-colors" />
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Teléfono</label>
                  <input name="telefono" value={form.telefono} onChange={handleChange} type="tel" placeholder="09XXXXXXXX"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#6ab82c] transition-colors" />
                </div>
                <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Asunto</label>
                  <input name="asunto" value={form.asunto} onChange={handleChange} type="text" placeholder="Ej. Cotización figurado de varillas"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#6ab82c] transition-colors" />
                </div>
                <div className="col-span-2 flex flex-col gap-1">
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Mensaje *</label>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} required placeholder="Cuéntenos sobre su proyecto..." rows={5}
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#6ab82c] transition-colors resize-none" />
                </div>

                {estado === "error" && (
                  <p className="col-span-2 text-red-500 text-sm">Hubo un error al enviar. Intente de nuevo.</p>
                )}

                <button type="submit" disabled={estado === "enviando"}
                  className="col-span-2 bg-[#111] hover:bg-[#222] disabled:bg-gray-400 text-white font-bold py-4 text-sm uppercase tracking-widest transition-colors border-b-2 border-[#6ab82c]">
                  {estado === "enviando" ? "Enviando..." : "Enviar Mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-[#f8f8f8] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#6ab82c]" />
            <span className="text-[#6ab82c] text-xs font-bold uppercase tracking-widest">Ubicación</span>
          </div>
          <div className="w-full h-[450px] border border-gray-200 overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=FIVAR+SA+Guayaquil+Ecuador&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
