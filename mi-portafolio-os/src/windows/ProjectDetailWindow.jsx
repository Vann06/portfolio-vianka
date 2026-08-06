import { useContext } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import { useLanguage } from "../context/LanguageContext";
import { projects } from "../data/projects";
import githubIcon from "../assets/github.svg";
import {
  asArray,
  getLocalizedValue
} from "../utils/getLocalizedValue";
import "../styles/Projects.css";

function ProjectDetailWindow({
  zIndex,
  projectId,
  windowName
}) {
  const {
    closeWindow,
    bringToFront
  } = useContext(WindowContext);
  const { language } = useLanguage();

  const project = projects.find(
    (item) => item.id === projectId
  );

  const name = windowName || `project-${projectId}`;

  if (!project) {
    return null;
  }

  const title = getLocalizedValue(project.title, language);
  const shortDescription = getLocalizedValue(
    project.shortDescription,
    language
  );
  const description = asArray(
    getLocalizedValue(project.description, language)
  );
  const features = asArray(
    getLocalizedValue(project.features, language)
  );
  const thumbnail =
    typeof project.thumbnail === "string"
      ? { src: project.thumbnail }
      : project.thumbnail;
  const gallery = project.gallery ?? project.images ?? [];

  const copy = language === "es"
    ? {
        about: "Sobre el proyecto",
        stack: "Stack tecnológico",
        features: "Funciones principales",
        gallery: "Galería",
        github: "Ver en GitHub",
        live: "Ver proyecto en vivo"
      }
    : {
        about: "About the project",
        stack: "Tech Stack",
        features: "Main features",
        gallery: "Gallery",
        github: "View on GitHub",
        live: "View live project"
      };

  return (
    <Window
      title={title}
      zIndex={zIndex}
      defaultSize={{ width: 760, height: 650 }}
      onClose={() => closeWindow(name)}
      onFocus={() => bringToFront(name)}
    >
      <article className="project-detail">
        <div className="project-detail-hero">
          <img
            src={thumbnail?.src}
            alt={getLocalizedValue(thumbnail?.alt, language) || title}
            style={{ objectPosition: thumbnail?.position || "center" }}
            draggable={false}
          />
        </div>

        <header className="project-detail-header">
          <h1>{title}</h1>
          <p>{shortDescription}</p>
        </header>

        <section className="project-detail-section">
          <h2>{copy.about}</h2>

          {description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <section className="project-detail-section">
          <h2>{copy.stack}</h2>

          <div className="project-stack">
            {project.stack.map((technology) => (
              <span
                key={technology}
                className="project-stack-item"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {features.length > 0 && (
          <section className="project-detail-section">
            <h2>{copy.features}</h2>

            <ul className="project-features">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {gallery.length > 0 && (
          <section className="project-detail-section">
            <h2>{copy.gallery}</h2>

            <div className="project-gallery">
              {gallery.map((image, index) => {
                const galleryImage =
                  typeof image === "string" ? { src: image } : image;
                const caption = getLocalizedValue(
                  galleryImage.caption,
                  language
                );

                return (
                  <figure
                    key={`${galleryImage.src}-${index}`}
                    className={`project-gallery-item project-gallery-item-${galleryImage.orientation || "landscape"}`}
                  >
                    <img
                      src={galleryImage.src}
                      alt={
                        getLocalizedValue(galleryImage.alt, language) ||
                        `${title} ${index + 1}`
                      }
                      loading="lazy"
                      draggable={false}
                    />
                    {caption && <figcaption>{caption}</figcaption>}
                  </figure>
                );
              })}
            </div>
          </section>
        )}

        <footer className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary"
            >
              <img
                className="project-link-icon"
                src={githubIcon}
                alt=""
                aria-hidden="true"
              />
              {copy.github}
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-secondary"
            >
              {copy.live}
            </a>
          )}
        </footer>
      </article>
    </Window>
  );
}

export default ProjectDetailWindow;
