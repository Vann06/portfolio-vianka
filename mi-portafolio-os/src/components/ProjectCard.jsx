import "../styles/Projects.css";
import { useLanguage } from "../context/LanguageContext";
import { getLocalizedValue } from "../utils/getLocalizedValue";

function ProjectCard({ project, onOpen }) {
  const { language } = useLanguage();
  const title = getLocalizedValue(project.title, language);
  const shortDescription = getLocalizedValue(
    project.shortDescription,
    language
  );
  const thumbnail =
    typeof project.thumbnail === "string"
      ? { src: project.thumbnail }
      : project.thumbnail;
  const thumbnailAlt = getLocalizedValue(thumbnail?.alt, language);

  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onOpen(project.id)}
      aria-label={`${language === "es" ? "Abrir detalles de" : "Open details for"} ${title}`}
    >
      <div className="project-thumbnail">
        <img
          src={thumbnail?.src}
          alt={
            thumbnailAlt ||
            `${language === "es" ? "Miniatura del proyecto" : "Project thumbnail"} ${title}`
          }
          style={{ objectPosition: thumbnail?.position || "center" }}
          loading="lazy"
          draggable={false}
          onError={(event) => {
            event.currentTarget.hidden = true;
          }}
        />
      </div>

      <div className="project-card-content">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
      </div>
    </button>
  );
}

export default ProjectCard;
