import { useContext } from "react";
import Window from "../components/Window";
import PostCard from "../components/PostCard";
import { WindowContext } from "../context/WindowContext";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";
import "../styles/Blog.css";

function BlogWindow({ zIndex }) {
  const { openWindow, closeWindow, bringToFront } = useContext(WindowContext);
  const { language } = useLanguage();

  const copy = language === "es"
    ? {
        windowTitle: "blog.log",
        eyebrow: "VIANKA.LOG // ARCHIVO",
        title: "Notas desde mi escritorio",
        introduction:
          "Ideas sobre desarrollo, diseño, aprendizaje y tecnología con propósito.",
        status: `${blogPosts.length} entradas encontradas`,
        open: "Leer entrada"
      }
    : {
        windowTitle: "blog.log",
        eyebrow: "VIANKA.LOG // ARCHIVE",
        title: "Notes from my desktop",
        introduction:
          "Thoughts on development, design, learning and technology with purpose.",
        status: `${blogPosts.length} entries found`,
        open: "Read entry"
      };

  const orderedPosts = [...blogPosts].sort(
    (first, second) => new Date(second.date) - new Date(first.date)
  );

  return (
    <Window
      title={copy.windowTitle}
      zIndex={zIndex}
      defaultSize={{ width: 760, height: 640 }}
      onClose={() => closeWindow("blog")}
      onFocus={() => bringToFront("blog")}
    >
      <main className="blog-page">
        <header className="blog-masthead">
          <p className="blog-eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p className="blog-introduction">{copy.introduction}</p>

          <div className="blog-status" aria-live="polite">
            <span className="blog-status-cursor" aria-hidden="true" />
            <span>{copy.status}</span>
            <span aria-hidden="true">READY_</span>
          </div>
        </header>

        <section className="blog-post-list" aria-label={copy.title}>
          {orderedPosts.map((post, index) => (
            <PostCard
              key={post.id}
              post={post}
              language={language}
              index={index}
              openLabel={copy.open}
              onOpenPost={(postId) => openWindow(`post-${postId}`)}
            />
          ))}
        </section>
      </main>
    </Window>
  );
}

export default BlogWindow;
