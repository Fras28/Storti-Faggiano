import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Importación de fotos (Asegúrate de que las rutas coincidan con tus archivos)
import JorgeImg from "../../assets/nosotros/staff/Avatar.png";
import FrancoImg from "../../assets/nosotros/staff/Avatar.png";
import MaximoImg from "../../assets/nosotros/staff/Avatar.png";
import SantiagoImg from "../../assets/nosotros/staff/Avatar.png";
import CieloImg from "../../assets/nosotros/staff/Avatar.png";
import LauraImg from "../../assets/nosotros/staff/Avatar.png";
import FedericoImg from "../../assets/nosotros/staff/Avatar.png";

const staffMembers = [
  {
    name: "Jorge Faggiano",
    role: "Socio / Director",
    matricula: "SSN Nº51301",
    image: JorgeImg
  },
  {
    name: "Franco Cerra",
    role: "Socio / Director",
    matricula: "SSN Nº69068",
    image: FrancoImg
  },
  {
    name: "Maximo Faggiano",
    role: "Socio / Director",
    matricula: "SSN Nº91462",
    image: MaximoImg
  },
  {
    name: "Santiago Tomassini",
    role: "Gerente Comercial",
    matricula: "",
    image: SantiagoImg
  },
  {
    name: "María Cielo Viñuela",
    role: "Área administrativa",
    matricula: "",
    image: CieloImg
  },
  {
    name: "María Laura Miglioli",
    role: "Cobranzas",
    matricula: "",
    image: LauraImg
  },
  {
    name: "Scarpaci Federico",
    role: "Área de Siniestros",
    matricula: "",
    image: FedericoImg
  }
];

const StaffCarousel = () => {
    return (
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e44] mb-12 md:mb-16">
            Conocenos
          </h2>
          
          {/* Añadimos un padding-bottom considerable al Swiper para alojar los puntos */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            centeredSlides={true}
            slidesPerView={1.3}
            pagination={{ 
              clickable: true,
              dynamicBullets: true // Hace que los puntos se vean más modernos y ocupen menos espacio
            }}
            breakpoints={{
              640: { slidesPerView: 2.5, centeredSlides: false },
              1024: { slidesPerView: 5, centeredSlides: false, spaceBetween: 30 },
            }}
            className="pb-20 staff-swiper" // <-- 'pb-20' crea el espacio para la paginación
          >
            {staffMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center transition-transform duration-300">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 shadow-md border-4 border-white">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-gray-800 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-medium">
                    {member.role}
                  </p>
                  {member.matricula && (
                    <p className="text-[9px] md:text-[10px] text-gray-400 mt-1 tracking-wider uppercase font-bold">
                      {member.matricula}
                    </p>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
  
        {/* Estilos CSS personalizados para bajar los puntos */}
        <style>{`
          .staff-swiper .swiper-pagination {
            bottom: 0px !important; /* Mueve los puntos al fondo del padding creado con pb-24 */
          }
          .staff-swiper .swiper-pagination-bullet-active {
            background: #0095ff !important; /* Tu color azul corporativo */
          }
        `}</style>
      </section>
    );
  };
  
  export default StaffCarousel;