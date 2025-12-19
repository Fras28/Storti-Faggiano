import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import New0 from "../assets/Noticias/Card.png"
import New1 from "../assets/Noticias/Card-1.png"
import New2 from "../assets/Noticias/Card-2.png"

// Importación de estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const news = [
  {
    title: 'Resolución 24/2023',
    description: 'Vía FAPASA A partir del dictado de la citada Resolución el mercado asegurador argentino cuenta con una arbitrariedad menos...',
    image: New0,
    date: '27/10/2022'
  },
  {
    title: 'Cuándo cambiar neumáticos, frenos y amortiguadores',
    description: 'El cuidado de un vehículo requiere de responsabilidad y atención ya que, potencialmente, cualquier desperfecto podría provocar un accidente.',
    image: New1,
    date: '27/10/2022'
  },
  {
    title: 'A partir de ahora, las ART también prestarán cobertura',
    description: 'We are focused on customer needs, providing solutions to them, not merely...',
    image: New2,
    date: '27/10/2022'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gray-500 font-bold text-xs uppercase tracking-[0.2em] block mb-4">
            TODO LO QUE NECESITÁS SABER
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif">
            Noticias
          </h2>
        </div>

        {/* Slider / Grid de Noticias */}
        <div className="news-container">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.1} // En mobile permite ver el comienzo de la siguiente
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 3,
                centeredSlides: false,
                allowTouchMove: false, // Grilla fija en Desktop
              },
            }}
            className="pb-16"
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col h-full group cursor-pointer">
                  {/* Imagen con Aspect Ratio */}
                  <div className="overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 leading-snug group-hover:text-[#0095ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Metadata (Opcional según tu imagen) */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 uppercase tracking-wider">
                      Posteado por SfAsesoresBlog • {item.date}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #0095ff !important;
        }
      `}</style>
    </section>
  );
};

export default NewsSection;