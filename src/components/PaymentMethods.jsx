import React from 'react';
import MercadoPagoIcon from "../assets/MercadoPago.svg";
import TarjetaIcon from "../assets/tarjeta.svg";
import DebitoIcon from "../assets/DebDirecto.svg";

const PaymentCard = ({ title, iconSrc, altText }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center group">
    <div className="w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <img src={iconSrc} alt={altText} className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-gray-800">{title}</h3>
    <p className="caption text-gray-400 mt-2 uppercase tracking-widest font-semibold">Pago Seguro</p>
  </div>
);

const PaymentMethods = () => {
  return (
    <section className="py-20 bg-[#f9fafb] text-center">
      <div className="max-w-7xl mx-auto px-6">
        <span className="caption text-sf-teal uppercase tracking-[0.2em] mb-3 block">Fácil y Rápido</span>
        <h2 className="mb-12">Pague su póliza en línea</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PaymentCard title="Tarjeta de Crédito" iconSrc={TarjetaIcon} altText="Tarjeta" />
          <PaymentCard title="Mercado Pago" iconSrc={MercadoPagoIcon} altText="Mercado Pago" />
          <PaymentCard title="Débito Directo" iconSrc={DebitoIcon} altText="CBU" />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;