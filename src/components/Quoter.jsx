import React, { useState } from 'react';
import { 
  Car, HeartPulse, Home, Users, HardHat, Plane, 
  Stethoscope, Truck, UserRound, Wrench, HandCoins, 
  Building2, Tractor, Anchor, Settings, Umbrella, 
  Flame, Building, Zap, Bird, Dog, ChevronDown, ChevronUp, MessageCircle 
} from 'lucide-react';

const insuranceTypes = [
  { id: 1, title: "Automotor", icon: <Car size={44} />, desc: "Protección total para tu vehículo.", details: "Coberturas contra terceros, todo riesgo, robo e incendio. Incluye asistencia mecánica las 24hs y extensión de cobertura en países limítrofes." },
  { id: 2, title: "Salud", icon: <HeartPulse size={44} />, desc: "Tu bienestar y el de tu familia.", details: "Planes prestacionales de alta complejidad, consultas médicas, internación y descuentos en farmacias con las mejores cartillas del país." },
  { id: 3, title: "Hogar", icon: <Home size={44} />, desc: "Tu casa, siempre protegida.", details: "Cobertura contra incendio, robo de contenido, daños por agua y cristales. Incluye servicios de urgencias de plomería, gas y electricidad." },
  { id: 4, title: "Vida", icon: <Users size={44} />, desc: "Protección para tus seres queridos.", details: "Asegurá el futuro de tu familia ante cualquier imprevisto. Capital asegurable flexible y opciones de ahorro." },
  { id: 5, title: "ART", icon: <HardHat size={44} />, desc: "Asegurá a tu personal.", details: "Cumplimiento de la Ley 24.557. Prevención de riesgos laborales y asistencia médica integral para tus trabajadores." },
  { id: 6, title: "Viaje", icon: <Plane size={44} />, desc: "Cobertura global.", details: "Asistencia médica internacional, seguro por pérdida de equipaje y repatriación sanitaria para que viajes con total tranquilidad." },
  { id: 7, title: "Praxis", icon: <Stethoscope size={44} />, desc: "Protege tu práctica profesional.", details: "Respaldo ante reclamos por responsabilidad profesional médica y de salud. Defensa legal y protección de patrimonio." },
  { id: 8, title: "Transporte de Mercadería", icon: <Truck size={44} />, desc: "Carga segura en todo destino.", details: "Cobertura para mercaderías durante el tránsito terrestre, marítimo o aéreo ante choques, vuelcos, incendios o robos." },
  { id: 9, title: "Accidentes personales", icon: <UserRound size={44} />, desc: "Protección ante imprevistos.", details: "Indemnización por fallecimiento o invalidez total/parcial permanente causada por accidentes ocurridos durante el trabajo o vida privada." },
  { id: 10, title: "Responsabilidad Civil", icon: <Wrench size={44} />, desc: "Proteja su empresa.", details: "Cobertura ante reclamos de terceros por daños causados en el ejercicio de tu actividad comercial o profesional." },
  { id: 11, title: "Caución", icon: <HandCoins size={44} />, desc: "Garantía de cumplimiento.", details: "Garantías contractuales, aduaneras y de alquileres. La forma más ágil de asegurar el cumplimiento de tus obligaciones." },
  { id: 12, title: "Integral Comercio", icon: <Building2 size={44} />, desc: "Tu negocio bajo control.", details: "Seguro multiriesgo para locales comerciales: incendio, robo, responsabilidad civil y daños a la propiedad." },
  { id: 13, title: "Agro", icon: <Tractor size={44} />, desc: "El mejor respaldo para tu cosecha.", details: "Seguros contra granizo, incendio y vientos fuertes. Multiriesgo agrícola adaptado a cada zona productiva." },
  { id: 14, title: "Embarcaciones", icon: <Anchor size={44} />, desc: "Navegá con cobertura.", details: "Protección para lanchas, veleros y cruceros. Responsabilidad civil por colisión, auxilio y salvamento." },
  { id: 15, title: "Técnico", icon: <Settings size={44} />, desc: "Activos industriales seguros.", details: "Cobertura para maquinaria pesada, equipos electrónicos y equipos de contratistas ante averías o daños externos." },
  { id: 16, title: "Retiro", icon: <Umbrella size={44} />, desc: "Planeá tu futuro hoy.", details: "Seguro con capitalización para complementar tu jubilación. Flexibilidad en aportes y rentabilidad garantizada." },
  { id: 17, title: "Fire", icon: <Flame size={44} />, desc: "Contra daños por incendios.", details: "Protección específica para edificios y contenidos ante la acción directa o indirecta del fuego, rayo o explosión." },
  { id: 18, title: "Integral Consorcio", icon: <Building size={44} />, desc: "Seguro para condominios.", details: "Cobertura integral para edificios de departamentos y oficinas: partes comunes, RC ascensores e incendio." },
  { id: 19, title: "Ecomovilidad", icon: <Zap size={44} />, desc: "Transporte sostenible.", details: "Seguro especializado para bicicletas, monopatines eléctricos y vehículos híbridos o eléctricos." },
  { id: 20, title: "Sepelio", icon: <Bird size={44} />, desc: "Gastos cubiertos.", details: "Servicio prestacional o reintegro de gastos de sepelio para aliviar a la familia en momentos difíciles." },
  { id: 21, title: "Mascotas", icon: <Dog size={44} />, desc: "Para tu compañero fiel.", details: "Cobertura de gastos veterinarios por accidentes, responsabilidad civil por daños y asistencia en caso de extravío." },
];

