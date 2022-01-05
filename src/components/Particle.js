import { useEffect, useState } from "react";
import Particles from "react-tsparticles";

export default function Particle({ particle }) {
  let [direction, setDirection] = useState("bottom");
  useEffect(() => {
    setDirection(particle ? 3 : -3);
  }, [particle]);
  return (
    <Particles
      params={{
        particles: {
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            direction: "bottom",
            enable: true,
            outMode: "out",
            speed: direction,
          },
          links: {
            enable: false,
          },
          color: {
            value: [
              "#8B00FF",
              "#FFD73C",
              "#76FF03",
              "#0D47A1",
              "42A5F5",
              "AD1457",
            ],
          },
          opacity: {
            value: 0.6,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            remove: {
              quantity: 10,
            },
          },
        },
      }}
    />
  );
}
