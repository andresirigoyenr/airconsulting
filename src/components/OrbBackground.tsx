import React from 'react';
import Orb from './Orb';

const OrbBackground = () => {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden',
      opacity: 0.3
    }}>
      <Orb
        hue={0}
        hoverIntensity={0.1}
        rotateOnHover={false}
        forceHoverState={false}
      />
    </div>
  );
};

export default OrbBackground;
