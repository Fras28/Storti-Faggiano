import React from 'react';
import { Car, ShieldAlert, CreditCard, PhoneCall, Download } from 'lucide-react';
import bgHero from "../../assets/datos-utiles/hero-datos-bg.png";

const QuickLinks = [
  { icon: <Car />, label: "Cómo actuar en caso de Siniestro", sub: "Ver guía paso a paso" },
  { icon: <ShieldAlert />, label: "¿Qué hacer en caso de accidente laboral (ART)?", sub: "Ver protocolo ART" },
  { icon: <CreditCard />, label: "Pago de póliza", sub: "Ver medios de pago" },
  { icon: <PhoneCall />, label: "Números de emergencia", sub: "Ver contactos" },
  { icon: <Download />, label: "Descargar documentación", sub: "Descargar archivos" },
];

const UsefulDataHero = () => {
  return (
    <section className="relative">
      {/* Banner Principal */}
      <div className="relative h-[400px] overflow-hidden">
        <img src={bgHero} className="w-full h-full object-cover" alt="Información útil" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-white">
            <span className="text-xs uppercase tracking-widest font-bold mb-4 block">DATOS ÚTILES</span>
            <h1 className="text-4xl md:text-6xl font-serif mb-4 max-w-2xl">
              Información útil para actuar rápido cuando más lo necesitás
            </h1>
            <p className="text-lg text-gray-200 max-w-xl">
              Te acercamos información útil y de contacto para que puedas realizar las gestiones correspondientes de la forma más ágil.
            </p>
          </div>
        </div>
      </div>

      {/* Tarjetas de Acceso Rápido */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {QuickLinks.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl hover:-translate-y-1 transition-all cursor-pointer border border-gray-50 text-center flex flex-col items-center">
              <div className="text-sf-teal mb-4 bg-sf-teal/10 p-3 rounded-xl">{item.icon}</div>
              <h3 className="text-[13px] font-bold text-gray-800 leading-tight mb-2">{item.label}</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulDataHero;