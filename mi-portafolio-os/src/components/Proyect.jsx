import { useEffect, useState } from "react";
import "../styles/Proyect.css";

function Proyect({ title, description, tech, link, image }) {
  const [isDark, setIsDark] = useState(false);
  const [hovered, setHovered] = useState(false);

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
      className={`proyect-card ${isDark ? "dark" : "light"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="proyect-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="tech">{tech}</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>

      {image && (
        <div className={`preview-floating ${hovered ? "visible" : ""}`}>
          <img src={image} alt={`Preview of ${title}`} />
        </div>
      )}
    </div>
  );
}

export default Proyect;
