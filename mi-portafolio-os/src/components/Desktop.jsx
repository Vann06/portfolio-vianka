import DesktopIcon from "./DesktopIcon";
import { useState,useEffect } from "react";
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

function Desktop() {
  const[isDark, setIsDark] = useState(false);

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
      title: "curriculum",
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
      ? "linear-gradient(to bottom, #785cf2, #ad9df2)"
      : "white",
    borderRadius: "12px",
    boxShadow: "4px 6px 10px rgba(0, 0, 0, 0.15)",
    border: isDark ? "2px solid #444" : "2px solid #ccc",
    maxWidth: "1000px",
    width: "95%",
    zIndex: 1,
    transition: "all 0.3s ease-in-out",
    color: isDark ? "white" : "#222",
  }}
>

      {/* Barra superior */}
      <div
        style={{
          backgroundColor: "#3c3c3c",
          color: "white",
          padding: "0.75rem 1rem",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          fontWeight: "bold",
          fontFamily: "monospace",
          textAlign: "left",
        }}
        className="dark:bg-[#292145]"
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
              color: "#f79902",
            }}
            className="dark:text-[#a585ff]"
          >
            i’m Vianka
          </span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#444" }} className="dark:text-gray-300">
          illustrator, animator, and developer
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
        <img src="/icons/twitter.png" alt="Twitter" style={iconStyle} />
        <img src="/icons/youtube.png" alt="YouTube" style={iconStyle} />
        <img src="/icons/instagram.png" alt="Instagram" style={iconStyle} />
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