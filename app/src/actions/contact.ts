'use server';

import { mailer } from '@/lib/mailer';

const sanitize = (s: string) => s.replace(/\s+/g, ' ').trim().slice(0, 5000); // evita payloads enormes

type ActionState = { ok: boolean; message: string };

export async function sendContactAction(
  _: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  try {
    // Honeypot anti-spam: si viene con algo, descartamos
    const company = (formData.get('company') || '').toString();
    if (company) {
      return { ok: true, message: 'Gracias, recibido.' }; // Fingimos OK, pero lo ignoramos
    }

    const name = sanitize((formData.get('name') || '').toString());
    const email = sanitize((formData.get('email') || '').toString());
    const message = sanitize((formData.get('message') || '').toString());

    if (!name || !email || !message) {
      return { ok: false, message: 'Completa nombre, email y mensaje.' };
    }

    // Validaciones simples
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { ok: false, message: 'El email no es válido.' };
    }
    if (message.length < 10) {
      return {
        ok: false,
        message: 'Cuéntanos un poco más en el mensaje (mín. 10 caracteres).',
      };
    }

    const transporter = await mailer();

    const to = process.env.CONTACT_TO ?? 'contacto@zentyk.cl';
    const from = process.env.SMTP_FROM ?? `ZENTYK <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      to,
      from,
      subject: `Nuevo contacto desde la web — ${name}`,
      replyTo: email, // para que puedas responder directo al remitente
      text: `
Nombre: ${name}
Email: ${email}

Mensaje:
${message}
`.trim(),
      html: `
  <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;">
    <h2>Nuevo mensaje de contacto desde Página WEB</h2>
    <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Mensaje:</strong></p>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
      message
    )}</pre>
  </div>
      `.trim(),
    });

    return {
      ok: true,
      message:
        'Hemos recibido tu mensaje correctamente y uno de nuestros especialistas se pondrá en contacto contigo a la brevedad.',
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      message:
        'No pudimos enviar el mensaje. Inténtalo nuevamente en unos minutos.',
    };
  }
}

// Pequeña ayuda para escapar HTML en el mail
function escapeHtml(str: string) {
  return str.replace(
    /[&<>"']/g,
    (m) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      }[m]!)
  );
}
