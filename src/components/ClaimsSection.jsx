import React from 'react';
import LaptopImage from "../assets/Claims/Claims.png"; // Asegúrate de tener la imagen en tus assets

const ClaimsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Lado Izquierdo: Imagen */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img 
              src={LaptopImage} 
              alt="Realizá tu denuncia online" 
              className="rounded-[2rem] shadow-2xl w-full object-cover aspect-video md:aspect-auto"
            />
          </div>
        </div>

        {/* Lado Derecho: Contenido */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-gray-500 font-bold text-xs md:text-sm  tracking-widest block">
              ¿Tuviste un siniestro?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 font-serif leading-tight">
              Realizá la denuncia de manera online
            </h2>
            <div className="w-16 h-1 bg-gray-800 mx-auto md:mx-0"></div>
          </div>

          <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Nosotros nos encargamos de canalizarlo rápidamente agilizando los tiempos de respuesta con las compañías.
          </p>

          <div className="pt-4">
            <button className="bg-[#72C0C8] hover:bg-[#5dafb8] text-white px-8 py-4 rounded-2xl font-bold text-sm md:text-base flex items-center gap-3 transition-all mx-auto md:mx-0 group shadow-lg shadow-teal-100">
              DENUNCIAR SINIESTRO
              <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClaimsSection;