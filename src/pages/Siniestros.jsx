import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldAlert, FileText, CheckCircle, Car, MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Siniestro1 from "../assets/Siniestro/siniestro.png";
import Siniestro2 from "../assets/Siniestro/siniestro2.png";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const WHATSAPP_URL = "https://wa.me/5492914555555?text=Hola!%20Quiero%20denunciar%20un%20siniestro%20de%20otro%20riesgo.";

const Siniestros = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const slides = [
    {
      id: 1,
      tag: "SINIESTRO AUTOMOTOR",
      title: "Realizá la denuncia de tu auto de manera online",
      description: "Nosotros nos encargamos de canalizarlo rápidamente agilizando los tiempos de respuesta con las compañías.",
      buttonText: "DENUNCIA TU SINIESTRO",
      image: Siniestro1,
      action: "modal",
    },
    {
      id: 2,
      tag: "RÁPIDO · PASO A PASO",
      title: "¿Qué hacer ante un siniestro?",
      description: "Todo lo que necesitás saber para manejar la situación sin estrés y con el respaldo de nuestro equipo.",
      buttonText: "VER GUÍA DE PASOS",
      image: Siniestro2,
      action: "navigate",
      link: "/datos-utiles",
    },
  ];

  const handleSlideButton = (slide) => {
    if (slide.action === "modal") {
      setShowModal(true);
    } else {
      navigate(slide.link);
    }
  };

  return (
    <main className="bg-white">

      {/* ── MODAL DE SELECCIÓN ─────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-[2.5rem] shadow-2xl p-10 max-w-xl w-full relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-gray-300 hover:text-gray-500 transition-colors"
            >
              <X size={22} />
            </button>

            <p className="text-xs uppercase tracking-[0.3em] text-[#72c0c9] mb-3">DENUNCIA DE SINIESTRO</p>
            <h2 className="font-normal text-[#1a2e44] mb-2 text-2xl">¿Qué tipo de siniestro querés denunciar?</h2>
            <p className="text-gray-400 text-sm mb-8">Seleccioná la opción que corresponde para continuar.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Automotor */}
              <button
                onClick={() => { setShowModal(false); navigate('/siniestros/denuncia'); }}
                className="group bg-gray-50 hover:bg-[#72c0c9] border border-gray-100 hover:border-[#72c0c9] rounded-[2rem] p-8 flex flex-col items-center gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-white group-hover:bg-white/20 p-4 rounded-2xl shadow-sm transition-all">
                  <Car size={36} className="text-[#72c0c9] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#1a2e44] group-hover:text-white text-base transition-colors">Automotor</p>
                  <p className="text-gray-400 group-hover:text-white/80 text-xs mt-1 transition-colors">Completá el formulario online</p>
                </div>
              </button>

              {/* Otros Riesgos */}
              <button
                onClick={() => { setShowModal(false); window.open(WHATSAPP_URL, '_blank'); }}
                className="group bg-gray-50 hover:bg-[#25D366] border border-gray-100 hover:border-[#25D366] rounded-[2rem] p-8 flex flex-col items-center gap-4 transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="bg-white group-hover:bg-white/20 p-4 rounded-2xl shadow-sm transition-all">
                  <MessageCircle size={36} className="text-[#25D366] group-hover:text-white transition-colors" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-[#1a2e44] group-hover:text-white text-base transition-colors">Otros riesgos</p>
                  <p className="text-gray-400 group-hover:text-white/80 text-xs mt-1 transition-colors">Te atendemos por WhatsApp</p>
                </div>
              </button>

            </div>
          </div>
        </div>
      )}

      {/* ── HERO SLIDER ────────────────────────────────────────────────────── */}
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
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[5000ms] scale-105"
                  style={{ backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.1) 100%), url(${slide.image})` }}
                />
                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
                  <div className="max-w-2xl">
                    <span className="caption tracking-[0.4em] text-[#72c0c9] font-bold mb-4 block">
                      {slide.tag}
                    </span>
                    <h1 className="text-sf-dark mb-6 leading-[1]">
                      {slide.title}
                    </h1>
                    <p className="body text-gray-600 mb-10 max-w-md leading-relaxed">
                      {slide.description}
                    </p>
                    <button
                      onClick={() => handleSlideButton(slide)}
                      className="button-1 flex items-center gap-3 bg-[#72c0c9] hover:bg-[#5eb0b9] text-white px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-xl tracking-widest"
                    >
                      {slide.buttonText}
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-[#72c0c9] transition-colors lg:block hidden">
            <ChevronLeft size={60} strokeWidth={1} />
          </button>
          <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-20 p-2 text-gray-300 hover:text-[#72c0c9] transition-colors lg:block hidden">
            <ChevronRight size={60} strokeWidth={1} />
          </button>
        </Swiper>
      </section>

      {/* ── INFO CARDS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-sf-dark mb-4">Información Importante</h2>
          <p className="body text-gray-500 mx-auto">Te acompañamos en cada paso para que la gestión de tu siniestro sea lo más simple posible.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <ShieldAlert size={32} />, title: "Tranquilidad", desc: "Asesoramiento inmediato ante cualquier evento imprevisto." },
              { icon: <FileText size={32} />,    title: "Documentación", desc: "Te ayudamos a preparar toda la documentación requerida por la compañía." },
              { icon: <CheckCircle size={32} />, title: "Seguimiento",   desc: "Monitoreamos el estado de tu denuncia hasta su resolución final." },
            ].map((card, i) => (
              <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#72c0c9]/10 rounded-full flex items-center justify-center text-[#72c0c9] mb-6">
                  {card.icon}
                </div>
                <h3 className="text-sf-dark mb-4">{card.title}</h3>
                <p className="body text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .swiper-pagination-bullet { background: #d1d5db !important; opacity: 1; }
        .swiper-pagination-bullet-active { background: #72c0c9 !important; width: 30px; border-radius: 5px; transition: all 0.3s; }
        .swiper-pagination { bottom: 30px !important; }
      `}</style>
    </main>
  );
};

export default Siniestros;
