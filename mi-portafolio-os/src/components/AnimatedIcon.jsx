import { useState, useEffect } from "react";

function AnimatedIcon({ srcLight, srcDark, alt, size = 40, onClick, className = "" }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateMode(); // Initial check

    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleClick = (e) => {
    if (onClick) onClick(e);
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };

  return (
    <img
      src={isDark ? srcDark : srcLight}
      alt={alt}
      onClick={handleClick}
      style={{
        width: size,
        height: size,
        transform: clicked ? "scale(0.9)" : "scale(1)",
        transition: "transform 0.2s ease",
        cursor: "pointer",
        }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
      onMouseLeave={(e) =>
        (e.currentTarget.style.transform = clicked ? "scale(0.9)" : "scale(1)")
      }
      className={className}
    />
  );
}

export default AnimatedIcon;
