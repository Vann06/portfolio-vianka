import { useSoundContext } from "../context/SoundContext";
import { useEffect, useState } from "react";
import muteLight from "../assets/mute_light.webp";
import muteDark from "../assets/mute_dark.webp";
import soundLight from "../assets/sound_light.webp";
import soundDark from "../assets/sound_dark.webp";

function MuteToggle() {
  const { isMuted, setIsMuted } = useSoundContext();
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
        attribute:true,
        attributeFilter: ["class"],
    });

    return () => observer.disconnect();
}, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <button
      onClick={toggleMute}
      style={{
        position: "fixed",
        top: "1rem",
        left: "4.5rem",
        zIndex: 9999,
        border: "none",
        background: "none",
      }}
    >
      <img
        src={
          isMuted
            ? isDark
              ? muteDark
              : muteLight
            : isDark
            ? soundDark
            : soundLight
        }
        alt="Toggle Sound"
        width={42}
        height={42}
      />
    </button>
  );
}

export default MuteToggle;
