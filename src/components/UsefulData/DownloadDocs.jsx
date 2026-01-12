import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Download } from 'lucide-react';
import FedPat from "../../assets/datos-utiles/Federación-Patronal.png";
import SancorSeg from "../../assets/datos-utiles/Sancor-Seguros.png"
import Cooperacion from "../../assets/datos-utiles/Cooperación-Seguros.png"
import ProvART from "../../assets/datos-utiles/Provincia-ART.png"
import CNP from "../../assets/datos-utiles/CNP-Seguros.png"
import ProvSeg from "../../assets/datos-utiles/Provincia-Seguros.png"
import SanCris from "../../assets/datos-utiles/San-Cristobal.png"
import DocBg from "../../assets/datos-utiles/Documentacion-bg.jpg"


// Import de Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const companies = [
  { name: "Federación Patronal", logo: FedPat, link: "#" },
  { name: "Sancor Seguros", logo: SancorSeg, link: "#" },
  { name: "Cooperación Seguros", logo:Cooperacion, link: "#" },
  { name: "Provincia ART", logo: ProvART, link: "#" },
  { name: "CNP Seguros", logo: CNP , link: "#" },
  { name: "Provincia Seguros", logo: ProvSeg, link: "#" },
  { name: "San Cristobal", logo: SanCris, link: "#" },
];

const DownloadDocs = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Fondo decorativo con imagen difuminada como en el diseño */}
      <div className="absolute inset-0 opacity-60 grayscale pointer-events-none">
        <img 
          src={DocBg} 
          className="w-full h-full object-cover" 
          alt="" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-serif text-[#1a2e44] mb-12">
          Descargar documentación
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-14 docs-swiper"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-between h-[280px] hover:shadow-md transition-shadow">
                <div className="flex-1 flex items-center justify-center w-full p-4">
                  {/* Placeholder para cuando pongas los logos reales */}
                  <img 
                    src={company.logo} 
                    alt={company.name}
                    className="max-h-20 w-auto object-contain "
                    onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Logo"; }}
                  />
                </div>
                
                <div className="w-full text-center">
                  <p className="text-sm font-bold text-gray-700 mb-4">{company.name}</p>
                  <a 
                    href={company.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sf-teal text-xs font-bold uppercase tracking-widest hover:text-[#1a2e44] transition-colors"
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

      <style>
        {`
          .docs-swiper .swiper-pagination-bullet-active {
            background: #72c0c9 !important;
          }
        `}
      </style>
    </section>
  );
};

export default DownloadDocs;