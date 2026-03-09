import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nombre, email, telefono, asunto, mensaje } = await req.json();

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Formulario FIVAR S.A <onboarding@resend.dev>",
      to: "Info@fivarsa.com",
      replyTo: email,
      subject: asunto || `Nuevo mensaje de ${nombre}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #111; padding: 24px; border-bottom: 3px solid #6ab82c;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje desde fivarsa.com</h2>
          </div>
          <div style="padding: 24px; background: #f8f8f8; border: 1px solid #e5e5e5;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 120px;">Nombre</td><td style="padding: 8px 0; font-weight: bold; color: #111;">${nombre}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td><td style="padding: 8px 0; font-weight: bold; color: #111;"><a href="mailto:${email}" style="color: #6ab82c;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Teléfono</td><td style="padding: 8px 0; font-weight: bold; color: #111;">${telefono || "No indicado"}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Asunto</td><td style="padding: 8px 0; font-weight: bold; color: #111;">${asunto || "Sin asunto"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Mensaje</p>
              <p style="color: #111; font-size: 15px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${mensaje}</p>
            </div>
          </div>
          <div style="padding: 16px 24px; background: #111; text-align: center;">
            <p style="color: #666; font-size: 11px; margin: 0;">FIVAR S.A · Guayaquil, Ecuador · fivarsa.com</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
