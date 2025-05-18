import Wave from "react-wavify";
import { useEffect, useState } from "react";

function WaveBackground() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const wave1Color = isDark ? "#7859ff" : "#c3e8ff";
  const wave2Color = isDark ? "#bd96ff" : "#a3d4f7";

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "70%",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Wave
        fill={wave1Color}
        paused={false}
        options={{ height: 100, amplitude: 40, speed: 0.2, points: 5 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
      <Wave
        fill={wave2Color}
        paused={false}
        options={{ height: 90, amplitude: 30, speed: 0.15, points: 4 }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          bottom: 0,
          opacity: 0.5,
        }}
      />
    </div>
  );
}

export default WaveBackground;
