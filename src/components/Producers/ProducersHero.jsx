import React from 'react';
import bgProducers from "../../assets/Producers/bg-hero.png"; 

const ProducersHero = () => {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl bg-white/90 backdrop-blur-sm md:bg-transparent p-8 md:p-0 rounded-3xl">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-sf-gray font-bold mb-4 block">
            PRODUCTORES
          </span>
          <h1 className="text-6xl md:text-8xl font-yanone text-sf-dark mb-6 leading-[0.9]">
            ¿Qué ofrecemos?
          </h1>
          <p className="text-sf-gray text-lg md:text-xl leading-relaxed font-medium max-w-xl">
            Te ofrecemos acompañamiento, capacitación y actualización constante a cargo de profesionales expertos para que puedas incrementar tus ingresos con productos de éxito comprobado.
          </p>
        </div>
      </div>
      
      {/* Imagen de fondo con diseño curvo */}
      <div 
        className="absolute inset-y-0 right-0 w-full md:w-3/5 z-0 bg-cover bg-center rounded-l-[40px] md:rounded-l-[120px] shadow-2xl"
        style={{ backgroundImage: `url(${bgProducers})` }}
      />
    </section>
  );
};

export default ProducersHero;