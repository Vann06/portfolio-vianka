import {useState, useRef, useEffect } from "react";
import useSound from "use-sound";
import {getNextIndex, notes} from "../utils/pianoNotes";
import { useSoundContext } from "../context/SoundContext";
import "../styles/SkillTag.css";


function SkillTag({ label}) {
  const soundsRef = useRef([]);

// Cargar sonidos 
    useEffect(() => {
        soundsRef.current = notes.map(note => 
            new Audio(note)
        );
    } ,[]);

    const {isMuted} = useSoundContext();

  const handleHover = () => {
    if (isMuted) return;
    const index = getNextIndex();
    const sound = soundsRef.current[index];
    if (sound) {
        sound.currentTime = 0;
        sound.play();
    }
  };

  return (
    <div
      className="skill-tag"
      onMouseEnter={handleHover}
      title={label.name}
    >
      <img src={label.src} alt={label.name} />
    </div>
  );
}

export default SkillTag;
