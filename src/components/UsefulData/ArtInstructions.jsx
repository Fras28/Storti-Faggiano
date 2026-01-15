import React from 'react';
import { MessageSquare, FileEdit, Camera, Activity } from 'lucide-react';

const artSteps = [
  {
    icon: <MessageSquare size={24} />,
    title: "Comunicación inmediata",
    desc: "Notificar el siniestro a su Productor-Asesor de Seguros lo antes posible."
  },
  {
    icon: <FileEdit size={24} />,
    title: "Denuncia formal",
    desc: "Formalizar la denuncia por escrito en la Aseguradora dentro de las 72 horas de ocurrido."
  },
  {
    icon: <Camera size={24} />,
    title: "Evidencia fotográfica",
    desc: "Tomar fotografías del accidente sin mover elementos, mostrando claramente los daños."
  },
  {
    icon: <Activity size={24} />,
    title: "Atención médica",
    desc: "Asegurar la atención médica inmediata y seguir las indicaciones del profesional."
  }
];

const ArtInstructions = () => {
  return (
    <section className="py-12 bg-white" id="art">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-yanone text-[#1a2e44] mb-4 uppercase">
          Accidente laboral (ART)
        </h2>
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Sabemos que un accidente laboral requiere acciones específicas. Seguí este protocolo para garantizar la cobertura:
        </p>

        <div className="grid grid-cols-1 gap-4">
          {artSteps.map((step, index) => (
            <div 
              key={index} 
              className="group flex items-start gap-6 p-8 rounded-[32px] bg-[#f8fafc] border border-gray-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-[#72c0c9]/30"
            >
              <div className="mt-1 bg-white p-4 rounded-2xl text-[#72c0c9] shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div>
                <h3 className="text-[#1a2e44] font-bold text-xl mb-2 uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtInstructions;