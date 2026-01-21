import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Reemplaza estos 3 IDs con los que te da EmailJS al registrarte (es gratis)
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset();
        setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
        setIsSending(false);
        alert("Hubo un error al enviar el mensaje, por favor intenta nuevamente.");
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Información de Contacto Izquierda */}
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-sf-teal font-bold mb-4 block">CONTACTO</span>
          <h2 className="text-[#1a2e44] mb-8">Estamos para ayudarte</h2>
          <p className="text-gray-600 mb-12">
            Comunicate con nosotros por cualquiera de nuestros canales de atención o completá el formulario y un asesor se pondrá en contacto a la brevedad.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="bg-sf-teal/10 p-4 rounded-2xl text-sf-teal"><Phone /></div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Llamanos</p>
                <p className="text-xl font-bold text-[#1a2e44]">+54 291 4553332</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-sf-teal/10 p-4 rounded-2xl text-sf-teal"><Mail /></div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Email</p>
                <p className="text-xl font-bold text-[#1a2e44]">info@sfasesores.com.ar</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="bg-sf-teal/10 p-4 rounded-2xl text-sf-teal"><MapPin /></div>
              <div>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">Oficina</p>
                <p className="text-xl font-bold text-[#1a2e44]">Santa Fe 102, Bahía Blanca</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario Derecha */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden">
          {isSent && (
            <div className="absolute inset-0 bg-sf-teal flex flex-col items-center justify-center text-white z-20 transition-all">
              <CheckCircle2 size={60} className="mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold">¡Mensaje Enviado!</h3>
              <p>Nos contactaremos pronto.</p>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Nombre Completo</label>
                <input type="text" name="user_name" required className="w-full px-5 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-sf-teal outline-none transition-all" placeholder="Juan Pérez" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-2">Teléfono</label>
                <input type="tel" name="user_phone" required className="w-full px-5 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-sf-teal outline-none transition-all" placeholder="291 1234567" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Email</label>
              <input type="email" name="user_email" required className="w-full px-5 py-3 rounded-full border border-gray-200 focus:ring-2 focus:ring-sf-teal outline-none transition-all" placeholder="juan@email.com" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-2">Mensaje o Consulta</label>
              <textarea name="message" required rows="4" className="w-full px-5 py-4 rounded-3xl border border-gray-200 focus:ring-2 focus:ring-sf-teal outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarte?"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSending}
              className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all ${isSending ? 'bg-gray-400' : 'bg-sf-teal hover:bg-[#1a2e44] text-white shadow-lg active:scale-95'}`}
            >
              {isSending ? 'Enviando...' : 'Enviar Mensaje'}
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;