import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Download } from 'lucide-react';

// Assets
import FedPat from "../../assets/datos-utiles/Federación-Patronal.png";
import SancorSeg from "../../assets/datos-utiles/Sancor-Seguros.png";
import Cooperacion from "../../assets/datos-utiles/Cooperación-Seguros.png";
import ProvART from "../../assets/datos-utiles/Provincia-ART.png";
import CNP from "../../assets/datos-utiles/CNP-Seguros.png";
import ProvSeg from "../../assets/datos-utiles/Provincia-Seguros.png";
import SanCris from "../../assets/datos-utiles/San-Cristobal.png";
import DocBg from "../../assets/datos-utiles/Documentacion-bg.jpg";

import 'swiper/css';
import 'swiper/css/pagination';

const companies = [
  { name: "Federación Patronal", logo: FedPat, link: "#" },
  { name: "Sancor Seguros", logo: SancorSeg, link: "#" },
  { name: "Cooperación Seguros", logo: Cooperacion, link: "#" },
  { name: "Provincia ART", logo: ProvART, link: "#" },
  { name: "CNP Seguros", logo: CNP , link: "#" },
  { name: "Provincia Seguros", logo: ProvSeg, link: "#" },
  { name: "San Cristóbal", logo: SanCris, link: "#" },
];

const DownloadDocs = () => {
  return (
    <section 
      className="relative py-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${DocBg})` }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-[#1a2e44]/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className=" text-white  mb-4">
            Descarga de Documentación
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Accedé a los formularios y condiciones de póliza de las principales compañías de forma directa.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-20 docs-swiper"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] p-8 flex flex-col items-center justify-between h-[340px] transition-all duration-500 hover:bg-white/20 group">
                
                {/* Contenedor del Logo */}
                <div className="flex-1 flex items-center justify-center w-full p-6 bg-white rounded-[30px] mb-6 group-hover:scale-105 transition-transform duration-500 shadow-xl">
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                
                {/* Texto y Botón */}
                <div className="w-full text-center">
                  <p className="text-xs font-bold text-white mb-6 uppercase tracking-[0.2em]">
                    {company.name}
                  </p>
                  <a 
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#72c0c9] text-white px-8 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#1a2e44] transition-all shadow-lg active:scale-95 w-full justify-center"
                  >
                    <Download size={16} />
                    Descargar
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Swiper Pagination Styling */}
      <style>{`
        .docs-swiper .swiper-pagination-bullet { 
          background: rgba(255,255,255,0.3) !important; 
          opacity: 1; 
        }
        .docs-swiper .swiper-pagination-bullet-active { 
          background: #72c0c9 !important; 
          width: 35px; 
          border-radius: 5px; 
          transition: all 0.3s; 
        }
      `}</style>
    </section>
  );
};

export default DownloadDocs;