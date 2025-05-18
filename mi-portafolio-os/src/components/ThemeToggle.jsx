import { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.body.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        zIndex: 9999,
        backgroundColor: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#f79902",
        padding: "0.5rem",
        borderRadius: "50%",
        border: "none",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        cursor: "pointer",
        transition: "all 0.3s",
      }}
    >
      {isDark ? "🌞" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
