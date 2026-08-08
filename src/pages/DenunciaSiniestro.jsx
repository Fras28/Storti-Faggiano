import React, { useState } from 'react';
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

// Escapa texto del usuario para insertarlo de forma segura en el HTML del email.
const escapeHtml = (s) => String(s ?? '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

// Bloque HTML con los links de Cloudinary, agrupados por categoría y clickeables.
// sections: [{ label, urls: string[] }]
const buildPhotoLinksHtml = (sections) => {
  const active = sections.filter(s => s.urls.length > 0);
  if (active.length === 0) return '<p style="color:#6b7280;font-size:13px">No se adjuntaron fotos.</p>';
  return active.map(s =>
    `<p style="margin:14px 0 4px;font-weight:bold;color:#1a2e44;font-size:13px">${escapeHtml(s.label)}</p>` +
    s.urls.map((u, i) =>
      `<a href="${encodeURI(u)}" style="color:#2a6f7a;font-size:13px;word-break:break-all">Foto ${i + 1}: ${escapeHtml(u)}</a>`
    ).join('<br>')
  ).join('');
};

// Versión en texto plano de los links (respaldo por si el email se ve sin HTML).
const buildPhotoLinksText = (sections) => {
  const active = sections.filter(s => s.urls.length > 0);
  if (active.length === 0) return 'No se adjuntaron fotos.';
  return active.map(s => s.label + ':\n' + s.urls.join('\n')).join('\n\n');
};

// Arma el cuerpo completo del email en HTML con TODOS los datos de la denuncia.
// De esta forma el correo llega completo sin depender de que la plantilla de
// EmailJS declare cada variable: la plantilla solo necesita renderizar {{{message_html}}}.
const buildEmailHtml = (f, photoLinksHtml) => {
  const row = (label, value) => value
    ? `<tr><td style="padding:4px 14px 4px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:4px 0;color:#111827;font-size:13px"><strong>${escapeHtml(value)}</strong></td></tr>`
    : '';
  const section = (title, rows) => rows
    ? `<h3 style="margin:22px 0 6px;color:#1a2e44;font-size:15px;border-bottom:2px solid #72c0c9;padding-bottom:4px">${escapeHtml(title)}</h3><table style="border-collapse:collapse;width:100%">${rows}</table>`
    : '';

  const conductorRows = f.titularEsConductor === 'Si'
    ? row('Conductor', 'El titular era el conductor al momento del siniestro')
    : row('Nombre', f.nombreConductor) + row('DNI', f.dniConductor) + row('Teléfono', f.telConductor);

  const terceroRows = f.involucraTercero === 'Si'
    ? row('Nombre', f.nombreTercero) + row('DNI', f.dniTercero) + row('Teléfono', f.telTercero) +
      row('Email', f.emailTercero) + row('Aseguradora', f.aseguradoraTercero) + row('Patente', f.patenteTercero) +
      row('Marca', f.marcaTercero) + row('Modelo', f.modeloTercero) + row('Año', f.anioTercero)
    : row('Otros vehículos', 'No hubo otros vehículos involucrados');

  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:640px;margin:0 auto;color:#111827">
  <div style="background:#1a2e44;color:#ffffff;padding:20px 24px;border-radius:12px 12px 0 0">
    <h2 style="margin:0;font-size:18px">Nueva denuncia de siniestro automotor</h2>
    <p style="margin:6px 0 0;color:#72c0c9;font-size:13px">${escapeHtml(f.compania)}</p>
  </div>
  <div style="border:1px solid #e5e7eb;border-top:none;padding:8px 24px 24px;border-radius:0 0 12px 12px">
    ${section('Datos del siniestro',
      row('Compañía', f.compania) +
      row('Descripción', f.descripcion) +
      row('Personas heridas', f.heridos) +
      row('Intervino ambulancia', f.ambulancia) +
      row('Fecha', f.fechaSiniestro) +
      row('Hora', f.horaSiniestro) +
      row('Dirección', f.direccion) +
      row('Entre calles', f.entreCalles) +
      row('Ciudad', f.ciudad)
    )}
    ${section('Titular de la póliza',
      row('Nombre', f.nombreCliente) +
      row('DNI', f.dniCliente) +
      row('Teléfono', f.telefonoCliente) +
      row('Email', f.emailCliente)
    )}
    ${section('Vehículo asegurado',
      row('Patente', f.patente) +
      row('Marca', f.marca) +
      row('Modelo', f.modelo) +
      row('Año', f.anio)
    )}
    ${section('Conductor', conductorRows)}
    ${section('Tercero involucrado', terceroRows)}
    <h3 style="margin:22px 0 6px;color:#1a2e44;font-size:15px;border-bottom:2px solid #72c0c9;padding-bottom:4px">Fotos del siniestro (Cloudinary)</h3>
    ${photoLinksHtml}
  </div>
</div>`;
};

const DenunciaSiniestro = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSending, setIsSending] = useState(false);

  const [formData, setFormData] = useState({
    compania: '',
    descripcion: '',
    heridos: '',
    ambulancia: '',
    nombreCliente: '',
    dniCliente: '',
    telefonoCliente: '',
    emailCliente: '',
    patente: '',
    marca: '',
    modelo: '',
    anio: '',
    titularEsConductor: '',
    nombreConductor: '',
    dniConductor: '',
    telConductor: '',
    involucraTercero: '',
    nombreTercero: '',
    dniTercero: '',
    telTercero: '',
    emailTercero: '',
    aseguradoraTercero: '',
    patenteTercero: '',
    marcaTercero: '',
    modeloTercero: '',
    anioTercero: '',
    direccion: '',
    entreCalles: '',
    ciudad: '',
    fechaSiniestro: '',
    horaSiniestro: '',
    fotosVehiculo: [],
    fotosLicencia: [],
    fotosTarjetaVerde: [],
    fotosDni: []
  });

  const [previews, setPreviews] = useState({
    vehiculo: [],
    licencia: [],
    tarjetaVerde: [],
    dni: []
  });

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

  const nextStep = () => {
    if (step >= 13) return;
    setStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (step === 1) {
      navigate('/siniestros');
      return;
    }

    // No volver desde la pantalla de confirmación (paso 13)
    if (step === 13) return;

    // Regreso de ubicación (10) a pregunta tercero (8) si no hubo terceros
    if (step === 10 && formData.involucraTercero === 'No') {
      setStep(8);
      return;
    }

    // Regreso de pregunta tercero (8) a pregunta conductor (6) si titular era conductor
    if (step === 8 && formData.titularEsConductor === 'Si') {
      setStep(6);
      return;
    }

    // Regreso de datos titular (5) a heridos (3) si no hubo heridos
    if (step === 5 && formData.heridos === 'Ninguno') {
      setStep(3);
      return;
    }

    setStep(prev => prev - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const fotoKeyToPreviewKey = { fotosVehiculo: 'vehiculo', fotosLicencia: 'licencia', fotosTarjetaVerde: 'tarjetaVerde', fotosDni: 'dni' };

  const handleFileChange = (e, fotoKey) => {
    const files = Array.from(e.target.files);
    const previewKey = fotoKeyToPreviewKey[fotoKey];
    setFormData(prev => ({ ...prev, [fotoKey]: [...prev[fotoKey], ...files] }));
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setPreviews(prev => ({ ...prev, [previewKey]: [...prev[previewKey], ...newPreviews] }));
  };

  const removeImage = (fotoKey, index) => {
    const previewKey = fotoKeyToPreviewKey[fotoKey];
    setPreviews(prev => ({ ...prev, [previewKey]: prev[previewKey].filter((_, i) => i !== index) }));
    setFormData(prev => ({ ...prev, [fotoKey]: prev[fotoKey].filter((_, i) => i !== index) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      // Subida de imágenes a Cloudinary (4 categorías) -> URLs seguras
      const uploadSection = async (files) => {
        if (!files || files.length === 0) return [];
        return Promise.all(files.map(f => uploadToCloudinary(f)));
      };
      const [vehiculoUrls, licenciaUrls, tarjetaVerdeUrls, dniUrls] = await Promise.all([
        uploadSection(formData.fotosVehiculo),
        uploadSection(formData.fotosLicencia),
        uploadSection(formData.fotosTarjetaVerde),
        uploadSection(formData.fotosDni),
      ]);
      const photoSections = [
        { label: 'Vehículo asegurado', urls: vehiculoUrls },
        { label: 'Licencia de conducir', urls: licenciaUrls },
        { label: 'Tarjeta verde', urls: tarjetaVerdeUrls },
        { label: 'DNI', urls: dniUrls },
      ];
      const photoLinksText = buildPhotoLinksText(photoSections);
      const photoLinksHtml = buildPhotoLinksHtml(photoSections);
      const messageHtml = buildEmailHtml(formData, photoLinksHtml);

      const templateParams = {
        compania: formData.compania,
        descripcion: formData.descripcion,
        heridos: formData.heridos,
        ambulancia: formData.ambulancia,
        cliente_nombre: formData.nombreCliente,
        cliente_dni: formData.dniCliente,
        cliente_telefono: formData.telefonoCliente,
        cliente_email: formData.emailCliente,
        patente: formData.patente,
        marca: formData.marca,
        modelo: formData.modelo,
        anio: formData.anio,
        titular_es_conductor: formData.titularEsConductor,
        conductor_nombre: formData.nombreConductor,
        conductor_dni: formData.dniConductor,
        conductor_telefono: formData.telConductor,
        involucra_tercero: formData.involucraTercero,
        tercero_nombre: formData.nombreTercero,
        tercero_dni: formData.dniTercero,
        tercero_telefono: formData.telTercero,
        tercero_email: formData.emailTercero,
        tercero_aseguradora: formData.aseguradoraTercero,
        tercero_patente: formData.patenteTercero,
        tercero_marca: formData.marcaTercero,
        tercero_modelo: formData.modeloTercero,
        tercero_anio: formData.anioTercero,
        direccion: formData.direccion,
        entre_calles: formData.entreCalles,
        ciudad: formData.ciudad,
        fecha_siniestro: formData.fechaSiniestro,
        hora_siniestro: formData.horaSiniestro,
        photo_links: photoLinksText,
        photo_links_html: photoLinksHtml,
        // Cuerpo completo del email ya formateado. La plantilla de EmailJS
        // solo tiene que renderizar {{{message_html}}} (triple llave = HTML).
        message_html: messageHtml,
        // Para poder responderle directamente al cliente desde el correo.
        reply_to: formData.emailCliente
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_SINIESTROS,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Paso al paso final de confirmación
      setStep(13);

    } catch (err) {
      console.error(err);
      alert("Error al enviar la denuncia por correo.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] pb-20 pt-8 px-6">
      <main className="max-w-4xl mx-auto">
        {/* Barra de Progreso (si la tienes como componente aparte, mantenla aquí) */}

        <button type="button" onClick={prevStep} className="flex items-center gap-2 text-gray-400 hover:text-sf-teal mb-8 text-[10px] tracking-[0.2em] uppercase">
          <ChevronLeft size={14} /> {step === 1 ? 'Cancelar' : 'Anterior'}
        </button>

        <form onSubmit={handleSubmit}>
          {/* PASO 1: COMPAÑÍA */}
          {step === 1 && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center mb-10">Denuncia Siniestro Automotor</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { n: 'Federación Patronal', l: FedPat,    tel: null },
                { n: 'Sancor Seguros',      l: Sancor,    tel: '0800 333 2766' },
                { n: 'Cooperación',         l: Cooperacion, tel: '0800 444 0266' }
              ].map((co) => (
                <button key={co.n} type="button" onClick={() => { setFormData({ ...formData, compania: co.n }); nextStep(); }}
                  className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-50 flex flex-col items-center group min-h-[250px] justify-center">
                  <img src={co.l} alt={co.n} className="h-20 object-contain mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <span className="font-bold text-gray-700 text-lg">{co.n}</span>
                  {co.tel && (
                    <p className="text-[11px] text-gray-400 mt-3 text-center leading-snug">
                      También podés comunicarte al<br />
                      <span className="font-semibold text-[#72c0c9]">{co.tel}</span>
                    </p>
                  )}
                </button>
              ))}
              </div>
            </div>
          )}

          {/* PASO 2: DESCRIPCIÓN */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-500">
              {(formData.compania === 'Sancor Seguros' || formData.compania === 'Cooperación') && (
                <div className="bg-white border border-[#72c0c9]/40 rounded-[2.5rem] p-8 shadow-sm text-center space-y-4 max-w-2xl mx-auto">
                  <p className="text-gray-600 leading-relaxed">
                    Para <span className="font-semibold">{formData.compania === 'Sancor Seguros' ? 'Sancor Seguros' : 'Cooperación Seguros'}</span> la forma más rápida de iniciar la denuncia es comunicándote con su centro de atención.
                  </p>
                  <a
                    href={`tel:${formData.compania === 'Sancor Seguros' ? '08007774643' : '08007777070'}`}
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb457] text-white px-8 py-4 rounded-2xl font-bold tracking-widest uppercase shadow-lg transition-all"
                  >
                    <Phone size={18} />
                    Llamar ahora {formData.compania === 'Sancor Seguros' ? '0800 777 4643' : '0800 777 7070'}
                  </a>
                  <p className="text-[11px] uppercase tracking-widest text-[#72c0c9] font-semibold">Recomendado</p>
                  <p className="text-sm text-gray-400">¿No podés comunicarte? También podés continuar con el formulario.</p>
                </div>
              )}
              <h2 className="text-3xl font-serif text-gray-800 text-center mb-8">¿Qué sucedió?</h2>
              <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange}
                className="w-full h-64 p-8 rounded-[2.5rem] border-none shadow-sm focus:ring-2 focus:ring-sf-teal outline-none text-gray-600 text-lg resize-none"
                placeholder="Describa brevemente cómo ocurrió el accidente..." />
              <div className="flex justify-end">
                <button type="button" onClick={nextStep} disabled={!formData.descripcion} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold tracking-widest shadow-lg uppercase">
                  Siguiente
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: HERIDOS */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">¿Hubo personas heridas?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'Ninguno', label: 'No', icon: <XCircle size={40} /> },
                  { id: 'Leves', label: 'Lesiones Leves', icon: <Bandage size={40} /> },
                  { id: 'Graves', label: 'Lesiones Graves', icon: <AlertCircle size={40} /> }
                ].map((opt) => (
                  <button key={opt.id} type="button" onClick={() => { setFormData(prev => ({ ...prev, heridos: opt.id })); setStep(opt.id === 'Ninguno' ? 5 : 4); }}
                    className="bg-white p-10 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                    <div className="text-gray-300 group-hover:text-sf-teal transition-colors">{opt.icon}</div>
                    <h3 className="text-gray-800 font-medium text-lg">{opt.label}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* PASO 4: AMBULANCIA */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">¿Intervino la ambulancia?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <button type="button" onClick={() => { setFormData({ ...formData, ambulancia: 'Si' }); nextStep(); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <CheckCircle2 size={48} className="text-gray-200 group-hover:text-sf-teal" />
                  <h3 className="text-gray-800 font-medium text-xl">Sí</h3>
                </button>
                <button type="button" onClick={() => { setFormData({ ...formData, ambulancia: 'No' }); nextStep(); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <XCircle size={48} className="text-gray-200 group-hover:text-sf-teal" />
                  <h3 className="text-gray-800 font-medium text-xl">No</h3>
                </button>
              </div>
            </div>
          )}

          {/* PASO 5: DATOS ASEGURADO */}
          {step === 5 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">Introduzca los datos del titular de la póliza.</h2>
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Nombre y Apellido</label>
                  <input name="nombreCliente" placeholder="i.e. Rocío Cerra" onChange={handleInputChange} value={formData.nombreCliente} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">DNI</label>
                  <input name="dniCliente" placeholder="00.000.000" onChange={handleInputChange} value={formData.dniCliente} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Teléfono</label>
                    <input name="telefonoCliente" placeholder="291..." onChange={handleInputChange} value={formData.telefonoCliente} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Email</label>
                    <input name="emailCliente" placeholder="email@ejemplo.com" onChange={handleInputChange} value={formData.emailCliente} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Patente</label>
                    <input name="patente" placeholder="AA 123 BB" onChange={handleInputChange} value={formData.patente} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Marca</label>
                    <input name="marca" placeholder="Toyota" onChange={handleInputChange} value={formData.marca} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Modelo</label>
                    <input name="modelo" placeholder="Corolla" onChange={handleInputChange} value={formData.modelo} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Año</label>
                    <input name="anio" placeholder="2023" onChange={handleInputChange} value={formData.anio} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                </div>
                <div className='flex justify-end pt-4'>
                  <button type="button" onClick={nextStep} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest shadow-md hover:bg-[#5eb0b9] transition-all">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PASO 6: ¿TITULAR ERA CONDUCTOR? */}
          {step === 6 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">¿El titular era el conductor al momento del siniestro?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <button type="button" onClick={() => { setFormData(prev => ({ ...prev, titularEsConductor: 'Si' })); setStep(8); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <CheckCircle2 size={48} className="text-gray-200 group-hover:text-sf-teal transition-colors" />
                  <h3 className="text-xl font-medium text-gray-700">Sí</h3>
                </button>
                <button type="button" onClick={() => { setFormData(prev => ({ ...prev, titularEsConductor: 'No' })); setStep(7); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <XCircle size={48} className="text-gray-200 group-hover:text-sf-teal transition-colors" />
                  <h3 className="text-xl font-medium text-gray-700">No</h3>
                </button>
              </div>
            </div>
          )}

          {/* PASO 7: DATOS DEL CONDUCTOR */}
          {step === 7 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">Datos del conductor al momento del siniestro.</h2>
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Nombre y Apellido del conductor</label>
                  <input name="nombreConductor" placeholder="Nombre completo" onChange={handleInputChange} value={formData.nombreConductor} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">DNI del conductor</label>
                    <input name="dniConductor" placeholder="00.000.000" onChange={handleInputChange} value={formData.dniConductor} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Teléfono del conductor</label>
                    <input name="telConductor" placeholder="291..." onChange={handleInputChange} value={formData.telConductor} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                </div>
                <div className='flex justify-end pt-4'>
                  <button type="button" onClick={nextStep} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest shadow-md hover:bg-[#5eb0b9] transition-all">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PASO 8: PREGUNTA TERCERO */}
          {step === 8 && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">¿Hubo otros vehículos involucrados?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <button type="button" onClick={() => { setFormData(prev => ({ ...prev, involucraTercero: 'Si' })); setStep(9); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-50 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <CheckCircle2 size={48} className="text-gray-200 group-hover:text-sf-teal transition-colors" />
                  <h3 className="text-xl font-medium text-gray-700">Sí</h3>
                </button>
                <button type="button" onClick={() => { setFormData(prev => ({ ...prev, involucraTercero: 'No' })); setStep(10); }}
                  className="bg-white p-12 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center gap-4 hover:border-sf-teal transition-all group">
                  <XCircle size={48} className="text-gray-200 group-hover:text-sf-teal transition-colors" />
                  <h3 className="text-xl font-medium text-gray-700">No</h3>
                </button>
              </div>
            </div>
          )}

          {/* PASO 9: DATOS TERCERO */}
          {step === 9 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">Introduzca los datos del vehículo del tercero.</h2>
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Nombre y Apellido</label>
                  <input name="nombreTercero" placeholder="Nombre completo" onChange={handleInputChange} value={formData.nombreTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">DNI</label>
                    <input name="dniTercero" placeholder="00.000.000" onChange={handleInputChange} value={formData.dniTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Teléfono</label>
                    <input name="telTercero" placeholder="291..." onChange={handleInputChange} value={formData.telTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Email</label>
                  <input name="emailTercero" placeholder="email@ejemplo.com" onChange={handleInputChange} value={formData.emailTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Aseguradora</label>
                  <input name="aseguradoraTercero" placeholder="Nombre de la compañía aseguradora" onChange={handleInputChange} value={formData.aseguradoraTercero || ''} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Patente</label>
                  <input name="patenteTercero" placeholder="AA 123 BB" onChange={handleInputChange} value={formData.patenteTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Marca</label>
                    <input name="marcaTercero" placeholder="Toyota" onChange={handleInputChange} value={formData.marcaTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Modelo</label>
                    <input name="modeloTercero" placeholder="Corolla" onChange={handleInputChange} value={formData.modeloTercero} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none focus:bg-white focus:border-sf-teal transition-all" />
                  </div>
                </div>
                <div className='flex justify-end pt-4'>
                  <button type="button" onClick={nextStep} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest shadow-md transition-all">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PASO 10: UBICACIÓN */}
          {step === 10 && (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500">
              <h2 className="text-3xl font-serif text-gray-800 text-center">¿Cuándo y dónde ocurrió?</h2>
              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Dirección aproximada</label>
                  <input name="direccion" placeholder="Calle y número" onChange={handleInputChange} value={formData.direccion} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Entre calles</label>
                  <input name="entreCalles" placeholder="Calle 1 y Calle 2" onChange={handleInputChange} value={formData.entreCalles} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Ciudad / Localidad</label>
                  <input name="ciudad" placeholder="Ciudad" onChange={handleInputChange} value={formData.ciudad} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Día</label>
                    <input name="fechaSiniestro" type="date" onChange={handleInputChange} value={formData.fechaSiniestro} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-400 ml-2 uppercase tracking-wider">Hora</label>
                    <input name="horaSiniestro" type="time" onChange={handleInputChange} value={formData.horaSiniestro} className="w-full p-5 bg-gray-50 border border-transparent rounded-2xl outline-none" />
                  </div>
                </div>
                <div className='flex justify-end pt-4'>
                  <button type="button" onClick={nextStep} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold uppercase tracking-widest shadow-md transition-all">
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PASO 11: FOTOS */}
          {step === 11 && (
            <div className="space-y-6 animate-in fade-in duration-500">
              <div className="text-center mb-2">
                <h2 className="text-3xl font-serif text-gray-800">Fotos del siniestro</h2>
                <p className="text-gray-400 text-sm mt-2">Adjunte las fotos correspondientes a cada sección.</p>
              </div>

              {[
                { fotoKey: 'fotosVehiculo',    previewKey: 'vehiculo',     label: 'Fotos del vehículo asegurado' },
                { fotoKey: 'fotosLicencia',    previewKey: 'licencia',     label: 'Licencia de conducir del conductor (frente y dorso)' },
                { fotoKey: 'fotosTarjetaVerde',previewKey: 'tarjetaVerde', label: 'Tarjeta verde (frente y dorso)' },
                { fotoKey: 'fotosDni',         previewKey: 'dni',          label: 'DNI (frente y dorso)' },
              ].map(({ fotoKey, previewKey, label }) => (
                <div key={fotoKey} className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-gray-100">
                  <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">{label}</h3>

                  {previews[previewKey].length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                      {previews[previewKey].map((src, i) => (
                        <div key={i} className="relative aspect-square rounded-2xl overflow-hidden shadow border border-white group">
                          <img src={src} alt="preview" className="w-full h-full object-cover" />
                          <button
                            type="button"
                            onClick={() => removeImage(fotoKey, i)}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 shadow-lg hover:scale-110 transition-transform"
                          >
                            <XCircle size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <label className="cursor-pointer inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-2xl font-bold text-xs tracking-widest hover:bg-black transition-all shadow">
                    <Camera size={14} />
                    {previews[previewKey].length === 0 ? 'SELECCIONAR FOTOS' : 'AGREGAR MÁS'}
                    <input type="file" multiple accept="image/*" onChange={(e) => handleFileChange(e, fotoKey)} className="hidden" />
                  </label>
                </div>
              ))}

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#72c0c9] text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-3 tracking-widest shadow-xl uppercase transition-all hover:bg-[#5eb0b9]"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
          {/* PASO 12: RESUMEN DEL INFORME */}
          {step === 12 && (
            <div className="space-y-8 animate-in fade-in duration-500 max-w-2xl mx-auto">
              <div className="text-center">
                <h2 className="text-4xl font-serif text-gray-800 mb-2">Resumen del informe</h2>
                <p className="text-gray-400 text-sm">Revise cuidadosamente todos los datos y asegúrese de que sean correctos antes de enviarlos.</p>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 space-y-6 text-gray-600">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Compañía</h4>
                    <p className="text-gray-800 font-medium">{formData.compania}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">¿Qué sucedió?</h4>
                    <p className="text-gray-800 italic leading-relaxed">"{formData.descripcion}"</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">¿Personas heridas?</h4>
                      <p className="text-gray-800 font-medium">{formData.heridos}</p>
                    </div>
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">¿Otros vehículos?</h4>
                      <p className="text-gray-800 font-medium">{formData.involucraTercero}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Día y Hora</h4>
                    <p className="text-gray-800 font-medium">{formData.fechaSiniestro} - {formData.horaSiniestro}</p>
                  </div>
                </div>

                {[
                  { previewKey: 'vehiculo',     label: 'Vehículo asegurado' },
                  { previewKey: 'licencia',     label: 'Licencia de conducir' },
                  { previewKey: 'tarjetaVerde', label: 'Tarjeta verde' },
                  { previewKey: 'dni',          label: 'DNI' },
                ].filter(s => previews[s.previewKey].length > 0).map(({ previewKey, label }) => (
                  <div key={previewKey}>
                    <h4 className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2">{label}</h4>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {previews[previewKey].map((src, i) => (
                        <img key={i} src={src} alt="resumen" className="w-full h-24 object-cover rounded-2xl shadow-sm" />
                      ))}
                    </div>
                  </div>
                ))}

                <div className="flex justify-end pt-6">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 tracking-widest shadow-xl uppercase transition-all hover:bg-[#5eb0b9] disabled:opacity-50"
                  >
                    {isSending ? (
                      <><Loader2 className="animate-spin" size={20} /> Enviando...</>
                    ) : (
                      <>Enviar Denuncia <Send size={18} /></>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* PASO 13: CONFIRMACIÓN FINAL */}
          {step === 13 && (
            <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6 animate-in zoom-in duration-700">
              <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-50">
                <CheckCircle2 size={48} className="text-gray-800" strokeWidth={1.5} />
              </div>
              <div className="text-center space-y-2">
                <h2 className="text-4xl font-serif text-gray-800">Hemos recibido su denuncia.</h2>
                <p className="text-gray-400">Uno de nuestros agentes se pondrá en contacto con usted en breve.</p>
              </div>
              <div className="pt-8">
                <button type="button" onClick={() => navigate('/')} className="bg-[#72c0c9] text-white px-10 py-4 rounded-2xl font-bold tracking-widest shadow-lg uppercase transition-all hover:scale-105">
                  Ir a Inicio →
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