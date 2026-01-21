import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// Se eliminaron Facebook, Instagram y Linkedin
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/SFlogo.png"

// Componente de Icono para mantener consistencia con Lucide
const WhatsAppIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'PRODUCTORES', path: '/productores' },
    { name: 'SINIESTROS', path: '/siniestros' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'DATOS ÚTILES', path: '/datos-utiles' },
    // { name: 'BLOG', path: '/blog' },
    { name: 'CONTACTO', path: '/contacto' },
  ];

  const handleIngreso = () => {
    setIsOpen(false);
    navigate('/productores/ingreso');
  };

  return (
    <header className="w-full bg-white sticky top-0 z-[100] shadow-sm">
      {/* Top Bar: Visible en Desktop */}
    

      {/* Navbar Principal */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex justify-between items-center">
        <NavLink to="/" className="flex-shrink-0">
          <img src={Logo} alt="Storti Faggiano" className="h-10 md:h-12 w-auto" />
        </NavLink>

        {/* Desktop Links: Aplicando Button 2 (Lato Regular 14px 0.5%) */}
        <div className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `button-2 text-[13px] transition-all duration-300 ${
                  isActive ? 'text-[#72c0c9] font-bold border-b-2 border-[#72c0c9]' : 'text-gray-600 hover:text-[#72c0c9]'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions: Aplicando Button 1 (Lato Bold 14px 0.5%) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* <button 
            onClick={handleIngreso}
            className="button-1 bg-[#374151] text-white px-6 py-2.5 rounded-xl hover:bg-gray-800 transition-all shadow-sm"
          >
            INGRESO
          </button> */}
          <a 
            href="https://wa.me/5492914555555" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-1 bg-[#72c0c9] text-white px-5 py-2.5 rounded-xl hover:bg-[#72c0c9] transition-all shadow-sm"
          >
            WHATSAPP
          </a>
        </div>

        {/* Botón Móvil */}
        <button 
          className="lg:hidden p-2 text-gray-800" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl overflow-y-auto max-h-[90vh]">
          <div className="p-6 space-y-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => 
                    `button-2 text-lg py-2 ${isActive ? 'text-[#72c0c9] font-bold' : 'text-gray-800'}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <hr className="border-gray-100" />
            <div className="grid grid-cols-1 gap-4">
              <button 
                onClick={handleIngreso}
                className="button-1 w-full bg-[#374151] text-white py-4 rounded-xl"
              >
                INGRESO
              </button>
              <a 
                href="https://wa.me/5492914555555"
                className="button-1 w-full bg-[#72c0c9] text-white py-4 rounded-xl text-center"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;