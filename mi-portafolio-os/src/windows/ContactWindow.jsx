import { useState, useEffect, useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import AnimatedIcon from "../components/AnimatedIcon";

// Iconos
import linkedin_dark from "../assets/linkedin.svg";
import linkedin from "../assets/linkedin_dark.svg";
import github from "../assets/github.svg";
import github_dark from "../assets/github_dark.svg";
import discord from "../assets/icon_discord.webp";
import discord_dark from "../assets/icon_discord_dark.webp";
import instagram from "../assets/icon_ig.webp";
import instagram_dark from "../assets/icon_ig_dark.webp";
import twitter from "../assets/icon_twitter.webp";
import twitter_dark from "../assets/icon_twitter_dark.webp";
import youtube from "../assets/icon_yt.webp";
import youtube_dark from "../assets/icon_yt_dark.webp";

function LinksWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  const links = [
    { name: "Twitter", iconLight: twitter, iconDark: twitter_dark, url: "https://x.com/hatsunemiku?lang=en" },
    { name: "YouTube", iconLight: youtube, iconDark: youtube_dark, url: "https://youtube.com" },
    { name: "LinkedIn", iconLight: linkedin, iconDark: linkedin_dark, url: "https://www.linkedin.com/in/vianka-castro-121a90364/" },
    { name: "Discord", iconLight: discord, iconDark: discord_dark, url: "https://discord.com" },
    { name: "Instagram", iconLight: instagram, iconDark: instagram_dark, url: "https://www.instagram.com/copy._.cat/" },
    { name: "GitHub", iconLight: github_dark, iconDark: github, url: "https://www.github.com/Vann06" }
  ];

  return (
    <Window
      title="links"
      zIndex={zIndex}
      onClose={() => closeWindow("links")}
      onFocus={() => bringToFront("links")}
    >
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
            <AnimatedIcon
              srcLight={link.iconLight}
              srcDark={link.iconDark}
              alt={link.name}
              size={48}
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
        Clicking any of the links will open a new tab!
      </div>
    </Window>
  );
}

export default LinksWindow;
