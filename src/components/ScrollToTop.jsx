import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Al cambiar la ruta (pathname), movemos el scroll al punto (0,0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;