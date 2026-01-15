import React from 'react';
import { MessageSquare, Phone, Truck, ShieldAlert } from 'lucide-react';

const emergencyData = [
  {
    category: "URGENCIAS WHATSAPP",
    contacts: [
      { label: "Línea 1", value: "+54 9 291 4029635", link: "https://wa.me/5492914029635" },
      { label: "Línea 2", value: "+54 9 291 4029634", link: "https://wa.me/5492914029634" }
    ],
    icon: <MessageSquare />, color: "bg-green-50 text-green-600"
  },
  {
    category: "COMPAÑÍAS (0800)",
    contacts: [
      { label: "Cooperación Seguros", value: "0800 777 7070", link: "tel:08007777070" },
      { label: "Sancor Seguros", value: "0800 777 4643", link: "tel:08007774643" }
    ],
    icon: <Phone />, color: "bg-blue-50 text-blue-600"
  },
  {
    category: "GRÚA Y ASISTENCIA",
    contacts: [
      { label: "Servicio 24hs", value: "0800 333 3252", link: "tel:08003333252" },
      { label: "Sms Grúa", value: "GRUA al 70703", link: "sms:70703?body=GRUA" }
    ],
    icon: <Truck />, color: "bg-orange-50 text-orange-600"
  },
  {
    category: "OTROS SERVICIOS",
    contacts: [
      { label: "Emergencias Médicas", value: "911", link: "tel:911" },
      { label: "Bomberos", value: "100", link: "tel:100" }
    ],
    icon: <ShieldAlert />, color: "bg-red-50 text-red-600"
  }
];

const EmergencyNumbers = () => {
  return (
    <section className="py-24 bg-[#1a2e44] text-white" id="emergencias">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-yanone uppercase text-[#72c0c9]">Números de Emergencia</h2>
          <div className="h-1 w-20 bg-[#72c0c9] mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {emergencyData.map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[40px] hover:bg-white/10 transition-all group shadow-xl">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {React.cloneElement(item.icon, { size: 28 })}
              </div>
              <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#72c0c9] mb-6 uppercase">{item.category}</h3>
              <div className="space-y-6">
                {item.contacts.map((contact, idx) => (
                  <div key={idx} className="border-l-2 border-white/10 pl-4">
                    <p className="text-[11px] text-gray-400 mb-1 uppercase tracking-widest">{contact.label}</p>
                    <a href={contact.link} className="text-xl font-bold hover:text-[#72c0c9] transition-colors block font-yanone tracking-wide">
                      {contact.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmergencyNumbers;