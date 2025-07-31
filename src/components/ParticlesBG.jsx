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
          background: { 
            color: '#0a0a23',
            image: "linear-gradient(180deg, rgba(10,10,35,1) 0%, rgba(10,10,43,1) 100%)",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          },
          fullScreen: {
            enable: true,
            zIndex: -1
          },
          fpsLimit: 120,
          interactivity: {
            events: { 
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: { 
                enable: true, 
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              }, 
              resize: true 
            },
            modes: { 
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                  blink: true
                }
              },
              push: {
                quantity: 4
              },
              repulse: { 
                distance: 100, 
                duration: 0.4,
                speed: 1
              } 
            }
          },
          particles: {
            color: { 
              value: ['#00ffff', '#39ff14', '#ff4dff', '#ff9933', '#ffffff'],
              animation: {
                enable: true,
                speed: 10
              }
            },
            links: { 
              enable: true, 
              color: {
                value: "#00ffff",
                opacity: 0.4
              },
              distance: 150, 
              opacity: 0.4, 
              width: 1,
              triangles: {
                enable: true,
                opacity: 0.1
              }
            },
            move: { 
              enable: true, 
              speed: 2, 
              direction: "none", 
              outModes: { 
                default: "out",
                bottom: "bounce",
                top: "bounce"
              },
              trail: {
                enable: true,
                length: 3,
                fillColor: "#000",
                opacity: 0.05
              }
            },
            number: { 
              value: 60, 
              density: { 
                enable: true, 
                area: 800 
              } 
            },
            opacity: { 
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.3,
                sync: false
              }
            },
            shape: { 
              type: ["circle", "triangle", "star"] 
            },
            size: { 
              value: { min: 1, max: 4 },
              random: true,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.5,
                sync: false
              }
            },
            twinkle: {
              particles: {
                enable: true,
                frequency: 0.05,
                opacity: 1
              },
              lines: {
                enable: true,
                frequency: 0.05,
                opacity: 0.3
              }
            }
          },
          detectRetina: true
        }}
      />
    </div>
  );
};

export default ParticlesBG;
