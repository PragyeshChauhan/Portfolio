"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Background } from "@/components/background";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

// Simple loading component
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-[hsl(var(--background))] z-50">
    <motion.div
      className="w-16 h-16 border-4 border-[hsl(var(--primary))] border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Track scroll progress
  const { scrollYProgress } = useScroll();
  // Smooth the scroll progress for a better effect
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Handle hash navigation and initial loading
  useEffect(() => {
    // Simulate loading delay (remove if not needed)
    const timer = setTimeout(() => setIsLoading(false), 1000);

    // Handle hash navigation
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Particle Background */}
      <Background />

      {/* Loading Animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] z-50"
        style={{ scaleX }} // Bind scaleX to the smoothed scroll progress
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}