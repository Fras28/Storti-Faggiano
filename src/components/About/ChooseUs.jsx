import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, CheckSquare, CheckCircle2 } from 'lucide-react';
import AboutImg from "../../assets/Hero/asesoramiento.png";

const stats = [
    { icon: <ShieldCheck size={32} />, number: "25+", label: "Años de experiencia" },
    { icon: <Users size={32} />, number: "10,000+", label: "Clientes felices" },
    { icon: <Award size={32} />, number: "10", label: "Socios aseguradores" },
    { icon: <CheckSquare size={32} />, number: "98%", label: "Satisfacción" },
];

const ChooseUs = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
            <h2 className='m-auto text-center pb-10'>Por qué nos eligen</h2>
            <div className='m-auto pb-10 px-0 md:px-28 '>
<p className='text-center'>Enfocamos nuestro trabajo en construir relaciones sólidas y duraderas. Acompañamos a nuestros asegurados con un contacto cercano y permanente, brindando respuestas ágiles a cada necesidad que surge en el camino, lo que nos permite soluciones a medida para cada cliente. </p>
              
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

          
            </div>
        </section>
    );
};

export default ChooseUs;