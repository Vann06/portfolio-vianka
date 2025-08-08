import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";

function AboutWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

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

        <p
          style={{ fontWeight: 600, marginBottom: "1.5rem", fontSize: "1.05rem" }}
          className="dark:text-gray-300"
        >
          FullStack Developer & UX Designer
        </p>

        {/* SOBRE MI */}
        <div
          style={{ marginBottom: "2rem", textAlign: "left", lineHeight: 1.7 }}
          className="dark:text-gray-300"
        >
          <h3
            style={{ fontWeight: "bold", marginBottom: "1rem", fontSize: "1.05rem" }}
            className="dark:text-white"
          >
            Sobre mí
          </h3>

          <p style={{ marginBottom: "1rem" }}>
            Creo que la <strong>tecnología</strong> más poderosa es la que entiende a las personas. Por eso, mi trabajo une <em>lógica y empatía</em>, transformando ideas complejas en soluciones claras, útiles y con propósito. Para mí, cada proyecto es una oportunidad de construir algo que no solo funcione, sino que inspire y deje huella.
          </p>
          <p style={{ marginBottom: "1rem" }}>
            En <strong>Computer Science</strong>, aplico un enfoque que combina análisis profundo, diseño estructurado y sensibilidad por la experiencia del usuario. Me motiva crear sistemas escalables que integren precisión con usabilidad, asegurando que cada desarrollo aporte valor real y duradero. 
          </p>
          <p style={{ marginBottom: "1rem" }}>
            Combino <strong>profundidad técnica</strong> con <strong>creatividad consciente</strong>, buscando siempre un equilibro entre innovación y significado. Mi objetivo no es solo desarrollar tecnología, sino crear puentes entre lo que es posible y lo que realmente importa. 
          </p>
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
          <h3
            style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }}
            className="dark:text-white"
          >
            Stack Tecnológico
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
              <strong>Languages:</strong> Python, Java, JavaScript, PHP, SQL
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>Frontend:</strong> HTML, CSS, Vue.js, React
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>Backend:</strong> Laravel, Node.js
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>Database:</strong> PostgreSQL, MySQL
            </div>
            <div className="pb-2 border-b border-dashed" style={{ borderColor: "#d4c5a9" }}>
              <strong>Tools:</strong> Git, Docker, GitHub
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
          <h3
            style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }}
            className="dark:text-white"
          >
            Formación Académica
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
              <p style={{ fontSize: ".85rem" }} className="text-[#8a8a8a] dark:text-gray-400">2023 - Actualidad</p>
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
            <h3
              style={{ fontWeight: "bold", marginBottom: "0.8rem", fontSize: "1.05rem" }}
              className="dark:text-white"
            >
              Idiomas
            </h3>
            <div
              style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", fontSize: ".95rem" }}
              className="dark:text-gray-300"
            >
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">
                <strong>Español:</strong> Nativo
              </div>
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">
                <strong>Inglés:</strong> Avanzado C2
              </div>
              <div style={{ borderBottom: "1px dashed #d4c5a9", paddingBottom: ".3rem" }} className="dark:border-[#4a5568]">
                <strong>Japonés:</strong> N5 Básico
              </div>
            </div>
        </section>
      </div>
    </Window>
  );
}

export default AboutWindow;
