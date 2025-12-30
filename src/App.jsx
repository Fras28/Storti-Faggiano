import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuotePage from './pages/QuotePage';
import AboutUs from './pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // 1. Importar
import Productores from './pages/Productores';

function App() {
  return (
    <>
      <ScrollToTop /> {/* 2. Colocar aquí para que afecte a todas las rutas */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizar" element={<QuotePage />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/productores" element={<Productores />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;