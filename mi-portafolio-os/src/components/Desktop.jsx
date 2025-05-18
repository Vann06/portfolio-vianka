function Desktop() {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "1rem",
        boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
        maxWidth: "700px",
        width: "90%",
        zIndex: 1,
      }}
    >
      {/* Título barra */}
      <div
        style={{
          backgroundColor: "#333",
          color: "white",
          padding: "0.75rem 1rem",
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
          fontWeight: "bold",
          fontFamily: "monospace",
          textAlign: "left",
        }}
      >
        home
      </div>

      {/* Contenido */}
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem", fontWeight: 300 }}>
          hi! <span style={{ fontWeight: "bold", color: "#f79902" }}>i’m zeyda</span>
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          frontend developer & UX enthusiast
        </p>

        {/* Iconos */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "2rem",
          }}
        >
          {[
            { label: "about", icon: "/icons/info.png" },
            { label: "links", icon: "/icons/link.png" },
            { label: "work", icon: "/icons/folder.png" },
            { label: "faq", icon: "/icons/question.png" },
            { label: "contact", icon: "/icons/email.png" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  width: "48px",
                  height: "48px",
                  marginBottom: "0.25rem",
                  filter: "drop-shadow(2px 2px 2px rgba(0,0,0,0.2))",
                }}
              />
              <span style={{ fontWeight: "500", fontSize: "0.85rem" }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer redes */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.5rem",
          marginBottom: "1rem",
        }}
      >
        <img src="/icons/twitter.png" alt="Twitter" style={iconStyle} />
        <img src="/icons/youtube.png" alt="YouTube" style={iconStyle} />
        <img src="/icons/instagram.png" alt="Instagram" style={iconStyle} />
      </div>
    </div>
  );
}

const iconStyle = {
  width: "24px",
  height: "24px",
  background: "#222",
  borderRadius: "50%",
  padding: "0.4rem",
};

export default Desktop;
