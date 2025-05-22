import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";
import '../styles/buttons.css';


function ResumeWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  return (
    <Window
      title="resume"
      zIndex={zIndex}
      onClose={() => closeWindow("resume")}
      onFocus={() => bringToFront("resume")}
    >
        <div
          style={{
            textAlign: "center",
            fontFamily: "'Segoe UI', 'Inter', sans-serif",
          }}
        >
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
            My Resume
          </h1>

          <p style={{ fontSize: "1rem", marginBottom: "1.2rem", color: "inherit" }}>
            You can view or download my resume below. Thanks for your interest! 
          </p>

          <div
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              marginBottom: "1.5rem",
              backgroundColor: "white",
            }}
            className="dark:bg-[#2a2a3d]"
          >
            <iframe
              src="/cv.pdf"
              title="Resume"
              width="100%"
              height="100%"
              style={{
                border: "none",
              }}
            />
          </div>

          <a
            href="/cv.pdf"
            download
            onClick={() => closeWindow("resume")}
            className="btn"
            
            >
            Download Resume
            </a>

        </div>
    </Window>
  );
}

export default ResumeWindow;
