import React, { useState, useRef } from 'react';
import {
  ChevronDown, MessageCircle, CreditCard, Repeat2, ArrowLeftRight,
  Building2, CheckCircle2, Globe, Landmark, Banknote
} from 'lucide-react';

import FedPat  from "../assets/datos-utiles/Federación-Patronal.png";
import Sancor  from "../assets/datos-utiles/Sancor-Seguros.png";
import Coopera from "../assets/datos-utiles/Cooperación-Seguros.png";
import ProvSeg from "../assets/datos-utiles/Provincia-Seguros.png";
import CNP     from "../assets/datos-utiles/CNP-Seguros.png";

const WHATSAPP_URL = "https://wa.me/5492914555555?text=Hola!%20Quiero%20pagar%20con%20tarjeta%20mi%20p%C3%B3liza.";

const insurerPortals = [
  { name: "Federación Patronal", logo: FedPat,  web: "https://www.federacionpatronal.com.ar" },
  { name: "Sancor Seguros",      logo: Sancor,  web: "https://www.sancorseguros.com.ar" },
  { name: "Cooperación Seguros", logo: Coopera, web: "https://www.cooperacionseguros.com.ar" },
  { name: "Provincia Seguros",   logo: ProvSeg, web: "https://www.provinciaseguros.com.ar" },
  { name: "CNP Seguros",         logo: CNP,     web: "https://www.cnpseguros.com.ar" },
];

const paymentMethods = [
  {
    id: "debito-automatico",
    icon: <Repeat2 size={24} />,
    title: "Débito Automático",
    badge: "Recomendado",
    desc: "Adherite o modificá el débito automático para una o varias pólizas, para que se descuente automáticamente sin que tengas que recordarlo.",
    detail: "Por favor envianos tu número de CBU (22 dígitos) o los datos del frente de tu tarjeta de crédito para que podamos registrarla en el sistema.",
    steps: [
      "Solicitalo a tu asesor con el CBU o CVU de tu cuenta.",
      "Recibirás una confirmación de adhesión por email.",
      "El importe se debitará automáticamente en la fecha de vencimiento.",
    ],
  },
  {
    id: "pagos-online",
    icon: <Globe size={24} />,
    title: "Pagos Online",
    badge: null,
    desc: "Aboná tus pólizas desde portales de pago online: Mercado Pago, Ripsa, Rapipago Online.",
    items: ["Mercado Pago", "Rapipago Online", "RIPSA Online"],
  },
  {
    id: "portal-asegurados",
    icon: <Building2 size={24} />,
    title: "Portal Asegurados",
    badge: null,
    desc: "Pagá desde el portal de asegurados de tu compañía de seguros. Te compartimos los accesos de cada una.",
    portals: true,
  },
  {
    id: "banco-otros-medios",
    icon: <Landmark size={24} />,
    title: "Banco y otros medios",
    badge: null,
    desc: "Podés abonar tus pólizas a través de tu homebanking, Pagos Mis Cuentas o Red Link.",
    items: ["Homebanking", "Pagos Mis Cuentas", "Red Link"],
  },
  {
    id: "tarjeta",
    icon: <CreditCard size={24} />,
    title: "Tarjeta de Débito o Crédito",
    badge: null,
    desc: "Pedinos un link de pago para abonar en el momento con tu tarjeta de crédito o débito.",
    cta: {
      label: "Pagar con tarjeta por WhatsApp",
      icon: <MessageCircle size={16} />,
      href: WHATSAPP_URL,
    },
  },
  {
    id: "efectivo",
    icon: <Banknote size={24} />,
    title: "Pagos Manuales / Efectivo",
    badge: null,
    desc: "Podés abonar tus pólizas en distintas oficinas físicas con el código correspondiente.",
  },
  {
    id: "transferencia",
    icon: <ArrowLeftRight size={24} />,
    title: "Transferencia",
    badge: null,
    desc: "Podés abonar tus pólizas transfiriendo al CBU de la compañía, enviando el comprobante a tu asesor para acreditar el pago.",
    steps: [
      "Solicitá el CBU de la compañía a tu asesor.",
      "Realizá la transferencia desde tu homebanking o app bancaria.",
      "Enviá el comprobante por WhatsApp o email a tu asesor.",
    ],
  },
];

