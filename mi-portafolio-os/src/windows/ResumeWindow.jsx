import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import '../styles/buttons.css';
import { useTranslation } from 'react-i18next';

function ResumeWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const { t } = useTranslation();
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
  <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{t('resume.title')}</h1>

  <p style={{ fontSize: "1rem", marginBottom: "1.2rem", color: "inherit" }}>{t('resume.subtitle')}</p>

  {/* Español */}
  <h3 style={{ marginBottom: "0.5rem" }}>{t('resume.spanish')}</h3>
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
          {t('resume.downloadEs')}
        </a>

        {/* Inglés */}
  <h3 style={{ margin: "2rem 0 0.5rem" }}>{t('resume.english')}</h3>
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
          {t('resume.downloadEn')}
        </a>
      </div>
    </Window>
  );
}

export default ResumeWindow;
