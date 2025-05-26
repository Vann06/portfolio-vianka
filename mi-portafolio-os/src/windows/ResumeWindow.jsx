import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import '../styles/buttons.css';

function ResumeWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const isMobile = window.innerWidth < 768;

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

        {/* Español */}
        <h3 style={{ marginBottom: "0.5rem" }}>Español 🇪🇸</h3>
        <div
          style={{
            width: "100%",
            height: isMobile ? "600px" : "400px",
            overflow: "auto",
            touchAction: "pinch-zoom",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            marginBottom: "1.5rem",
            backgroundColor: "white",
            WebkitOverflowScrolling: "touch"
          }}
          className="dark:bg-[#2a2a3d]"
        >
          <iframe
            src={`${import.meta.env.BASE_URL}cv.pdf`}
            title="Resume Español"
            width="100%"
            height={isMobile ? "700px" : "100%"}
            style={{
              border: "none",
              transformOrigin: "top center",
            }}
            allow="fullscreen"
          />
        </div>

        <a
          href={`${import.meta.env.BASE_URL}cv.pdf`}
          download
          onClick={() => closeWindow("resume")}
          className="btn"
        >
          Download Resume in Spanish
        </a>

        {/* Inglés */}
        <h3 style={{ margin: "2rem 0 0.5rem" }}>English 🇺🇸</h3>
        <div
          style={{
            width: "100%",
            height: isMobile ? "600px" : "400px",
            overflow: "auto",
            touchAction: "pinch-zoom",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
            marginBottom: "1.5rem",
            backgroundColor: "white",
            WebkitOverflowScrolling: "touch"
          }}
          className="dark:bg-[#2a2a3d]"
        >
          <iframe
            src={`${import.meta.env.BASE_URL}cv-eng.pdf`}
            title="Resume English"
            width="100%"
            height={isMobile ? "700px" : "100%"}
            style={{
              border: "none",
              transformOrigin: "top center",
            }}
            allow="fullscreen"
          />
        </div>

        <a
          href={`${import.meta.env.BASE_URL}cv-eng.pdf`}
          download
          onClick={() => closeWindow("resume")}
          className="btn"
        >
          Download Resume in English
        </a>
      </div>
    </Window>
  );
}

export default ResumeWindow;
