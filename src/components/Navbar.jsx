import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/SFlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Definimos los links con sus nombres y rutas correspondientes
  const navLinks = [
    { name: 'NOSOTROS', path: '/nosotros' },
    { name: 'PRODUCTORES', path: '/productores' },
    { name: 'SINIESTROS', path: '/siniestros' },
    { name: 'SERVICIOS', path: '/servicios' },
    { name: 'CONTACTO', path: '/contacto' },
  ];

  return (
    <header className="w-full bg-white font-sans sticky top-0 z-[100] shadow-sm">
      {/* Top Bar: Solo visible en Desktop */}
      <div className="hidden md:block border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="SF Seguros" className="h-10" />
          </Link>

          <div className="flex gap-8 text-[12px]">
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-sf-teal" />
              <span className="text-gray-600">Santa Fe 102, Bahía Blanca</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-sf-teal" />
              <span className="text-gray-600">+54 291 4553332</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Navbar Principal */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo para móvil */}
        <Link to="/" className="md:hidden">
          <img src={Logo} alt="SF Seguros" className="h-8" />
        </Link>

        {/* Botón Hamburguesa móvil */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex gap-8 text-[13px] font-bold text-gray-700 tracking-wider">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `transition-colors duration-300 ${isActive ? 'text-sf-teal border-b-2 border-sf-teal' : 'hover:text-sf-teal'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <button className="bg-sf-teal text-white px-6 py-2 rounded-xl font-bold text-xs uppercase hover:brightness-110 transition-all">
            Ingreso
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-xl">
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
          <button className="w-full bg-sf-teal text-white py-3 rounded-xl font-bold uppercase">
            Ingreso
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;