import React from 'react';

const ProductoresIngreso = () => {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center bg-white py-20 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl font-serif text-[#1a2e44] mb-8">Productores</h1>
        
        <p className="text-gray-600 mb-12 text-lg leading-relaxed">
          Si sos productor asociado a nuestra organización aquí podrás encontrar recursos y herramientas que facilitarán tu trabajo cotidiano.
        </p>

        <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Usuario</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-sf-teal focus:border-transparent outline-none transition-all"
              placeholder="Tu usuario"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">Contraseña</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-sf-teal focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center gap-2 ml-1">
            <input type="checkbox" id="remember" className="rounded border-gray-300 text-sf-teal focus:ring-sf-teal" />
            <label htmlFor="remember" className="text-sm text-gray-600">Recordarme</label>
          </div>

          <button 
            type="submit" 
            className="w-full bg-sf-teal hover:bg-sf-teal/90 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm"
          >
            Ingresar →
          </button>
        </form>
      </div>
    </main>
  );
};

export default ProductoresIngreso;