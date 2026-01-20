import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import Logo from "../assets/SFlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white pt-12 md:pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        
        {/* Columna 1: Info legal y Matrículas */}
        {/* En móvil: Centrado | En desktop: Alineado a la izquierda */}
        <div className="md:col-span-5 space-y-6 md:space-y-8 text-center md:text-left">
          <img 
            src={Logo} 
            alt="SF Seguros" 
            className="h-12 md:h-16 brightness-0 invert mx-auto md:ml-0" 
          />
          <p className="text-sm md:text-[15px] leading-relaxed text-gray-400 md:pr-10">
            Somos una Organización de Seguros con 25 años de trayectoria en el mercado, conformada en forma exclusiva por Productores Asesores de Seguros matriculados.
          </p>
          
          <div className="text-[12px] md:text-[13px] text-gray-500 space-y-1 italic">
            <p>SuperIntendencia de Seguros de la Nación</p>
            <p>SuperIntendencia de Riesgos de Trabajo</p>
            <p>SuperIntendencia de Servicios de Salud</p>
          </div>

          <div className="text-[12px] md:text-[13px] text-gray-500">
            <p>Jorge Faggiano Mat SSN N° 51301</p>
            <p>Franco Cerra Mat SSN N° 69068</p>
            <p>Maximo Faggiano SSN N° 91462</p>
          </div>

          {/* Redes Sociales */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-[#0095ff] transition-colors" />
            <FaWhatsapp className="cursor-pointer hover:text-[#0095ff] transition-colors" />
            <FaFacebookF className="cursor-pointer hover:text-[#0095ff] transition-colors" />
          </div>
        </div>

        {/* Columna 2: Secciones */}
        {/* Oculto en móviles muy pequeños o simplificado para evitar scroll infinito */}
        <div className="md:col-span-3 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-6 md:mb-8 border-b border-gray-700 pb-2 md:border-none">
            Secciones
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-1 gap-4 text-sm md:text-[15px] text-gray-400">
            {['Nosotros', 'Productores', 'Siniestros', 'Servicios', 'Blog', 'Datos útiles', 'Contacto'].map((link) => (
              <li 
                key={link} 
                className="hover:text-white cursor-pointer w-fit mx-auto md:mx-0 border-b border-transparent hover:border-[#0095ff] transition-all"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Botones de Acción */}
        {/* Botones grandes y fáciles de presionar en móviles */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <ActionBtn text="DENUNCIAR SINIESTRO" color="bg-[#67B8C3]" /> {/* Rojo para emergencias */}
          <ActionBtn text="COTIZAR" color="bg-[#67B8C3]" />
          <ActionBtn text="CONTACTÁNOS" color="bg-[#67B8C3]" />
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-[11px] text-gray-600 uppercase tracking-widest">
        © {new Date().getFullYear()} Storti & Faggiano - Todos los derechos reservados.
      </div>
    </footer>
  );
};

const ActionBtn = ({ text, color = "bg-[#0095ff]" }) => (
  <button className={`w-full ${color} text-white py-4 px-6 md:px-8 rounded-2xl flex justify-between items-center font-bold text-xs md:text-sm tracking-widest group hover:brightness-110 shadow-lg transition-all`}>
    {text}
    <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
  </button>
);

export default Footer;