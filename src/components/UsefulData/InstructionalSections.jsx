import React from 'react';
import { Users, PhoneForwarded, ArrowRight, Clock, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';
import ArtInstructions from './ArtInstructions';

const SiniestroSteps = [
  { icon: <Clock size={22}/>,           text: "Vas a tener que realizar la denuncia administrativa dentro de las 72 hs. hábiles." },
  { icon: <Users size={22}/>,           text: "Recabá los siguientes datos de/los tercero/s involucrado/s:", sub: ["Del conductor: nombre, apellido, DNI, teléfono.", "Del vehículo: marca/modelo, patente, propietario, compañía de seguro."] },
  { icon: <Camera size={22}/>,          text: "Tomá fotografías del momento del hecho y de los vehículos involucrados." },
  { icon: <PhoneForwarded size={22}/>,  text: "En caso de lesionados, llamá a la policía y/o ambulancia. Podés comunicarte al 0800-222-0022 para solicitar asistencia legal." },
];

const InstructionalSections = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-28">

        {/* Siniestros */}
        <div id="siniestros">
          <h2 className="font-normal text-[#1a2e44] mb-4">Siniestro de Automotor</h2>
          <p className="text-gray-500 text-lg mb-10">
            Sabemos que un accidente de tránsito genera nervios y dudas. Por eso te dejamos la información clave que necesitás recopilar en el momento:
          </p>
          <div className="grid grid-cols-1 gap-4">
            {SiniestroSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-5 bg-gray-50 p-6 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                <div className="text-[#72c0c9] bg-white p-4 rounded-2xl shadow-sm flex-shrink-0">{step.icon}</div>
                <div>
                  <p className="text-gray-700 leading-snug">{step.text}</p>
                  {step.sub && (
                    <ul className="mt-2 space-y-1 list-disc list-inside text-gray-500 text-sm">
                      {step.sub.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ART */}
        <ArtInstructions />

        {/* Portal de Pagos - acceso */}
        <div id="pagos" className="bg-[#1a2e44] rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <p className="text-xs uppercase tracking-[0.3em] text-[#72c0c9] mb-3">MEDIOS DE PAGO</p>
            <h2 className="font-normal text-white mb-3">Portal de Pagos</h2>
            <p className="text-gray-300 font-light max-w-md">
              Consultá los medios disponibles para abonar tu póliza: débito automático, transferencia, tarjeta y más — organizados por medio de pago.
            </p>
          </div>
          <Link
            to="/portal-de-pagos"
            className="inline-flex items-center gap-3 bg-[#72c0c9] hover:bg-[#5eb0b9] text-white px-8 py-4 rounded-2xl font-bold text-xs tracking-widest uppercase transition-all shadow-lg flex-shrink-0"
          >
            Ver Portal de Pagos
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InstructionalSections;
