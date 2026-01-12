import React from 'react';
import bgProducers from "../../assets/Producers/bg-hero.png"; 

const ProducersHero = () => {
  return (
    <section className="relative min-h-[500px] flex items-center bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="relative z-10 bg-white/80 backdrop-blur-sm md:bg-transparent p-8 md:p-0 rounded-3xl max-w-2xl">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-500 font-bold mb-4 block">
            PRODUCTORES
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a2e44] mb-6 leading-tight">
            ¿Qué ofrecemos?
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
            Te ofrecemos acompañamiento, capacitación y actualización constante a cargo de profesionales expertos para que puedas incrementar tus ingresos a través de productos y técnicas de ventas de comprobado éxito en un mercado que no para de crecer.
          </p>
        </div>
      </div>
      
      {/* Imagen de fondo posicionada a la derecha */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-3/5 z-0 bg-cover bg-center rounded-l-[60px] md:rounded-l-[120px] overflow-hidden shadow-2xl"
        style={{ backgroundImage: `url(${bgProducers})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent md:block hidden" />
      </div>
    </section>
  );
};

export default ProducersHero;