const MethodAccordion = ({ method, open, onToggle, innerRef }) => (
  <div ref={innerRef} className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all scroll-mt-28">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 text-left"
    >
      <div className="flex items-center gap-4">
        <div className="bg-[#72c0c9]/10 p-3 rounded-2xl text-[#72c0c9] flex-shrink-0">{method.icon}</div>
        <div>
          <span className="text-[#1a2e44] font-semibold text-base">{method.title}</span>
          {method.badge && (
            <span className="ml-3 bg-[#72c0c9]/15 text-[#2a6f7a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {method.badge}
            </span>
          )}
        </div>
      </div>
      <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
    </button>

    <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-[1000px]' : 'max-h-0'}`}>
      <div className="px-6 pb-6 space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>

        {method.detail && (
          <div className="bg-gray-50 rounded-2xl p-4">
            <p className="text-gray-600 text-sm leading-relaxed">{method.detail}</p>
          </div>
        )}

        {method.steps && (
          <ul className="space-y-2">
            {method.steps.map((s, j) => (
              <li key={j} className="flex items-start gap-2 text-gray-500 text-sm">
                <span className="bg-[#72c0c9] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{j + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        )}

        {method.items && (
          <ul className="space-y-1">
            {method.items.map((p, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                <CheckCircle2 size={13} className="text-[#72c0c9] flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        )}

        {method.portals && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {insurerPortals.map((c, i) => (
              <a
                key={i}
                href={c.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 bg-gray-50 hover:bg-white border border-gray-100 rounded-2xl p-4 transition-all hover:shadow-sm group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-14 h-8 flex items-center flex-shrink-0">
                    <img src={c.logo} alt={c.name} className="max-h-8 max-w-full object-contain" />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{c.name}</span>
                </div>
                <span className="text-[#72c0c9] text-sm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            ))}
          </div>
        )}

        {method.cta && (
          <a
            href={method.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow"
          >
            {method.cta.icon}
            {method.cta.label}
          </a>
        )}
      </div>
    </div>
  </div>
);

const PortalPagos = () => {
  const [openId, setOpenId] = useState(paymentMethods[0].id);
  const refs = useRef({});

  const goToMethod = (id) => {
    setOpenId(id);
    // Espera a que el acordeón abra para que el scroll quede bien posicionado
    setTimeout(() => {
      refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="bg-[#f9fafb] min-h-screen">

      {/* Hero */}
      <div className="bg-[#1a2e44] py-16 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 block text-[#72c0c9]">DATOS ÚTILES</span>
          <h1 className="font-normal mb-4">Portal de Pagos</h1>
          <p className="text-gray-300 text-lg font-light max-w-xl">
            Conocé todos los medios disponibles para abonar tu póliza de forma rápida y segura.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Botones de acceso rápido por medio de pago */}
        <div>
          <h2 className="font-normal text-[#1a2e44] mb-4">Medios de pago</h2>
          <p className="text-gray-500 text-lg mb-8">
            Elegí cómo querés pagar y mirá el detalle de cada medio.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => goToMethod(method.id)}
                className={`flex flex-col items-center gap-3 p-6 rounded-[2rem] border transition-all text-center
                  ${openId === method.id
                    ? 'bg-[#72c0c9] border-[#72c0c9] text-white shadow-lg'
                    : 'bg-white border-gray-100 text-[#1a2e44] shadow-sm hover:shadow-md hover:-translate-y-0.5'}`}
              >
                <div className={`p-3 rounded-2xl ${openId === method.id ? 'bg-white/20 text-white' : 'bg-[#72c0c9]/10 text-[#72c0c9]'}`}>
                  {method.icon}
                </div>
                <span className="text-xs font-semibold leading-tight">{method.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detalle por medio de pago */}
        <div id="pagos">
          <div className="flex flex-col gap-3">
            {paymentMethods.map((method) => (
              <MethodAccordion
                key={method.id}
                method={method}
                open={openId === method.id}
                onToggle={() => setOpenId(openId === method.id ? null : method.id)}
                innerRef={(el) => { refs.current[method.id] = el; }}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default PortalPagos;
