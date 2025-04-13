"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

export function Background() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // Dark mode options (enhanced neon particles)
  const darkModeOptions = {
    background: {
      color: {
        value: "transparent", // Uses globals.css --background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 120, // Slightly increased for smoother effect
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: ["#00ccff", "#ff33cc", "#33ff99"], // Brighter neon cyan, magenta, green
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.4, // Slightly more visible links
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2.5, // Slightly faster for liveliness
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.4, max: 0.7 }, // Added range for depth
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  // Light mode options (refined pastel particles)
  const lightModeOptions = {
    background: {
      color: {
        value: "transparent", // Keep it transparent to blend with CSS background
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse", // Feels lighter and playful on hover
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      color: {
        value: ["#80bfff", "#ff99dd", "#ffeb80", "#b3ffb3"], // Added green pastel for variety
      },
      links: {
        color: "#bbb", // Very light gray for soft lines
        distance: 100,
        enable: true,
        opacity: 0.4,
        width: 0.8,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 2.2, // Slightly toned down for smoothness
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 55,
      },
      opacity: {
        value: { min: 0.4, max: 0.7 }, // Very gentle for light backgrounds
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1.5, max: 3.5 }, // Slightly smaller for elegance
      },
    },
    detectRetina: true,
  };
  

  // Select options based on theme
  const particleOptions = theme === "light" ? lightModeOptions : darkModeOptions;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particleOptions}
      className="absolute inset-0 z-0"
    />
  );
}