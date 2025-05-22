import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";

function LinksWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  const links = [
    { name: "Twitter", icon: "/icons/twitter.png", url: "https://twitter.com" },
    { name: "YouTube", icon: "/icons/youtube.png", url: "https://youtube.com" },
    { name: "Ko-fi", icon: "/icons/kofi.png", url: "https://ko-fi.com" },
    { name: "Discord", icon: "/icons/discord.png", url: "https://discord.com" },
    { name: "Instagram", icon: "/icons/instagram.png", url: "https://instagram.com" },
    { name: "Bluesky", icon: "/icons/bluesky.png", url: "https://bsky.app" },
    { name: "Art Prints", icon: "/icons/inprnt.png", url: "https://inprnt.com" },
    { name: "Merch", icon: "/icons/merch.png", url: "https://your-merch.com" },
  ];

  return (
    <Window
      title="links"
      zIndex={zIndex}
      onClose={() => closeWindow("links")}
      onFocus={() => bringToFront("links")}
    >
      <WindowContent>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "1.5rem",
            justifyItems: "center",
            marginBottom: "2rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
                fontWeight: "600",
              }}
            >
              <img
                src={link.icon}
                alt={link.name}
                style={{
                  width: "48px",
                  height: "48px",
                  marginBottom: "0.5rem",
                  filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))",
                }}
              />
              <span>{link.name.toLowerCase()}</span>
            </a>
          ))}
        </div>

        <div
          style={{
            padding: "0.8rem 1rem",
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            textAlign: "center",
            fontSize: "0.9rem",
            fontWeight: "500",
            color: "#333",
          }}
          className="dark:bg-[#2e2e3e] dark:text-white"
        >
          clicking any of the links will open a new tab!
        </div>
      </WindowContent>
    </Window>
  );
}

export default LinksWindow;
