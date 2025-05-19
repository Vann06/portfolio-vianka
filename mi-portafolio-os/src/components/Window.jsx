import { Rnd } from "react-rnd";
import { useState, useEffect } from "react";

function Window({ title, children, onClose, zIndex = 10, onFocus }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Rnd
      default={{
        x: 80,
        y: 120,
        width: 300,
        height: 500,
      }}
      minWidth={300}
      bounds="parent"
      //dragHandleClassName="handle"
      style={{ zIndex, position: "absolute" }}
      onMouseDown={onFocus}
    >
      <div
        style={{
          background: isDark
            ? "linear-gradient(to bottom, rgb(74, 59, 134), rgb(110, 94, 184))"
            : "white",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
          border: isDark ? "2px solid #dddaf0" : "2px solid #ccc",
          color: isDark ? "#dddaf0" : "#000",
          //overflow: "hidden",
          fontFamily: "'Segoe UI', 'Inter', sans-serif",
        }}
      >
        {/* Barra superior */}
        <div
          className="handle flex justify-between items-center px-4 py-2 shadow-md"
          style={{
            backgroundColor: isDark ? "#222024" : "#346285",
            borderBottom: isDark ? "2px solid #dddaf0" : "2px solid #555",
            cursor: "move",
            color: "white",
            fontSize: "1rem",
            fontWeight: "bold",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <span>{title}</span>
          {onClose && (
            <button
              onClick={onClose}
              className="hover:scale-110 transition"
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
              }}
            >
              [X]
            </button>
          )}
        </div>


        {/* Contenido */}
        <div
          style={{
            padding: "2rem",
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "'Segoe UI', 'Inter', sans-serif",
          }}
        >
          {children}
        </div>
      </div>
    </Rnd>
  );
}

export default Window;