const Quoter = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleCard = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const handleWhatsApp = (title) => {
    const phoneNumber = "542914553332"; // Número que aparece en tu imagen
    const message = `Hola! Vengo de la web y me gustaría recibir asesoramiento sobre el seguro de: ${title}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Yanone_Kaffeesatz'] tracking-wide uppercase">
          ¿Qué le gustaría asegurar hoy?
        </h2>
        <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
          Compare los precios de nuestras aseguradoras en cuestión de segundos. 
          Hacé clic en una categoría para ver más detalles.
        </p>
      </div>

      {/* Grid de Seguros */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insuranceTypes.map((item) => (
          <div 
            key={item.id}
            className={`flex flex-col overflow-hidden border rounded-3xl transition-all duration-500 ${
              activeId === item.id 
                ? 'border-[#0095ff] shadow-2xl ring-1 ring-[#0095ff]/10 scale-[1.02]' 
                : 'border-gray-100 shadow-sm hover:border-blue-200 hover:shadow-md'
            }`}
          >
            {/* Cabecera de la Tarjeta */}
            <div 
              onClick={() => toggleCard(item.id)}
              className="p-10 bg-white cursor-pointer flex flex-col items-center justify-center text-center relative group"
            >
              <div className={`transition-all duration-500 mb-6 ${
                activeId === item.id ? 'text-[#0095ff] scale-110' : 'text-gray-800 group-hover:text-[#0095ff]'
              }`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#0095ff] transition-colors uppercase tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                {activeId === item.id ? 'Cerrar detalle' : 'Ver información'}
              </p>

              <div className={`mt-3 transition-transform duration-300 ${activeId === item.id ? 'rotate-180 text-[#0095ff]' : 'text-gray-300'}`}>
                <ChevronDown size={24} />
              </div>
            </div>

            {/* Panel Desplegable */}
            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
              activeId === item.id ? 'max-h-[500px] opacity-100 bg-gray-50' : 'max-h-0 opacity-0'
            }`}>
              <div className="p-8 border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-8 leading-relaxed italic">
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

      {/* Footer del Cotizador */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">
          Storti-Faggiano | 25 años de trayectoria brindando respaldo y confianza.
        </p>
      </div>
    </section>
  );
};

export default Quoter;