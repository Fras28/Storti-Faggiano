import React from 'react';
import EquipoTrabajo from "../../assets/nosotros/equipo-oficina.png"; // Referencia a Frame 73.png

const OurTeam = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texto descriptivo */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nuestro equipo</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              Priorizamos la capacitación constante de nuestros Productores 
              Asesores de Seguros.
            </p>
            <p>
              Buscamos contar con profesionales centrados en las 
              necesidades de cada persona o empresa, capaces de ofrecer 
              soluciones integrales, eficientes y a medida.
            </p>
            <p>
              Actualmente somos más de 30 productores y productoras en 
              Bahía Blanca y la región, y seguimos creciendo sin abandonar 
              los valores fundantes que nos definen.
            </p>
          </div>
        </div>

        {/* Imagen con bordes redondeados invertidos o simétricos */}
        <div className="md:w-1/2">
          <img 
            src={EquipoTrabajo} 
            alt="Equipo trabajando" 
            className="w-full h-auto rounded-[40px] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;