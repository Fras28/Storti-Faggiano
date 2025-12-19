import React from 'react';
import { Car, BriefcaseMedical, Home, Umbrella, ShieldCheck } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  { title: 'Automotor', icon: <Car size={40} md:size={48} strokeWidth={1.5} /> },
  { title: 'Salud', icon: <BriefcaseMedical size={40} md:size={48} strokeWidth={1.5} /> },
  { title: 'Hogar', icon: <Home size={40} md:size={48} strokeWidth={1.5} /> },
  { title: 'Vida', icon: <Umbrella size={40} md:size={48} strokeWidth={1.5} /> },
  { title: 'Responsabilidad civil', icon: <ShieldCheck size={40} md:size={48} strokeWidth={1.5} /> },
];

const ProductsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
          Nuestros Productos
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10 md:mb-16 text-sm md:text-lg px-4">
          Estamos contigo en cada momento de tu vida, asesorándote en todo tipo de riesgos.
        </p>

        <div className="products-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={15}
            // Ajustado a 1.5 para que las cards sean más finas y se vea 25% de la anterior y 25% de la siguiente
            slidesPerView={1.5} 
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                centeredSlides: false,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 5,
                centeredSlides: false,
                allowTouchMove: false,
                spaceBetween: 25
              },
            }}
            className="pb-14 !px-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#f8fafd] p-6 md:p-10 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg md:hover:-translate-y-1 group border border-transparent hover:border-blue-100 
                  aspect-square w-full"> 
                  {/* aspect-square obliga a que sea cuadrada */}
                  
                  <div className="text-gray-800 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-sm md:text-xl font-bold text-gray-800 leading-tight text-center">
                    {product.title}
                  </h3>
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
        /* Asegura que el contenedor no corte las sombras al elevarse */
        .swiper {
          overflow: visible !important;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;