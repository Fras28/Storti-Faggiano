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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center mb-16">Staff de Productores</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          className="staff-swiper pb-20"
        >
          {staffMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-5 shadow-md border-4 border-white">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-gray-800 mb-1">{member.name}</h4>
                <p className="caption text-gray-500 font-medium">
                  {member.role}
                </p>
                {member.matricula && (
                  <p className="caption text-[10px] text-gray-400 mt-1 uppercase tracking-wider font-bold">
                    {member.matricula}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .staff-swiper .swiper-pagination-bullet-active { background: #72c0c9 !important; }
      `}</style>
    </section>
  );
};
  
  export default StaffCarousel;