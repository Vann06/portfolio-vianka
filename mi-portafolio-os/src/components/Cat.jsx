import { useState, useContext, useEffect } from "react";
import { WindowContext } from "../context/WindowContext";
import useSound from "use-sound";
import { useSoundContext } from "../context/SoundContext";
import catDark from "../assets/CAT.png";
import catLight from "../assets/CAT_2.png";

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
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

function FloatingCat() {
  const [isClickGlow, setIsClickGlow] = useState(false);
  const [hover, setHover] = useState(false);
  const { openWindow, bringToFront } = useContext(WindowContext);
  const [playCat] = useSound(
    "https://res.cloudinary.com/dxjrdqbio/video/upload/v1748740505/open_f89xtv.mp3",
    { volume: 1 }
  );
  const { isMuted } = useSoundContext();
  const isDark = useIsDark();

  const handleCatClick = () => {
    setIsClickGlow(true);
    if (!isMuted) playCat();
    openWindow("blog");
    setTimeout(() => bringToFront("blog"), 50);
    setTimeout(() => setIsClickGlow(false), 700);
  };

  const imgSrc = isDark ? catDark : catLight;
  const activeGlow = hover || isClickGlow;

  const glowFilter = isDark
    ? "drop-shadow(0 0 14px rgba(170,200,255,.85)) drop-shadow(0 0 30px rgba(120,170,255,.55))"
    : "drop-shadow(0 0 14px rgba(255,220,120,.9)) drop-shadow(0 0 30px rgba(255,235,160,.55))";

  const baseShadow = "drop-shadow(2px 3px 4px rgba(0,0,0,.35))";

  return (
    <div
      onClick={handleCatClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="floating-cat"
      style={{
        position: "absolute",
        left: "50%",
        // bottom: "calc(100% - 14px)",
        transform: activeGlow
          ? "translateX(-50%) scale(1.14) translateY(-4px)"
          : "translateX(-50%) scale(1)",
        cursor: "pointer",
        zIndex: 5,
        transition: "transform .35s ease, filter .5s ease",
        filter: activeGlow ? glowFilter : baseShadow,
      }}
      aria-label="Abrir blog"
    >
      <img
        src={imgSrc}
        alt="Abrir blog"
        style={{
          borderRadius: "18px",
          objectFit: "cover",
          userSelect: "none",
          pointerEvents: "none",
          transition: "inherit",
          width: "100%",
          height: "100%",
        }}
        draggable={false}
        onError={(e) => {
          console.warn("[Cat] fallback dark");
          e.currentTarget.src = catDark;
        }}
      />
      
    </div>
  );
}

export default FloatingCat;