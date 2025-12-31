import React from 'react';
import ContactForm from '../components/Contacto/ContactForm';


const Contacto = () => {
  return (
    <main>
      <ContactForm />
      
      {/* Mapa de Google */}
      <section className="h-[450px] w-full grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          title="Ubicación SF Seguros"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.634474900281!2d-62.2736914!3d-38.726200299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcb77a6eec1f%3A0x19263689f29e8f!2sORGANIZACION%20STORTI%20FAGGIANO!5e0!3m2!1ses-419!2sar!4v1767143684657!5m2!1ses-419!2sar" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>
    </main>
  );
};

export default Contacto;