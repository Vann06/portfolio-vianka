import { useContext } from "react";
import Window from "../components/Window";
import SkillGrid from "../components/SkillGrid";
import ProjectCard from "../components/ProjectCard";
import { WindowContext } from "../context/WindowContext";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import "../styles/Projects.css";

function ProyectsWindow({ zIndex }) {
  const {
    openWindow,
    closeWindow,
    bringToFront
  } = useContext(WindowContext);
  const { language } = useLanguage();

  const copy = language === "es"
    ? {
        windowTitle: "proyectos",
        title: "Proyectos",
        introduction:
          "Una selección de proyectos que he creado explorando el desarrollo web, móvil y full stack.",
        stackTitle: "Stack tecnológico"
      }
    : {
        windowTitle: "projects",
        title: "Projects",
        introduction:
          "A selection of projects I have built while exploring web, mobile and full-stack development.",
        stackTitle: "Tech Stack"
      };

  const handleProjectClick = (projectId) => {
    openWindow(`project-${projectId}`);
  };

  return (
    <Window
      title={copy.windowTitle}
      zIndex={zIndex}
      defaultSize={{ width: 720, height: 620 }}
      onClose={() => closeWindow("work")}
      onFocus={() => bringToFront("work")}
    >
    <section>
        <h2 className="projects-title">{copy.stackTitle}</h2>
        <SkillGrid />
      </section>
      <section className="projects-section">
        <h2 className="projects-title">{copy.title}</h2>

        <p className="projects-introduction">{copy.introduction}</p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={handleProjectClick}
            />
          ))}
        </div>
      </section>

      <hr />

    </Window>
  );
}

export default ProyectsWindow;
