import { useEffect, useState } from "react";
import HomeView from "./views/HomeView";
import ThemeToggle from "./components/ThemeToggle";
import { WindowProvider } from "./context/WindowContext";
import Starfield from "./components/StarField";
import { SoundProvider } from "./context/SoundContext";
import MuteToggle from "./components/MuteToggle";
import { LanguageProvider } from "./context/LanguageContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { UseWindowOpenEvent } from "./listeners/windowEvents";

function App() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ErrorBoundary>
      {isDark && <Starfield />}
      <LanguageProvider>
        <SoundProvider>
          <WindowProvider>
            <UseWindowOpenEvent />
            <ThemeToggle />
            <MuteToggle />
            <HomeView />
          </WindowProvider>
        </SoundProvider>
      </LanguageProvider>
    </ErrorBoundary>
  );
}

export default App;
