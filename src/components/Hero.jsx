import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Car, Plus, Phone, Download } from 'lucide-react';
import { NavLink } from 'react-router-dom'; // Importación esencial

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
      link: "/cotizar", // Ruta hacia el nuevo componente
      image: Asesoramiento, 
      bgColor: "bg-[#374151]"
    },
    {
      title: "¿Tuviste un accidente?",
      description: "Estamos para ayudarte en cada paso. Conocé cómo realizar tu denuncia de forma rápida y segura.",
      buttonText: "QUIERO SABER MÁS",
      link: "/contacto", // O la ruta que prefieras
      image: Siniestro,
      bgColor: "bg-[#1f2937]"
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: '.hero-next',
          prevEl: '.hero-prev',
        }}
        pagination={{ clickable: true, el: '.hero-pagination' }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={`${slide.bgColor} text-white pt-16 pb-32 px-4`}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                
                <div className="md:w-5/12 z-10 text-center md:text-left">
                  <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase tracking-wider font-['Yanone_Kaffeesatz']">
                    {slide.title}
                  </h1>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-8 border border-white/20">
                    <p className="text-sm md:text-base text-gray-200 italic">
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* BOTÓN CON NAVEGACIÓN REAL */}
                  <NavLink 
                    to={slide.link}
                    className="inline-flex bg-[#0095ff] hover:bg-[#007acc] text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest items-center gap-2 transition-all shadow-lg active:scale-95"
                  >
                    {slide.buttonText}
                    <span className="text-lg">→</span>
                  </NavLink>
                </div>

                <div className="md:w-6/12 relative">
                  <div className="rounded-3xl overflow-hidden border-8 border-white/5 shadow-2xl">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-auto object-cover aspect-[16/10] md:aspect-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Controles del Swiper */}
        <div className="absolute inset-0 pointer-events-none z-20">
           <div className="max-w-[95%] mx-auto h-full relative flex items-center justify-between px-4">
              <button className="hero-prev pointer-events-auto hidden md:flex bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition">
                <ChevronLeft size={30} />
              </button>
              <button className="hero-next pointer-events-auto hidden md:flex bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-md transition">
                <ChevronRight size={30} />
              </button>
           </div>
        </div>
        
        <div className="hero-pagination absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-2"></div>
      </Swiper>

      {/* SECCIÓN DE TARJETAS */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 md:-mt-20 relative z-40 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <ServiceCard 
            icon={<Car size={24} />} 
            title="Denuncia un Siniestro" 
            desc="Presente su reclamación por accidente en línea de forma rápida." 
          />
          <ServiceCard 
            icon={<Plus size={24} />} 
            title="Qué hacer en caso de accidente" 
            desc="Guía paso a paso para gestionar su siniestro sin demoras." 
          />
          <ServiceCard 
            icon={<Phone size={24} />} 
            title="Números de emergencia" 
            desc="Acceso rápido a todos los números de contacto 24hs." 
          />
          <ServiceCard 
            icon={<Download size={24} />} 
            title="Descargar documentación" 
            desc="Acceda a sus documentos y formularios de seguro." 
          />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 group cursor-pointer">
    <div className="bg-gray-100 group-hover:bg-[#0095ff] group-hover:text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-gray-600 transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#0095ff] transition-colors">{title}</h3>
    <p className="text-[11px] text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export default Hero;