import React from 'react';

const benefits = [
  {
    title: "Capacitación",
    desc: "Promovemos la capacitación constante de los Productores Asesores de Seguros asociados a nuestra Organización procurando contar con profesionales centrados en las necesidades del cliente."
  },
  {
    title: "Oficinas",
    desc: "Contamos con una oficina ubicada en Bahía Blanca en Santa Fe 102. Te ofrecemos amplios espacios de trabajo, sala de reuniones y box privados para trabajar con tranquilidad."
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor relativo para posicionar la cruz */}
        <div className="relative grid grid-cols-1 md:grid-cols-2">
          
          {/* LA CRUZ CENTRAL (Solo visible en Desktop) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            {/* Línea Horizontal */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sf-teal/40" />
            {/* Línea Vertical */}
            <div className="absolute left-1/2 top-0 w-[1px] h-full bg-sf-teal/40" />
          </div>

          {benefits.map((item, index) => (
            <div 
              key={index} 
              className={`relative z-10 p-12 md:p-20 flex flex-col justify-center transition-all duration-300
                /* Bordes para mobile (línea simple abajo excepto el último) */
                border-b border-gray-100 md:border-none last:border-none
              `}
            >
              <h3 className="text-4xl font-yanone text-sf-dark mb-4 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-sf-gray leading-relaxed text-base md:text-lg">
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