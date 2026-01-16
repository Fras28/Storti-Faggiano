import { useState } from 'react';
import { Car, Users, Mountain, Send, Loader2, CheckCircle, Camera, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const SiniestrosGuia = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const categories = [
    {
      id: 'automotor',
      title: 'Automotor',
      icon: <Car size={48} strokeWidth={1.5} />,
    },
    {
      id: 'art',
      title: 'ART',
      icon: <Users size={48} strokeWidth={1.5} />,
    },
    {
      id: 'accidentes',
      title: 'Accidentes personales',
      icon: <Mountain size={48} strokeWidth={1.5} />,
    }
  ];

  // Lógica de Cloudinary usando variables de entorno
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET);
  
    console.log("Subiendo archivo a Cloudinary...", file.name); // Debug
  
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    );
  
    if (!res.ok) {
      const errorData = await res.json();
      console.error("Error detallado de Cloudinary:", errorData); // Esto te dirá el motivo exacto
      throw new Error('Error al subir imagen');
    }
  
    const data = await res.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setStatus('sending');

    try {
      // 1. Subir fotos a Cloudinary
      const imageUrls = await Promise.all(
        images.map(img => uploadToCloudinary(img))
      );

      const photoLinksText = imageUrls.join('\n');

      // 2. Preparar los parámetros para los templates (cliente_nombre, vehiculo, etc.)
      const templateParams = {
        cliente_nombre: e.target.user_name.value,
        cliente_email: e.target.user_email.value,
        cliente_tel: e.target.user_phone.value,
        vehiculo: selectedCategory.title, 
        compania: e.target.compania.value,
        lugar: e.target.lugar.value,
        descripcion: e.target.description.value,
        heridos: "Ver descripción", // Opcional: podrías agregar un campo más
        fotos_count: images.length,
        photo_links: photoLinksText,
      };

      // 3. ENVIAR EMAIL A LA EMPRESA (Reporte Detallado)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_SINIESTROS,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 4. ENVIAR EMAIL AL CLIENTE (Confirmación)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACTO,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al procesar el reporte. Intente nuevamente.");
      setStatus('idle');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20 font-sans">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-400">
        <Link to="/" className="hover:text-sf-teal">Inicio</Link>
        <span className="mx-2">-</span>
        <span className="text-gray-600">Siniestros</span>
      </div>

      <main className="max-w-5xl mx-auto px-6 mt-12">
        {!selectedCategory ? (
          <>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
                Seleccione el tipo de siniestro
              </h1>
              <p className="text-gray-400 text-lg">
                Seleccione el tipo de accidente a continuación para iniciar el reporte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat)}
                  className="bg-gray-50/50 border border-gray-100 rounded-3xl p-12 flex flex-col items-center justify-center gap-6 hover:shadow-xl hover:bg-white transition-all duration-300 group"
                >
                  <div className="text-gray-800 group-hover:text-sf-teal transition-colors">
                    {cat.icon}
                  </div>
                  <span className="text-xl font-medium text-gray-800">
                    {cat.title}
                  </span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-500">
            <button
              onClick={() => { setSelectedCategory(null); setStatus('idle'); setImages([]); }}
              className="flex items-center gap-2 text-sf-teal font-bold mb-8 hover:underline"
            >
              <ArrowLeft size={20} /> Volver a categorías
            </button>

            <div className="bg-gray-50 rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-sm">
              <div className="mb-8 border-b border-gray-200 pb-6">
                <h2 className="text-3xl font-serif text-gray-800">Reportar Siniestro: {selectedCategory.title}</h2>
                <p className="text-gray-500 mt-2">Complete los datos y adjunte las fotos correspondientes.</p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-20 flex flex-col items-center">
                  <div className="bg-sf-teal/10 p-6 rounded-full text-sf-teal mb-6">
                    <CheckCircle size={80} />
                  </div>
                  <h3 className="text-3xl font-serif mb-2 text-gray-800">¡Reporte Enviado!</h3>
                  <p className="text-gray-500 mb-8 max-w-sm">Hemos recibido la información y fotos del siniestro. Un asesor se comunicará a la brevedad al teléfono indicado.</p>
                  <button onClick={() => { setSelectedCategory(null); setStatus('idle'); }} className="text-sf-teal font-bold border-2 border-sf-teal px-8 py-3 rounded-xl">Hacer otro reporte</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                      name="user_name" 
                      placeholder="Nombre completo del asegurado" 
                      required 
                      className="w-full px-5 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal" 
                    />
                    <input 
                      name="user_email" 
                      type="email" 
                      placeholder="Email de contacto" 
                      required 
                      className="w-full px-5 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal" 
                    />
                    <input 
                      name="user_phone" 
                      type="tel" 
                      placeholder="Teléfono (WhatsApp)" 
                      required 
                      className="w-full px-5 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal" 
                    />
                    <select 
                      name="compania" 
                      required 
                      className="w-full px-5 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal bg-white"
                    >
                      <option value="">Seleccione su Aseguradora</option>
                      <option value="Federación Patronal">Federación Patronal</option>
                      <option value="Sancor Seguros">Sancor Seguros</option>
                      <option value="Mercantil Andina">Mercantil Andina</option>
                      <option value="Rivadavia">Seguros Rivadavia</option>
                      <option value="Otras">Otras / No estoy seguro</option>
                    </select>
                  </div>

                  <input 
                    name="lugar" 
                    placeholder="Lugar del accidente (Ciudad, calle o referencia)" 
                    required 
                    className="w-full px-5 py-3 rounded-full border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal" 
                  />

                  <textarea 
                    name="description" 
                    placeholder="Relato de lo sucedido..." 
                    rows="4" 
                    className="w-full px-5 py-4 rounded-3xl border border-gray-200 outline-none focus:ring-2 focus:ring-sf-teal resize-none"
                  ></textarea>

                  <div className="p-10 border-2 border-dashed border-gray-200 rounded-[30px] text-center hover:border-sf-teal transition-colors group bg-white">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => setImages(Array.from(e.target.files))}
                      className="hidden"
                      id="photo-upload"
                    />
                    <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center gap-4">
                      <Camera className="text-gray-300 group-hover:text-sf-teal transition-colors" size={48} />
                      <div className="space-y-1">
                        <p className="text-gray-700 font-bold">Adjuntar fotos del incidente</p>
                        <p className="text-sm text-gray-400">Puede seleccionar varias imágenes a la vez</p>
                      </div>
                      {images.length > 0 && (
                        <div className="mt-2 bg-sf-teal/10 text-sf-teal px-4 py-1 rounded-full text-xs font-bold">
                          {images.length} archivos seleccionados
                        </div>
                      )}
                    </label>
                  </div>

                  <button
                    disabled={uploading}
                    className="w-full bg-[#1a2e44] text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-sf-teal transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-lg"
                  >
                    {uploading ? (
                      <><Loader2 className="animate-spin" /> Procesando y enviando...</>
                    ) : (
                      <><Send size={18} /> Enviar Reporte de Siniestro</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="flex flex-col items-center gap-6 mt-20">
          <p className="text-gray-400 text-lg font-medium">¿Necesitas ayuda urgente?</p>
          <a
            href="https://wa.me/542914553332"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#72c0c9] text-white px-10 py-3 rounded-xl font-bold uppercase tracking-widest hover:brightness-105 transition-all flex items-center gap-2 shadow-md"
          >
            Whatsapp
          </a>
        </div>
      </main>
    </div>
  );
};

export default SiniestrosGuia;