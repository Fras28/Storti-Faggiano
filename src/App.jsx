import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuotePage from './pages/QuotePage'; // Importamos la nueva página
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cotizar" element={<QuotePage />} /> {/* Nueva Ruta */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;