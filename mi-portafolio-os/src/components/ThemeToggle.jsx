import { useEffect, useState } from "react";
import AnimatedIcon from "./AnimatedIcon";

import lightIcon from "../assets/dark_mode_light.webp"; 
import darkIcon from "../assets/dark_mode_dark.webp";   

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

useEffect(() => {
  setIsDark(document.documentElement.classList.contains("dark"));
}, []);

 // useEffect(() => {
 //   const isDarkMode = document.documentElement.classList.contains("dark");
 //   setIsDark(isDarkMode);
 // }, []);

 const toggleTheme = () => {
  const root = document.documentElement; // <html>
  root.classList.toggle("dark");
  setIsDark(root.classList.contains("dark"));
};


  return (
    <button
      onClick={toggleTheme}
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        zIndex: 9999,
        border: "none",
        background: "none",
      }}
    >
      <AnimatedIcon
        srcLight={lightIcon}  
        srcDark={darkIcon} 
        alt="Theme"
        size={50}
      />
    </button>
  );
}

export default ThemeToggle;
