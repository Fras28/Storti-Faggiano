import React, { useState, useRef } from 'react';
import {
  ChevronDown, MessageCircle, CreditCard, Repeat2, ArrowLeftRight,
  Building2, CheckCircle2, Globe, Landmark, Banknote, PlayCircle
} from 'lucide-react';

import FedPat  from "../assets/datos-utiles/Federación-Patronal.png";
import Sancor  from "../assets/datos-utiles/Sancor-Seguros.png";
import Coopera from "../assets/datos-utiles/Cooperación-Seguros.png";
import ProvSeg from "../assets/datos-utiles/Provincia-Seguros.png";
import CNP     from "../assets/datos-utiles/CNP-Seguros.png";

const WHATSAPP_URL = "https://wa.me/5492914555555?text=Hola!%20Quiero%20pagar%20con%20tarjeta%20mi%20p%C3%B3liza.";

// Portales de autogestión + instructivo paso a paso y videos de cada compañía.
const insurerPortals = [
  {
    name: "Federación Patronal",
    logo: FedPat,
    web: "https://online.fedpat.com.ar/autogestion/ui#/login",
    steps: [
      "Accedé al portal de asegurados.",
      "Ingresá con el DNI/CUIT del titular y la contraseña del portal. Si no tenés usuario, registrate allí con tus datos.",
      "Te aparecerán todas tus pólizas vigentes.",
      "Seleccioná la póliza que querés pagar y se desplegará su información.",
      'Apretá el botón "Pagar".',
      "Elegí el importe de la/s cuota/s y el medio de pago.",
      "Completá los datos de pago y aboná.",
    ],
    videos: [{ label: "Video: pago en el portal", id: "7e7b2R3ysEE" }],
  },
  {
    name: "Sancor Seguros",
    logo: Sancor,
    web: "https://www.sancorseguros.com.ar/autogestion",
    steps: [
      "Accedé al portal de asegurados.",
      'Apretá el botón "Ingresá a Autogestión".',
      'Apretá "Ingresar". Si aún no tenés cuenta, apretá "Crear una cuenta".',
      "Iniciá sesión con tu mail y contraseña.",
      'Apretá el botón "Pagar mis Seguros".',
      'Seleccioná la póliza y la cuota que querés abonar y apretá "Pagar ahora".',
      "Completá los datos de pago y aboná.",
    ],
    videos: [
      { label: "Video: acceso al portal", id: "TGCpjt-4IEo" },
      { label: "Video: cómo pagar", id: "2xODV6LzKgs" },
    ],
  },
  {
    name: "Cooperación Seguros",
    logo: Coopera,
    web: "https://asegurados.cooperacionseguros.com.ar/",
    steps: [
      "Accedé al portal de asegurados.",
      'Colocá el DNI/CUIT del titular y apretá "Ingresar". Si ya tenés usuario, te pedirá la contraseña; si no, registrate con tu número de DNI.',
      "Te aparecerán todas tus pólizas vigentes.",
      'Buscá la póliza que querés pagar y apretá "Ver Pagos".',
      'Verás los pagos pendientes y los últimos realizados. Apretá el botón "Pagar" en la parte superior.',
      "Seleccioná el medio de pago.",
      "Seleccioná las cuotas que querés pagar.",
      "Completá los datos de pago y aboná.",
    ],
    videos: [{ label: "Video: pago en el portal", id: "a-_EHEv1PWA" }],
  },
  {
    name: "Provincia Seguros",
    logo: ProvSeg,
    web: "https://appsc.provinciaseguros.com.ar/webclientes/#/login",
  },
  {
    name: "CNP Seguros",
    logo: CNP,
    web: "https://clientes.cnp.com.ar/auth/login",
  },
];

