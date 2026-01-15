import React from 'react';
import EdificioImg from "../../assets/nosotros-hero.png";

const AboutHero = () => {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(160, 203, 233, 0.9) 30%, rgba(160, 203, 233, 0.4) 100%), url(${EdificioImg})` 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl">
          <span className="caption uppercase tracking-[0.4em] text-gray-700 mb-4 block opacity-80">
            35 AÑOS DE EXPERIENCIA
          </span>
          
          <h1 className="text-[#1a2e44] mb-8 leading-tight">
            Quiénes somos
          </h1>
          
          <div className="space-y-6 text-[#1a2e44]">
            <p>
              Somos una Organización de Seguros con <b className="font-bold">25 años de trayectoria</b>, integrada 
              exclusivamente por Productores Asesores de Seguros matriculados y vinculados 
              a las principales compañías aseguradoras del país.
            </p>
            <p>
              Trabajamos junto a aseguradoras que garantizan la más alta calidad de atención 
              y respaldo para nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;