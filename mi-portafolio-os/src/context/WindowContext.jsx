import { createContext, useState } from "react";

export const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([]);
  const [zCounter, setZCounter] = useState(100); 

  const openWindow = (name) => {
    const exists = windows.find((w) => w.name === name);
    if (!exists) {
      setWindows((prev) => [...prev, { name, zIndex: zCounter }]);
      setZCounter((z) => z + 1);
    } else {
      bringToFront(name); 
    }
  };

  const closeWindow = (name) => {
    setWindows((prev) => prev.filter((w) => w.name !== name));
  };

  const bringToFront = (name) => {
    const maxZ = zCounter + 1;
    setWindows((prev) =>
      prev.map((w) =>
        w.name === name ? { ...w, zIndex: maxZ } : w
      )
    );
    setZCounter(maxZ);
  };

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        bringToFront,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}
