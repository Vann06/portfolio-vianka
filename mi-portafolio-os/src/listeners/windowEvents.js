// Opcional: centralizar evento para abrir ventanas desde links internos
import { WindowContext } from "../context/WindowContext";
import { useContext, useEffect } from "react";

export function UseWindowOpenEvent() {
  const { openWindow, bringToFront } = useContext(WindowContext);
  useEffect(() => {
    function handler(e) {
      const name = e.detail;
      openWindow(name);
      bringToFront(name);
    }
    window.addEventListener("open-window", handler);
    return () => window.removeEventListener("open-window", handler);
  }, [openWindow, bringToFront]);
  return null;
}