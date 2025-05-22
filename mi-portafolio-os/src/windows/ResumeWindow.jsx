import { useContext} from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";


function ResumeWindow({ zIndex }) {
    const { closeWindow, bringToFront } = useContext(WindowContext);

    return (
        <Window
            title="resume"
            zIndex={zIndex}
            onClose={() => closeWindow("resume")}
            onFocus={() => bringToFront("resume")}
        >
            <WindowContent>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4">My Resume</h1>
                    <p className="text-center mb-4">
                        Here you can find my resume. Feel free to download it!
                    </p>
                    <div style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "auto",
                    }}>
                        <iframe
                            src="../public/cv.pdf"
                            width="100%"
                            height="400px"
                            style={{
                                border: "none",
                                borderRadius: "12px",
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
                            }}
                            title="Resume">

                        </iframe>

                    </div>

                    <button
                        style={{
                            marginTop: "20px",
                            backgroundColor: "#2596be",
                            color: "white",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                         <a
                        href="../public/cv.pdf"
                        download
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        style={{
                            textDecoration: "none",
                            color: "white",
                            fontWeight: "bold",
                        }}
                        onClick={() => closeWindow("resume")}
                        >
                            Download Resume
                        </a>
                    </button>
                
                </div>
            </WindowContent>
        </Window>
        
    );
}

export default ResumeWindow;