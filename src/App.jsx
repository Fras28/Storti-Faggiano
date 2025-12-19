import React, { useState, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './App.css';
// Importamos los iconos necesarios
import { Leaf, Zap, Globe, Users, TrendingUp, Phone, ChevronRight, Menu, X, CheckCircle, Download, Battery, Power, PlugZap, Lightbulb, CloudOff, RefreshCw } from 'lucide-react';
import Logo from "../src/assets/LogoFB.png"
import LogoFO from "../src/assets/LogoFO.png"
import VideoSolar from "../src/assets/SolarEnergy.mp4"
import MobileHeroImg from "../src/assets/HeroMobile.jpg"
import VisionMision from "../src/assets/VisionyMision.png"
import RiegoAgricola from "../src/assets/RiegoAgricola.png"
import PlantacionNogales from "../src/assets/PlantacionNogal.jpg"
import Alfa from "../src/assets/Alfa.jpg"
// -------------------------------------------------------------------
// 1. IMPORTACIÓN DE LOS ARCHIVOS PDF (Rutas internas)
// -------------------------------------------------------------------

import CatalogGeneralPDF from "./assets/pdfs/Group 410_merged.pdf";
import HanduroPumpsPDF from "./assets/pdfs/HANDURO-solar water pump catalog (1).pdf";
import TermotanqueDatasheetPDF from "./assets/pdfs/Datasheet Termotanque Tubo de Vacío - Galvanizado TS-TV100.. 300  Galv. ver 2.01.pdf";
import InverterDatasheetPDF from "./assets/pdfs/datasheet_sun-3-15k-g06p3-eu-am2_240513_en.pdf";
import Hope5DatasheetPDF from "./assets/pdfs/Hope_5.0L-B1_Hoja_de_datos_MX_202410.pdf";
import MID1730KTL3X2DatasheetPDF from "./assets/pdfs/MID_17-30KTL3-X2_Datasheet_EN_202411.pdf";
import SPF6000DatasheetPDF from "./assets/pdfs/SPF6000ES DATASHEET.pdf";


// URL del video de fondo. ¡Reemplaza con tu propio video!
const DEFAULT_VIDEO_URL = VideoSolar; // Placeholder
// Color primario de la marca TechnoGen (el verde vibrante)
const PRIMARY_COLOR = '#0FE778';

// --- Componentes Reutilizables ---

// Botón primario de llamado a la acción
const PrimaryButton = ({ children, className = '' }) => (
  <button
    // Las clases se mantienen como string para Tailwind
    className={`
      bg-techno-green text-gray-900 font-semibold py-3 px-8 
      rounded-full shadow-lg hover:bg-opacity-90 
      transition duration-300 ease-in-out transform hover:scale-[1.02]
      flex items-center justify-center space-x-2 
      ${className}
    `}
  >
    <span className="flex items-center space-x-1">
      {children}
    </span>
    <ChevronRight size={18} />
  </button>
);

// Sección de Cabecera (Header)
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const TELEFONO_CONTACTO = "+5492915331739";
  const navItems = ['Soluciones', 'Documentación', 'Proyectos', 'Nosotros', 'Contacto'];

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="flex items-center text-2xl font-bold text-gray-900">
          <img src={Logo} alt="Logo Tecnogen" width="180px" />

        </a>

        {/* Navegación (Solo Desktop/Tablet) */}
        <nav className="hidden md:flex space-x-8 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`} // Manejo de tildes para IDs
              className="text-gray-600 hover:text-[#2A9D8F] transition duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          {/* Se envuelve el PrimaryButton en un enlace <a> con 'tel:' 
        para habilitar el marcado automático en dispositivos compatibles.
    */}
          <a href={`tel:${TELEFONO_CONTACTO}`}>
            <PrimaryButton className="py-2 px-6 flex ">
              <Phone size={18} className="mr-1" />
              Hablemos
            </PrimaryButton>
          </a>
        </div>

        {/* Menú Móvil (Icono Toggle) */}
        <div className="md:hidden">
          <button
            className="text-gray-900 hover:text-[#2A9D8F] p-2 transition duration-150"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Contenido del Menú Móvil */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'
          } bg-gray-50 border-t border-gray-200`}
      >
        <nav className="flex flex-col space-y-2 px-4 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace('ó', 'o')}`}
              onClick={handleNavLinkClick}
              className="block py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-150"
            >
              {item}
            </a>
          ))}
          <div className="pt-4 pb-2 w-full">
            <PrimaryButton className="w-full bg-[#31AE8A]  ">
              <Phone size={18} className="mr-1" />
              Hablemos
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </header>
  );
};

