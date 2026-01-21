import React from 'react';
import bgProducers from "../../assets/Producers/bg-hero.png"; 

const ProducersHero = () => {
  return (
    <section className="relative h-[550px] md:h-[650px] flex items-center overflow-hidden">
      {/* Contenedor de la Imagen de Fondo (Estilo Hero.jsx) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgProducers} 
          alt="Productores Background" 
          className="w-full h-full object-cover "
        />
        {/* Overlay opcional para mejorar contraste si es necesario */}
        <div className="absolute inset-0 bg-gradient-to-r from-sf-dark/80 to-transparent md:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-2xl text-sf-dark">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-sf-dark font-bold mb-4 block">
            PRODUCTORES
          </span>
          <h1 className="font-merriweather text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg">
            ¿Qué ofrecemos?
          </h1>
          <p className="font-lato text-lg md:text-xl mb-8 opacity-95 max-w-xl leading-relaxed">
            Te ofrecemos acompañamiento, capacitación y actualización constante a cargo de profesionales expertos para que puedas incrementar tus ingresos con productos de éxito comprobado.
          </p>
          
          {/* Botón añadido para mantener consistencia visual con la otra Hero */}
          <button className="font-lato bg-sf-teal hover:brightness-110 text-white px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95 tracking-wider uppercase text-sm font-bold">
            Más información
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProducersHero;