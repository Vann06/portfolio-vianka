import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";

function ContactWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  return (
    <Window
      title="links"
      onClose={() => closeWindow("links")}
      zIndex={zIndex}
      onFocus={() => bringToFront("links")}
    >
      <h2>Links</h2>
    </Window>
  );
}

export default ContactWindow;
