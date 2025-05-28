import { useEffect, useRef } from "react";

function Starfield() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const numStars = 120;
    const stars = [];

    const random = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        baseRadius: random(1.1, 2.5),
        radius: 0, // will animate
        opacity: random(0.3, 0.8),
        flicker: Math.random() * 0.03 + 0.01,
        flickerDir: Math.random() < 0.5 ? -1 : 1,
        speedX: random(-0.02, 0.02),
        speedY: random(-0.02, 0.02),
      });
    }

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        // movimiento
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0 || star.x > canvas.width) star.speedX *= -1;
        if (star.y < 0 || star.y > canvas.height) star.speedY *= -1;

        // parpadeo
        star.opacity += star.flicker * star.flickerDir;
        if (star.opacity < 0.3 || star.opacity > 1) {
          star.flickerDir *= -1;
        }

        // tamaño animado
        star.radius = star.baseRadius + Math.sin(Date.now() * 0.004 + star.x) * 0.5;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      }
    };

    const animate = () => {
      drawStars();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}

export default Starfield;
