import React from 'react';
import { Check } from 'lucide-react';

const QualityPolicy = () => {
  const commitments = [
    "Entender las necesidades y expectativas de nuestros clientes para proporcionar soluciones de seguros y servicios personalizadas y de alta calidad.",
    "Brindar un servicio al cliente excepcional, siendo accesibles, receptivos y proactivos en la gestión de reclamos y consultas.",
    "Mantener altos estándares de calidad en nuestros servicios, asegurando la precisión, confiabilidad y eficacia en todas las operaciones.",
    "Mejorar continuamente nuestros procesos y sistemas para optimizar la eficiencia y la eficacia en la prestación de servicios y de nuestro Sistema de Gestión de la Calidad.",
    "Cumplir con todas las leyes, regulaciones y requisitos aplicables.",
    "Revisar esta política para su continua adecuación.",
    "Capacitar y desarrollar a nuestro equipo para fomentar un entorno de trabajo colaborativo, profesional y orientado al cliente."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Título de la Sección */}
        <h2 className="text-5xl font-serif text-[#1a2e44] text-center mb-12">
          Política de calidad
        </h2>

        {/* Bloque de Visión y Política General */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-12">
          <p>
            La Organización Storti Faggiano tiene como visión <span className="italic">"ser reconocidos como líderes en la industria de seguros y servicios, distinguiéndonos por nuestra excelencia en la atención al cliente y a los productores, nuestra innovación continua y nuestro compromiso con la integridad y la responsabilidad; siendo la primera opción para nuestros clientes al momento de buscar protección y seguridad patrimonial. Trabajamos en forma continua para nuestra expansión organizacional"</span>.
          </p>
          <p>
            Su política de calidad está orientada al compromiso con la excelencia en la prestación de seguros y servicios para satisfacer las necesidades y expectativas de nuestros clientes.
          </p>
          <p className="font-semibold text-[#1a2e44]">
            Para lograrlo nos comprometemos a:
          </p>
        </div>

        {/* Listado de Compromisos */}
        <ul className="space-y-4 mb-12">
          {commitments.map((text, index) => (
            <li key={index} className="flex items-start gap-4 text-gray-700">
              <div className="mt-1 flex-shrink-0 bg-[#0095ff]/10 p-1 rounded-full">
                <Check size={18} className="text-[#0095ff]" />
              </div>
              <span className="text-base md:text-lg">{text}</span>
            </li>
          ))}
        </ul>

        {/* Conclusión */}
        <div className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm italic text-gray-600 leading-relaxed">
          Nuestro compromiso es cumplir con estos principios y trabajar para alcanzar la excelencia en la prestación de seguros y servicios; asimismo, nos comprometemos a que esta Política provea un marco de referencia para establecer y revisar los objetivos de calidad y fomentar una cultura basada en la mejora continua de su Sistema de Gestión de Calidad.
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;