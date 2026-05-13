import React, { useState } from 'react';
import { Users, PhoneForwarded, Building2, ChevronDown } from 'lucide-react';
import ArtInstructions from './ArtInstructions';

import FedPat    from "../../assets/datos-utiles/Federación-Patronal.png";
import Sancor    from "../../assets/datos-utiles/Sancor-Seguros.png";
import Coopera   from "../../assets/datos-utiles/Cooperación-Seguros.png";
import ProvSeg   from "../../assets/datos-utiles/Provincia-Seguros.png";
import SanCris   from "../../assets/datos-utiles/San-Cristobal.png";
import CNP       from "../../assets/datos-utiles/CNP-Seguros.png";

const SiniestroSteps = [
  { icon: <Users size={22}/>,         text: "Datos del conductor del vehículo asegurado y del tercero involucrado." },
  { icon: <PhoneForwarded size={22}/>, text: "Si hubiere intervención de Policía y/o Ambulancia, podés comunicarte al 0800-222-0022 para solicitar asistencia legal." },
  { icon: <Building2 size={22}/>,      text: "Denunciá tu siniestro ante la compañía." },
];

const paymentCompanies = [
  {
    name: "Federación Patronal",
    logo: FedPat,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá a www.federacionpatronal.com.ar con tu número de póliza." },
    ],
  },
  {
    name: "Sancor Seguros",
    logo: Sancor,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá a www.sancorseguros.com.ar con tu número de póliza." },
    ],
  },
  {
    name: "Cooperación Seguros",
    logo: Coopera,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá al portal de clientes con tu número de póliza." },
    ],
  },
  {
    name: "Provincia Seguros",
    logo: ProvSeg,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá a www.provinciaseguros.com.ar con tu número de póliza." },
    ],
  },
  {
    name: "San Cristóbal Seguros",
    logo: SanCris,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá a www.sancristobal.com.ar con tu número de póliza." },
    ],
  },
  {
    name: "CNP Seguros",
    logo: CNP,
    methods: [
      { label: "Débito automático", desc: "Solicitalo a tu asesor con CBU/CVU de tu cuenta." },
      { label: "Rapipago / Pago Fácil", desc: "Presentando el cupón de pago en cualquier sucursal." },
      { label: "Online", desc: "Ingresá al portal de clientes con tu número de póliza." },
    ],
  },
];

const CompanyCard = ({ company }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-[2rem] overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
      {/* Header con logo + nombre */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-10 flex items-center justify-center">
            <img src={company.logo} alt={company.name} className="max-h-10 max-w-full object-contain" />
          </div>
          <span className="text-[#1a2e44] font-semibold text-base">{company.name}</span>
        </div>
        <ChevronDown
          size={18}
          className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Métodos de pago desplegables */}
      <div className={`transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          {company.methods.map((m, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-4">
              <p className="text-[#72c0c9] font-semibold text-xs uppercase tracking-wider mb-1">{m.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const InstructionalSections = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-28">

        {/* Sección Siniestros */}
        <div id="siniestros">
          <h2 className="font-normal text-[#1a2e44] mb-4">Siniestro de Automotor</h2>
          <p className="text-gray-500 text-lg mb-10">
            Ante un siniestro de vehículo, estos son los pasos a seguir para gestionar tu denuncia de manera correcta:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {SiniestroSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-5 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                <div className="text-[#72c0c9] bg-white p-4 rounded-2xl shadow-sm flex-shrink-0">{step.icon}</div>
                <p className="text-gray-700 leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección ART */}
        <ArtInstructions />

        {/* Sección Pagos */}
        <div id="pagos">
          <h2 className="font-normal text-[#1a2e44] mb-4">¿Cómo abonar tu seguro?</h2>
          <p className="text-gray-500 text-lg mb-10">
            Cada compañía tiene sus propios canales de pago. Seleccioná tu aseguradora para ver los medios disponibles.
          </p>
          <div className="flex flex-col gap-3">
            {paymentCompanies.map((company, i) => (
              <CompanyCard key={i} company={company} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstructionalSections;
