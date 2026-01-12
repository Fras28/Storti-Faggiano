import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/SFlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Actualizamos los links para incluir todas las páginas solicitadas
  const navLinks = [
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'PRODUCTORES', path: '/productores' },
    { name: 'SINIESTROS', path: '/siniestros' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'DATOS ÚTILES', path: '/datos-utiles' },
    { name: 'BLOG', path: '/blog' },
    { name: 'CONTACTO', path: '/contacto' },
  ];

  const handleIngreso = () => {
    setIsOpen(false);
    navigate('/productores/ingreso');
  };

  return (
    <header className="w-full bg-white font-sans sticky top-0 z-[100] shadow-sm">
      {/* Top Bar: Visible en Desktop */}
      <div className="hidden lg:block border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="SF Seguros" className="h-10" />
          </Link>

          <div className="flex gap-8 text-[12px]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-sf-teal" />
              <span className="text-gray-600">Santa Fe 102, Bahía Blanca, CP B8000DND</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-sf-teal" />
              <span className="text-gray-600">+54 291 4553332</span>
            </div>
            <div className="text-gray-600">
              <span className="font-bold text-sf-teal">Email:</span> info@sfasesores.com.ar
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navbar Principal */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo para móvil y tablets */}
        <Link to="/" className="lg:hidden">
          <img src={Logo} alt="SF Seguros" className="h-8" />
        </Link>

        {/* Botón Hamburguesa móvil */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación Desktop - Ajustada para que quepan más elementos */}
        <nav className="hidden lg:flex gap-5 xl:gap-8 text-[11px] xl:text-[13px] font-bold text-gray-700 tracking-wider">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `transition-colors duration-300 py-2 ${isActive ? 'text-sf-teal border-b-2 border-sf-teal' : 'hover:text-sf-teal'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Botones de Acción */}
        <div className="hidden lg:flex gap-3">
          <button 
            onClick={handleIngreso}
            className="bg-[#72c0c9] text-white px-5 py-2 rounded-xl font-bold text-xs uppercase hover:brightness-105 transition-all shadow-sm"
          >
            Ingreso
          </button>
          <a 
            href="https://wa.me/542914553332" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#72c0c9] text-white px-5 py-2 rounded-xl font-bold text-xs uppercase hover:brightness-105 transition-all shadow-sm"
          >
            Whatsapp
          </a>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-xl overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `block text-lg font-semibold ${isActive ? 'text-sf-teal' : 'text-gray-800'}`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <hr className="border-gray-100" />
          <div className="grid grid-cols-1 gap-3">
            <button 
              onClick={handleIngreso}
              className="w-full bg-sf-teal text-white py-3 rounded-xl font-bold uppercase tracking-widest text-sm"
            >
              Ingreso
            </button>
            <button className="w-full border-2 border-sf-teal text-sf-teal py-3 rounded-xl font-bold uppercase tracking-widest text-sm">
              Whatsapp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;