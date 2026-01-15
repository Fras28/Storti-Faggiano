import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Car, Plus, Phone, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import Asesoramiento from "../assets/Hero/asesoramiento.png"
import Siniestro from "../assets/Hero/siniestro.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  const slides = [
    {
      title: "Te acompañamos en cada momento de tu vida",
      description: "Compará diferentes proveedores de seguros y obtené un presupuesto personalizado para su hogar o seguro.",
      buttonText: "COTIZAR",
      link: "/cotizar",
      image: Asesoramiento, 
      bgColor: "bg-[#374151]"
    },
    {
      title: "¿Tuviste un accidente?",
      description: "Estamos para ayudarte en cada paso. Conocé cómo realizar tu denuncia de forma rápida y segura.",
      buttonText: "QUIERO SABER MÁS",
      link: "/contacto",
      image: Siniestro,
      bgColor: "bg-[#1f2937]"
    }
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={slides.length > 1}
        className="h-[500px] md:h-[650px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative h-full w-full ${slide.bgColor} flex items-center`}>
              <div className="absolute inset-0 opacity-40">
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-left">
                <div className="max-w-2xl text-white">
                  <h1 className="leading-tight mb-6 drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="mb-8 opacity-90 max-w-lg">
                    {slide.description}
                  </p>
                  <NavLink to={slide.link}>
                    <button className="button-1 bg-[#72C0C8] hover:bg-[#5dafb8] text-white px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95">
                      {slide.buttonText}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Flechas con hover individual, ya no dependen del group del padre */}
        <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
          <ChevronRight size={24} />
        </button>
      </Swiper>

      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-30 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <ServiceCard icon={<Car size={24} />} title="Denuncia un Siniestro" desc="Presente su reclamación por accidente en línea de forma rápida." />
          <ServiceCard icon={<Plus size={24} />} title="Qué hacer en caso de accidente" desc="Guía paso a paso para gestionar su siniestro sin demoras." />
          <ServiceCard icon={<Phone size={24} />} title="Números de emergencia" desc="Acceso rápido a todos los números de contacto 24hs." />
          <ServiceCard icon={<Download size={24} />} title="Descargar documentación" desc="Acceda a sus documentos y formularios de seguro." />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
    <div className="bg-gray-100 group-hover:bg-sf-teal group-hover:text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-gray-600 transition-colors">
      {icon}
    </div>
    <h4 className="mb-2 text-gray-800">{title}</h4>
    <p className="caption text-gray-500">{desc}</p>
  </div>
);

export default Hero;