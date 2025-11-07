import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import { useTranslation } from 'react-i18next';

function AboutWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const { t } = useTranslation();

  return (
    <Window
      title="about"
      onClose={() => closeWindow("about")}
      zIndex={zIndex}
      onFocus={() => bringToFront("about")}
    >
      <div className="window-center" style={{ padding: "1.5rem" }}>
        <img
          src="https://res.cloudinary.com/dxjrdqbio/image/upload/v1747715633/Profile2_bumxj0.jpg"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1.5rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: "border-color .25s ease, box-shadow .25s ease"
          }}
          className="profile-photo border-[3px] border-[#c4a47c] dark:border-[#C8A2C8]"
        />

        <h1
          style={{ fontSize: "1.6rem", fontWeight: "bold", marginBottom: "0.5rem" }}
          className="dark:text-white"
        >
          Vianka Castro
        </h1>

        <p style={{ fontWeight: 600, marginBottom: "1.5rem", fontSize: "1.05rem" }} className="dark:text-gray-300">
          {t('about.subtitle')}
        </p>

        {/* SOBRE MI */}
        <div
          style={{ marginBottom: "2rem", textAlign: "left", lineHeight: 1.7 }}
          className="dark:text-gray-300"
        >
          <h3 style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1.05rem" }} className="dark:text-white">
            {t('about.aboutMeTitle')}
          </h3>

          <p style={{ marginBottom: "1rem" }}>{t('about.bioP1')}</p>
          <p style={{ marginBottom: "1rem" }}>{t('about.bioP2')}</p>
          <p style={{ marginBottom: "1rem" }}>{t('about.bioP3')}</p>
        </div>
        <hr
          style={{
            border: "none",
            height: "1px",
            background: "linear-gradient(90deg,#c4a47c,#d4c5a9,#c4a47c)",
            margin: "1.5rem 0"
          }}
          className="dark:bg-gradient-to-r dark:from-[#4a5568] dark:via-[#718096] dark:to-[#4a5568]"
        />
      </div>

      {/* RESTO SECCIONES */}
      <div style={{ padding: "0 1.5rem 1.5rem" }}>
        {/* STACK */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }} className="dark:text-white">
            {t('about.stackTitle')}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
              gap: ".8rem",
              fontSize: ".95rem"
            }}
            className="dark:text-gray-300"
          >
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>{t('about.stack.languages_label')}</strong> {t('about.stack.languages')}
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>{t('about.stack.frontend_label')}</strong> {t('about.stack.frontend')}
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>{t('about.stack.backend_label')}</strong> {t('about.stack.backend')}
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>{t('about.stack.database_label')}</strong> {t('about.stack.database')}
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>{t('about.stack.tools_label')}</strong> {t('about.stack.tools')}
            </div>
          </div>
        </section>

        <hr
          style={{
            border: "none",
            height: "1px",
            background: "linear-gradient(90deg,transparent,#d4c5a9,transparent)",
            margin: "1.5rem 0"
          }}
          className="dark:bg-gradient-to-r dark:from-transparent dark:via-[#4a5568] dark:to-transparent"
        />

        {/* FORMACION */}
        <section style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }} className="dark:text-white">
            {t('about.educationTitle')}
          </h3>
          <div style={{ fontSize: ".95rem", lineHeight: 1.5 }} className="dark:text-gray-300">
            <div
              style={{
                borderBottom: "1px dashed #d4c5a9",
                paddingBottom: ".8rem",
                marginBottom: ".8rem"
              }}
              className="dark:border-[#4a5568]"
            >
              <p><strong>Universidad del Valle</strong> – Ingeniería en Computación</p>
              <p style={{ fontSize: ".85rem" }} className="text-[#8a8a8a] dark:text-gray-400">{t('about.uniPeriod')}</p>
            </div>
            <div>
              <p><strong>Colegio Decroly Americano</strong> – Bachiller en Ciencias & Letras</p>
              <p style={{ fontSize: ".85rem" }} className="text-[#8a8a8a] dark:text-gray-400">2011 - 2022</p>
            </div>
          </div>
        </section>

        <hr
          style={{
            border: "none",
            height: "1px",
            background: "linear-gradient(90deg,transparent,#d4c5a9,transparent)",
            margin: "1.5rem 0"
          }}
          className="dark:bg-gradient-to-r dark:from-transparent dark:via-[#4a5568] dark:to-transparent"
        />

        {/* IDIOMAS */}
        <section>
            <h3 style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }} className="dark:text-white">
              {t('about.languagesTitle')}
            </h3>
            <div
              style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: ".95rem" }}
              className="dark:text-gray-300"
            >
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">{t('about.langSpanish')}</div>
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">{t('about.langEnglish')}</div>
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">{t('about.langJapanese')}</div>
            </div>
        </section>
      </div>
    </Window>
  );
}

export default AboutWindow;
