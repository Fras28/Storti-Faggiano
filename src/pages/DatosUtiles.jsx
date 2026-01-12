import React from 'react';
import UsefulDataHero from '../components/UsefulData/UsefulDataHero';
import InstructionalSections from '../components/UsefulData/InstructionalSections';
import EmergencyNumbers from '../components/UsefulData/EmergencyNumbers';
import DownloadDocs from '../components/UsefulData/DownloadDocs';
import ArtInstructions from '../components/UsefulData/ArtInstructions';
 // Opcional: grilla de logos de empresas

const DatosUtiles = () => {
  return (
    <main className="bg-white">
      <UsefulDataHero />
      <InstructionalSections />
      <EmergencyNumbers />
      <DownloadDocs />
      {/* Puedes agregar aquí una sección final con los logos de las compañías para descarga de pólizas */}
    </main>
  );
};

export default DatosUtiles;