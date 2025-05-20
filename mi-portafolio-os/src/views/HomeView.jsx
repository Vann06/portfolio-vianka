import WaveBackground from "../components/WaveBackground";
import Desktop from "../components/Desktop";
import AboutWindow from "../windows/AboutWindow";
import ContactWindow from "../windows/ContactWindow";
import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";

function HomeView() {
  const {windows} = useContext(WindowContext);
  
  return (
    <div className="relative min-h-screen w-full bg-beige dark:bg-[#1e1e2f] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
  <WaveBackground />

  {windows.map((win) => {
    if (win.name === "about") {
      return <AboutWindow key="about" zIndex={win.zIndex} />;
    }
    if (win.name === "links") {
      return <ContactWindow key="links" zIndex={win.zIndex} />;
    }       
    return null;
  })}

  <div
    style={{
      position: "relative",
      paddingTop: "70px",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "auto",
    }}
    className="pt-20 px-4"
  >
    <Desktop />
  </div>
</div>

  );
}

export default HomeView;
