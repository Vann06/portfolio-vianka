import { useEffect, useState } from "react";
import AnimatedIcon from "./AnimatedIcon";
import useSound from "use-sound";

import lightIcon from "../assets/dark_mode_light.webp"; 
import darkIcon from "../assets/dark_mode_dark.webp";   

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  //Soniditos probando 
  const [playDark] = useSound("https://res.cloudinary.com/dxjrdqbio/video/upload/v1748741105/dark_g3kjaz.mp3", {volume:1});
  const [playLight] = useSound("https://res.cloudinary.com/dxjrdqbio/video/upload/v1748741213/light_hfjy10.mp3", {volume:1});

useEffect(() => {
  setIsDark(document.documentElement.classList.contains("dark"));
}, []);

 // useEffect(() => {
 //   const isDarkMode = document.documentElement.classList.contains("dark");
 //   setIsDark(isDarkMode);
 // }, []);

 const toggleTheme = () => {
  const root = document.documentElement; 
  root.classList.toggle("dark");
  setIsDark(root.classList.contains("dark"));
  const nowDark = root.classList.contains("dark");


  if (nowDark) {
    playDark();
  } else {
    playLight();
  }
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
