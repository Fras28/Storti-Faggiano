import React from 'react';

const JoinTeamCTA = () => {
  return (
    <section className="py-24 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-[#1a2e44] mb-10">
          Sumate a nuestro equipo
        </h2>
        <button className="bg-sf-teal hover:bg-sf-teal/90 text-white px-10 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all shadow-lg active:scale-95 flex items-center gap-3 mx-auto">
          Quiero formar parte
          <span className="text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default JoinTeamCTA;