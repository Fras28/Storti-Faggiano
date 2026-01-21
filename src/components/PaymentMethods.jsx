import React from 'react';
import MercadoPagoIcon from "../assets/MercadoPago.svg";
import TarjetaIcon from "../assets/tarjeta.svg";
import DebitoIcon from "../assets/DebDirecto.svg";

const PaymentCard = ({ title, iconSrc, altText }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100  transition-all duration-300 flex flex-col items-center group">
    <div className="w-16 h-16 mb-6 flex items-center justify-center ">
      <img src={iconSrc} alt={altText} className="w-12 h-12 object-contain" />
    </div>
    <h3 className="text-gray-800">{title}</h3>
    <p className="caption text-gray-400 mt-2  tracking-widest font-semibold">Pago Seguro</p>
  </div>
);

const PaymentMethods = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Me gustaria abonar con Tarjeta de Credito o debito`);
    window.open(`https://wa.me/+5492914029634?text=${message}`, '_blank');
  };
  return (
    <section className="py-20 bg-[#f9fafb] text-center">
      <span className="caption text-sf-teal  tracking-[0.2em] mb-3 block uppercase">Fácil y Rápido</span>
      <div className="max-w-7xl mx-auto px-6">
        
        <h2 className="mb-12">Pague su póliza en línea</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <button 
             onClick={(e) => {
              e.stopPropagation();
              handleWhatsApp();
            }}
         
          >
                      <PaymentCard title="Tarjeta de Crédito y Débito Directo" iconSrc={TarjetaIcon} altText="Tarjeta" />
          </button>
          <PaymentCard title="Mercado Pago" iconSrc={MercadoPagoIcon} altText="Mercado Pago" className="m-auto"/>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;