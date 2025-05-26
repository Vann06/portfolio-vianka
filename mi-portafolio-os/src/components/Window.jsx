import { Rnd } from "react-rnd";
import { useState, useEffect } from "react";
import closeIcon from '../assets/icon_close_white.png'

function Window({ title, children, onClose, zIndex = 10, onFocus }) {
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // DESKTOP MODE
  if (!isMobile) {
    return (
      <Rnd
        default={{ x: 200, y: 100, width: 550, height: 500 }}
        minWidth={300}
        maxHeight={700}
        bounds="window"
        style={{ zIndex }}
        onMouseDown={onFocus}
      >
        <div className={`window-container ${isDark ? "dark" : ""}`}>
          <div className="window-header handle">
            <span>{title}</span>
            {onClose && (
              <button onClick={onClose} className="window-close">
                [x]
              </button>
            )}
          </div>
          <div className="window-content">{children}</div>
        </div>
      </Rnd>
    );
  }

  // MOBILE MODE
  return (
    <div
      className={`mobile-window ${isDark ? "dark" : ""}`}
      style={{
        zIndex,
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        maxHeight: "90vh",
        overflowY: "auto",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        transition: "transform 0.3s ease",
      }}
    >
      <div className="window-header handle">
        <span>{title}</span>
        {onClose && (
          <button onClick={onClose} className="window-close">
            <img
              src={closeIcon}
              alt="close"
              width="24"
              style={{ pointerEvents: "none" }}
            />
          </button>
        )}
      </div>
      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
