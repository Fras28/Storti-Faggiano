import React from 'react';
import { FileText, User, Shield, PhoneForwarded } from 'lucide-react';
import ArtInstructions from './ArtInstructions';

const SiniestroSteps = [
  { icon: <FileText size={20}/>, text: "Los datos de la Tarjeta Verde (Titular del vehículo y patente)." },
  { icon: <User size={20}/>, text: "Datos personales del conductor y de su licencia de conducir (Nombre, apellido, DNI, teléfono, categoría habilitante y vigencia)." },
  { icon: <Shield size={20}/>, text: "Los datos del Seguro (Titular de la póliza, vigencia, compañía aseguradora)." },
  { icon: <PhoneForwarded size={20}/>, text: "Si hubiere intervención de Policía y/o Ambulancia deberás comunicarte al 0800-222-0022 para solicitar asistencia legal." },
];

const InstructionalSections = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-24">
        
        {/* Sección Siniestros */}
        <div>
          <h2 className="text-4xl font-serif text-[#1a2e44] mb-4">¿Tuviste un siniestro? Seguí estos pasos</h2>
          <p className="text-gray-600 mb-10">Sabemos que un accidente genera nervios y dudas. Por eso te dejamos la información clave que necesitás recopilar en el momento.</p>
          <div className="space-y-6">
            {SiniestroSteps.map((step, i) => (
              <div key={i} className="flex items-center gap-6 bg-gray-50 p-5 rounded-2xl border border-gray-100">
                <div className="text-sf-teal bg-white p-3 rounded-lg shadow-sm">{step.icon}</div>
                <p className="text-gray-700 font-medium">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
        <ArtInstructions />
        {/* Sección Pagos */}
        <div className="border-t pt-20">
          <h2 className="text-4xl font-serif text-[#1a2e44] mb-6">¿Cómo abonar tu seguro?</h2>
          <div className="bg-gray-50 p-10 rounded-[40px] border border-dashed border-sf-teal/30">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Podés pagar tu póliza de forma rápida y segura desde donde estés: online, por app o a través de tu Productor Asesor. Elegí el método que más te convenga.
            </p>
            <p className="font-bold text-sf-teal text-lg">
              Recordá que con tu número de CBU o tarjeta de crédito podés adherir todas tus pólizas al sistema de débito automático de todas nuestras compañías.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructionalSections;