import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBG = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#0a0a23' },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
            modes: { repulse: { distance: 80, duration: 0.4 } }
          },
          particles: {
            color: { value: ['#00ffff', '#39ff14', '#ff4dff', '#ff9933'] },
            links: { enable: true, color: '#00ffff', distance: 120, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.2, direction: 'none', outModes: { default: 'bounce' } },
            number: { value: 40, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 2, max: 5 } }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default ParticlesBG;
