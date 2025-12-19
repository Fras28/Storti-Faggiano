import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import Logo from "../assets/SFlogo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white font-sans sticky top-0 z-[100] shadow-sm">
      {/* Top Bar: Solo visible en Desktop (md+) */}
      <div className="hidden md:block border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <img src={Logo} alt="SF Seguros" className="h-10" />
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

      {/* Main Nav */}
      <div className="py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo en móvil (visible solo en sm/md) */}
          <img src={Logo} alt="SF Seguros" className="h-8 md:hidden" />

          {/* Botón Hamburguesa */}
          <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Links: Hidden en móvil, Flex en desktop */}
          <nav className="hidden md:flex gap-6 text-[13px] font-bold text-gray-700 tracking-wider">
            {['NOSOTROS', 'PRODUCTORES', 'SINIESTROS', 'SERVICIOS', 'CONTACTO'].map((item) => (
              <Link key={item} to="/" className="hover:text-sf-teal transition-colors">
                {item}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex gap-3">
            <button className="bg-sf-teal text-white px-6 py-2 rounded-xl font-bold text-xs uppercase hover:brightness-110 transition-all">
              Ingreso
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4 shadow-xl">
            {['NOSOTROS', 'PRODUCTORES', 'SINIESTROS', 'SERVICIOS', 'CONTACTO'].map((item) => (
              <Link key={item} to="/" className="block text-lg font-semibold text-gray-800" onClick={() => setIsOpen(false)}>
                {item}
              </Link>
            ))}
            <button className="w-full bg-sf-teal text-white py-3 rounded-xl font-bold uppercase">
              Ingreso Clientes
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;