import React, { useState } from 'react';
import bgServices from "../../assets/nosotros/bg-services.jpg";

const services = [
  { 
    id: "1.", 
    title: "Protección Patrimonial",
    description: "Brindamos nuestros servicios mediante un proceso ágil y transparente, enfocado en comprender a fondo las necesidades de cada cliente para proteger su patrimonio. Ofrecemos soluciones diseñadas tanto para empresas como para individuos, garantizando respuestas eficientes y adaptadas a cada situación."
  },
  { 
    id: "2.", 
    title: "Vida y Retiro",
    description: "Ayudamos a armar tu planificación personal y familiar mediante un asesoramiento claro y profesional. Analizamos tus objetivos y diseñamos un retiro a medida y/o un seguro de vida acorde, pensado para brindarte seguridad a largo plazo."
  },
  { 
    id: "3.", 
    title: "Medicina Prepaga y Salud",
    description: "Asesoramiento integral para que puedas acceder al plan de salud que mejor se adapte a tu realidad y la de tu familia. Evaluamos coberturas, costos y beneficios para ofrecerte una solución confiable que cuide tu bienestar y el de tu familia."
  },
  { 
    id: "4.", 
    title: "Planificación Financiera",
    description: "Ofrecemos un servicio de asesoría financiera a través de nuestro equipo profesional especializado. Trabajamos junto a vos para diseñar una estrategia financiera personalizada, que te permita alcanzar tus metas con seguridad y tranquilidad."
  }
];

const ServicesGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleCard = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 overflow-hidden min-h-screen">
      {/* CORRECCIÓN PARA MÓVIL: 
        Añadimos 'bg-fixed' para que el fondo no se mueva al expandir las cards.
      */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgServices})` }}
      />
      <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-[2px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-[#1a2e44] text-center mb-16">
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <div 
                key={index}
                onClick={() => toggleCard(index)}
                className={`cursor-pointer transition-all duration-500 ease-in-out rounded-2xl overflow-hidden shadow-xl border border-white/10 flex flex-col
                  ${isExpanded ? 'bg-white' : 'bg-[#6b7280]/90 backdrop-blur-md hover:-translate-y-2'}`}
              >
                <div className={`p-8 min-h-[250px] flex flex-col justify-center transition-colors duration-500
                  ${isExpanded ? 'bg-[#4b5563]' : ''}`}>
                  <span className="text-4xl font-serif text-white/90 mb-4 block">
                    {service.id}
                  </span>
                  <h3 className="text-xl font-medium text-white leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Usamos una transición de altura suave que funciona 
                  bien en dispositivos móviles 
                */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 bg-white">
                    <p className="text-[#4b5563] text-sm leading-relaxed text-pretty">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;