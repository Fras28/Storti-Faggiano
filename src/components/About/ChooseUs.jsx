import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, CheckSquare } from 'lucide-react';

const stats = [
    { icon: <ShieldCheck size={44} />, number: "30+", label: "Años de trayectoria" },
    { icon: <Users size={44} />, number: "10,000+", label: "Clientes nos eligen" },
    { icon: <Award size={44} />, number: "", label: "Trabajamos con compañías líderes en el mercado" },
    { icon: <CheckSquare size={44} />, number: "40+", label: "Productores con asesoramiento personalizado" },
];

const ChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className='text-center pb-10'>Porque nos eligen</h2>
                <div className='max-w-4xl m-auto pb-16 px-0'>
                    <p className='text-center text-gray-600'>
                        Enfocamos nuestro trabajo en construir relaciones sólidas y duraderas. Acompañamos a nuestros asegurados con un contacto cercano y permanente, brindando respuestas ágiles a cada necesidad que surge en el camino, lo que nos permite soluciones a medida para cada cliente.
                    </p>
                </div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center min-h-[220px]"
                        >
                            <div className="flex justify-center text-gray-800 mb-6">
                                {stat.icon}
                            </div>
                            <div className="flex-1 flex flex-col justify-center">
                                {stat.number && (
                                    <p className="text-gray-800 text-4xl md:text-5xl font-bold leading-none mb-2">{stat.number}</p>
                                )}
                                <p className={`text-gray-500 leading-snug ${stat.number ? 'text-sm' : 'text-base'}`}>{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;