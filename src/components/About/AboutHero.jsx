import React from 'react';
import EdificioImg from "../../assets/nosotros-hero.png"; // La imagen del edificio moderno

const AboutHero = () => {
  return (
    <section 
      className="relative min-h-[500px] md:min-h-[600px] flex items-center bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to right, rgba(160, 203, 233, 0.9) 30%, rgba(160, 203, 233, 0.4) 100%), url(${EdificioImg})` 
      }}
    >
      {/* Explicación del estilo:
          - bg-cover y bg-center: Aseguran que la imagen llene el espacio.
          - linear-gradient: Aplica un tinte azulado (similar al de la imagen) que se desvanece 
            hacia la derecha para que el texto sea legible sobre la imagen.
      */}
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="max-w-2xl"> {/* Limitamos el ancho para que el texto no cruce toda la pantalla */}
          
          <span className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-gray-700 font-bold mb-4 block opacity-80">
            35 AÑOS DE EXPERIENCIA
          </span>
          
          <h1 className="text-5xl md:text-7xl font-serif text-[#1a2e44] mb-8 leading-tight">
            Quiénes somos
          </h1>
          
          <div className="space-y-6 text-[#1a2e44] leading-relaxed text-lg md:text-xl font-medium">
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

      {/* Overlay opcional para dispositivos móviles (oscurece un poco más el fondo) */}
      <div className="absolute inset-0 bg-blue-900/10 pointer-events-none md:hidden"></div>
    </section>
  );
};

export default AboutHero;