import React from 'react';
import { ShieldCheck, ClipboardList, Phone, Building2, UserCheck, CheckCircle2, Download, MapPin, HelpCircle, ExternalLink } from 'lucide-react';

import FedPatLogo from "../../assets/datos-utiles/Federación-Patronal.png";

const coberturaItems = [
  "Atención médica, farmacéutica, prótesis y ortopedia.",
  "Rehabilitación y recalificación profesional.",
  "Prestaciones dinerarias por incapacidad laboral temporaria (ILT).",
  "Indemnización por incapacidad laboral permanente (ILP).",
  "Prestaciones por gran invalidez.",
  "Indemnización por fallecimiento y gastos de sepelio.",
];

const protocoloSteps = [
  {
    icon: <UserCheck size={22} />,
    title: "Realizá la denuncia",
    desc: "El empleado o empleador deberá realizar la denuncia ante la ART. Recordá que debe hacerse dentro de las 24 horas de ocurrido el accidente.",
    highlight: "Dentro de las 24 hs",
  },
  {
    icon: <MapPin size={22} />,
    title: "Centro de atención",
    desc: "El centro de atención le indicará a qué prestador médico debe presentarse y cuándo.",
    highlight: null,
  },
  {
    icon: <Building2 size={22} />,
    title: "Formulá la denuncia ante la compañía",
    desc: "Formalizá la denuncia en la compañía aseguradora correspondiente.",
    highlight: null,
  },
  {
    icon: <Phone size={22} />,
    title: "Centro de atención permanente",
    desc: "En caso de emergencias y denuncias, llamá al centro de atención permanente.",
    highlight: "0800 222 2322",
  },
];

const artCompanies = [
  {
    name: "Federación Patronal",
    logo: FedPatLogo,
    actions: [
      {
        label: "Descargar formulario de denuncia",
        icon: <Download size={14} />,
        href: "https://www.fedpat.com.ar/wp-content/uploads/2024/01/Form.-0070-ART-Denuncia-de-Accidente-Dic23.pdf",
      },
      {
        label: "Centros de atención médica",
        icon: <MapPin size={14} />,
        href: "https://online.fedpat.com.ar/Mapas/prestadoresART.xhtml",
      },
      {
        label: "¿Cómo actuar ante un accidente?",
        icon: <HelpCircle size={14} />,
        href: "https://www.fedpat.com.ar/wp-content/uploads/2026/04/1106-80-Como-actuar-en-accidente-ART-ABR-26.pdf",
      },
    ],
    extra: null,
  },
  {
    name: "Prevención ART",
    logo: null,
    actions: [
      {
        label: "¿Qué hacer en caso de accidente?",
        icon: <HelpCircle size={14} />,
        href: "https://www.prevencionart.com.ar/empleador-cliente/que-hacer-en-caso-de-accidente",
      },
      {
        label: "Centros de atención médica",
        icon: <MapPin size={14} />,
        href: "https://www.prevencionart.com.ar/empleador-cliente/red-de-prestadores",
      },
    ],
    extra: {
      label: "Podés gestionar tu trámite a través de la autogestión Prevenet",
      href: "https://login.gruposancorseguros.com.ar/u/login/identifier?state=hKFo2SBMUEJGOGMtdzE3YW1oRnhkLVI1cnl3MWdwRzd4aDdIeKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDZYSEgyZG8wU0lZQ1VOTmdEQ3Q4MzNvMmFGczhhd2E1o2NpZNkgdHlSN3E1Q3VXOEVoWkZKNlRTY2FXVEVLc3gySWp6bVI",
      linkLabel: "Ingresar a Prevenet →",
    },
  },
];

const ArtInstructions = () => {
  return (
    <section className="bg-white" id="art">
      <h2 className="font-normal text-[#1a2e44] mb-4">
        ¿Qué hacer en caso de accidente laboral (ART)?
      </h2>
      <p className="text-gray-500 text-lg mb-12">
        Sabemos que un accidente laboral requiere acciones específicas. Seguí este protocolo para garantizar la cobertura.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">

        {/* Cobertura General */}
        <div className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-[#72c0c9]">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-[#1a2e44] font-semibold text-lg">Cobertura General</h3>
          </div>
          <ul className="space-y-3">
            {coberturaItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-snug">
                <CheckCircle2 size={15} className="text-[#72c0c9] flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Protocolo ART */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#1a2e44] font-semibold text-lg mb-2">Protocolo ART</h3>
          {protocoloSteps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md transition-all group"
            >
              <div className="bg-white p-3 rounded-2xl text-[#72c0c9] shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform">
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <p className="text-[#1a2e44] font-semibold text-sm">{step.title}</p>
                  {step.highlight && (
                    <span className="bg-[#72c0c9]/15 text-[#2a6f7a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {step.highlight}
                    </span>
                  )}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compañías ART */}
      <div className="space-y-6">
        <h3 className="text-[#1a2e44] font-semibold text-lg">Recursos por compañía</h3>
        {artCompanies.map((company, i) => (
          <div key={i} className="bg-gray-50 rounded-[2rem] border border-gray-100 p-8">
            {/* Header compañía */}
            <div className="flex items-center gap-4 mb-6">
              {company.logo ? (
                <img src={company.logo} alt={company.name} className="h-10 object-contain" />
              ) : (
                <div className="h-10 flex items-center">
                  <span className="text-[#1a2e44] font-bold text-lg">{company.name}</span>
                </div>
              )}
              {company.logo && (
                <span className="text-[#1a2e44] font-semibold text-base">{company.name}</span>
              )}
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-3">
              {company.actions.map((action, j) => (
                <a
                  key={j}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white border border-gray-200 text-[#1a2e44] hover:bg-[#72c0c9] hover:text-white hover:border-[#72c0c9] px-5 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all shadow-sm"
                >
                  {action.icon}
                  {action.label}
                </a>
              ))}
            </div>

            {/* Extra (Prevenet) */}
            {company.extra && (
              <div className="mt-5 pt-5 border-t border-gray-200 flex items-center justify-between gap-4 flex-wrap">
                <p className="text-gray-500 text-sm">{company.extra.label}</p>
                <a
                  href={company.extra.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#72c0c9] font-semibold text-sm hover:underline flex-shrink-0"
                >
                  <ExternalLink size={14} />
                  {company.extra.linkLabel}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtInstructions;
