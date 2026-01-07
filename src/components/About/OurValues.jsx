import React from 'react';
import FamiliaPlaya from "../../assets/nosotros/familia-playa.png"; // Referencia a Frame 72.png

const OurValues = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Imagen con bordes redondeados según el diseño */}
        <div className="md:w-1/2">
          <img 
            src={FamiliaPlaya} 
            alt="Familia en la playa" 
            className="w-full h-auto rounded-[40px] shadow-sm"
          />
        </div>

        {/* Texto descriptivo */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestros valores</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Los valores que dieron origen a nuestra Organización se han 
              transmitido de generación en generación.
            </p>
            <p>
              Hoy trabajamos para potenciar esa esencia, ampliando nuestra 
              propuesta sin perder la cercanía que nos caracteriza.
            </p>
            <p>
              Hemos incorporado nuevas herramientas digitales que simplifican 
              gestiones, acercan información útil y facilitan la comunicación 
              diaria con nuestros clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;