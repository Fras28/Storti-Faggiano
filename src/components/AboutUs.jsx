import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Users, Award, CheckSquare } from 'lucide-react';
import AboutImg from "../assets/Hero/asesoramiento.png"; 

// Sub-componente para la animación numérica
const Counter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Se activa solo la primera vez que se ve

  useEffect(() => {
    if (isInView) {
      let start = 0;
      // Extraemos solo los números del target (ej: "10,000+" -> 10000)
      const end = parseInt(target.replace(/[,+]/g, ''));
      const increment = end / (duration * 60); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  // Formateamos de vuelta a string con comas si es necesario
  const formattedNumber = count.toLocaleString();
  const suffix = target.includes('+') ? '+' : target.includes('%') ? '%' : '';

  return <span ref={ref}>{formattedNumber}{suffix}</span>;
};

const stats = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.2} />,
    number: "25+",
    label: "Años de experiencia",
  },
  {
    icon: <Users size={28} strokeWidth={1.2} />,
    number: "10,000+",
    label: "Clientes felices",
  },
  {
    icon: <Award size={28} strokeWidth={1.2} />,
    number: "10",
    label: "Socios aseguradores",
  },
  {
    icon: <CheckSquare size={28} strokeWidth={1.2} />,
    number: "98%",
    label: "Satisfacción",
  },
];

const AboutUs = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* LADO IZQUIERDO: IMAGEN CON BADGE FLOTANTE */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%] relative"
          >
            <div className="relative z-10">
              <img 
                src={AboutImg} 
                alt="Asesoramiento profesional" 
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5] lg:aspect-square"
              />
              <div className="absolute -bottom-4 -right-4 md:right-4 bg-[#0095ff] text-white p-6 md:p-8 rounded-xl shadow-2xl z-20">
                <p className="text-4xl md:text-5xl font-bold leading-none">
                  <Counter target="25" />
                </p>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mt-2 opacity-90">
                  Años de Confianza
                </p>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-gray-50 rounded-full -z-0 opacity-50"></div>
          </motion.div>

          {/* LADO DERECHO: TEXTO E INDICADORES */}
          <div className="w-full lg:w-[55%]">
            <header className="mb-12 text-left">
              <span className="text-[#0095ff] font-extrabold text-[11px] uppercase tracking-[0.25em] mb-3 block">
                Nuestra Trayectoria
              </span>
              <h2 className="text-3xl md:text-[38px] font-bold text-[#1a2b3c] font-serif mb-6 leading-[1.15]">
              Su socio de confianza en seguros
              </h2>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
              En Storti Faggiano, entendemos que un seguro es más que una simple póliza: es tranquilidad. Nuestro equipo de profesionales experimentados trabaja sin descanso para garantizar que usted cuente con la cobertura adecuada para cada situación.

Nos enorgullecemos de nuestro enfoque personalizado, dedicamos tiempo a comprender sus necesidades únicas y le ofrecemos soluciones a medida que se adaptan a su estilo de vida y presupuesto.
              </p>
            </header>

            {/* GRILLA DE STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#f9fafb] p-6 md:p-8 rounded-xl border border-gray-100/50 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 group"
                >
                  <div className="text-gray-400 group-hover:text-[#0095ff] transition-colors duration-300 mb-5">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-[#1a2b3c] mb-1">
                    <Counter target={stat.number} />
                  </h4>
                  <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;