import React from 'react';
import { MessageSquare, FileEdit, Camera, Activity } from 'lucide-react';

const artSteps = [
  {
    icon: <MessageSquare size={20} />,
    title: "Comunicación inmediata",
    desc: "Notificar el siniestro a su Productor-Asesor de Seguros lo antes posible."
  },
  {
    icon: <FileEdit size={20} />,
    title: "Denuncia formal",
    desc: "Formalizar la denuncia por escrito en la Aseguradora dentro de las 72 horas de ocurrido."
  },
  {
    icon: <Camera size={20} />,
    title: "Evidencia fotográfica",
    desc: "Tomar fotografías del accidente sin mover elementos, mostrando claramente los daños."
  },
  {
    icon: <Activity size={20} />,
    title: "Atención médica",
    desc: "Asegurar la atención médica inmediata y seguir las indicaciones del profesional."
  }
];

const ArtInstructions = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-[#1a2e44] mb-4">
          ¿Qué hacer en caso de accidente laboral (ART)?
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          Sabemos que un accidente laboral requiere acciones específicas. Por eso te dejamos los pasos clave que debés seguir.
        </p>

        <div className="space-y-4">
          {artSteps.map((step, index) => (
            <div 
              key={index} 
              className="flex items-start gap-5 p-6 rounded-2xl bg-[#f8fafc] border border-gray-100 transition-hover duration-300 hover:shadow-md"
            >
              <div className="mt-1 bg-white p-3 rounded-xl text-sf-teal shadow-sm flex-shrink-0">
                {step.icon}
              </div>
              <div>
                <h3 className="text-gray-800 font-bold text-lg mb-1">
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