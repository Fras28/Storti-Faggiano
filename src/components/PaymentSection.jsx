import React from 'react';

const reasons = [
  {
    id: "1.",
    title: "Atención personalizada",
    description: "Nos centramos en las necesidades de los clientes, proporcionándoles soluciones, no solo siendo un proveedor de productos y servicios."
  },
  {
    id: "2.",
    title: "+ de 25 años de experiencia",
    description: "Establecemos relaciones duraderas con nuestros clientes, manteniendo un contacto fluido y constante, y esforzándonos por ofrecer soluciones a cualquier necesidad que surja."
  },
  {
    id: "3.",
    title: "Equipo de primera línea",
    description: "Formamos y entrenamos constantemente a nuestro equipo para ofrecer a nuestros clientes el mejor servicio del mercado."
  }
];

const PaymentSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16 space-y-4">
          <span className="bg-white px-4 py-2 rounded-full text-xs font-medium text-gray-500 shadow-sm border border-gray-100">
            ¿Por qué nosotros?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 font-serif">
            3 razones para elegir Storti Faggiano
          </h2>
        </div>

        {/* Grid de Razones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-white p-10 rounded-3xl shadow-sm border border-gray-50 flex flex-col items-start transition-all duration-300 "
            >
              <span className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 block group-hover:text-[#0095ff] transition-colors">
                {reason.id}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;