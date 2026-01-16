import React, { useState, useRef } from 'react';
import { 
  HelpCircle, ChevronRight, ChevronLeft, CheckCircle2, 
  XCircle, Bandage, Camera, AlertCircle, MapPin, 
  User, Mail, Phone, Send, Loader2 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import FedPat from "../assets/Partners/FederacionPatronal.png";
import Sancor from "../assets/Partners/SancorSeguros.png";
import Cooperacion from "../assets/Partners/CooperacionSeguros.png";

const DenunciaSiniestro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);
  
  const [formData, setFormData] = useState({
    compania: '',
    descripcion: '',
    heridos: '',
    patente: '',
    marcaModelo: '',
    ubicacion: '',
    localidad: '',
    nombreCliente: '',
    emailCliente: '',
    telefonoCliente: '',
    fotos: [] 
  });

  const [previews, setPreviews] = useState([]);

  // --- Lógica de Cloudinary ---
  const uploadToCloudinary = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: data }
    );

    if (!res.ok) throw new Error('Error al subir imagen a Cloudinary');
    const fileData = await res.json();
    return fileData.secure_url;
  };

  // --- Navegación ---
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => {
    if (step === 1) navigate('/siniestros');
    else setStep(prev => prev - 1);
  };

  // --- Manejo de Datos ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (formData.fotos.length + files.length > 6) {
      alert("Puedes subir un máximo de 6 fotos.");
      return;
    }
    setFormData(prev => ({ ...prev, fotos: [...prev.fotos, ...files] }));
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => [...prev, ...newPreviews]);
  };

  const removeImage = (index) => {
    setPreviews(prev => prev.filter((_, i) => i !== index));
    setFormData(prev => ({ ...prev, fotos: prev.fotos.filter((_, i) => i !== index) }));
  };

  // --- Envío de Datos (Cloudinary + EmailJS) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // 1. Subir imágenes a Cloudinary primero
      const imageUrls = await Promise.all(
        formData.fotos.map(foto => uploadToCloudinary(foto))
      );
      const photoLinksText = imageUrls.join('\n');

      // 2. Parámetros para las plantillas (cliente_nombre, vehiculo, etc.)
      const templateParams = {
        cliente_nombre: formData.nombreCliente,
        cliente_email: formData.emailCliente,
        cliente_tel: formData.telefonoCliente,
        vehiculo: `${formData.marcaModelo} (Patente: ${formData.patente})`,
        compania: formData.compania,
        lugar: `${formData.ubicacion}, ${formData.localidad}`,
        descripcion: formData.descripcion,
        heridos: formData.heridos,
        fotos_count: formData.fotos.length,
        photo_links: photoLinksText // Links directos para el email de la empresa
      };

      // 3. Envío de correos mediante EmailJS usando variables de entorno
      await Promise.all([
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_SINIESTROS,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ),
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTO,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
      ]);

      // 4. Redirección final y aviso
      const nroWhatsApp = "5492914029635"; 
      const textoWhatsApp = `Hola! Soy ${formData.nombreCliente}. Acabo de completar la denuncia web por el siniestro del vehículo ${formData.marcaModelo}. Ya se enviaron las fotos al sistema.`;
      const urlWhatsApp = `https://wa.me/${nroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;

      alert("¡Denuncia y fotos enviadas correctamente!");
      window.open(urlWhatsApp, '_blank');
      navigate('/');

    } catch (err) {
      console.error("Error en el proceso:", err);
      alert("Hubo un error al procesar las imágenes o el envío. Por favor, intenta de nuevo.");
    } finally {
      setIsSending(false);
    }
  };

  // --- Componente Barra de Progreso ---
  const ProgressBar = ({ currentStep }) => {
    const activeBlock = currentStep <= 1 ? 1 : currentStep <= 3 ? 2 : currentStep <= 5 ? 3 : 4;
    return (
      <div className="flex items-center justify-center mb-10">
        {[1, 2, 3, 4].map((num) => (
          <React.Fragment key={num}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg border-2 transition-all duration-500
              ${activeBlock >= num ? 'bg-[#374756] border-[#374756] text-white shadow-md' : 'bg-white border-gray-200 text-gray-300'}`}>
              {num}
            </div>
            {num < 4 && <div className={`w-12 md:w-16 h-[2px] ${activeBlock > num ? 'bg-[#374756]' : 'bg-gray-100'}`} />}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] pb-20 pt-8 px-6">
      <main className="max-w-4xl mx-auto">
        <ProgressBar currentStep={step} />

        <button onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-sf-teal mb-8 font-bold uppercase text-[10px] tracking-[0.2em]">
          <ChevronLeft size={14} /> {step === 1 ? 'Cancelar' : 'Anterior'}
        </button>

        <form onSubmit={handleSubmit}>
          {/* PASO 1: COMPAÑÍA */}
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {[
                { nombre: 'Federación Patronal', logo: FedPat },
                { nombre: 'Sancor Seguros', logo: Sancor },
                { nombre: 'Cooperación', logo: Cooperacion }
              ].map((co) => (
                <button 
                  key={co.nombre} 
                  type="button" 
                  onClick={() => { setFormData({...formData, compania: co.nombre}); nextStep(); }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-50 flex flex-col items-center justify-between min-h-[250px] group"
                >
                  <div className="w-full h-24 flex items-center justify-center p-2">
                    <img src={co.logo} alt={co.nombre} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <span className="font-bold text-gray-700 text-lg mt-4">{co.nombre}</span>
                  <div className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-sf-teal/10 mt-2 transition-colors">
                    <CheckCircle2 className="text-gray-200 group-hover:text-[#72c0c9]" size={20} />
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* PASO 2: DESCRIPCIÓN */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center mb-8 italic">¿Qué sucedió?</h2>
              <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange}
                className="w-full h-64 p-8 rounded-[2.5rem] border-none shadow-sm focus:ring-2 focus:ring-sf-teal outline-none text-gray-600 text-lg resize-none"
                placeholder="Describa brevemente cómo ocurrió el accidente..." />
              <div className="flex justify-end">
                <button type="button" onClick={nextStep} disabled={!formData.descripcion} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 uppercase tracking-widest shadow-lg">
                  Siguiente <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: HERIDOS */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center italic">¿Hubo personas heridas?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'Ninguno', label: 'No', icon: <XCircle size={40}/> },
                  { id: 'Leves', label: 'Lesiones Leves', icon: <Bandage size={40}/> },
                  { id: 'Graves', label: 'Lesiones Graves', icon: <AlertCircle size={40}/> }
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => { setFormData({...formData, heridos: opt.id}); nextStep(); }}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                    <div className="text-gray-400 group-hover:text-sf-teal transition-colors">{opt.icon}</div>
                    <p className="font-bold text-xl text-gray-800">{opt.label}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PASO 4: DATOS VEHÍCULO */}
          {step === 4 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center italic">Datos de su vehículo</h2>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-50 space-y-6">
                <input name="patente" type="text" placeholder="Patente / Dominio" onChange={handleInputChange} value={formData.patente} className="w-full p-5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-sf-teal text-lg" />
                <input name="marcaModelo" type="text" placeholder="Marca y Modelo" onChange={handleInputChange} value={formData.marcaModelo} className="w-full p-5 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-sf-teal text-lg" />
                <button type="button" onClick={nextStep} className="w-full bg-[#72c0c9] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-lg">Siguiente</button>
              </div>
            </div>
          )}

          {/* PASO 5: FOTOS */}
          {step === 5 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center italic">Fotos del siniestro</h2>
              <div className="border-4 border-dashed border-gray-100 rounded-[3rem] p-10 flex flex-col items-center bg-white min-h-[300px] justify-center text-center">
                {previews.length === 0 ? (
                  <>
                    <Camera size={60} className="text-gray-100 mb-4" />
                    <p className="text-gray-400 font-medium">Sube fotos de los daños y documentos</p>
                  </>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full mb-8">
                    {previews.map((src, i) => (
                      <div key={i} className="relative group aspect-square rounded-2xl overflow-hidden shadow-md">
                        <img src={src} alt="preview" className="w-full h-full object-cover" />
                        <button type="button" onClick={() => removeImage(i)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-xl"><XCircle size={16} /></button>
                      </div>
                    ))}
                  </div>
                )}
                <label className="cursor-pointer bg-gray-800 text-white px-10 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black transition-all shadow-lg">
                  {previews.length === 0 ? "Seleccionar archivos" : "Agregar más"}
                  <input type="file" multiple accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>
              </div>
              <button type="button" onClick={nextStep} className="w-full bg-[#72c0c9] text-white py-5 rounded-2xl font-bold uppercase tracking-widest">Siguiente</button>
            </div>
          )}

          {/* PASO 6: UBICACIÓN */}
          {step === 6 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center italic">¿Dónde ocurrió?</h2>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center bg-gray-50 rounded-2xl px-5 focus-within:ring-2 focus-within:ring-sf-teal">
                  <MapPin className="text-gray-300" size={22} />
                  <input name="ubicacion" type="text" placeholder="Calle e Intersección" onChange={handleInputChange} value={formData.ubicacion} className="w-full p-5 bg-transparent outline-none text-lg" />
                </div>
                <input name="localidad" type="text" placeholder="Localidad" onChange={handleInputChange} value={formData.localidad} className="w-full p-5 bg-gray-50 rounded-2xl outline-none" />
                <button type="button" onClick={nextStep} className="w-full bg-[#72c0c9] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-lg">Siguiente</button>
              </div>
            </div>
          )}

          {/* PASO 7: CONTACTO */}
          {step === 7 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center italic">Datos de contacto</h2>
              <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 space-y-5">
                <div className="flex items-center bg-gray-50 rounded-2xl px-5">
                  <User className="text-gray-300" size={20}/><input name="nombreCliente" required type="text" placeholder="Nombre completo" onChange={handleInputChange} className="w-full p-5 bg-transparent outline-none" />
                </div>
                <div className="flex items-center bg-gray-50 rounded-2xl px-5">
                  <Mail className="text-gray-300" size={20}/><input name="emailCliente" required type="email" placeholder="Tu Email" onChange={handleInputChange} className="w-full p-5 bg-transparent outline-none" />
                </div>
                <div className="flex items-center bg-gray-50 rounded-2xl px-5">
                  <Phone className="text-gray-300" size={20}/><input name="telefonoCliente" required type="tel" placeholder="Tu Teléfono" onChange={handleInputChange} className="w-full p-5 bg-transparent outline-none" />
                </div>
                <button type="submit" disabled={isSending} 
                  className="w-full bg-gray-800 text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-black transition-all flex justify-center items-center gap-3 disabled:opacity-50">
                  {isSending ? <><Loader2 className="animate-spin" /> Procesando...</> : "Enviar Denuncia"} <Send size={20} />
                </button>
              </div>
            </div>
          )}
        </form>
      </main>
    </div>
  );
};

export default DenunciaSiniestro;