import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const JoinTeamCTA = () => {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className=" mb-10  tracking-tight reak-words md:whitespace-nowrap">
          Sumate a nuestro equipo
        </h2>
       
        <NavLink
          to="/contacto"
          className="bg-sf-teal hover:bg-[#5dafb8] text-white px-12 py-5 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase transition-all shadow-xl active:scale-95 inline-flex items-center gap-4 mx-auto"
        >
          Quiero formar parte
          <ArrowRight size={20} />
        </NavLink>
      </div>
    </section>
  );
};

export default JoinTeamCTA;