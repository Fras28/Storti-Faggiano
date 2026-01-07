import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, CheckSquare, CheckCircle2 } from 'lucide-react';
import AboutImg from "../assets/Hero/asesoramiento.png";

const stats = [
    { icon: <ShieldCheck size={32} />, number: "25+", label: "Años de experiencia" },
    { icon: <Users size={32} />, number: "10,000+", label: "Clientes felices" },
    { icon: <Award size={32} />, number: "10", label: "Socios aseguradores" },
    { icon: <CheckSquare size={32} />, number: "98%", label: "Satisfacción" },
];

const AboutUsVertical = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
            <h2 className='m-auto text-center pb-10'>Nosotros</h2>
            <div className='m-auto pb-10 px-0 md:px-28 '>
<p className='text-center'>Somos una organización líder en seguros dedicada a proteger lo que más le importa. Con décadas de experiencia y un compromiso con la excelencia, ofrecemos soluciones integrales de seguros. </p>
              
            </div>
            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100"
                        >
                            <div className="flex justify-center text-gray-800 mb-4">
                                {stat.icon}
                            </div>
                            <h4 className="text-3xl font-bold text-gray-800">{stat.number}</h4>
                            <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* BLOQUE 2: CONTENIDO EDITORIAL (Imagen a la izquierda, Texto a la derecha) */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <img
                            src={AboutImg}
                            alt="Sobre nosotros"
                            className="rounded-3xl shadow-lg w-full h-[500px] object-cover"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                    <h2 className="mb-6">
                            Su socio de confianza en seguros
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            En Storti Faggiano, entendemos que un seguro es más que una simple póliza: es tranquilidad. Nuestro equipo de profesionales experimentados trabaja sin descanso para garantizar que usted cuente con la cobertura adecuada para cada situación.
                        </p>
                        <p className="text-gray-600 text-lg mb-8">Nos enorgullecemos de nuestro enfoque personalizado, dedicamos tiempo a comprender sus necesidades únicas y le ofrecemos soluciones a medida que se adaptan a su estilo de vida y presupuesto</p>
                        {/* Listado de beneficios */}
                        <div className="space-y-4 mb-10">
                            {["Cobertura Integral", "Soporte 24/7", "Tramitación rápida"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-[#0095ff]" size={20} />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-[#1a2b3c] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#0095ff] transition-colors">
                            Más Información
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUsVertical;