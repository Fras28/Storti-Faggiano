import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Siniestro1 from "../assets/Siniestro/siniestro.png";
import Siniestro2 from "../assets/Siniestro/siniestro2.png";

// Importar estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Siniestros = () => {
  const navigate = useNavigate();

  const slides = [
    {
      id: 1,
      tag: "¿TUVISTE UN SINIESTRO?",
      title: "Realizá la denuncia de manera online",
      description: "Nosotros nos encargamos de canalizarlo rápidamente agilizando los tiempos de respuesta con las compañías.",
      buttonText: "DENUNCIA TU SINIESTRO",
      image: Siniestro1,
      link: "/siniestros/denuncia"
    },
    {
      id: 2,
      tag: "RÁPIDO · PASO A PASO",
      title: "¿Qué hacer ante un siniestro?",
      description: "Todo lo que necesitás saber para manejar la situación sin estrés y con el respaldo de nuestro equipo.",
      buttonText: "VER GUÍA DE PASOS",
      image: Siniestro2,
      link: "/siniestros/guia"
    },
  ];

  const handleNavigation = (link) => {
    navigate(link);
  };

  return (
    <main className="bg-white">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full flex items-center">
                {/* Fondo con imagen y overlay de superposición */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[5000ms] scale-105"
                  style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.1) 100%), url(${slide.image})` }}
                />

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                  <div className="max-w-2xl">
                    <span className="caption  tracking-[0.4em] text-[#72c0c9] font-bold mb-4 block">
                      {slide.tag}
                    </span>
                    <h1 className="  text-sf-dark mb-6 leading-[1]  ">
                      {slide.title}
                    </h1>
                    <p className="body text-gray-600  mb-10 max-w-md leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <button 
                      onClick={() => handleNavigation(slide.link)}
                      className="button-1 flex items-center gap-3 bg-[#72c0c9] hover:bg-[#5eb0b9] text-white px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-xl  tracking-widest "
                    >
                      {slide.buttonText}
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Botones de Navegación Custom */}
          <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-[#72c0c9] transition-colors lg:block hidden">
            <ChevronLeft size={60} strokeWidth={1} />
          </button>
          <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-[#72c0c9] transition-colors lg:block hidden">
            <ChevronRight size={60} strokeWidth={1} />
          </button>
        </Swiper>
      </section>

      {/* 2. INFO CARDS SECTION (Diseño consistente con ProducersBenefits) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className=" text-sf-dark  mb-4">Información Importante</h2>
          <p className="body text-gray-500 mx-auto">Te acompañamos en cada paso para que la gestión de tu siniestro sea lo más simple posible.</p>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#72c0c9]/10 rounded-full flex items-center justify-center text-[#72c0c9] mb-6">
                <ShieldAlert size={32} />
              </div>
              <h3 className="text-sf-dark mb-4 ">Tranquilidad</h3>
              <p className="body text-gray-600 text-sm leading-relaxed">Asesoramiento inmediato ante cualquier evento imprevisto.</p>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#72c0c9]/10 rounded-full flex items-center justify-center text-[#72c0c9] mb-6">
                <FileText size={32} />
              </div>
              <h3 className="text-sf-dark mb-4 ">Documentación</h3>
              <p className="body text-gray-600 text-sm leading-relaxed">Te ayudamos a preparar toda la documentación requerida por la compañía.</p>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#72c0c9]/10 rounded-full flex items-center justify-center text-[#72c0c9] mb-6">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-sf-dark mb-4 ">Seguimiento</h3>
              <p className="body text-gray-600 text-sm leading-relaxed">Monitoreamos el estado de tu denuncia hasta su resolución final.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Estilos para Swiper Bullets */}
      <style>{`
        .swiper-pagination-bullet { background: #d1d5db !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #72c0c9 !important; width: 30px; border-radius: 5px; transition: all 0.3s; }
        .swiper-pagination { bottom: 30px !important; }
      `}</style>
    </main>
  );
};

export default Siniestros;