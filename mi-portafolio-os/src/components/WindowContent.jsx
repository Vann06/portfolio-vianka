import { useEffect, useState } from "react";

function WindowContent({ children }) {
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
    <div
    className="window-content"
      style={{
        textAlign: "center",
        color: isDark ? "#dddaf0" : "#1b2c45",
        fontFamily: "'Segoe UI', 'Inter', sans-serif",
        padding: "1.5rem 2rem",
        lineHeight: 1.6,
        fontSize: "1rem",
      }}
    >
      {children}
    </div>
  );
}

export default WindowContent;
