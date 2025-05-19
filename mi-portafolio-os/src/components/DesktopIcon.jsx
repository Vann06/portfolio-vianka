import AnimatedIcon from "./AnimatedIcon";
import { WindowContext } from "../context/WindowContext";
import { useEffect, useState, useContext } from "react";

function DesktopIcon({ title, iconLight, iconDark, onClick }) {
  const [isDark, setIsDark] = useState(false);
  const { openWindow } = useContext(WindowContext);

  useEffect(() => {
    const updateMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    updateMode();
    const observer = new MutationObserver(updateMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
>
      {/* Icon */}
       <div className="w-16 h-20 text-center cursor-pointer">
      <div className="w-16 h-16 bg-white dark:bg-[#1e1e2f] rounded shadow-md flex items-center justify-center">
        <AnimatedIcon
          srcLight={iconLight}
          srcDark={iconDark}
          alt={title}
          size={48}
        />
      </div>
      <p className="text-sm mt-1 text-gray-800 dark:text-white">{title}</p>
    </div>

    </div>
   
  );
}

export default DesktopIcon;