// Instructivos paso a paso de los portales de pago online.
const onlineGuides = [
  {
    name: "Mercado Pago",
    steps: [
      "Ingresá a la app de Mercado Pago desde tu celular.",
      'Seleccioná "Pagos".',
      'Seleccioná "Pagar una cuenta".',
      'Presioná el botón "Buscar empresa".',
      "Escribí el nombre de la compañía de tu póliza (Federación Patronal, Sancor Seguros o Cooperación Seguros).",
      "Te aparecerán todas tus pólizas vigentes.",
      "Seleccioná la póliza que querés pagar y se desplegará su información.",
      'Seleccioná "Pagar".',
      "Elegí el importe de la/s cuota/s a abonar y el medio de pago.",
      "Completá los datos de pago y aboná.",
    ],
    videos: [{ label: "Video: cómo pagar por Mercado Pago", id: "nCIULZtf1ic" }],
  },
  {
    name: "Rapipago Online",
    steps: [
      "Ingresá a la página de Rapipago.",
      'Seleccioná el botón de pago online con tarjeta de débito que dice "pagá acá".',
      'En el buscador "Ingrese la provincia", escribí y seleccioná la provincia donde estás.',
      'Apretá el botón "Pago de Facturas".',
      "En el buscador de empresas, seleccioná la compañía de seguros de la póliza a abonar (Federación Patronal, Sancor, Cooperación, etc.).",
      'Seleccioná "Cobranza sin factura".',
      'Ingresá el DNI o CUIT del titular y seleccioná "Continuar". Si tenés Federación Patronal, te pedirá el número de cliente (lo encontrás en la primera hoja de tu póliza o en la cuponera de pago).',
      "Te aparecerán las cuotas impagas de tus pólizas vigentes, empezando por la más próxima a vencer.",
      'Seleccioná la cuota a abonar y apretá "Continuar".',
      'Revisá la información de la cuota. Si es correcta, seleccioná "Confirmar".',
      'Ingresá los datos de la tarjeta y seleccioná "Pagar".',
    ],
  },
  {
    name: "RIPSA Online",
    steps: [
      "Ingresá a la página de Ripsa.",
      'Ingresá con tu cuenta de Ripsa o de Gmail. Si no tenés cuenta, creá una apretando "Regístrese para crear una cuenta" (te pedirá un mail y una contraseña).',
      "Finalizá la registración activando la cuenta desde el correo de confirmación que te enviarán.",
      'Ya dentro del sistema, en "Nuevo Pago", apretá el botón "Sin Factura".',
      "Buscá la compañía de la póliza que querés abonar (Federación Patronal, Cooperación Seguros, Sancor Seguros, etc.).",
      "Para Federación Patronal o Sancor, ingresá el DNI/CUIT del titular. Para Cooperación Seguros, te pedirá el número de referencia (lo encontrás en la 1ra página de tu póliza).",
      "Te aparecerán las cuotas disponibles de pago.",
      "Seleccioná la/s cuota/s que quieras abonar.",
      'Apretá el botón "Pagar".',
      'Completá los datos de la tarjeta y personales, y finalizá apretando "Pagar".',
      "¡Listo! Ya abonaste tu póliza. No necesitás enviar ningún comprobante.",
    ],
  },
];

const paymentMethods = [
  {
    id: "debito-automatico",
    icon: <Repeat2 size={24} />,
    title: "Débito Automático",
    badge: "Recomendado",
    desc: "Adherite o modificá el débito automático para una o varias pólizas, para que se descuente automáticamente sin que tengas que recordarlo.",
    detail: "Por favor envianos tu número de CBU (22 dígitos) o los datos del frente de tu tarjeta de crédito para que podamos registrarla en el sistema.",
    steps: [
      "Solicitalo a tu asesor con el CBU o CVU de tu cuenta.",
      "Recibirás una confirmación de adhesión por email.",
      "El importe se debitará automáticamente en la fecha de vencimiento.",
    ],
  },
  {
    id: "pagos-online",
    icon: <Globe size={24} />,
    title: "Pagos Online",
    badge: null,
    desc: "Aboná tus pólizas desde portales de pago online. Elegí uno para ver el paso a paso.",
    guides: onlineGuides,
  },
  {
    id: "portal-asegurados",
    icon: <Building2 size={24} />,
    title: "Portal Asegurados",
    badge: null,
    desc: "Pagá desde el portal de autogestión de tu compañía de seguros. Elegí tu compañía para ver el instructivo y acceder al portal.",
    portals: true,
  },
  {
    id: "banco-otros-medios",
    icon: <Landmark size={24} />,
    title: "Banco y otros medios",
    badge: null,
    desc: "Podés abonar tus pólizas a través de tu homebanking, Pagos Mis Cuentas o Red Link.",
    items: ["Homebanking", "Pagos Mis Cuentas", "Red Link"],
  },
  {
    id: "tarjeta",
    icon: <CreditCard size={24} />,
    title: "Tarjeta de Débito o Crédito",
    badge: null,
    desc: "Pedinos un link de pago para abonar en el momento con tu tarjeta de crédito o débito.",
    cta: {
      label: "Pagar con tarjeta por WhatsApp",
      icon: <MessageCircle size={16} />,
      href: WHATSAPP_URL,
    },
  },
  {
    id: "efectivo",
    icon: <Banknote size={24} />,
    title: "Pagos Manuales / Efectivo",
    badge: null,
    desc: "Podés abonar tus pólizas en distintas oficinas físicas con el código correspondiente.",
  },
  {
    id: "transferencia",
    icon: <ArrowLeftRight size={24} />,
    title: "Transferencia",
    badge: null,
    desc: "Podés abonar tus pólizas transfiriendo al CBU de la compañía, enviando el comprobante a tu asesor para acreditar el pago.",
    steps: [
      "Solicitá el CBU de la compañía a tu asesor.",
      "Realizá la transferencia desde tu homebanking o app bancaria.",
      "Enviá el comprobante por WhatsApp o email a tu asesor.",
    ],
  },
];

// Lista de pasos numerados reutilizable.
const Steps = ({ steps }) => (
  <ol className="space-y-2">
    {steps.map((s, i) => (
      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
        <span className="bg-[#72c0c9] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
        {s}
      </li>
    ))}
  </ol>
);

