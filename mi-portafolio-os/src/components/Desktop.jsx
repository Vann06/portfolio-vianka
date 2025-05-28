import DesktopIcon from "./DesktopIcon";
import { useState,useEffect, useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import icon_about from "../assets/icon_about.webp";
import icon_about_dark from "../assets/icon_about_dark.webp";
import icon_links from "../assets/icon_links.webp";
import icon_links_dark from "../assets/icon_links_dark.webp";
import icon_work from "../assets/icon_work.webp";
import icon_work_dark from "../assets/icon_work_dark.webp";
import icon_contact from "../assets/icon_contact.webp";
import icon_contact_dark from "../assets/icon_contact_dark.webp";
import icon_cv from "../assets/icon_cv_light.webp";
import icon_cv_dark from "../assets/icon_cv_dark.webp";

import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
function Desktop() {
  const[isDark, setIsDark] = useState(false);
  const {openWindow} = useContext(WindowContext);

  useEffect(() => {
    const root = document.documentElement;
    const update = () => 
      setIsDark(root.classList.contains("dark"));
      update();
      const observer = new MutationObserver(update);
      observer.observe(root, { attributes: true, attributeFilter: ["class"] });
      return () => observer.disconnect();
    },[]);

  const icons = [
    {
      title: "about",
      iconLight: icon_about,
      iconDark: icon_about_dark,
    },
    {
      title: "links",
      iconLight: icon_links,
      iconDark: icon_links_dark,
    },
    {
      title: "work",
      iconLight: icon_work,
      iconDark: icon_work_dark,
    },
    {
      title: "resume",
      iconLight: icon_cv,
      iconDark: icon_cv_dark,
    },
    {
      title: "contact",
      iconLight: icon_contact,
      iconDark: icon_contact_dark,
    },
  ];

  return (
  <div
  style={{
    background: isDark
      ? "linear-gradient(to bottom,rgb(74, 59, 134),rgb(110, 94, 184))"
      : "white",
    borderRadius: "12px",
    boxShadow: "4px 6px 20px rgba(0, 0, 0, 0.15)",
    border: isDark ? "2px solid #dddaf0" : "2px solid rgba(53, 123, 167, 0.85)",
    maxWidth: "700px",
    width: "95%",
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
    color: isDark ? "white" : "#222",
  }}
  className="dark:bg-[#10101a] dark:border-[#444] dark:text-white text-gray-800"
>
      {/* Barra superior */}
      <div
        style={{
          backgroundColor: isDark ? "#222024" : "#346285",
          color: "white",
          padding: "0.75rem 1rem",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          borderBottom: isDark ? "2px solid #dddaf0" : "2px solid  rgba(53, 123, 167, 0.85)",
          fontWeight: "bold",
          fontFamily: "monospace",
          textAlign: "left",
        }}
      >
        home
      </div>
  

      {/* Contenido */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 300 }}>
          hi!{" "}
          <span
            style={{
              fontWeight: "bold",
              color: isDark ? "white" : "#70b0e0"
            }}
            className="dark:text-[#a585ff]"
          >
            I’m Vianka
          </span>
        </h1>
        <p style={{ 
          fontSize: "1.2rem", 
          color: isDark ? "white" : "#1b2c45"
           }} className="dark:text-gray-300">
          Fullstack dev, Ux Designer, and Illustrator
        </p>

        {/* Iconos */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {icons.map((item) => (
            <DesktopIcon
              key={item.title}
              title={item.title}
              iconLight={item.iconLight}
              iconDark={item.iconDark}
              onClick={() => openWindow(item.title)}
            />
          ))}
        </div>
      </div>

      {/* Footer redes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <a href="https://www.linkedin.com/in/vianka-castro-121a90364/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin" style={iconStyle} />
        </a>
        <a href= "https://www.github.com/Vann06" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github" style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/copy._.cat/" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" style={iconStyle} />
        </a>
      </div>
    </div>
  );
}

const iconStyle = {
  width: "24px",
  height: "24px",
  background: "#222",
  borderRadius: "50%",
  padding: "0.4rem",
};

export default Desktop;