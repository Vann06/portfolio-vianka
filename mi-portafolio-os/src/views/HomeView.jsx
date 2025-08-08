import WaveBackground from "../components/WaveBackground";
import Desktop from "../components/Desktop";
import AboutWindow from "../windows/AboutWindow";
import ContactWindow from "../windows/ContactWindow";
import ResumeWindow from "../windows/ResumeWindow";
import ProyectsWindow from "../windows/ProyectsWindow";
import BlogWindow from "../windows/BlogWindow";
import PostWindow from "../windows/PostWindow";
import EmailWindow from "../windows/EmailWindow";
import Cat from "../components/Cat";
import { useContext } from "react";
import { WindowContext } from "../context/WindowContext";
import { blogPosts } from "../data/blogPosts";

// --- crear una sola vez el mapa dinámico (referencias estables) ---
const postWindowComponents = Object.fromEntries(
  blogPosts.map(post => [
    `post-${post.id}`,
    function PostWinWrapper(props) {
      return (
        <PostWindow
          {...props}
          postId={post.id}
          windowName={`post-${post.id}`}
        />
      );
    }
  ])
);

function HomeView() {
  const { windows } = useContext(WindowContext);

  const windowComponents = {
    about: AboutWindow,
    links: ContactWindow,
    work: ProyectsWindow,
    resume: ResumeWindow,
    contact: EmailWindow,
    blog: BlogWindow,
    ...postWindowComponents
  };

  return (
    <div
      style={{ overflow: "hidden", width: "100%" }}
      className="relative min-h-screen w-full bg-beige dark:bg-[#1e1e2f] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <WaveBackground />

      {windows.map(win => {
        const WinComponent = windowComponents[win.name];
        if (!WinComponent) return null;
        return <WinComponent key={win.name} zIndex={win.zIndex} />;
      })}

      <div
        className="layout-shell"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px 0 60px",   // antes 120px → sube todo ~40px
          minHeight: "100vh",
          boxSizing: "border-box"
        }}
      >
        <div
          className="desktop-stage"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1250px",
            minHeight: "600px",
            paddingTop: 0,
            overflow: "visible"
          }}
        >
          <div
            className="desktop-wrapper"
            style={{
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              overflow: "visible"
            }}
          >
            <Cat />
            <Desktop />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
