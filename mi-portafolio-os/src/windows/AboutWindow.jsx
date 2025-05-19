import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";

function AboutWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  return (
    <Window
      title="about"
      onClose={() => closeWindow("about")}
      zIndex={zIndex}
      onFocus={() => bringToFront("about")}
    >
      <h2>About Me</h2>
      <p>✨ Hola, soy Zeyda, esta ventana está encima y se puede mover</p>
    </Window>
  );
}

export default AboutWindow;
