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
  const [expandedId, setExpandedId] = useState(null);

  const toggleService = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section 
      className="relative py-24 bg-cover bg-center bg-no-repeat min-h-[1100px] md:min-h-[850px]"
      style={{ 
        backgroundImage: `url(${bgServices})`,
        backgroundAttachment: 'scroll' // Evita problemas de renderizado en navegadores móviles
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-center mb-16 text-white drop-shadow-md">
          Nuestros Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            
            return (
              <div 
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`cursor-pointer transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col
                  ${isExpanded ? 'bg-white' : 'bg-[#6b7280]/90 backdrop-blur-md'}`}
              >
                {/* Encabezado */}
                <div className={`p-8 min-h-[180px] md:min-h-[220px] flex flex-col justify-center transition-colors duration-500 
                  ${isExpanded ? 'bg-[#4b5563]' : ''}`}>
                  <span className="h3 font-serif text-white/90 mb-2 md:mb-4 block">{service.id}</span>
                  <h3 className="text-white text-xl md:text-2xl leading-tight">{service.title}</h3>
                </div>

                {/* Contenido Desplegable */}
                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 bg-white">
                    <p className="body text-gray-600 text-sm leading-relaxed">
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