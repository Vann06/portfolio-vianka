import {useEffect, useContext} from "react";
import Window from "../components/Window";  
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";



function ProyectsWindow({ zIndex }) {   
    const { closeWindow, bringToFront } = useContext(WindowContext);    

    return (
        <Window
            title="work"
            zIndex={zIndex}
            onClose={() => closeWindow("work")}
            onFocus={() => bringToFront("work")}
        >
            
        </Window>

    );
}

export default ProyectsWindow;