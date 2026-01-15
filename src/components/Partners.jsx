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
        <section className="py-16 bg-white border-t border-gray-50">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <span className="caption text-gray-400 uppercase tracking-widest mb-10 block">Compañías que confían en nosotros</span>
                
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={2}
                    loop={partners.length > 5}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 3, loop: partners.length > 3 },
                        1024: { slidesPerView: 5, loop: partners.length > 5 }
                    }}
                    className="flex items-center"
                >
                    {partners.map((partner, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <img src={partner.logo} alt={partner.name} className="h-12 object-contain" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Partners;