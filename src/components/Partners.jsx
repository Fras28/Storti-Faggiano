import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Cooperacion from "../assets/Partners/CooperacionSeguros.png"
import Federacion from "../assets/Partners/FederacionPatronal.png"
import PrevencionArt from "../assets/Partners/PrevencionART.png"
import PrevencionSal from "../assets/Partners/PrevencionSalud.png"
import SancorSeg from "../assets/Partners/SancorSeguros.png"

import 'swiper/css';

const partners = [
    { name: "Federación Patronal", logo: Federacion },
    { name: "Sancor Seguros", logo: SancorSeg },
    { name: "Prevención Salud", logo: PrevencionSal },
    { name: "Prevención ART", logo: PrevencionArt },
    { name: "Cooperación Seguros", logo: Cooperacion },
];

const Partners = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12 md:mb-16">
                    <span className="text-[#0095ff] font-bold text-xs md:text-sm uppercase tracking-[0.2em] block mb-4">
                        Alianzas Estratégicas
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-serif mb-6">
                        Partners
                    </h2>
                    <p className="text-gray-500 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                        Decidimos asociarnos estratégicamente con las principales compañías de seguros del país.
                    </p>
                </div>

                <div className="relative w-full">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        speed={4000}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        touchStartPreventDefault={false}
                        touchReleaseOnEdges={true} 
                        breakpoints={{
                            640: { 
                                slidesPerView: 3, 
                                spaceBetween: 30 
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                                autoplay: false,
                                allowTouchMove: false
                            },
                        }}
                        className="flex items-center"
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide key={index} className="flex items-center justify-center py-4">
                                {/* CAMBIO AQUÍ: 
                                    - Por defecto (mobile): opacity-100 y grayscale-0 (color total).
                                    - md: (desktop): vuelve a grayscale y opacity-50, con hover para recuperar color.
                                */}
                                <div className="flex items-center justify-center w-full px-4 transition-all duration-500 
                                                grayscale-0 opacity-100 
                                                md:grayscale md:opacity-50 md:hover:grayscale-0 md:hover:opacity-100">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="h-12 md:h-16 w-auto object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Partners;