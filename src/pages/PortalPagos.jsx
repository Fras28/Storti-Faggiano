import React, { useState } from 'react';
import { ChevronDown, MessageCircle, CreditCard, Repeat2, ArrowLeftRight, Building, CheckCircle2 } from 'lucide-react';

import FedPat  from "../assets/datos-utiles/Federación-Patronal.png";
import Sancor  from "../assets/datos-utiles/Sancor-Seguros.png";
import Coopera from "../assets/datos-utiles/Cooperación-Seguros.png";
import ProvSeg from "../assets/datos-utiles/Provincia-Seguros.png";
import SanCris from "../assets/datos-utiles/San-Cristobal.png";
import CNP     from "../assets/datos-utiles/CNP-Seguros.png";
import ProvART from "../assets/datos-utiles/Provincia-ART.png";

const WHATSAPP_URL = "https://wa.me/5492914555555?text=Hola!%20Quiero%20pagar%20con%20tarjeta%20mi%20p%C3%B3liza.";

const paymentMethods = [
  {
    icon: <Repeat2 size={24} />,
    title: "Débito Automático",
    badge: "Recomendado",
    desc: "Adhería tu póliza al débito automático en tu cuenta bancaria o tarjeta. Se descuenta automáticamente cada mes sin que tengas que recordarlo.",
    steps: [
      "Solicitalo a tu asesor con el CBU o CVU de tu cuenta.",
      "Recibirás una confirmación de adhesión por email.",
      "El importe se debitará automáticamente en la fecha de vencimiento.",
    ],
    cta: null,
  },
  {
    icon: <ArrowLeftRight size={24} />,
    title: "Transferencia Bancaria",
    badge: null,
    desc: "Realizá una transferencia bancaria al CBU de la compañía. Enviá el comprobante a tu asesor para acreditar el pago.",
    steps: [
      "Solicitá el CBU de la compañía a tu asesor.",
      "Realizá la transferencia desde tu homebanking o app bancaria.",
      "Enviá el comprobante por WhatsApp o email a tu asesor.",
    ],
    cta: null,
  },
  {
    icon: <CreditCard size={24} />,
    title: "Tarjeta de Débito o Crédito",
    badge: null,
    desc: "Pagá con tu tarjeta de débito o crédito contactándote directamente con un asesor.",
    steps: null,
    cta: {
      label: "Pagar con tarjeta por WhatsApp",
      icon: <MessageCircle size={16} />,
      href: WHATSAPP_URL,
    },
  },
];

const companies = [
  {
    name: "Federación Patronal",
    logo: FedPat,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking", "App de la compañía"],
    web: "https://www.federacionpatronal.com.ar",
  },
  {
    name: "Sancor Seguros",
    logo: Sancor,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking", "App Sancor Seguros"],
    web: "https://www.sancorseguros.com.ar",
  },
  {
    name: "Cooperación Seguros",
    logo: Coopera,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking"],
    web: "https://www.cooperacionseguros.com.ar",
  },
  {
    name: "Provincia Seguros",
    logo: ProvSeg,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking Provincia"],
    web: "https://www.provinciaseguros.com.ar",
  },
  {
    name: "San Cristóbal Seguros",
    logo: SanCris,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking", "App San Cristóbal"],
    web: "https://www.sancristobal.com.ar",
  },
  {
    name: "CNP Seguros",
    logo: CNP,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Rapipago", "Pago Fácil", "Homebanking"],
    web: "https://www.cnpseguros.com.ar",
  },
  {
    name: "Provincia ART",
    logo: ProvART,
    cbu: "Consultá el CBU con tu asesor.",
    platforms: ["Homebanking Provincia", "Transferencia bancaria"],
    web: "https://www.provinciaart.com.ar",
  },
];

const CompanyCard = ({ company }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-10 flex items-center">
            <img src={company.logo} alt={company.name} className="max-h-10 max-w-full object-contain" />
          </div>
          <span className="text-[#1a2e44] font-semibold text-base">{company.name}</span>
        </div>
        <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-[#72c0c9] font-semibold text-xs uppercase tracking-wider mb-2">CBU / Datos bancarios</p>
              <p className="text-gray-600 text-sm">{company.cbu}</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-[#72c0c9] font-semibold text-xs uppercase tracking-wider mb-2">Canales de pago</p>
              <ul className="space-y-1">
                {company.platforms.map((p, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                    <CheckCircle2 size={13} className="text-[#72c0c9] flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href={company.web}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#72c0c9] text-sm font-medium hover:underline"
          >
            Ir al portal de la compañía →
          </a>
        </div>
      </div>
    </div>
  );
};

const PortalPagos = () => {
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

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Métodos de pago generales */}
        <div>
          <h2 className="font-normal text-[#1a2e44] mb-10">Medios de pago</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paymentMethods.map((method, i) => (
              <div key={i} className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#72c0c9]/10 p-3 rounded-2xl text-[#72c0c9]">{method.icon}</div>
                  <div>
                    <p className="text-[#1a2e44] font-semibold text-sm">{method.title}</p>
                    {method.badge && (
                      <span className="bg-[#72c0c9]/15 text-[#2a6f7a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                        {method.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{method.desc}</p>
                {method.steps && (
                  <ul className="space-y-2 mt-auto">
                    {method.steps.map((s, j) => (
                      <li key={j} className="flex items-start gap-2 text-gray-500 text-xs">
                        <span className="bg-[#72c0c9] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{j+1}</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                {method.cta && (
                  <a
                    href={method.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow"
                  >
                    {method.cta.icon}
                    {method.cta.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Por compañía */}
        <div id="pagos">
          <h2 className="font-normal text-[#1a2e44] mb-4">Pagos por compañía</h2>
          <p className="text-gray-500 text-lg mb-8">
            Seleccioná tu aseguradora para ver los datos específicos de pago.
          </p>
          <div className="flex flex-col gap-3">
            {companies.map((c, i) => <CompanyCard key={i} company={c} />)}
          </div>
        </div>

      </div>
    </main>
  );
};

export default PortalPagos;
