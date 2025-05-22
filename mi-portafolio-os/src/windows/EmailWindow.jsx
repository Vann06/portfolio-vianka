import {useContext} from 'react';
import Window from '../components/Window';  
import { WindowContext } from '../context/WindowContext';
import WindowContent from '../components/WindowContent';

function EmailWindow({ zIndex }) {
    const { closeWindow, bringToFront } = useContext(WindowContext);

    return(
        <Window
            title="contact"
            zIndex={zIndex}
            onClose={() => closeWindow("contact")}
            onFocus={() => bringToFront("contact")}
        >


        </Window>

    );
}

export default EmailWindow;