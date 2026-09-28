import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

// Carga gtag.js una sola vez (solo si hay ID configurado)
const initGA = () => {
  if (!GA_ID || window.gtag) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // Las páginas vistas se envían a mano en cada cambio de ruta (es una SPA)
  window.gtag("config", GA_ID, { send_page_view: false });
};

// Evento personalizado, ej: trackEvent("denuncia_siniestro_enviada")
export const trackEvent = (name, params = {}) => {
  if (GA_ID && window.gtag) window.gtag("event", name, params);
};

const Analytics = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    initGA();

    // Clicks en WhatsApp, teléfono y email desde cualquier parte del sitio
    const onClick = (e) => {
      const link = e.target.closest("a[href]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (/wa\.me|whatsapp/i.test(href)) trackEvent("click_whatsapp", { link_url: href });
      else if (href.startsWith("tel:")) trackEvent("click_telefono", { link_url: href });
      else if (href.startsWith("mailto:")) trackEvent("click_email", { link_url: href });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    // Al cambiar la ruta registramos una página vista
    trackEvent("page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
};

export default Analytics;
