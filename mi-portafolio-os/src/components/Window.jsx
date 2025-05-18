import { useState } from "react";

function Window({ title, children }) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y });
    }
  };

  const handleMouseUp = () => setDragging(false);

  return (
    <div
      className="fixed inset-0 z-10"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="absolute bg-white shadow-lg rounded w-80"
        style={{ left: position.x, top: position.y }}
      >
        <div
          className="bg-gray-800 text-white px-4 py-2 rounded-t cursor-move select-none flex justify-between items-center"
          onMouseDown={handleMouseDown}
        >
          <span>{title}</span>
          {/* Aquí podrías poner un botón de cerrar si quieres */}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Window;
