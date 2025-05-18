// src/components/DesktopIcon.jsx
import React, { useContext } from 'react';
import { WindowContext } from '../context/WindowContext';

function DesktopIcon({ title, windowName }) {
  const { openWindow } = useContext(WindowContext);

  return (
    <div
      className="w-16 h-16 m-4 text-center cursor-pointer"
      onDoubleClick={() => openWindow(windowName)}
    >
      <div className="w-16 h-16 bg-white rounded shadow-md flex items-center justify-center">
        {/* Puedes reemplazar esto con una imagen o ícono */}
        <span role="img" aria-label={title}>🧍‍♀️</span>
      </div>
      <p className="text-sm mt-1">{title}</p>
    </div>
  );
}

export default DesktopIcon;
