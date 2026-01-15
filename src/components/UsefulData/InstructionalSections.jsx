import React from 'react';
import { FileText, User, Shield, PhoneForwarded } from 'lucide-react';
import ArtInstructions from './ArtInstructions';

const SiniestroSteps = [
  { icon: <FileText size={22}/>, text: "Datos de la Tarjeta Verde (Titular y patente)." },
  { icon: <User size={22}/>, text: "Datos del conductor y licencia de conducir vigente." },
  { icon: <Shield size={22}/>, text: "Datos del Seguro (Póliza y compañía)." },
  { icon: <PhoneForwarded size={22}/>, text: "Asistencia legal al 0800-222-0022 (si hubo heridos o policía)." },
];

const InstructionalSections = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-32">
        
        {/* Sección Siniestros */}
        <div id="siniestros">
          <h2 className="text-5xl md:text-6xl font-yanone text-[#1a2e44] mb-6 uppercase">¿Tuviste un siniestro?</h2>
          <p className="text-gray-600 text-lg mb-12">Recopilá esta información clave en el momento del hecho para agilizar tu denuncia:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SiniestroSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 bg-gray-50 p-6 rounded-[32px] border border-gray-100 hover:bg-white hover:shadow-md transition-all">
                <div className="text-[#72c0c9] bg-white p-4 rounded-2xl shadow-sm">{step.icon}</div>
                <p className="text-gray-700 font-medium leading-tight">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <ArtInstructions />

        {/* Sección Pagos */}
        <div className="pt-20 border-t border-gray-100" id="pagos">
          <h2 className="text-5xl md:text-6xl font-yanone text-[#1a2e44] mb-8 uppercase text-center">Medios de Pago</h2>
          <div className="bg-[#1a2e44] p-12 rounded-[40px] text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <p className="text-xl leading-relaxed mb-8 font-light text-gray-200">
                Podés abonar tu póliza mediante débito automático (recomendado), transferencia bancaria, o plataformas digitales de pago. 
              </p>
              <div className="inline-block bg-[#72c0c9] px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm">
                CBU / Cupón de Pago / App
              </div>
            </div>
            {/* Elemento decorativo */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionalSections;