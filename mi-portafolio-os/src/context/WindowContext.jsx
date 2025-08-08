import { createContext, useState } from "react";

export const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([]);
  const [zCounter, setZCounter] = useState(100); 

  const debug = () => {
    console.table(windows.map(w => ({ name: w.name, z: w.zIndex })));
  };

  const openWindow = (name) => {
    console.log("[WindowContext] openWindow:", name);
    setWindows(prev => {
      const found = prev.find(w => w.name === name);
      if (found) {
        // solo traer al frente
        const updated = prev.map(w =>
          w.name === name ? { ...w, zIndex: zCounter + 1 } : w
        );
        setZCounter(zCounter + 1);
        return updated;
      }
      const added = [...prev, { name, zIndex: zCounter + 1 }];
      setZCounter(zCounter + 1);
      return added;
    });
  };

  const closeWindow = (name) => {
    console.log("[WindowContext] closeWindow:", name);
    setWindows((prev) => {
      const filtered = prev.filter((w) => w.name !== name);
      setTimeout(debug, 0);
      return filtered;
    });
  };

  const bringToFront = (name) => {
    console.log("[WindowContext] bringToFront:", name);
    const maxZ = zCounter + 1;
    setWindows((prev) => {
      const updated = prev.map((w) =>
        w.name === name ? { ...w, zIndex: maxZ } : w
      );
      setTimeout(debug, 0);
      return updated;
    });
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
