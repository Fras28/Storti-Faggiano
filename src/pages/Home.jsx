import Hero from '../components/Hero';
import { ShieldCheck, Users, Award, CheckSquare } from 'lucide-react';
import ProductsSection from '../components/ProductsSection';
import PaymentSection from '../components/PaymentSection';
import Partners from '../components/Partners';
import ClaimsSection from '../components/ClaimsSection';
import NewsSection from '../components/NewsSection';
import AboutUs from '../components/AboutUs';
import PaymentMethods from '../components/PaymentMethods';
import AboutUsVertical from '../components/AboutUsVertical';

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Sección Hero (La parte oscura con el auto chocado) */}
      <Hero />

      {/* Sección Métodos de Pago */}
    <PaymentMethods/>

     {/* <AboutUs/> */}
     <AboutUsVertical/>
    <ProductsSection/>
    <PaymentSection/>
    <Partners/>
    <ClaimsSection/>
    <NewsSection/>
    </main>
  );
};

// Sub-componentes rápidos para organización
const PaymentCard = ({ title, icon }) => (
  <div className="bg-white p-8 shadow-sm rounded-lg border border-gray-100 hover:shadow-md transition">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="font-semibold text-gray-700">{title}</h3>
  </div>
);

// Componente de Estadística CORREGIDO
const StatCard = ({ icon, number, label }) => (
    <div className="bg-[#F8F9FA] p-10 rounded-2xl border border-gray-100 flex flex-col items-center justify-center transition-all hover:shadow-sm">
      <div className="text-[#2D3748] mb-6">
        {icon} {/* AQUÍ SE RENDERIZA EL ICONO */}
      </div>
      <div className="text-4xl font-bold text-[#2D3748] mb-1">
        {number}
      </div>
      <div className="text-[13px] text-gray-400 font-medium uppercase tracking-tight">
        {label}
      </div>
    </div>
  );

export default Home;