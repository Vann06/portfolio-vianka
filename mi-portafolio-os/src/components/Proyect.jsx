import { useState, useEffect } from "react";

function Proyect({ title, description, tech, link }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
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
      style={{
        border: isDark ? "2px solid #a585ff" : "2px solid #346285",
        borderRadius: "12px",
        padding: "1.5rem",
        marginBottom: "1.5rem",
        background: isDark ? "#1e1e2f" : "#f7f2eb",
        boxShadow: isDark
          ? "0 8px 20px rgba(120, 92, 242, 0.3)"
          : "0 6px 12px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
    >
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: isDark ? "#ffffff" : "#1b2c45",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontSize: "0.95rem",
          color: isDark ? "#dddaf0" : "#333",
          marginBottom: "0.8rem",
        }}
      >
        {description}
      </p>

      <p
        style={{
          fontSize: "0.85rem",
          fontStyle: "italic",
          color: isDark ? "#aab" : "#555",
          marginBottom: "1rem",
        }}
      >
        <strong>Technologies:</strong> {tech}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontWeight: "bold",
          fontSize: "0.9rem",
          color: isDark ? "#c9b6ff" : "#346285",
          textDecoration: "none",
          borderBottom: `1px solid ${isDark ? "#c9b6ff" : "#346285"}`,
        }}
      >
        View project ↗
      </a>
    </div>
  );
}

export default Proyect;
