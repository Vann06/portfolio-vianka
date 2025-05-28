import { useEffect, useState } from "react";
import HomeView from "./views/HomeView";
import ThemeToggle from "./components/ThemeToggle";
import { WindowProvider } from "./context/WindowContext";
import Starfield from "./components/StarField";

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
    <>
      {isDark && <Starfield />}
      <WindowProvider>
        <ThemeToggle />
        <HomeView />
      </WindowProvider>
    </>
  );
}

export default App;
