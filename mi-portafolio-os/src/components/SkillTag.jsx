import {React, useState, useEffect} from  "react";
import useSound from "use-sound";
import "../styles/SkillTag.css";

//contador
let hoverIndex = 0;

const pianoNotes= [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];


function SkillTag({label}){
    const [note, setNote] = useState(pianoNotes[0]);
    const [play] = useSound(note, {volume:0.5});

    const handleHover = () => {
        const sound = pianoNotes[hoverIndex % pianoNotes.length];
        setNote(sound);
        play();
        hoverIndex++;
    };

    return(
        <div
        className="skill-tag"
        onMouseEnter={handleHover}
        title={label.name}
        >
            <img src={label.src} alt={label.name}/>
        </div>
    );
}

export default SkillTag;