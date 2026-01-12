import React from 'react';
import { MessageSquare, Phone, Truck, ShieldAlert } from 'lucide-react';

const emergencyData = [
  {
    category: "URGENCIAS POR WHATSAPP",
    contacts: [
      { label: "Línea 1", value: "+54 9 291 4029635", link: "https://wa.me/5492914029635" },
      { label: "Línea 2", value: "+54 9 291 4029634", link: "https://wa.me/5492914029634" }
    ],
    icon: <MessageSquare className="text-green-500" />,
    color: "bg-green-50"
  },
  {
    category: "COMPAÑÍAS (0800)",
    contacts: [
      { label: "Cooperación Seguros", value: "0800 777 7070", link: "tel:08007777070" },
      { label: "Sancor Seguros", value: "0800 777 4643", link: "tel:08007774643" }
    ],
    icon: <Phone className="text-blue-500" />,
    color: "bg-blue-50"
  },
  {
    category: "SERVICIO DE GRÚA",
    contacts: [
      { label: "Asistencia 24hs", value: "Ver póliza para número específico", link: "#" }
    ],
    icon: <Truck className="text-orange-500" />,
    color: "bg-orange-50"
  },
  {
    category: "DENUNCIAS ART",
    contacts: [
      { label: "Centro de Atención", value: "0800 333 1333", link: "tel:08003331333" }
    ],
    icon: <ShieldAlert className="text-red-500" />,
    color: "bg-red-50"
  }
];

const EmergencyNumbers = () => {
  return (
    <section className="py-20 bg-[#1a2e44] text-white rounded-t-[60px] md:rounded-t-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-400">Números de emergencia</h2>
            <p className="text-gray-400 max-w-xl">
              Haciendo clic en cada número podrás iniciar una llamada o chat de forma inmediata.
            </p>
          </div>
          <div className="h-1 w-24 bg-sf-teal rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyData.map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[32px] hover:bg-white/10 transition-all group">
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              
              <h3 className="text-[10px] font-bold tracking-[0.2em] text-sf-teal mb-4 uppercase">
                {item.category}
              </h3>

              <div className="space-y-4">
                {item.contacts.map((contact, idx) => (
                  <div key={idx}>
                    <p className="text-[11px] text-gray-400 mb-1">{contact.label}</p>
                    <a 
                      href={contact.link}
                      className="text-lg font-bold hover:text-sf-teal transition-colors block"
                    >
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