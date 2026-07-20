import React from 'react';
import { MessageSquare, Phone, Truck, ShieldAlert, MessageCircle } from 'lucide-react';

const emergencyData = [
  {
    category: "WHATSAPP OFICINA",
    contacts: [
      { label: "Línea 1", value: "+54 9 291 4029635", link: "https://wa.me/5492914029635" },
      { label: "Línea 2", value: "+54 9 291 4029634", link: "https://wa.me/5492914029634" }
    ],
    icon: <MessageSquare />, color: "bg-green-50 text-green-600"
  },
  {
    category: "DENUNCIAS SINIESTROS",
    contacts: [
      { label: "Sancor Seguros", value: "0800 777 4643", link: "tel:08007774643" },
      { label: "Cooperación Seguros", value: "0800 777 7070", link: "tel:08007777070" },
      { label: "Federación Patronal ART", value: "0800 222 2322", link: "tel:08002222322" },
      { label: "Prevención ART", value: "0800 444 4278", link: "tel:08004444278" }
    ],
    icon: <Phone />, color: "bg-blue-50 text-blue-600"
  },
  {
    category: "GRÚA Y ASISTENCIA AL VEHÍCULO",
    contacts: [
      {
        label: "Federación Patronal", value: "0800 222 0022", link: "tel:08002220022",
        wa: { value: "+54 9 11 2808 0012", link: "https://wa.me/5491128080012" }
      },
      {
        label: "Sancor Seguros", value: "0800 333 2766", link: "tel:08003332766",
        wa: { value: "+54 3493 520 650", link: "https://wa.me/543493520650" }
      },
      { label: "Cooperación Seguros", value: "0800 444 0266", link: "tel:08004440266" }
    ],
    icon: <Truck />, color: "bg-orange-50 text-orange-600"
  },
  {
    category: "ATENCIÓN AL CLIENTE Y OTROS SERVICIOS",
    contacts: [
      {
        label: "Federación Patronal", value: "0810 222 5588", link: "tel:08102225588",
        wa: { value: "+54 9 221 429 0200", link: "https://wa.me/5492214290200" }
      },
      {
        label: "Cooperación Seguros", value: "0800 777 7070", link: "tel:08007777070",
        wa: { value: "+54 9 3462 406240", link: "https://wa.me/5493462406240" }
      },
      {
        label: "Sancor Seguros", value: "0800 444 2850", link: "tel:08004442850",
        wa: { value: "+54 9 3493 510404", link: "https://wa.me/5493493510404" }
      },
      { label: "Federación Patronal ART", value: "0800 222 3535", link: "tel:08002223535" },
      { label: "Prevención ART", value: "0800 5555 278", link: "tel:08005555278" },
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
          <h2 className="text-[#72c0c9]">Números de Emergencia</h2>
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
                    <a href={contact.link} className="hover:text-[#72c0c9] transition-colors block tracking-wide">
                      {contact.value}
                    </a>
                    {contact.wa && (
                      <a
                        href={contact.wa.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center gap-1 text-[12px] text-[#25D366] hover:text-[#4ade80] transition-colors tracking-wide"
                      >
                        <MessageCircle size={12} className="flex-shrink-0" />
                        {contact.wa.value}
                      </a>
                    )}
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