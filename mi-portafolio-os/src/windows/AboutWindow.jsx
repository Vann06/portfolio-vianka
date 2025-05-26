import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import WindowContent from "../components/WindowContent";

function AboutWindow({ zIndex }) {
  const { closeWindow, bringToFront } = useContext(WindowContext);

  return (
    <Window
      title="about"
      onClose={() => closeWindow("about")}
      zIndex={zIndex}
      onFocus={() => bringToFront("about")}
    >
      <div  className="window-center">
         <img
          src="https://res.cloudinary.com/dxjrdqbio/image/upload/v1747715633/Profile2_bumxj0.jpg"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #ccc",
            marginBottom: "1rem",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          }}
        />

        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          Vianka Castro
        </h1>

        <p style={{ fontWeight: "500", marginBottom: "1rem" }}>
          FullStack Developer & UX Designer
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          I’m passionate about designing and building user-friendly, accessible digital experiences across platforms.
        </p>

        <hr className="my-4 border-gray-400 dark:border-gray-600" />

      </div>
      <section>
          <h3 style={{ fontWeight: "bold" }}>Education</h3>
          <p>Universidad del Valle – Ingeniería en Computación</p>
          <p>(2023 - Actualidad)</p>
          <p>Colegio Decroly Americano - Bachiller Ciencias & Letras</p>
          <p>(2011-2022)</p>

        </section>
      
        <section style={{ marginTop: "1rem" }}>
          <h3 style={{ fontWeight: "bold" }}>Skills</h3>
          <ul style={{ listStyle: "disc", textAlign: "left", paddingLeft: "1.5rem" }}>
            <li>Python, Java, JavaScript, PHP, SQL</li>
            <li>HTML, CSS, Laravel, Vue.js</li>
            <li>PostgreSQL, MySQL</li>
            <li>Git, Docker, GitHub, Notebooks</li>
          </ul>
        </section>

        <section style={{ marginTop: "1rem" }}>
          <h3 style={{ fontWeight: "bold" }}>LANGUAGE PROFICIENCY</h3>
          <ul style={{ listStyle: "disc", textAlign: "left", paddingLeft: "1.5rem" }}>
            <li>Spanish: Native</li>
            <li>English: Avanzado C2</li>
            <li>Japanese: N5 Basic</li>
          </ul>
        </section>
    </Window>
  );
}

export default AboutWindow;
