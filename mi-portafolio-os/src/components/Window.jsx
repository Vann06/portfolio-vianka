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
        y: 100,
        width: 500,
        height: 500,
      }}
      minWidth={300}
      maxHeight={700}
      bounds="window"
      //dragHandleClassName="handle"
      style={{ zIndex }}
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
      <div className="window-container">
        <div className="window-header handle"
          style={{
          backgroundColor: isDark ? "#222024" : "#346285",
          color: "white",
          padding: "0.75rem 1rem",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          borderBottom: isDark ? "2px solid #dddaf0" : "2px solid #444957",
          fontWeight: "bold",
          fontFamily: "monospace",
          textAlign: "left",
        }}
        >
          <span>{title}</span>
          {onClose && (
            <button onClick={onClose} className="window-close" style={{
                color: "white", 
              }}>[x]</button>
                      )}
                    </div>


        <div className="window-content" style={{
        textAlign: "center",
        color: isDark ? "#dddaf0" : "#1b2c45",
        fontFamily: "'Segoe UI', 'Inter', sans-serif",
        padding: "1.5rem 2rem",
        lineHeight: 1.6,
        fontSize: "1rem",
      }}>
          
          {children}
        </div>
      </div>


        
      </div>
    </Rnd>
  );
}

export default Window;