// Sección Principal (Hero) - MODIFICADA: Incorpora el slogan "TRANSFORMAMOS ENERGÍA"
const HeroSection = () => (
  <section id="inicio" className="relative h-[90vh] md:h-[90vh] flex items-center justify-center text-center bg-gray-900 ">
    {/* Video de Fondo (Solo Desktop) */}
    <video
      className="absolute inset-0 w-full h-full object-cover hidden md:block"
      autoPlay
      loop
      muted
      playsInline
      src={DEFAULT_VIDEO_URL}
    >
      Tu navegador no soporta la etiqueta de video.
    </video>

    {/* Fallback de Imagen (Solo Móvil) */}
    <div
      className="absolute inset-0 w-full h-full object-cover md:hidden"
      style={{
        backgroundImage: `url(${MobileHeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    ></div>

    {/* Overlay para mejor contraste de texto sobre video/imagen */}
    <div className="absolute inset-0 bg-gray-900 opacity-70"></div>

    {/* Contenido (Título y Botones) */}
    <div className="relative z-10 text-white p-6 max-w-4xl w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#2A9D8F] mb-2 uppercase tracking-widest">
        TRANSFORMAMOS ENERGÍA
      </h2>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 px-2">
        TecnoGen: Energía Solar para tu Autonomía y Ahorro en Argentina
      </h1>
      <p className="text-lg sm:text-xl font-light mb-8 max-w-2xl mx-auto px-2">
        Convertimos la fuerza del sol en soluciones reales, eficientes y sustentables. Energía que se transforma para transformar.
      </p>
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
        {/* Botones Full-Width en Mobile (w-full sm:w-auto) */}
        <a href="#soluciones">
          <PrimaryButton className="text-lg w-full sm:w-auto bg-[#31AE8A]">
            Descubre Soluciones
          </PrimaryButton>
        </a>

        <a href="tel:+5492915331739">
          <PrimaryButton className="text-lg w-full sm:w-auto bg-[#31AE8A]" >
            Contáctanos Hoy
          </PrimaryButton>
        </a>
      </div>
    </div>
  </section>
);

// Sección de Servicios/Soluciones - MODIFICADA: Foco en ON-GRID, OFF-GRID, HÍBRIDO
const ServicesSection = () => {
  const services = [
    { icon: PlugZap, title: 'Sistema ON-GRID', description: 'Integración a la red eléctrica existente. Ahorro significativo desde el primer día, ideal para viviendas y comercios urbanos.' },
    { icon: CloudOff, title: 'Sistema OFF-GRID (Autónomo)', description: 'Independencia total de la red. Solución perfecta para zonas rurales, estancias y sistemas de bombeo solar.' },
    { icon: RefreshCw, title: 'Sistema HÍBRIDO', description: 'Combina ahorro y respaldo. Utiliza baterías para continuidad operativa y flexibilidad ante cortes frecuentes.' },
  ];

  return (
    <section id="soluciones" className="py-16 md:py-24 bg-white curved-separator">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Nuestros Sistemas Energéticos</h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Diseñamos cada instalación a medida, adaptando la tecnología solar (On-Grid, Off-Grid o Híbrida) a tus necesidades de ahorro, autonomía y seguridad.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-gray-50 rounded-xl shadow-xl border-t-4 border-techno-green transition duration-300 z-20">
              <service.icon size={48} className="text-[#2A9D8F] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// COMPONENTE MODAL DE PREVISUALIZACIÓN DE PDF (Sin cambios)
const PDFPreviewModal = ({ doc, onClose }) => {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    if (!doc || !doc.url) {
      setPdfUrl(null);
      return;
    }

    // Si ya es una blob URL o data URL, úsala directamente
    if (typeof doc.url === 'string' && (doc.url.startsWith('blob:') || doc.url.startsWith('data:'))) {
      setPdfUrl(doc.url);
      return;
    }

    // Caso: es un archivo importado (objeto File o URL estática)
    fetch(doc.url)
      .then(res => res.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        setPdfUrl(blobUrl);
      })
      .catch(err => {
        console.error("Error cargando PDF:", err);
        setPdfUrl(null);
      });

    // Limpieza: revocar la URL cuando se cierre
    return () => {
      if (pdfUrl && pdfUrl.startsWith('blob:')) {
        URL.revokeObjectURL(pdfUrl);
      }
    };
  }, [doc]);

  if (!doc) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={onClose}>
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50 flex-shrink-0">
          <h3 className="text-xl font-semibold text-gray-900 truncate">
            {doc.title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 p-2 rounded-full hover:bg-gray-200 transition"
          >
            X
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-grow bg-gray-100 relative overflow-hidden">
          {pdfUrl ? (
            <object
              data={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              type="application/pdf"
              width="100%"
              height="100%"
              className="absolute inset-0"
            >
              <embed
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </object>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-green-500 border-t-transparent mb-4"></div>
                <p className="text-gray-600">Cargando documento...</p>
              </div>
            </div>
          )}
        </div>

        {/* Fallback permanente */}
        <div className="p-4 bg-gray-800 text-white text-center text-sm">
          ¿No puedes ver el PDF?{' '}
          <a
            href={doc.url}
            download={doc.filename}
            className="underline hover:text-green-400 font-medium"
          >
            Descargar {doc.title}
          </a>
        </div>
      </div>
    </div>
  );
};



// SECCIÓN: Documentación y Catálogos (Corregido con Separador CSS)
const CatalogsSection = () => {
  // Estado para controlar qué documento se previsualiza
  const [previewDoc, setPreviewDoc] = useState(null);

  const handlePreview = (doc) => {
    setPreviewDoc(doc);
  };

  const handleClosePreview = () => {
    setPreviewDoc(null);
  };

  // Datos de los documentos proporcionados por el usuario
  const documents = [
    {
      title: 'Catálogo General de Soluciones',
      description: 'Documento completo con todos nuestros productos y sistemas ofrecidos.',
      filename: 'Group 410_merged.pdf',
      url: CatalogGeneralPDF,
      icon: Leaf
    },
    {
      title: 'Bombas de Agua Solares (HANDURO)',
      description: 'Ficha técnica y catálogo de la línea de bombas solares para riego y aplicaciones rurales.',
      filename: 'HANDURO-solar water pump catalog (1).pdf',
      url: HanduroPumpsPDF,
      icon: Zap
    },
    {
      title: 'Ficha Técnica Termotanque Solar',
      description: 'Detalles técnicos y especificaciones de los termotanques solares de tubo de vacío.',
      filename: 'Datasheet Termotanque Tubo de Vacío - Galvanizado TS-TV100.. 300 Galv. ver 2.01.pdf',
      url: TermotanqueDatasheetPDF,
      icon: Globe
    },
    {
      title: 'Datasheet Inversores On-Grid SUN (3-15K)',
      description: 'Especificaciones técnicas de los inversores solares para sistemas conectados a red.',
      filename: 'datasheet_sun-3-15k-g06p3-eu-am2_240513_en.pdf',
      url: InverterDatasheetPDF,
      icon: TrendingUp
    },
    {
      title: 'Hoja de Datos Batería Hope 5.0L-B1',
      description: 'Especificaciones técnicas de la batería LiFePO4 de alta densidad para almacenamiento de energía solar.',
      filename: 'Hope_5.0L-B1_Hoja_de_datos_MX_202410.pdf',
      url: Hope5DatasheetPDF,
      icon: Battery
    },
    {
      title: 'Datasheet Inversor MID 17-30KTL3-X2',
      description: 'Ficha técnica del inversor trifásico on-grid para aplicaciones comerciales e industriales.',
      filename: 'MID_17-30KTL3-X2_Datasheet_EN_202411.pdf',
      url: MID1730KTL3X2DatasheetPDF,
      icon: PlugZap
    },
    {
      title: 'Datasheet Inversor SPF 6000 ES Plus',
      description: 'Detalles técnicos del inversor off-grid con soporte para paneles solares, baterías y operación en paralelo.',
      filename: 'SPF6000ES DATASHEET.pdf',
      url: SPF6000DatasheetPDF,
      icon: Power
    }
  ];

  return (
    // CAMBIOS CLAVE:
    // 1. Se mantiene 'relative' y la clase 'curved-separator'.
    // 2. Se usa 'md:pb-[100px]' para crear un espacio de 100px en la parte inferior,
    //    que es exactamente la altura de la curva definida en App.css.
    <section
      id="documentacion"
      className="relative   py-16 md:pt-24 md:pb-[100px] bg-gradient-to-b from-[#2A9D8F] to-[#F3F4F6]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-50 mb-4">Documentación y Recursos Técnicos</h2>
        <p className="text-xl text-center text-gray-50 mb-12 max-w-3xl mx-auto">
          Descargue nuestros catálogos y fichas técnicas actualizadas o previsualícelos en línea.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start p-6 bg-white rounded-xl shadow-lg border-l-4 border-techno-green transition duration-300 ">
              <doc.icon size={36} className="text-[#2A9D8F] mr-4 flex-shrink-0 mt-1" />
              <div className="flex-grow mt-4 md:mt-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{doc.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>

                {/* Botones de Previsualización y Descarga */}
                <div className="flex space-x-3 mt-3">
                  <button
                    onClick={() => handlePreview(doc)}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-full transition duration-150"
                  >
                    <Globe size={16} />
                    <span>Ver Previsualización</span>
                  </button>
                  <a
                    href={doc.url}
                    download={doc.filename}
                    title={`Descargar ${doc.title}`}
                    aria-label={`Descargar archivo PDF: ${doc.title}`}
                    className="inline-flex items-center space-x-2 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-full transition duration-150"
                  >
                    <Download size={16} />
                    <span>Descargar PDF</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* El modal se renderiza al final de la sección y utiliza el estado */}
      <PDFPreviewModal doc={previewDoc} onClose={handleClosePreview} />
    </section>
  );
};

// Sección de Proyectos Destacados (Sin cambios)
const ProjectsSection = () => {
  const projects = [
    {
      title: 'Cooperativa Rural ALFA',
      sector: 'Planta de Acopio',
      location: 'Tres Arroyos',
      img: Alfa
    },
    {
      title: 'Sistema Solar para Riego Agrícola',
      sector: 'Agro (Riego)',
      location: 'Pehuencó',
      img: RiegoAgricola

    },
    {
      title: 'Instalación Fotovoltaica en Nogales',
      sector: 'Agro (Plantación)',
      location: 'Choele Choel',
      img: PlantacionNogales
    },
  ];

  return (
    <section id="proyectos" className="py-16 md:py-24  bg-gradient-to-b from-[#F3F4F6] to-[#2A9D8F] ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Casos de Éxito Reales</h2>
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Demostramos nuestro impacto con proyectos reales que transforman el consumo energético. Más de 100 instalaciones rurales sin energía de red.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ">
              <img src={project.img} alt={project.title} className="w-full h-48 object-cover" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/0FE778/000?text=Imagen+No+Disponible'; }} />
              <div className="p-6">
                <p className="text-sm font-semibold text-[#2A9D8F] uppercase mb-1">{project.sector} - {project.location}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <a href="#" className="text-[#2A9D8F] font-medium hover:underline text-sm flex items-center">
                  Ver caso completo <ChevronRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección Quiénes Somos (About Us) - MODIFICADA: Se agrega el valor "Compromiso"
const AboutSection = () => {
  const values = [
    { title: 'Honestidad', description: 'Transparencia en cada propuesta y decisión, construyendo confianza a largo plazo.' },
    { title: 'Vocación de Servicio', description: 'Acompañamos cada etapa del proyecto con cercanía y dedicación real.' },
    { title: 'Compromiso', description: 'Cumplimiento técnico y responsabilidad profesional en todos los proyectos.' },
    { title: 'Eficiencia', description: 'Optimizamos recursos y tecnologías para garantizar el máximo rendimiento.' },
    { title: 'Sustentabilidad', description: 'Impulsamos una energía que cuida lo que nos rodea, promoviendo un uso responsable.' },
  ];
  // Filtramos la lista para que el grid se vea mejor (usamos 4 de 5, incluyendo el nuevo 'Compromiso')
  const displayedValues = values.filter(v => ['Honestidad', 'Vocación de Servicio', 'Compromiso', 'Sustentabilidad'].includes(v.title));


  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white curved">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-50 mb-4">Nuestra Historia y Misión</h2>
            <p className="text-lg text-gray-50 mb-4">
              Desde <b>2013</b>, TECNOGEN ha trabajado para garantizar energía segura y confiable. Iniciamos con la venta y mantenimiento de grupos electrógenos industriales, y evolucionamos hacia las <b>energías renovables</b>, incorporando sistemas solares fotovoltaicos.
            </p>
            <p className="text-lg text-gray-50 mb-6 border-l-4 border-techno-green pl-4 italic">
              <b>Misión:</b> Brindamos soluciones de energía solar en Bahía Blanca, Buenos Aires y toda la región pampeana.
            </p>
            <p className="text-lg text-gray-50 mb-6">
              <b>Visión:</b> Consolidarnos como referente regional en la transición hacia una energía limpia y confiable, equilibrando el crecimiento económico con la responsabilidad social y la protección ambiental.
            </p>
            {/* <PrimaryButton className="bg-gray-900 text-white hover:bg-gray-800">
              Conoce nuestro Propósito
            </PrimaryButton> */}
          </div>

          {/* Placeholder de imagen o video */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src={VisionMision}
              alt="Equipo de TecnoGen"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/000/0FE778?text=Nuestra+Historia'; }}
            />
          </div>
        </div>

        {/* Sección de Valores */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-center text-gray-50 mb-8">Nuestros Valores Fundamentales</h3>
          <p className="text-center text-lg text-gray-50 mb-10">
            Nuestro trabajo se basa en llevar energía limpia a donde se necesita, con honestidad, compromiso y excelencia técnica.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedValues.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border-2 border-[#2A9D8F]">
                <CheckCircle size={32} className="text-[#2A9D8F] mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Sección de Contacto y CTA final (Sin cambios)
const ContactSection = () => (
  <section id="contacto" className="py-16 md:py-24 bg-techno-green text-gray-900">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">¿Listo para unirte a la Revolución Verde?</h2>
      <p className="text-xl font-medium mb-8 max-w-3xl mx-auto">
        Transformamos la forma en que accedes a la energía, ofreciendo alternativas limpias, accesibles y confiables.
      </p>
      {/* Aquí se envuelve el botón con el enlace de WhatsApp */}
      <a
        href="https://wa.me/+5492915331739?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20gratuita%20para%20asesoramiento%20sobre%20soluciones%20de%20energía%20renovable."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block" // Para centrar el botón si PrimaryButton no lo hace
      >
        <PrimaryButton className="bg-[#31AE8A] text-gray-900 hover:bg-gray-100 m-auto">
          Agenda una Consulta Gratuita
        </PrimaryButton>
      </a>
    </div>
  </section>
);

// Pie de Página (Footer) (Con enlace de WhatsApp)
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 border-b border-gray-700 pb-8 mb-8">
        {/* Columna 1: Logo y Misión */}
        <div>
          <a href="#" className="flex items-center text-2xl font-bold mb-3">
            <img src={LogoFO} alt="TecnoGen - Instalación de paneles solares y energía renovable en Argentina" width="200px" loading="lazy" />
          </a>
          <p className="text-sm text-gray-400">Impulsando un mundo más limpio con tecnología de punta en energía renovable.</p>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#2A9D8F]">Enlaces</h4>
          <ul className="space-y-2">
            {['Inicio', 'Soluciones', 'Documentación', 'Proyectos', 'Nosotros'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace('ó', 'o')}`} className="text-gray-400 hover:text-white text-sm transition duration-150">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#2A9D8F]">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@tecnogen.com</li>
            <li>Tel: +5492915331739</li>
            {/* Nuevo elemento para WhatsApp */}
            <li>
              <a
                href="https://wa.me/+5492915331739?text=Hola!%20quiero%20que%20me%20asesoren.%20"
                className="text-gray-400 hover:text-[#25D366] transition duration-150  items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Si tienes un ícono de WhatsApp (ej. de 'lucide-react') lo puedes añadir aquí. */}
                {/* Por ahora, solo texto: */}
                Chatea con nosotros (WhatsApp)
              </a>
            </li>
            <li>Dirección: Calle Falsa 123, CABA, Argentina</li>
          </ul>
        </div>

        {/* Columna 4: Legal y Redes */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#2A9D8F]">Legal & Redes</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Política de Privacidad</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-150">Términos de Uso</a></li>
          </ul>
          {/* Social Icons Placeholder */}
          <div className="flex space-x-4 mt-4">
            <Globe size={20} className="text-gray-400 hover:text-[#2A9D8F] cursor-pointer" />
            <Users size={20} className="text-gray-400 hover:text-[#2A9D8F] cursor-pointer" />
            <TrendingUp size={20} className="text-gray-400 hover:text-[#2A9D8F] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 pt-4">
        © {new Date().getFullYear()} TecnoGen. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

// --- Componente Principal ---
export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen font-sans">
        <Helmet>
          {/* Título de la pestaña (Máximo 60 caracteres) */}
          <title>TecnoGen | Energía Solar en Bahía Blanca y Argentina</title>

          {/* Meta Descripción (Es lo que aparece en Google debajo del título. Máximo 155 caracteres) */}
          <meta
            name="description"
            content="Expertos en sistemas solares On-Grid, Off-Grid e Híbridos. Soluciones eficientes para el agro y la ciudad. ¡Ahorra energía con TecnoGen!"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#0FE778" />
          {/* Palabras clave (Aunque Google ya casi no las usa, otros buscadores sí) */}
          <meta name="keywords" content="paneles solares, energía renovable, argentina, bahia blanca, bombeo solar, inversores solar, ahorro energetico" />

          {/* Open Graph (Para que se vea profesional al compartir por WhatsApp o redes) */}
          <meta property="og:title" content="TecnoGen - Transformamos Energía" />
          <meta property="og:description" content="Soluciones solares a medida para tu hogar, campo o empresa." />
          <meta property="og:type" content="website" />
          {/* Aquí puedes poner la URL de una imagen de tu carpeta assets si la tienes online */}
          <meta property="og:image" content="https://tecnogenargentina.com/LogoFB.png" />

          {/* Canonical URL (Evita contenido duplicado) */}
          <link rel="canonical" href="https://www.tecnogenargentina.com/" />
        </Helmet>

        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <CatalogsSection />
          <ProjectsSection />
          <AboutSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}