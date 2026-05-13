import React from 'react';
import bgHero from "../../assets/datos-utiles/hero-datos-bg.png";

import SiniestroIcon from "../../assets/datos-utiles/svgs/siniestro.svg";
import ArtIcon       from "../../assets/datos-utiles/svgs/ART.svg";
import PagoIcon      from "../../assets/datos-utiles/svgs/pagopoliza.svg";
import EmergIcon     from "../../assets/datos-utiles/svgs/numemergencia.svg";
import GruaIcon      from "../../assets/datos-utiles/svgs/asistgrua.svg";

const QuickLinks = [
  { icon: SiniestroIcon, label: "Cómo actuar en caso de Siniestro",              sub: "Ver guía paso a paso", href: "#siniestros" },
  { icon: ArtIcon,       label: "¿Qué hacer en caso de accidente laboral (ART)?", sub: "Ver protocolo ART",    href: "#art"        },
  { icon: PagoIcon,      label: "Pago de póliza",                                 sub: "Ver medios de pago",   href: "#pagos"      },
  { icon: EmergIcon,     label: "Números de emergencia",                           sub: "Ver contactos",        href: "#emergencias"},
  { icon: GruaIcon,      label: "Asistencia o Grúa",                              sub: "Ver contactos",        href: "#emergencias"},
];

const UsefulDataHero = () => {
  return (
    <section className="relative">
      <div className="relative h-[450px] md:h-[500px] overflow-hidden">
        <img src={bgHero} className="w-full h-full object-cover scale-105" alt="Información útil" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e44]/90 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full text-white">
            <span className="text-xs uppercase tracking-[0.4em] mb-4 block text-[#72c0c9]">DATOS ÚTILES</span>
            <h1 className="mb-6 max-w-2xl leading-tight font-normal">
              Información útil para actuar rápido cuando más lo necesitás
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-xl font-light">
              Herramientas y contactos directos para gestionar tus seguros de forma ágil.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {QuickLinks.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-gray-100 flex flex-col items-start gap-3 group"
            >
              <div className="w-12 h-12 flex items-center justify-center mb-1 bg-[#72c0c9]/10 rounded-2xl p-2.5">
                <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain" />
              </div>
              <div>
                <p className="text-[13px] font-normal text-[#1a2e44] leading-snug mb-1">{item.label}</p>
                <p className="text-[11px] text-[#72c0c9] font-medium">{item.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsefulDataHero;
