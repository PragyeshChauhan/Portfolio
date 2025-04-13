"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Tilt } from "react-tilt";

// Navigation Items
const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Animation Variants
const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollProgress = useMotionValue(0);
  const springProgress = useSpring(scrollProgress, { stiffness: 100, damping: 20 });
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      scrollProgress.set(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollProgress]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  }, []);

  const handleDownloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.setAttribute("download", "PragyeshChauhan_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl shadow-neon"
          : "bg-transparent"
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 relative">
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-pink-500"
          style={{ width: springProgress }}
        />

        <Tilt options={{ max: 15, scale: 1.05, speed: 400 }}>
          <motion.div
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className="font-['Orbitron'] text-xl sm:text-2xl font-bold text-gray-900 dark:text-blue-400 tracking-tight neon-text"
            >
              DevShowcase
            </Link>
            <div className="neon-border" />
          </motion.div>
        </Tilt>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-900 dark:text-blue-400 hover:bg-blue-500/20 dark:hover:bg-pink-500/20 rounded-full w-10 h-10 neon-glow"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </motion.div>
          </Button>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {NAV_ITEMS.map((item, index) => (
            <Tilt key={item.id} options={{ max: 10, scale: 1.05, speed: 300 }}>
              <motion.button
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection(item.id)}
                className="text-sm lg:text-base font-medium text-gray-700 dark:text-blue-300 hover:text-blue-500 dark:hover:text-pink-400 transition-colors duration-300 font-['Exo_2'] neon-glow particle-text"
              >
                <motion.span whileHover={{ y: -3, scale: 1.1 }}>
                  {item.label}
                </motion.span>
              </motion.button>
            </Tilt>
          ))}
          <motion.div
            variants={navItemVariants}
            custom={NAV_ITEMS.length}
            initial="hidden"
            animate="visible"
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-semibold text-sm px-4 lg:px-6 transition-all duration-300 rounded-full focus:ring-2 focus:ring-blue-500 neon-glow"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Resume
              </motion.span>
            </Button>
          </motion.div>
          <motion.div
            variants={navItemVariants}
            custom={NAV_ITEMS.length + 1}
            initial="hidden"
            animate="visible"
          >
            <ThemeToggle />
          </motion.div>
        </nav>
      </div>

      {isMenuOpen && (
        <motion.nav
          className="absolute top-16 left-0 right-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-b border-blue-500/20 md:hidden"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col p-4 gap-3">
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.id}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => scrollToSection(item.id)}
                className="py-2 text-sm font-medium text-gray-700 dark:text-blue-300 hover:text-blue-500 dark:hover:text-pink-400 transition-colors duration-300 font-['Exo_2'] text-left neon-glow"
              >
                {item.label}
              </motion.button>
            ))}
            <motion.div
              variants={navItemVariants}
              custom={NAV_ITEMS.length}
              initial="hidden"
              animate="visible"
            >
              <Button
                onClick={handleDownloadResume}
                className="w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-semibold text-sm rounded-full"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </motion.div>
          </div>
        </motion.nav>
      )}

      <style jsx>{`
        .neon-glow {
          position: relative;
          transition: all 0.3s ease-in-out;
        }
        .neon-glow:hover {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(236, 72, 153, 0.3);
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.4), 0 0 12px rgba(236, 72, 153, 0.2);
        }
        .dark .neon-glow:hover {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(236, 72, 153, 0.5);
        }
        .neon-text {
          text-shadow: 0 0 3px rgba(59, 130, 246, 0.3);
        }
        .neon-border::before {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: 0.75rem;
          background: linear-gradient(
            45deg,
            #3b82f6,
            #ec4899,
            #3b82f6,
            #ec4899
          );
          background-size: 200%;
          animation: neonShift 6s linear infinite;
          z-index: -1;
          filter: blur(3px);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        .group:hover .neon-border::before {
          opacity: 0.6;
        }
        @keyframes neonShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .shadow-neon {
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.2),
            0 2px 8px rgba(236, 72, 153, 0.1);
        }
        .particle-text::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 2px;
          height: 2px;
          background: rgba(59, 130, 246, 0.5);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        .particle-text:hover::after {
          opacity: 1;
          transform: translate(-50%, -50%) scale(3);
        }
        @media (prefers-reduced-motion: reduce) {
          .neon-border::before,
          .particle-text::after {
            animation: none;
            opacity: 0;
          }
          .neon-glow:hover,
          .shadow-neon {
            text-shadow: none;
            box-shadow: none;
          }
        }
        @media (max-width: 640px) {
          .neon-border::before {
            inset: -2px;
            filter: blur(2px);
          }
        }
      `}</style>
    </motion.header>
  );
}
