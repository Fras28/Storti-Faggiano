import React, { useState } from 'react';
import { 
  Car, HeartPulse, Home, Users, HardHat, Plane, 
  Stethoscope, Truck, UserRound, Wrench, HandCoins, 
  Building2, Tractor, Anchor, Settings, Umbrella, 
  Flame, Building, Zap, Bird, Dog, ChevronDown, MessageCircle 
} from 'lucide-react';

const insuranceTypes = [
  { id: 1, title: "Automotor", icon: <Car />, desc: "Protección total para tu vehículo.", details: "Coberturas contra terceros, todo riesgo, robo e incendio. Incluye asistencia mecánica las 24hs y extensión de cobertura en países limítrofes." },
  { id: 2, title: "Salud", icon: <HeartPulse />, desc: "Tu bienestar y el de tu familia.", details: "Planes prestacionales de alta complejidad, consultas médicas, internación y descuentos en farmacias con las mejores cartillas del país." },
  { id: 3, title: "Hogar", icon: <Home />, desc: "Tu casa, siempre protegida.", details: "Cobertura contra incendio, robo de contenido, daños por agua y cristales. Incluye servicios de urgencias de plomería, gas y electricidad." },
  { id: 4, title: "Vida", icon: <Users />, desc: "Protección para tus seres queridos.", details: "Asegurá el futuro de tu familia ante cualquier imprevisto. Capital asegurable flexible y opciones de ahorro." },
  { id: 5, title: "ART", icon: <HardHat />, desc: "Asegurá a tu personal.", details: "Cumplimiento de la Ley 24.557. Prevención de riesgos laborales y asistencia médica integral para tus trabajadores." },
  { id: 6, title: "Viaje", icon: <Plane />, desc: "Cobertura global.", details: "Asistencia médica internacional, seguro por pérdida de equipaje y repatriación sanitaria para que viajes con total tranquilidad." },
  { id: 7, title: "Praxis", icon: <Stethoscope />, desc: "Protege tu práctica profesional.", details: "Respaldo ante reclamos por responsabilidad profesional médica y de salud. Defensa legal y protección de patrimonio." },
  { id: 8, title: "Transporte de Mercadería", icon: <Truck />, desc: "Carga segura en todo destino.", details: "Cobertura para mercaderías durante el tránsito terrestre, marítimo o aéreo ante choques, vuelcos, incendios o robos." },
  { id: 9, title: "Accidentes personales", icon: <UserRound />, desc: "Protección ante imprevistos.", details: "Indemnización por fallecimiento o invalidez total/parcial permanente causada por accidentes ocurridos durante el trabajo o vida privada." },
  { id: 10, title: "Responsabilidad Civil", icon: <Wrench />, desc: "Proteja su empresa.", details: "Cobertura ante reclamos de terceros por daños causados en el ejercicio de tu actividad comercial o profesional." },
  { id: 11, title: "Caución", icon: <HandCoins />, desc: "Garantía de cumplimiento.", details: "Garantías contractuales, aduaneras y de alquileres. La forma más ágil de asegurar el cumplimiento de tus obligaciones." },
  { id: 12, title: "Integral Comercio", icon: <Building2 />, desc: "Tu negocio bajo control.", details: "Seguro multiriesgo para locales comerciales: incendio, robo, responsabilidad civil y daños a la propiedad." },
  { id: 13, title: "Agro", icon: <Tractor />, desc: "El mejor respaldo para tu cosecha.", details: "Seguros contra granizo, incendio y vientos fuertes. Multiriesgo agrícola adaptado a cada zona productiva." },
  { id: 14, title: "Embarcaciones", icon: <Anchor />, desc: "Navegá con cobertura.", details: "Protección para lanchas, veleros y cruceros. Responsabilidad civil por colisión, auxilio y salvamento." },
  { id: 15, title: "Técnico", icon: <Settings />, desc: "Activos industriales seguros.", details: "Cobertura para maquinaria pesada, equipos electrónicos y equipos de contratistas ante averías o daños externos." },
  { id: 16, title: "Retiro", icon: <Umbrella />, desc: "Planeá tu futuro hoy.", details: "Seguro con capitalización para complementar tu jubilación. Flexibilidad en aportes y rentabilidad garantizada." },
  { id: 17, title: "Fire", icon: <Flame />, desc: "Contra daños por incendios.", details: "Protección específica para edificios y contenidos ante la acción directa o indirecta del fuego, rayo o explosión." },
  { id: 18, title: "Integral Consorcio", icon: <Building />, desc: "Seguro para condominios.", details: "Cobertura integral para edificios de departamentos y oficinas: partes comunes, RC ascensores e incendio." },
  { id: 19, title: "Ecomovilidad", icon: <Zap />, desc: "Transporte sostenible.", details: "Seguro especializado para bicicletas, monopatines eléctricos y vehículos híbridos o eléctricos." },
  { id: 20, title: "Sepelio", icon: <Bird />, desc: "Gastos cubiertos.", details: "Servicio prestacional o reintegro de gastos de sepelio para aliviar a la familia en momentos difíciles." },
  { id: 21, title: "Mascotas", icon: <Dog />, desc: "Para tu compañero fiel.", details: "Cobertura de gastos veterinarios por accidentes, responsabilidad civil por daños y asistencia en caso de extravío." },
];

const Quoter = () => {
  const [activeId, setActiveId] = useState(null);

  const handleWhatsApp = (type) => {
    const message = encodeURIComponent(`Hola! Me interesa obtener una cotización para un seguro de ${type}.`);
    window.open(`https://wa.me/5492914029635?text=${message}`, '_blank');
  };

  return (
    <div className="py-12 md:py-24 bg-[#fcfdfe] px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20">
        <h2 className="text-4xl md:text-6xl font-serif italic text-gray-800 mb-4">¿Qué le gustaría asegurar hoy?</h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-6"></div>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          Seleccioná el tipo de cobertura que necesitás y ponete en contacto con nuestros asesores.
        </p>
      </div>

      {/* Grid con items-start para que no se estiren todos a la misma altura */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {insuranceTypes.map((item) => (
          <div 
            key={item.id}
            className={`group bg-white rounded-[2rem] border transition-all duration-500 cursor-pointer flex flex-col relative ${
              activeId === item.id 
                ? 'border-teal-500 shadow-2xl ring-1 ring-teal-500/10 z-20' 
                : 'border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200'
            }`}
            onClick={() => setActiveId(activeId === item.id ? null : item.id)}
          >
            <div className="p-8 md:p-10 flex flex-col items-center text-center">
              <div className={`mb-6 transition-all duration-500 ${
                activeId === item.id ? 'text-teal-500 scale-110' : 'text-gray-800 group-hover:text-teal-600'
              }`}>
                {React.cloneElement(item.icon, { size: 48 })}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-400 font-medium uppercase tracking-widest mb-4">
                {item.desc}
              </p>

              <div className={`text-gray-300 transition-transform duration-500 ${activeId === item.id ? 'rotate-180 text-teal-500' : ''}`}>
                <ChevronDown size={20} />
              </div>
            </div>

            {/* PANEL DESPLEGABLE */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              <div className="px-8 pb-8 pt-2 text-center">
                <div className="w-full h-px bg-gray-100 mb-6 mx-auto"></div>
                <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed italic">
                  "{item.details}"
                </p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsApp(item.title);
                  }}
                  className="w-full bg-[#0095ff] hover:bg-[#007acc] text-white py-4 rounded-2xl font-bold text-xs tracking-widest flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 uppercase"
                >
                  <MessageCircle size={18} />
                  Contactar Asesor
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quoter;