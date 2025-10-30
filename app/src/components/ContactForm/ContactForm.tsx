'use client';

import { useActionState, useEffect, useState } from 'react';
import { sendContactAction } from '@/actions/contact';

type ActionState = { ok: boolean; message: string };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    sendContactAction,
    { ok: false, message: '' }
  );

  const [justSubmitted, setJustSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Validación dinámica
  const validateForm = () => {
    const name = (
      document.querySelector<HTMLInputElement>('input[name="name"]')?.value ||
      ''
    ).trim();
    const email = (
      document.querySelector<HTMLInputElement>('input[name="email"]')?.value ||
      ''
    ).trim();
    const message = (
      document.querySelector<HTMLTextAreaElement>('textarea[name="message"]')
        ?.value || ''
    ).trim();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const messageValid = message.length >= 10;

    setIsFormValid(!!name && emailValid && messageValid);
  };

  // Limpiar formulario tras éxito
  useEffect(() => {
    if (state?.ok) {
      setJustSubmitted(true);
      const form = document.getElementById(
        'contact-form'
      ) as HTMLFormElement | null;
      form?.reset();
      setIsFormValid(false); // vuelve a bloquear el botón
      const timer = setTimeout(() => setJustSubmitted(false), 6000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <section id="contactId" className="max-w-7xl mx-auto my-20 px-6">
      <form
        id="contact-form"
        action={formAction}
        className="flex flex-col gap-4"
        onChange={validateForm} // valida al cambiar cualquier campo
      >
        {/* Honeypot (anti spam) */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="p-3 rounded-lg border"
          required
          maxLength={120}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 rounded-lg border"
          required
          inputMode="email"
        />

        <textarea
          name="message"
          placeholder="Mensaje (mínimo 10 caracteres)"
          className="p-3 rounded-lg border min-h-40"
          required
          maxLength={5000}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={!isFormValid || isPending}
            className={`
              relative inline-flex items-center justify-center
              px-8 py-2.5 font-semibold rounded-full transition-all duration-300
              ${
                isFormValid
                  ? 'bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white shadow-md hover:scale-105 hover:shadow-lg'
                  : 'bg-gray-300 text-gray-600 cursor-not-allowed'
              }
            `}
          >
            {isPending ? 'Enviando...' : 'Enviar'}
          </button>
        </div>

        {state?.message && (
          <p
            className={`text-sm mt-2 ${
              state.ok ? 'text-green-700' : 'text-red-700'
            }`}
            role={state.ok ? 'status' : 'alert'}
          >
            {state.message}
          </p>
        )}
      </form>
    </section>
  );
}
