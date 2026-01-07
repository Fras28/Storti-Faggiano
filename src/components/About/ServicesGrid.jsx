import React from 'react';
import bgServices from "../../assets/nosotros/bg-services.jpg"; // La imagen de fondo de las manos firmando

const services = [
  { id: "1.", title: "Protección Patrimonial" },
  { id: "2.", title: "Vida y Retiro" },
  { id: "3.", title: "Medicina Prepaga y Salud" },
  { id: "4.", title: "Planificación Financiera" }
];

const ServicesGrid = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Imagen de fondo con overlay para legibilidad */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgServices})` }}
      />
      <div className="absolute inset-0 z-10 bg-white/40 backdrop-blur-[2px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-serif text-[#1a2e44] text-center mb-16">
          Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#6b7280]/90 backdrop-blur-md p-8 rounded-2xl min-h-[280px] flex flex-col justify-end shadow-xl border border-white/10 hover:-translate-y-2 transition-transform duration-300"
            >
              <span className="text-4xl font-serif text-white/90 mb-4 block">
                {service.id}
              </span>
              <h3 className="text-xl font-medium text-white leading-tight">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;