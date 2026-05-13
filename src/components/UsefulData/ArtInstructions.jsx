import React from 'react';
import { ShieldCheck, MessageSquare, FileEdit, Camera, Activity, CheckCircle2 } from 'lucide-react';

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
    icon: <MessageSquare size={22} />,
    title: "Comunicación inmediata",
    desc: "Notificar el siniestro a tu Productor-Asesor de Seguros lo antes posible.",
  },
  {
    icon: <FileEdit size={22} />,
    title: "Denuncia formal",
    desc: "Formalizar la denuncia por escrito en la Aseguradora dentro de las 72 horas de ocurrido.",
  },
  {
    icon: <Camera size={22} />,
    title: "Evidencia fotográfica",
    desc: "Tomar fotografías del accidente sin mover elementos, mostrando claramente los daños.",
  },
  {
    icon: <Activity size={22} />,
    title: "Atención médica",
    desc: "Asegurar la atención médica inmediata y seguir las indicaciones del profesional.",
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

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
                <p className="text-[#1a2e44] font-semibold text-sm mb-1">{step.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ArtInstructions;
