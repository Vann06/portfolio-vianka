import { useContext, useState, useEffect } from "react";
import Window from "../components/Window";
import { WindowContext } from "../context/WindowContext";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogPosts";

function BlogWindow({ zIndex }) {
  const { openWindow, closeWindow, bringToFront } = useContext(WindowContext);
  const { language, toggleLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const handlePostClick = (postId) => {
    const name = `post-${postId}`;
    console.log("[BlogWindow] open post:", name);
    openWindow(name);          // openWindow ya lo pone al frente si existe
    // setTimeout(() => bringToFront(name), 30);  // innecesario => remount extra
  };

  return (
    <Window
      title="my blog"
      zIndex={zIndex}
      onClose={() => closeWindow("blog")}
      onFocus={() => bringToFront("blog")}
    >
      <div className="blog-shell">
        <div className="blog-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800 }}>
            {language === "en" ? "My Blog" : "Mi Blog"}
          </h2>
          <button className="blog-chip" onClick={toggleLanguage} style={{ padding: "0.5rem 1rem", borderRadius: 8 }}>
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>

        <div className="blog-list">
          {blogPosts.map((post, i) => (
            <div key={post.id} className="blog-card" onClick={() => handlePostClick(post.id)}>
              <h3 style={{ margin: "0.75rem 0 0.25rem", opacity: 0.8 }}>#{i + 1}</h3>
              <p style={{ margin: 0, opacity: 0.9 }}>{post.summary[language]}</p>
              <div className="blog-meta">
                <small>{post.date}</small>
                <small>{post.readTime}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}
export default BlogWindow;
