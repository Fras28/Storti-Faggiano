import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Futuras rutas: <Route path="/nosotros" element={<About />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;