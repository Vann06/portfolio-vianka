import WaveBackground from "../components/WaveBackground";
import Desktop from "../components/Desktop";

function HomeView() {
  return (
    <div className="min-h-screen w-full bg-beige dark:bg-[#1e1e2f] text-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">

      <WaveBackground />

      <div
        style={{
          position: "relative",
          paddingTop: "70px",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "auto",
        }}
        className="pt-20 px-4"
      >
        <Desktop />
      </div>
    </div>
  );
}

export default HomeView;
