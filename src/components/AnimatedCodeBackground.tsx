import React, { useEffect, useRef } from 'react';

const AnimatedCodeBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const background = backgroundRef.current;
    if (!background) return;

    let animationFrame: number;
    let lastTime = 0;
    let isHovering = false;
    let cachedRect: DOMRect | null = null;
    let rectCacheTime = 0;

    const getCachedRect = () => {
      const now = Date.now();
      if (!cachedRect || now - rectCacheTime > 100) { // Cache for 100ms
        cachedRect = background.getBoundingClientRect();
        rectCacheTime = now;
      }
      return cachedRect;
    };

    const handleMouseEnter = () => {
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      // Reset transform when mouse leaves
      background.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovering || Date.now() - lastTime < 16) return; // ~60fps throttling
      lastTime = Date.now();

      const rect = getCachedRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate rotation based on mouse position (reduced sensitivity)
      const rotateX = (mouseY / rect.height) * 5; // Max 5 degrees
      const rotateY = -(mouseX / rect.width) * 5; // Max 5 degrees

      animationFrame = requestAnimationFrame(() => {
        background.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    };

    background.addEventListener('mouseenter', handleMouseEnter);
    background.addEventListener('mouseleave', handleMouseLeave);
    background.addEventListener('mousemove', handleMouseMove);

    return () => {
      background.removeEventListener('mouseenter', handleMouseEnter);
      background.removeEventListener('mouseleave', handleMouseLeave);
      background.removeEventListener('mousemove', handleMouseMove);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={backgroundRef}
        className="animated-code-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <div className="code-content">
          <pre className="code-block">
{`<html>
  <head>
    <title>AIR Consulting</title>
    <meta name="description" content="Agencia de marketing digital">
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="hero">
        <h1>Estrategias Digitales que Cruzan Fronteras</h1>
        <p>Transformamos negocios en Cádiz y el mundo</p>
        <button>Pide tu consultoría</button>
      </section>

      <section id="services">
        <h2>Nuestros Servicios</h2>
        <div className="service">
          <h3>Desarrollo Web</h3>
          <p>Sitios web profesionales y responsivos</p>
        </div>
        <div className="service">
          <h3>SEO</h3>
          <p>Posicionamiento en motores de búsqueda</p>
        </div>
        <div className="service">
          <h3>Redes Sociales</h3>
          <p>Gestión profesional de comunidades</p>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 AIR Consulting</p>
    </footer>

    <script>
      // JavaScript para interactividad
      document.addEventListener('DOMContentLoaded', function() {{
        console.log('AIR Consulting - Marketing Digital');
      }});
    </script>
  </body>
</html>`}
          </pre>
        </div>
      </div>

      <style>{`
        .animated-code-background {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .animated-code-background::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 87, 51, 0.08) 45%,
            rgba(255, 195, 0, 0.05) 55%,
            transparent 100%
          );
          animation: glimmer 7s ease-in-out infinite;
          pointer-events: none;
          will-change: left;
        }

        @keyframes glimmer {
          0% {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          100% {
            left: 100%;
          }
        }

        .code-content {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-style: preserve-3d;
          will-change: transform;
        }

        .code-block {
          font-family: 'Courier New', monospace;
          font-size: 14px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.7);
          white-space: pre-wrap;
          word-wrap: break-word;
          max-width: 90%;
          text-align: left;
          margin: 0;
          padding: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
          border: 1px solid rgba(255, 87, 51, 0.2);
          backdrop-filter: blur(10px);
          transform: translateZ(20px);
        }

        /* Syntax highlighting */
        .code-block span.keyword {
          color: #ff5733;
        }

        .code-block span.string {
          color: #ffc300;
        }

        .code-block span.comment {
          color: #6c757d;
          font-style: italic;
        }

        .code-block span.function {
          color: #28a745;
        }

        .code-block span.tag {
          color: #007bff;
        }

        .code-block span.attribute {
          color: #fd7e14;
        }
      `}</style>
    </>
  );
};

export default AnimatedCodeBackground;
