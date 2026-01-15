import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import New0 from "../assets/Noticias/Card.png"
import New1 from "../assets/Noticias/Card-1.png"
import New2 from "../assets/Noticias/Card-2.png"

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
    description: 'Estamos enfocados en las necesidades de nuestros clientes, brindando soluciones integrales más allá de los productos.',
    image: New2,
    date: '27/10/2022'
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
            <span className="caption text-sf-teal uppercase tracking-widest mb-2 block">Actualidad</span>
            <h2 className="text-gray-800">Últimas Noticias</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={news.length > 3}
          breakpoints={{
            768: { slidesPerView: 2, loop: news.length > 2 },
            1024: { slidesPerView: 3, loop: news.length > 3 }
          }}
          className="pb-12"
        >
          {news.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col">
                <div className="aspect-[16/9] overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="caption text-gray-400 mb-2">{item.date}</span>
                  <h4 className="mb-4 text-gray-800 group-hover:text-sf-teal transition-colors">{item.title}</h4>
                  <p className="caption text-gray-600 line-clamp-3 mb-6">{item.description}</p>
                  <button className="button-1 text-sf-teal mt-auto text-left">LEER MÁS</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewsSection;