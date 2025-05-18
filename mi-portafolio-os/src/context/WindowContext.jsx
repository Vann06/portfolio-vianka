import React, { createContext, useState } from 'react';

export const WindowContext = createContext();

export function WindowProvider({ children }) {
  const [openWindows, setOpenWindows] = useState([]);

  const openWindow = (windowName) => {
    if (!openWindows.includes(windowName)) {
      setOpenWindows([...openWindows, windowName]);
    }
  };

  const closeWindow = (windowName) => {
    setOpenWindows(openWindows.filter((name) => name !== windowName));
  };

  return (
    <WindowContext.Provider value={{ openWindows, openWindow, closeWindow }}>
      {children}
    </WindowContext.Provider>
  );
}
