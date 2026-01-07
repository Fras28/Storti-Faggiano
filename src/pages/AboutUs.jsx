import React from 'react';
import AboutHero from '../components/About/AboutHero';
import OurValues from '../components/About/OurValues';
import OurTeam from '../components/About/OurTeam';
import StaffCarousel from '../components/About/StaffCarousel';
import ChooseUs from '../components/About/ChooseUs';
import ServicesGrid from '../components/About/ServicesGrid';
import QualityPolicy from '../components/About/QualityPolicy';

const AboutUs = () => {
  return (
    <main className="pt-20">
      <AboutHero />
      <OurValues />
      <OurTeam />
      <StaffCarousel />
      <ChooseUs />
      <ServicesGrid />
      <QualityPolicy />
      {/* Próxima sección: Conocenos (Grilla de socios) */}
    </main>
  );
};

export default AboutUs;