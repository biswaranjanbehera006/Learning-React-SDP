import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FocusManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const main = document.getElementById("main-content");
    main?.focus();
  }, [pathname]);

  return null;
}
