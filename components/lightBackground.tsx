// components/LightBackground.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function LightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Hexagon properties
    const hexagons: {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
    }[] = [];

    const colors = ["#80bfff", "#ff99dd", "#ffeb80"]; // Light mode palette
    const numHexagons = 30;

    // Initialize hexagons
    for (let i = 0; i < numHexagons; i++) {
      hexagons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Draw hexagon
    const drawHexagon = (x: number, y: number, radius: number) => {
      ctx!.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        ctx!.lineTo(
          x + radius * Math.cos(angle),
          y + radius * Math.sin(angle)
        );
      }
      ctx!.closePath();
      ctx!.stroke();
      ctx!.fill();
    };

    // Animation loop
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);

      hexagons.forEach((hex) => {
        ctx!.strokeStyle = hex.color;
        ctx!.fillStyle = `${hex.color}${Math.floor(hex.opacity * 255).toString(16).padStart(2, "0")}`;
        ctx!.lineWidth = 1;
        drawHexagon(hex.x, hex.y, hex.radius);

        // Update position
        hex.x += hex.speedX;
        hex.y += hex.speedY;

        // Bounce off edges
        if (hex.x < 0 || hex.x > canvas.width) hex.speedX *= -1;
        if (hex.y < 0 || hex.y > canvas.height) hex.speedY *= -1;

        // Pulse opacity
        hex.opacity = 0.1 + Math.abs(Math.sin(Date.now() * 0.001 + hex.x * 0.01)) * 0.3;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}