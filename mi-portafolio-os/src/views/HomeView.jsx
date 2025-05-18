import WaveBackground from "../components/WaveBackground";
import Desktop from "../components/Desktop"; // Asegúrate de tenerlo creado

function HomeView() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fondo animado de olas */}
      <WaveBackground />

      {/* Componente encima de las olas */}
      <div
        style={{
          position: "relative",
          zIndex: 1, 
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "auto",
        }}
      >
        <Desktop />
      </div>
    </div>
  );
}

export default HomeView;
