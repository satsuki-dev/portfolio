import { useEffect, useState } from "react";

export const SkyBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    generateParticles();

    const handleResize = () => {
      generateParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateParticles = () => {
    // More particles by reducing area per particle
    const numberOfParticles = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newParticles = [];

    for (let i = 0; i < numberOfParticles; i++) {
      newParticles.push({
        id: i,
        size: Math.random() * 2 + 1.5, // 1.5px - 3.5px
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.1 + Math.random() * 0.3,
        animationDurationX: 4 + Math.random() * 3, // faster: 4s - 7s
        animationDurationY: 4 + Math.random() * 3,
        animationDelay: Math.random() * 7,
      });
    }

    setParticles(newParticles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size + "px",
            height: p.size + "px",
            left: p.x + "%",
            top: p.y + "%",
            opacity: p.opacity,
            animationDuration: `${p.animationDurationX}s, ${p.animationDurationY}s, 3s`,
            animationDelay: `${p.animationDelay}s, ${p.animationDelay}s, 0s`,
            animationTimingFunction: "ease-in-out, ease-in-out, ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
          }}
        />
      ))}

      <style jsx>{`
        .particle {
          position: absolute;
          background: rgba(180, 200, 220, 0.8);
          border-radius: 50%;
          filter: drop-shadow(0 0 6px rgba(180, 200, 220, 0.4));
          animation-name: driftX, driftY, pulseOpacity;
          will-change: transform, opacity;
        }

        @keyframes driftX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(14px);
          }
        }

        @keyframes driftY {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(12px);
          }
        }

        @keyframes pulseOpacity {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};
