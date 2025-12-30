import React from 'react';

const benefits = [
  {
    title: "Capacitación",
    desc: "Promovemos la capacitación constante de los Productores Asesores de Seguros asociados a nuestra Organización procurando contar con profesionales que estén centrados en las necesidades del cliente, brindando siempre soluciones integrales, eficientes y a medida."
  },
  {
    title: "Oficinas",
    desc: "Contamos con una oficina ubicada en Bahía Blanca en Santa Fe 102. Te ofrecemos amplios espacios de trabajo, sala de reuniones y box privados para que puedas trabajar con tranquilidad."
  },
  {
    title: "Soporte",
    desc: "Contamos con un equipo de profesionales que están para ayudarte y brindarte soporte en el área comercial, administrativo o de siniestros."
  },
  {
    title: "Alianzas Estratégicas",
    desc: "Trabajamos con las principales compañías aseguradoras del país, líderes en el mercado y reconocidas por brindar un servicio integral y de excelencia."
  }
];

const ProducersBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* Líneas divisorias decorativas (Solo en Desktop) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-sf-teal/30 -translate-y-1/2" />
            <div className="absolute top-0 left-1/2 w-[2px] h-full bg-sf-teal/30 -translate-x-1/2" />
          </div>

          {benefits.map((item, index) => (
            <div 
              key={index} 
              className={`p-10 md:p-16 flex flex-col justify-center border-sf-teal/20 
                ${index % 2 === 0 ? 'md:border-r' : ''} 
                ${index < 2 ? 'border-b md:border-b-0' : ''}
                ${index >= 2 ? 'border-t md:border-t-0' : ''}
              `}
            >
              <h3 className="text-3xl md:text-4xl font-serif text-[#1a2e44] mb-6">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProducersBenefits;