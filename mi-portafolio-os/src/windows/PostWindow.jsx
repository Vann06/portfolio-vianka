import { useContext, useEffect, useMemo } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";
import { enrichPost } from "../utils/formatPost";
import "../styles/Blog.css";
import "../styles/post.css";

function PostWindow({ zIndex, postId, windowName }) {
  const { language } = useLanguage();
  const { openWindow, closeWindow, bringToFront } = useContext(WindowContext);
  const name = windowName || `post-${postId}`;
  const raw = blogPosts.find((item) => item.id === postId);

  const post = useMemo(
    () => (raw ? enrichPost(raw, language) : null),
    [raw, language]
  );

  useEffect(() => {
    if (!post) console.warn("[PostWindow] Post no encontrado:", postId);
  }, [post, postId]);

  if (!post) return null;

  const title = post.title[language] ?? post.title.en;
  const summary = post.summary[language] ?? post.summary.en;
  const formattedDate = new Intl.DateTimeFormat(
    language === "es" ? "es-GT" : "en-US",
    { year: "numeric", month: "long", day: "2-digit" }
  ).format(new Date(`${post.date}T12:00:00`));

  const copy = language === "es"
    ? {
        entry: "ENTRADA",
        words: "palabras",
        related: "También puedes leer",
        sources: "Fuentes y referencias",
        go: "Abrir enlace"
      }
    : {
        entry: "ENTRY",
        words: "words",
        related: "You can also read",
        sources: "Sources and references",
        go: "Open link"
      };

  const openRelatedPost = (target) => {
    const relatedPost = blogPosts.find((item) => item.slug === target);
    const targetWindow = relatedPost ? `post-${relatedPost.id}` : target;
    openWindow(targetWindow);
  };

  return (
    <Window
      title={`read://${post.slug}`}
      zIndex={zIndex}
      defaultSize={{ width: 780, height: 660 }}
      onClose={() => closeWindow(name)}
      onFocus={() => bringToFront(name)}
    >
      <article className="blog-article" data-window={name}>
        {post.image && (
          <figure className="blog-article-hero">
            <img
              src={post.image}
              alt=""
              draggable={false}
              onError={(event) => {
                event.currentTarget.hidden = true;
              }}
            />
            <figcaption>
              {copy.entry}_{String(post.id).padStart(2, "0")} // {post.slug}
            </figcaption>
          </figure>
        )}

        <header className="blog-article-header">
          <div className="blog-article-tags">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <h1>{title}</h1>
          <p className="blog-article-deck">{summary}</p>

          <div className="blog-article-meta">
            <time dateTime={post.date}>{formattedDate}</time>
            <span aria-hidden="true">//</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true">//</span>
            <span>{post.wordCount} {copy.words}</span>
          </div>
        </header>

        <section className="blog-article-content">
          {post.rendered.map((html, index) => (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </section>

        {post.links?.internal?.length > 0 && (
          <aside className="blog-article-links">
            <h2>{copy.related}</h2>
            <ul>
              {post.links.internal.map((link) => (
                <li key={link.to}>
                  <button
                    type="button"
                    onClick={() => openRelatedPost(link.to)}
                  >
                    <span aria-hidden="true">[+]</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {post.links?.external?.length > 0 && (
          <aside className="blog-article-links blog-article-sources">
            <h2>{copy.sources}</h2>
            <ul>
              {post.links.external.map((source) => (
                <li key={source.href}>
                  <a
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span aria-hidden="true">[↗]</span> {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {post.cta?.text?.[language] && (
          <footer className="blog-article-cta">
            <p>{post.cta.text[language]}</p>
            <a
              href={post.cta.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.go} &gt;
            </a>
          </footer>
        )}
      </article>
    </Window>
  );
}

export default PostWindow;
