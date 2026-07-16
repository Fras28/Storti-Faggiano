import React, { useState } from 'react';
import {
  Car, UserRound, Home, Umbrella, Building2, ShieldCheck,
  ChevronLeft, ChevronDown, CheckCircle2, MessageCircle,
  Handshake, PiggyBank
} from 'lucide-react';

// ── Datos Individuos ──────────────────────────────────────────────────────────
const individuoMain = [
  { id: 'automotor',  title: 'Automotor',           icon: Car },
  { id: 'accidentes', title: 'Accidentes personales', icon: UserRound },
  { id: 'hogar',      title: 'Hogar',                icon: Home },
  { id: 'retiro',     title: 'Seguro de retiro',     icon: PiggyBank },
];

const individuoMore = [
  'Asistencia al viajero',
  'Incendio',
  'Mascotas',
  'Obligaciones patronales',
  'Robo',
  'Seguro de salud',
  'Seguro técnico',
  'Sepelio',
  'Seguro de vida',
  'Embarcaciones',
  'Ecomovilidad',
  'Aeronavegación',
];

// ── Datos Empresas ────────────────────────────────────────────────────────────
const empresaMain = [
  { id: 'automotor',  title: 'Automotor',            icon: Car },
  { id: 'accidentes', title: 'Accidentes personales', icon: UserRound },
  { id: 'integral',   title: 'Integral comercio',    icon: Building2 },
  { id: 'rc',         title: 'Responsabilidad Civil', icon: ShieldCheck },
];

const empresaMore = [
  'Agro',
  'ART',
  'Caución',
  'Incendio',
  'Integral Comercio',
  'Obligaciones Patronales',
  'Praxis',
  'Riesgos Cibernéticos',
  'Robo',
  'Seguro Técnico',
  'Todo Riesgo Operativo',
  'Transporte de Mercadería',
  'Vida Colectivo',
];

// ─────────────────────────────────────────────────────────────────────────────

const Quoter = () => {
  const [clientType, setClientType] = useState(null); // null | 'individuo' | 'empresa'
  const [showMore, setShowMore] = useState(false);

  const mainCards  = clientType === 'individuo' ? individuoMain : empresaMain;
  const moreItems  = clientType === 'individuo' ? individuoMore : empresaMore;
  const ctaLabel   = clientType === 'individuo' ? 'CONTACTAR CON UN ASESOR' : 'QUIERO COTIZAR ESTO';
  const typeLabel  = clientType === 'individuo' ? 'Individuos' : 'Empresas y Pymes';
  const subtitle   = clientType
    ? 'Compare los precios de nuestros aseguradores en calidad de seguros.'
    : 'Seleccioná el perfil para ver las opciones disponibles.';

  const handleWhatsApp = (product) => {
    const msg = encodeURIComponent(
      `Hola! Me interesa obtener una cotización para: ${product} (${typeLabel}).`
    );
    window.open(`https://wa.me/+5492914181273?text=${msg}`, '_blank');
  };

  const handleCTA = () => {
    const msg = encodeURIComponent(
      `Hola! Quisiera cotizar un seguro como ${typeLabel}.`
    );
    window.open(`https://wa.me/+5492914181273?text=${msg}`, '_blank');
  };

  const handleSelect = (type) => {
    setClientType(type);
    setShowMore(false);
  };

  return (
    <div className="py-12 md:py-24 bg-[#fcfdfe] px-4 md:px-6">

      {/* Encabezado */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        <h2 className="text-4xl md:text-6xl text-gray-800 mb-4 break-words">
          ¿Qué le gustaría asegurar hoy?
        </h2>
        <div className="w-16 h-1 bg-teal-500 mx-auto mb-6" />
        <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* ── PASO 1: Elegir tipo de cliente ─────────────────────────────────── */}
      {!clientType && (
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">

          {/* Individuo */}
          <button
            onClick={() => handleSelect('individuo')}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 p-12 flex flex-col items-center gap-5 group"
          >
            <UserRound size={52} className="text-gray-300 group-hover:text-teal-500 transition-colors duration-300" />
            <span className="text-xl font-bold text-gray-700">Individuo</span>
          </button>

          {/* Empresas */}
          <button
            onClick={() => handleSelect('empresa')}
            className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 p-12 flex flex-col items-center gap-5 group"
          >
            <Building2 size={52} className="text-gray-300 group-hover:text-teal-500 transition-colors duration-300" />
            <span className="text-xl font-bold text-gray-700 text-center leading-snug">
              Empresas, Pymes,<br />Comercios y Autónomos
            </span>
          </button>

        </div>
      )}

      {/* ── PASO 2: Productos del tipo seleccionado ─────────────────────────── */}
      {clientType && (
        <div className="max-w-3xl mx-auto animate-in fade-in duration-500">

          {/* Botón volver */}
          <button
            onClick={() => handleSelect(null)}
            className="flex items-center gap-2 text-gray-400 hover:text-teal-500 mb-10 text-[10px] tracking-[0.2em] uppercase transition-colors"
          >
            <ChevronLeft size={14} /> Volver
          </button>

          {/* Cards principales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {mainCards.map(({ id, title, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleWhatsApp(title)}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center gap-4 group"
              >
                <Icon size={38} className="text-gray-300 group-hover:text-teal-500 transition-colors duration-300" />
                <span className="text-xs font-semibold text-gray-600 text-center leading-snug">{title}</span>
              </button>
            ))}
          </div>

          {/* Botón MÁS OPCIONES */}
          {!showMore && (
            <div className="text-center mb-6">
              <button
                onClick={() => setShowMore(true)}
                className="bg-[#78cad3] hover:bg-[#5eb0b9] text-white px-8 py-3 rounded-2xl font-bold text-[10px] tracking-[0.18em] uppercase transition-all flex items-center gap-2 mx-auto shadow"
              >
                MÁS OPCIONES <ChevronDown size={14} />
              </button>
            </div>
          )}

          {/* Lista extendida */}
          {showMore && (
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 mb-6 animate-in fade-in duration-500">
              <ul className="space-y-2">
                {moreItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleWhatsApp(item)}
                      className="w-full flex items-center gap-3 text-gray-600 text-sm px-4 py-3 rounded-2xl hover:bg-teal-50 hover:text-teal-600 transition-all group text-left"
                    >
                      <CheckCircle2 size={16} className="text-teal-400 group-hover:text-teal-500 flex-shrink-0 transition-colors" />
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA WhatsApp (aparece con la lista extendida) */}
          {showMore && (
            <div className="text-center animate-in fade-in duration-500">
              <button
                onClick={handleCTA}
                className="bg-[#78cad3] hover:bg-[#5eb0b9] text-white px-10 py-4 rounded-2xl font-bold text-[10px] tracking-[0.18em] uppercase transition-all flex items-center gap-3 mx-auto shadow-lg"
              >
                <MessageCircle size={16} />
                {ctaLabel}
              </button>
            </div>
          )}

        </div>
      )}

    </div>
  );
};

export default Quoter;
