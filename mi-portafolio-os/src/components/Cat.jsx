import { useContext, useEffect, useRef, useState } from "react";
import { WindowContext } from "../context/WindowContext";
import { useSoundContext } from "../context/SoundContext";
import { useLanguage } from "../context/LanguageContext";
import catDark from "../assets/CAT.png";
import catDarkHover from "../assets/CAT_1.png";
import catLight from "../assets/CAT_2.png";
import catLightHover from "../assets/CAT_2_2.png";


const CAT_MEOW_URL = "https://res.cloudinary.com/dxjrdqbio/video/upload/v1786044399/meow_qzttlx.mp3";

function useIsDark() {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function FloatingCat() {
  const [isInteracting, setIsInteracting] = useState(false);
  const audioRef = useRef(null);
  const lastMeowAt = useRef(0);
  const { openWindow } = useContext(WindowContext);
  const { isMuted } = useSoundContext();
  const { language } = useLanguage();
  const isDark = useIsDark();

  useEffect(() => {
    [catDarkHover, catLightHover].forEach((source) => {
      const image = new window.Image();
      image.src = source;
    });
  }, []);

  useEffect(() => {
    if (!CAT_MEOW_URL) return undefined;

    const audio = new window.Audio(CAT_MEOW_URL);
    audio.preload = "auto";
    audio.volume = 0.20;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const playMeow = () => {
    const audio = audioRef.current;
    const now = Date.now();

    if (isMuted || !audio || now - lastMeowAt.current < 900) return;

    lastMeowAt.current = now;
    audio.currentTime = 0;
    void audio.play().catch(() => undefined);
  };

  const handleCatClick = () => {
    playMeow();
    openWindow("blog");
  };

  const label = language === "es" ? "Abrir blog" : "Open blog";
  const tooltip = language === "es" ? "¡miau! ¿blog?" : "meow! blog?";

  const beginInteraction = () => {
    setIsInteracting(true);
    playMeow();
  };

  return (
    <button
      type="button"
      className={`floating-cat ${isInteracting ? "is-interacting" : ""}`}
      onClick={handleCatClick}
      onMouseEnter={beginInteraction}
      onMouseLeave={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
      onFocus={beginInteraction}
      onBlur={() => setIsInteracting(false)}
      aria-label={label}
      aria-describedby="cat-tooltip"
    >
      <span id="cat-tooltip" className="cat-tooltip" role="tooltip">
        {tooltip}
      </span>

      <img
        src={isDark ? catDark : catLight}
        alt=""
        className="cat-image cat-image-normal"
        draggable={false}
      />

      <img
        src={isDark ? catDarkHover : catLightHover}
        alt=""
        className="cat-image cat-image-hover"
        draggable={false}
      />
    </button>
  );
}

export default FloatingCat;