// Video de YouTube embebido y responsivo (16:9). Solo se carga cuando el instructivo está abierto.
const VideoEmbed = ({ label, id }) => (
  <div className="space-y-1.5">
    <p className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold">
      <PlayCircle size={14} className="text-[#72c0c9]" />
      {label}
    </p>
    <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={label}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

// Sub-acordeón para un instructivo (portal online o compañía). Estado local independiente.
const InstructivoAccordion = ({ logo, name, portalUrl, steps, videos }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-4 text-left hover:bg-white transition-colors"
      >
        <div className="flex items-center gap-3">
          {logo && (
            <div className="w-14 h-8 flex items-center flex-shrink-0">
              <img src={logo} alt={name} className="max-h-8 max-w-full object-contain" />
            </div>
          )}
          <span className="text-gray-700 text-sm font-medium">{name}</span>
        </div>
        <ChevronDown size={16} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-4 pb-4 space-y-4">
            {portalUrl && (
              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#72c0c9] hover:bg-[#5aa8b1] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                Ir al portal
                <span>→</span>
              </a>
            )}
            {steps && <Steps steps={steps} />}
            {open && videos && videos.map((v, i) => <VideoEmbed key={i} label={v.label} id={v.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const MethodAccordion = ({ method, open, onToggle, innerRef }) => (
  <div ref={innerRef} className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all scroll-mt-28">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 text-left"
    >
      <div className="flex items-center gap-4">
        <div className="bg-[#72c0c9]/10 p-3 rounded-2xl text-[#72c0c9] flex-shrink-0">{method.icon}</div>
        <div>
          <span className="text-[#1a2e44] font-semibold text-base">{method.title}</span>
          {method.badge && (
            <span className="ml-3 bg-[#72c0c9]/15 text-[#2a6f7a] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
              {method.badge}
            </span>
          )}
        </div>
      </div>
      <ChevronDown size={18} className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
    </button>

    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">
        <div className="px-6 pb-6 space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>

          {method.detail && (
            <div className="bg-gray-50 rounded-2xl p-4">
              <p className="text-gray-600 text-sm leading-relaxed">{method.detail}</p>
            </div>
          )}

          {method.steps && <Steps steps={method.steps} />}

          {method.items && (
            <ul className="space-y-1">
              {method.items.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                  <CheckCircle2 size={13} className="text-[#72c0c9] flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          )}

          {method.guides && (
            <div className="flex flex-col gap-2">
              {method.guides.map((g, i) => (
                <InstructivoAccordion key={i} name={g.name} steps={g.steps} videos={g.videos} />
              ))}
            </div>
          )}

          {method.portals && (
            <div className="flex flex-col gap-2">
              {insurerPortals.map((c, i) => (
                <InstructivoAccordion
                  key={i}
                  logo={c.logo}
                  name={c.name}
                  portalUrl={c.web}
                  steps={c.steps}
                  videos={c.videos}
                />
              ))}
            </div>
          )}

          {method.cta && (
            <a
              href={method.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all shadow"
            >
              {method.cta.icon}
              {method.cta.label}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const PortalPagos = () => {
  const [openId, setOpenId] = useState(paymentMethods[0].id);
  const refs = useRef({});

  const goToMethod = (id) => {
    setOpenId(id);
    // Espera a que el acordeón abra para que el scroll quede bien posicionado
    setTimeout(() => {
      refs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="bg-[#f9fafb] min-h-screen">

      {/* Hero */}
      <div className="bg-[#1a2e44] py-16 px-6">
        <div className="max-w-4xl mx-auto text-white">
          <span className="text-xs uppercase tracking-[0.4em] mb-4 block text-[#72c0c9]">DATOS ÚTILES</span>
          <h1 className="font-normal mb-4">Portal de Pagos</h1>
          <p className="text-gray-300 text-lg font-light max-w-xl">
            Conocé todos los medios disponibles para abonar tu póliza de forma rápida y segura.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Botones de acceso rápido por medio de pago */}
        <div>
          <h2 className="font-normal text-[#1a2e44] mb-4">Medios de pago</h2>
          <p className="text-gray-500 text-lg mb-8">
            Elegí cómo querés pagar y mirá el detalle de cada medio.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => goToMethod(method.id)}
                className={`flex flex-col items-center gap-3 p-6 rounded-[2rem] border transition-all text-center
                  ${openId === method.id
                    ? 'bg-[#72c0c9] border-[#72c0c9] text-white shadow-lg'
                    : 'bg-white border-gray-100 text-[#1a2e44] shadow-sm hover:shadow-md hover:-translate-y-0.5'}`}
              >
                <div className={`p-3 rounded-2xl ${openId === method.id ? 'bg-white/20 text-white' : 'bg-[#72c0c9]/10 text-[#72c0c9]'}`}>
                  {method.icon}
                </div>
                <span className="text-xs font-semibold leading-tight">{method.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detalle por medio de pago */}
        <div id="pagos">
          <div className="flex flex-col gap-3">
            {paymentMethods.map((method) => (
              <MethodAccordion
                key={method.id}
                method={method}
                open={openId === method.id}
                onToggle={() => setOpenId(openId === method.id ? null : method.id)}
                innerRef={(el) => { refs.current[method.id] = el; }}
              />
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default PortalPagos;
