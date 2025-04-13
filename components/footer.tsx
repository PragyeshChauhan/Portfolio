"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { ChevronDown, Github, Linkedin, Twitter, Facebook , Mail} from "lucide-react";

const NAV_ITEMS = [ 
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/PragyeshChauhan",
    icon: Github,
    label: "GitHub",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    href: "https://www.linkedin.com/in/pragyesh-chauhan01/",
    icon: Linkedin,
    label: "LinkedIn",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    href: "https://twitter.com/PragyeshC",
    icon: Twitter,
    label: "Twitter",
    ariaLabel: "Visit my Twitter profile",
  },
  {
    href: "https://www.facebook.com/pragyesh.chauhan/",
    icon: Facebook,
    label: "Facebook",
    ariaLabel: "Visit my Facebook profile",
  },
  {
    href: "mailto:pragyeshchauhan26@gmail.com",
    icon: Mail,
    label: "Email",
    ariaLabel: "Send me an email",
  },
];

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: i * 0.1 },
  }),
};

export function Footer() {
  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <footer className="relative z-10 border-t border-muted p-8 md:px-16 text-muted-foreground bg-background/80 dark:bg-gray-900/80 py-16 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand / Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-3"
        >
          <Tilt options={{ max: 10, scale: 1.05, speed: 300 }}>
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-foreground font-['Orbitron'] neon-text"
            >
              DevShowcase
            </motion.h2>
          </Tilt>
          <p className="max-w-sm text-sm font-['Exo_2']">
            Crafting modern web experiences with passion, precision, and futuristic vision.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          initial="hidden"
          animate="visible"
          className="space-y-3 text-sm font-medium cursor-pointer font-['Exo_2']"
        >
          {NAV_ITEMS.map((item, i) => (
            <motion.li
              key={item.id}
              custom={i}
              variants={navItemVariants}
              onClick={() => scrollToSection(item.id)}
              className="hover:text-pink-500 dark:hover:text-blue-400 relative group transition-colors"
            >
              <span className="group-hover:underline group-hover:underline-offset-4">
                {item.label}
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {SOCIAL_LINKS.map(({ href, icon: Icon, label, ariaLabel }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={ariaLabel}
              className="hover:text-foreground transition-colors neon-glow"
            >
              <Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="text-xs text-center mt-10 opacity-50 font-['Exo_2']">
        &copy; {new Date().getFullYear()} Pragyesh Chauhan. All rights reserved.
      </div>

      {/* Glow styles (reuse from header) */}
      <style jsx>{`
        .neon-glow {
          transition: all 0.3s ease-in-out;
        }
        .neon-glow:hover {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.5), 0 0 10px rgba(236, 72, 153, 0.3);
        }
        .dark .neon-glow:hover {
          text-shadow: 0 0 5px rgba(59, 130, 246, 0.7), 0 0 10px rgba(236, 72, 153, 0.5);
        }
        .neon-text {
          text-shadow: 0 0 3px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </footer>
  );
}
