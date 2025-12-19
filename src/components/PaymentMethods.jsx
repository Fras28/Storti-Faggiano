import React from 'react';
// Importación de tus activos locales
import MercadoPagoIcon from "../assets/MercadoPago.svg";
import TarjetaIcon from "../assets/tarjeta.svg";
import DebitoIcon from "../assets/DebDirecto.svg";

const PaymentCard = ({ title, iconSrc, altText }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group">
    {/* Contenedor optimizado para tus SVGs externos */}
    <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img 
        src={iconSrc} 
        alt={altText} 
        className="w-12 h-12 object-contain" 
        /* Usamos object-contain para que el SVG no se deforme */
      />
    </div>
    <h3 className="text-lg font-bold text-[#1a2b3c]">{title}</h3>
    <p className="text-gray-400 text-xs mt-2 uppercase tracking-widest font-semibold">
      Pago Seguro
    </p>
  </div>
);

const PaymentMethods = () => {
  return (
    <section className="py-20 bg-[#f9fafb] text-center">
      <div className="max-w-6xl mx-auto px-6">
        <span className="text-[#0095ff] font-extrabold text-[11px] uppercase tracking-[0.25em] mb-3 block">
          Fácil y Rápido
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1a2b3c] font-serif">
          Pague su póliza en línea
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <PaymentCard 
            title="Tarjeta de Crédito" 
            iconSrc={TarjetaIcon} 
            altText="Icono Tarjeta de Crédito" 
          />

          <PaymentCard 
            title="Mercado Pago" 
            iconSrc={MercadoPagoIcon} 
            altText="Icono Mercado Pago" 
          />

          <PaymentCard 
            title="Débito Directo" 
            iconSrc={DebitoIcon} 
            altText="Icono Débito Directo" 
          />

        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;