"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Types
interface SocialLink {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

// Constants
const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://github.com/PragyeshChauhan", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/pragyesh-chauhan01/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://twitter.com/PragyeshC", icon: Twitter, label: "Twitter" },
  { href: "https://www.facebook.com/pragyesh.chauhan/", icon: Facebook, label: "Facebook" },
];

const TYPEWRITER_PHRASES = [
  "Software Engineer",
  "Java Full Stack Developer",
  "Backend Developer",
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Simplified Typewriter Hook
const useTypewriter = (phrases: string[], speed = 100) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < phrases[currentPhraseIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(phrases[currentPhraseIndex].slice(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, speed / 2);
      } else {
        setIsTyping(true);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentPhraseIndex, phrases, speed]);

  return displayedText;
};

// Social Links Component
const SocialLinks = React.memo(({ links }: { links: SocialLink[] }) => (
  <motion.div
    className="flex items-center gap-2 sm:gap-3"
    variants={itemVariants}
    aria-label="Social media links"
  >
    {links.map(({ href, icon: Icon, label }) => (
      <Button
        key={label}
        variant="ghost"
        size="icon"
        className="text-gray-600 dark:text-cyan-400 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 rounded-full transition-all duration-300 focus:ring-2 focus:ring-cyan-500 w-10 h-10 sm:w-12 sm:h-12"
        asChild
      >
        <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
        </Link>
      </Button>
    ))}
  </motion.div>
));
SocialLinks.displayName = "SocialLinks";

// Main Hero Component
export const Hero = React.memo(() => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const typewriterText = useTypewriter(TYPEWRITER_PHRASES, 100);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-8 sm:py-12 bg-transparent overflow-hidden"
    >
      <div className="container relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-[90%] sm:max-w-3xl">
        <motion.div
          className="relative rounded-2xl bg-white/20 dark:bg-gray-800/20 backdrop-blur-md p-4 sm:p-6 md:p-8 border border-gray-300/50 dark:border-cyan-500/20 shadow-lg dark:shadow-cyan-500/10 w-full"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-800 dark:text-cyan-100 font-['Orbitron']"
            variants={itemVariants}
          >
            Pragyesh Chauhan
          </motion.h1>
          <motion.h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-600 dark:text-cyan-400 mb-4 sm:mb-6 font-['Exo_2'] min-h-[1.5em] whitespace-nowrap overflow-hidden text-ellipsis"
            variants={itemVariants}
            aria-live="polite"
          >
            {typewriterText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block w-1 h-5 sm:h-6 bg-cyan-500 ml-1 -mb-1"
            />
          </motion.h2>
          <motion.p
            className="max-w-[90%] sm:max-w-md text-gray-500 dark:text-gray-300 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 font-['Inter'] leading-relaxed mx-auto"
            variants={itemVariants}
          >
          Building high-performance, fault-tolerant backend systems with expertise in Java, microservices, distributed systems, API design, database scaling, caching, and message-driven workflows.  
           </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm md:text-base px-4 sm:px-6"
              onClick={() => scrollToSection("projects")}
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Explore Projects
              </motion.span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-300 dark:border-cyan-500/50 text-gray-800 dark:text-cyan-400 hover:bg-cyan-500/20 dark:hover:bg-cyan-500/30 transition-all duration-300 focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm md:text-base px-4 sm:px-6"
              onClick={() => scrollToSection("contact")}
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get in Touch
              </motion.span>
            </Button>
          </motion.div>
          <SocialLinks links={SOCIAL_LINKS} />
          <motion.div className="mt-6 sm:mt-8" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("about")}
              aria-label="Scroll to about section"
              className="text-gray-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 focus:ring-2 focus:ring-cyan-500 rounded-full transition-colors duration-300"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pragyesh Chauhan",
            jobTitle: "Software Engineer",
            description:
              "Software Engineer specializing in Java backend architecture",
            url: "https://iampragyesh.netlify.app/",
            image: "https://your-portfolio.com/profile.jpg",
            sameAs: SOCIAL_LINKS.map((link) => link.href),
            knowsAbout: ["Software Development", "Java Full Stack Development"],
          }),
        }}
      />

      <style jsx>{`
        .shadow-glow {
          transition: box-shadow 0.3s ease-in-out;
        }
        .shadow-glow:hover {
          box-shadow: 0 0 6px rgba(6, 182, 212, 0.3), 0 0 10px rgba(6, 182, 212, 0.2);
        }
        .dark .shadow-glow:hover {
          box-shadow: 0 0 6px rgba(34, 211, 238, 0.3), 0 0 10px rgba(34, 211, 238, 0.2);
        }
        .animated-border::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          background: linear-gradient(45deg, #06b6d4, #7c3aed, #06b6d4, #7c3aed);
          background-size: 200%;
          animation: gradientShift 8s linear infinite;
          z-index: -1;
          filter: blur(2px);
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animated-border::before {
            animation: none;
          }
          .shadow-glow:hover {
            box-shadow: none;
          }
        }
        @media (max-width: 640px) {
          .animated-border::before {
            inset: -1px;
            filter: blur(1px);
          }
        }
      `}</style>
    </section>
  );
});

Hero.displayName = "Hero";