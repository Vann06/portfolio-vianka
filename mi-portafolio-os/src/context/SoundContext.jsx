import { createContext, useState, useContext, Children } from "react";

const SoundContext = createContext();

export const SoundProvider = ({ children}) => {
    const [isMuted, setIsMuted] = useState(false);
    return (
        <SoundContext.Provider value={{isMuted, setIsMuted}}>
            {children}
        </SoundContext.Provider>
    );
};
export const useSoundContext = () => useContext(SoundContext);