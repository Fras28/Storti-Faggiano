import { Car, Users, Mountain, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SiniestrosGuia = () => {
  const categories = [
    {
      id: 'automotor',
      title: 'Automotor',
      icon: <Car size={48} strokeWidth={1.5} />,
      path: '/siniestros/guia/automotor'
    },
    {
      id: 'art',
      title: 'ART',
      icon: <Users size={48} strokeWidth={1.5} />,
      path: '/siniestros/guia/art'
    },
    {
      id: 'accidentes',
      title: 'Accidentes personales',
      icon: <Mountain size={48} strokeWidth={1.5} />,
      path: '/siniestros/guia/accidentes'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-400">
        <Link to="/" className="hover:text-sf-teal">Inicio</Link>
        <span className="mx-2">-</span>
        <Link to="/siniestros" className="hover:text-sf-teal">Siniestros</Link>
      </div>

      <main className="max-w-6xl mx-auto px-6 mt-12 text-center">
        {/* Encabezado */}
        <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
          Seleccione el tipo de siniestro
        </h1>
        <p className="text-gray-400 text-lg mb-16">
          Seleccione el tipo de accidente a continuación y le guiaremos a través de los siguientes pasos.
        </p>

        {/* Rejilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              to={cat.path}
              className="bg-gray-50/50 border border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center gap-6 hover:shadow-xl hover:bg-white transition-all duration-300 group"
            >
              <div className="text-gray-800 group-hover:text-sf-teal transition-colors">
                {cat.icon}
              </div>
              <span className="text-xl font-medium text-gray-800">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Sección de Ayuda */}
        <div className="flex flex-col items-center gap-6">
          <p className="text-gray-400 text-lg font-medium">¿Necesitas ayuda?</p>
          <a 
            href="https://wa.me/542914553332" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#72c0c9] text-white px-10 py-3 rounded-xl font-bold uppercase tracking-widest hover:brightness-105 transition-all flex items-center gap-2 shadow-md"
          >
            Whatsapp
          </a>
        </div>
      </main>
    </div>
  );
};

export default SiniestrosGuia;