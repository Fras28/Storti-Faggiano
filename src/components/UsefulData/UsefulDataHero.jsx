import React from 'react';
import { Car, ShieldAlert, CreditCard, PhoneCall, Download } from 'lucide-react';
import bgHero from "../../assets/datos-utiles/hero-datos-bg.png";

const QuickLinks = [
  { icon: <Car />, label: "Siniestros", sub: "Guía paso a paso" },
  { icon: <ShieldAlert />, label: "Accidente ART", sub: "Protocolo" },
  { icon: <CreditCard />, label: "Pagos", sub: "Medios de pago" },
  { icon: <PhoneCall />, label: "Emergencias", sub: "0800 y WhatsApp" },
  { icon: <Download />, label: "Documentación", sub: "Descargar archivos" },
];

const UsefulDataHero = () => {
  return (
    <section className="relative">
      <div className="relative h-[450px] md:h-[500px] overflow-hidden">
        <img src={bgHero} className="w-full h-full object-cover scale-105" alt="Información útil" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/90 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-white">
            <span className="text-xs uppercase tracking-[0.4em] font-bold mb-4 block text-[#72c0c9]">DATOS ÚTILES</span>
            <h1 className="mb-6 max-w-3xl leading-tight ">
              Información clave para actuar con tranquilidad
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl font-light">
              Te acercamos herramientas y contactos directos para que gestiones tus seguros de forma ágil y eficiente.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {QuickLinks.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl shadow-2xl hover:-translate-y-2 transition-all cursor-pointer border border-gray-100 text-center flex flex-col items-center">
              <div className="text-[#72c0c9] mb-4 bg-[#72c0c9]/10 p-4 rounded-2xl">{item.icon}</div>
              <h3 className="text-[13px] font-bold text-[#1a2e44] leading-tight mb-1">{item.label}</h3>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulDataHero;