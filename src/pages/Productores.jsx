import React from 'react';
import ProducersHero from '../components/Producers/ProducersHero';
import ProducersBenefits from '../components/Producers/ProducersBenefits';
import JoinTeamCTA from '../components/Producers/JoinTeamCTA';

const Productores = () => {
  return (
    <main className="pt-0">
      <ProducersHero />
      <ProducersBenefits />
      <JoinTeamCTA />
    </main>
  );
};

export default Productores;