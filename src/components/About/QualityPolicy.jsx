import React from 'react';
import { Check } from 'lucide-react';

const commitments = [
  "Entender las necesidades y expectativas de nuestros clientes para proporcionar soluciones de seguros y servicios personalizadas y de alta calidad.",
  "Brindar un servicio al cliente excepcional, siendo accesibles, receptivos y proactivos en la gestión de reclamos y consultas.",
  "Mantener altos estándares de calidad en nuestros servicios, asegurando la precisión, confiabilidad y eficacia en todas las operaciones.",
  "Mejorar continuamente nuestros procesos y sistemas para optimizar la eficiencia y la eficacia en la prestación de servicios y de nuestro Sistema de Gestión de la Calidad.",
  "Cumplir con todas las leyes, regulaciones y requisitos aplicables.",
  "Revisar esta política para su continua adecuación.",
  "Capacitar y desarrollar a nuestro equipo para fomentar un entorno de trabajo colaborativo, profesional y orientado al cliente."
];

const QualityPolicy = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center mb-12">Política de calidad</h2>

        <div className="space-y-6 text-gray-700 mb-12">
          <p className="body">
            La Organización Storti Faggiano es una empresa de servicios de seguros que tiene como visión la <span className=" font-bold">"Excelencia en la gestión organizacional"</span>.
          </p>
          <p className="body">
            Su política de calidad está orientada al compromiso con la excelencia en la prestación de seguros y servicios para satisfacer las necesidades y expectativas de nuestros clientes.
          </p>
          <p className="h4 text-[#1a2e44]">Para lograrlo nos comprometemos a:</p>
        </div>

        <ul className="space-y-4 mb-12">
          {commitments.map((text, index) => (
            <li key={index} className="flex items-start gap-4 text-gray-700">
              <div className="mt-1 flex-shrink-0 bg-[#72c0c9]/10 p-1 rounded-full">
                <Check size={18} className="text-[#72c0c9]" />
              </div>
              <p className="body">{text}</p>
            </li>
          ))}
        </ul>

        <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm  text-gray-600 caption">
          Nuestro compromiso es cumplir con estos principios y trabajar para alcanzar la excelencia...
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;