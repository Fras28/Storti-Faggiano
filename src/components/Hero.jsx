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
    <div className="relative overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={slides.length > 1}
        className="h-[550px] md:h-[650px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`relative h-full w-full ${slide.bgColor} flex items-center`}>
              {/* Imagen de fondo con overlay más oscuro para mobile */}
              <div className="absolute inset-0 opacity-50 md:opacity-40">
                <img src={slide.image} alt="" className="w-full h-full object-cover" />
              </div>
              
              {/* Contenedor de Texto con padding y alineación responsive */}
              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center md:text-left">
                <div className="max-w-2xl text-white mx-auto md:mx-0">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-lg mb-8 opacity-95 max-w-lg mx-auto md:mx-0">
                    {slide.description}
                  </p>
                  <NavLink to={slide.link}>
                    <button className="bg-[#72C0C8] hover:bg-[#5dafb8] text-white px-8 py-4 rounded-2xl transition-all shadow-lg active:scale-95 text-sm md:text-base font-bold">
                      {slide.buttonText}
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Flechas ocultas en mobile para mejorar la UX táctil */}
        <button className="swiper-button-prev-custom absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/30 p-3 rounded-full text-white backdrop-blur-sm transition-all hidden md:block">
          <ChevronRight size={24} />
        </button>
      </Swiper>

      {/* Sección de Tarjetas: Ajuste de margen y espaciado */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 -mt-10 md:-mt-20 relative z-30 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 cursor-pointer group flex flex-col items-center md:items-start text-center md:text-left">
    <div className="bg-gray-100 group-hover:bg-sf-teal group-hover:text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-gray-600 transition-colors">
      {icon}
    </div>
    <h4 className="text-lg font-bold mb-2 text-gray-800">{title}</h4>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default Hero;