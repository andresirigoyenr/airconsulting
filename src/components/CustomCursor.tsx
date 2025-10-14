import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Check if device supports touch (mobile/tablet)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      // Hide cursor elements on touch devices
      cursor.style.display = 'none';
      cursorDot.style.display = 'none';
      return;
    }

    // Hide default cursor
    document.body.style.cursor = 'none';

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Smoothing factor (lerp)
    const lerpFactor = 0.15;
    const dotLerpFactor = 0.25;

    let animationFrame: number;

    const updateCursor = () => {
      // Smooth cursor following with lerp
      cursorX += (mouseX - cursorX) * lerpFactor;
      cursorY += (mouseY - cursorY) * lerpFactor;

      // Dot follows cursor with different speed
      dotX += (mouseX - dotX) * dotLerpFactor;
      dotY += (mouseY - dotY) * dotLerpFactor;

      // Apply transforms
      cursor.style.transform = `translate3d(${cursorX - 20}px, ${cursorY - 20}px, 0)`;
      cursorDot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;

      animationFrame = requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
      cursorDot.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    };

    // Handle interactive elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('.interactive-element, a, button, [role="button"], img, .service-item, .client-card');

      if (interactiveElement) {
        const tagName = interactiveElement.tagName.toLowerCase();
        const classList = interactiveElement.classList;

        // Remove previous hover classes
        cursor.classList.remove('cursor-hover-link', 'cursor-hover-button', 'cursor-hover-image');

        // Add appropriate hover class
        if (tagName === 'a') {
          cursor.classList.add('cursor-hover-link');
        } else if (tagName === 'button' || classList.contains('service-item') || interactiveElement.hasAttribute('role') && interactiveElement.getAttribute('role') === 'button') {
          cursor.classList.add('cursor-hover-button');
        } else if (tagName === 'img' || classList.contains('client-card')) {
          cursor.classList.add('cursor-hover-image');
        }
      } else {
        // Remove all hover classes when not over interactive elements
        cursor.classList.remove('cursor-hover-link', 'cursor-hover-button', 'cursor-hover-image');
      }
    };

    // Start animation loop
    updateCursor();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleElementHover);

    // Cleanup
    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleElementHover);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid rgba(255, 87, 51, 0.8)',
          backgroundColor: 'rgba(255, 87, 51, 0.1)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />

      {/* Inner dot */}
      <div
        ref={cursorDotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#FF5733',
          pointerEvents: 'none',
          zIndex: 10000,
          opacity: 0,
          transition: 'opacity 0.3s ease',
          willChange: 'transform',
        }}
      />

      <style>{`
        /* Hide cursor on touch devices */
        @media (hover: none) and (pointer: coarse) {
          .custom-cursor,
          .custom-cursor-dot {
            display: none !important;
          }
          body {
            cursor: auto !important;
          }
        }

        /* Cursor hover states */
        .custom-cursor.cursor-hover-link {
          transform: scale(1.5);
          background-color: rgba(255, 87, 51, 0.3);
          border-color: #FF5733;
        }

        .custom-cursor.cursor-hover-button {
          transform: scale(1.3);
          background-color: rgba(255, 87, 51, 0.4);
          border-color: #FF5733;
          border-width: 3px;
        }

        .custom-cursor.cursor-hover-image {
          border-width: 3px;
          border-color: #FFC300;
          background-color: rgba(255, 195, 0, 0.1);
        }

        .custom-cursor.cursor-hover-image::after {
          content: '👁';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: #FFC300;
        }

        /* Smooth transitions for state changes */
        .custom-cursor {
          transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, border-width 0.2s ease;
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
