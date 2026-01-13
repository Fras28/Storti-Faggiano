import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // 1. Importar useNavigate

import Siniestro1 from "../assets/Siniestro/siniestro.png";
import Siniestro2 from "../assets/Siniestro/siniestro2.png";

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Siniestros = () => {
  const navigate = useNavigate(); // 2. Inicializar el hook

  const slides = [
    {
      id: 1,
      tag: "¿TUVISTE UN SINIESTRO?",
      title: "Realizá la denuncia de manera online",
      description: "Nosotros nos encargamos de canalizarlo rápidamente agilizando los tiempos de respuesta con las compañías.",
      buttonText: "DENUNCIA TU SINIESTRO",
      image: Siniestro1,
      link: "/siniestros/denuncia" // Asegúrate de que esta ruta exista en tu App.jsx
    },
    {
      id: 2,
      tag: "RÁPIDO · PASO A PASO",
      title: "¿Qué hacer ante un siniestro?",
      description: "Todo lo que necesitás saber para manejar la situación sin estrés.",
      buttonText: "VER GUÍAS COMPLETA",
      image: Siniestro2,
      link: "/siniestros/guia" // Ruta para la botonera que solicitaste
    }
  ];

  // 3. Función para manejar el clic
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb simple */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-400">
        <span onClick={() => navigate('/')} className="hover:text-sf-teal cursor-pointer">Inicio</span>
        <span className="mx-2">-</span>
        <span className="text-gray-600">Siniestros</span>
      </div>

      <section className="relative group">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3]">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="inline-block bg-gray-50 text-gray-500 px-4 py-1 rounded-full text-sm font-medium tracking-wider">
                    {slide.tag}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-serif text-gray-800 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-500 text-lg max-w-md">
                    {slide.description}
                  </p>
                  
                  {/* 4. Botón con evento onClick para redirección */}
                  <button 
                    onClick={() => handleNavigation(slide.link)}
                    className="flex items-center gap-2 bg-[#72c0c9] hover:bg-[#5eb0b9] text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 shadow-lg uppercase text-sm tracking-widest"
                  >
                    {slide.buttonText}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Botones de Navegación Custom */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-sf-teal transition-colors lg:block hidden">
            <ChevronLeft size={40} strokeWidth={1} />
          </button>
          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-sf-teal transition-colors lg:block hidden">
            <ChevronRight size={40} strokeWidth={1} />
          </button>
        </Swiper>
      </section>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #72c0c9 !important;
        }
      `}</style>
    </div>
  );
};

export default Siniestros;