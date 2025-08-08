import { useContext, useEffect, useMemo } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import { blogPosts } from "../data/blogPosts";
import { useLanguage } from "../context/LanguageContext";
import { enrichPost } from "../utils/formatPost";

function PostWindow({ zIndex, postId, windowName }) {
  const { language } = useLanguage();
  const { closeWindow, bringToFront } = useContext(WindowContext);
  const name = windowName || `post-${postId}`;
  const raw = blogPosts.find((p) => p.id === postId);

  const post = useMemo(
    () => (raw ? enrichPost(raw, language) : null),
    [raw, language]
  );

  useEffect(() => {
    if (!post) console.warn("[PostWindow] Post no encontrado:", postId);
  }, [post, postId]);

  if (!post) return null;

  return (
    <Window
      title={post.title[language]}
      zIndex={zIndex}
      onClose={() => closeWindow(name)}
      onFocus={() => bringToFront(name)}
    >
      <div
        className="blog-shell"
        style={{ padding: "1rem 1.2rem" }}
        data-window={name}
      >
        {post.image && (
          <div
            className="blog-card"
            style={{ padding: 0, overflow: "hidden", marginBottom: "1rem" }}
          >
            <img
              src={post.image}
              alt={post.title[language]}
              style={{ width: "100%", height: 200, objectFit: "cover" }}
              onError={(e) => {
                e.currentTarget.src = "/fallback-post.png";
              }}
              draggable={false}
            />
          </div>
        )}

        <h1
          style={{
            textAlign: "center",
            fontSize: "1.55rem",
            fontWeight: 800,
            margin: "0 0 .75rem",
          }}
          className="dark:text-white"
        >
          {post.title[language]}
        </h1>

        <div
          className="blog-card dark:text-gray-300"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: ".75rem",
            fontWeight: 600,
            marginBottom: ".75rem",
            fontSize: ".75rem",
            opacity: 0.85,
          }}
        >
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.wordCount} words</span>
          {typeof post.boldRatio === "number" && (
            <>
              <span>•</span>
              <span>bold {Math.round(post.boldRatio * 100)}%</span>
            </>
          )}
        </div>

        <div
          className="dark:text-gray-300"
          style={{ fontSize: ".95rem", lineHeight: 1.55, textAlign: "justify" }}
        >
          {post.rendered.map((html, i) => (
            <p key={i} style={{ marginBottom: "1rem" }} dangerouslySetInnerHTML={{ __html: html }} />
          ))}
        </div>

        {/* Internal links */}
        {post.links?.internal?.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <h4
              style={{
                fontWeight: 700,
                marginBottom: ".5rem",
                fontSize: ".9rem",
              }}
              className="dark:text-white"
            >
              {language === "es"
                ? "También puedes leer"
                : "You can also read"}
            </h4>
            <ul style={{ fontSize: ".85rem", lineHeight: 1.4 }}>
              {post.links.internal.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => {
                      closeWindow(name);
                      // abrir la otra ventana
                      // asumiendo openWindow está global vía custom hook o context
                      window.dispatchEvent(
                        new CustomEvent("open-window", { detail: link.to })
                      );
                    }}
                    style={{
                      color: "#6b46c1",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    className="dark:text-[#c4b5fd]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* External sources */}
        {post.links?.external?.length > 0 && (
          <div style={{ marginTop: "1.2rem" }}>
            <h4
              style={{
                fontWeight: 700,
                marginBottom: ".5rem",
                fontSize: ".9rem",
              }}
              className="dark:text-white"
            >
              {language === "es" ? "Fuentes" : "Sources"}
            </h4>
            <ul style={{ fontSize: ".85rem", lineHeight: 1.4 }}>
              {post.links.external.map((ext) => (
                <li key={ext.href}>
                  <a
                    href={ext.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2b6cb0", textDecoration: "underline" }}
                    className="dark:text-[#63b3ed]"
                  >
                    {ext.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        {post.cta?.text?.[language] && (
          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              border: "1px dashed #d4c5a9",
              textAlign: "center",
              borderRadius: "6px",
            }}
            className="dark:border-[#4a5568]"
          >
            <p style={{ fontWeight: 600, marginBottom: ".7rem" }}>
              {post.cta.text[language]}
            </p>
            <a
              href={post.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: ".5rem 1rem",
                fontSize: ".85rem",
                fontWeight: 600,
                background: "#c4a47c",
                color: "#1a1a1a",
                borderRadius: "4px",
              }}
              className="dark:bg-[#718096] dark:text-white"
            >
              {language === "es" ? "Ir" : "Go"}
            </a>
          </div>
        )}
      </div>
    </Window>
  );
}

export default PostWindow;
