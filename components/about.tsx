"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamically import react-parallax-tilt
const Tilt = dynamic(() => import("react-parallax-tilt"), {
  ssr: false,
  loading: () => (
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl bg-gray-200/50 dark:bg-gray-800/50 border border-cyan-500/20 animate-pulse" />
  ),
});

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Memoize animation variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.8,
          staggerChildren: shouldReduceMotion ? 0 : 0.2,
          delayChildren: shouldReduceMotion ? 0 : 0.3,
        },
      },
    }),
    [shouldReduceMotion]
  );

  const childVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.5,
          ease: "easeOut",
        },
      },
    }),
    [shouldReduceMotion]
  );

  const imageVariants = useMemo(
    () => ({
      hidden: { opacity: 0, scale: 0.95 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0 : 0.6,
          ease: "easeOut",
        },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-transparent overflow-hidden"
      aria-labelledby="about-heading"
    >
      <style jsx global>{`
        .profile-outline {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          border: 1px solid rgba(6, 182, 212, 0.2);
          transition: border-color 0.3s ease;
        }
        .dark .profile-outline {
          border-color: rgba(34, 211, 238, 0.3);
        }
        .profile-outline::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 1rem;
          background: linear-gradient(
            45deg,
            rgba(6, 182, 212, 0.2),
            rgba(124, 58, 237, 0.2),
            rgba(6, 182, 212, 0.2)
          );
          background-size: 200%;
          animation: gradientShift 8s linear infinite;
          z-index: -1;
          filter: blur(4px);
        }
        .profile-image {
          border-radius: 1rem;
          object-fit: cover;
          width: 100%;
          height: 100%;
          z-index: 10;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(6, 182, 212, 0.2);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }
        .dark .glass-card {
          background: rgba(17, 24, 39, 0.3);
          border-color: rgba(34, 211, 238, 0.3);
        }
        .glass-card:hover {
          transform: scale(1.03);
          box-shadow: 0 8px 32px rgba(6, 182, 212, 0.2);
        }
        .dark .glass-card:hover {
          box-shadow: 0 8px 32px rgba(34, 211, 238, 0.3);
        }
        .text-glow {
          text-shadow: 0 0 6px rgba(6, 182, 212, 0.4);
        }
        .dark .text-glow {
          text-shadow: 0 0 6px rgba(34, 211, 238, 0.5);
        }
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @media (prefers-reduced-motion) {
          .profile-outline::before {
            animation: none;
            background: none;
          }
          .glass-card {
            transition: none;
          }
          .glass-card:hover {
            transform: none;
            box-shadow: none;
          }
        }
        @media (max-width: 640px) {
          .stat-grid {
            grid-template-columns: 1fr;
          }
          .profile-outline::before {
            inset: -1px;
            filter: blur(2px);
          }
          .who-am-i-card {
            padding: 1rem;
            width: 100%;
            max-width: 20rem;
            margin: 0 auto;
          }
        }
        @media (min-width: 641px) {
          .who-am-i-card {
            padding: 1.5rem;
            max-width: 28rem;
          }
        }
      `}</style>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[90%] sm:max-w-5xl">
        <motion.h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-cyan-100 font-['Orbitron'] text-glow"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate={isImageLoaded ? "visible" : "hidden"}
          >
            <Tilt
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={isImageLoaded}
              glareMaxOpacity={0.2}
              glareColor="#e0f7ff"
              glarePosition="all"
              className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 profile-outline shadow-glow"
            >
              <Image
                src="/profile_pic.jpg?height=320&width=320"
                alt="Pragyesh Chauhan, Full Stack Developer"
                width={320}
                height={320}
                className="profile-image"
                priority
                quality={100}
                placeholder="blur"
                blurDataURL="/profile_pic_low.jpg"
                sizes="(max-width: 768px) 100vw, 320px"
                onLoad={() => setIsImageLoaded(true)}
              />
            </Tilt>
          </motion.div>
          <motion.div variants={childVariants}>
            <Card className="glass-card who-am-i-card">
              <CardContent className="p-0">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-cyan-200 font-['Exo_2'] text-glow"
                  id="about-description"
                >
                  Who am I?
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4 font-['Inter'] text-sm sm:text-base leading-relaxed"
                  aria-describedby="about-description"
                >
                  I'm Pragyesh, a Software Engineer at Bursys with over 2.4 years of
                  experience. I specialize in backend development, crafting scalable
                  applications that deliver measurable business impact.
                </p>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-6 font-['Inter'] text-sm sm:text-base leading-relaxed"
                  aria-describedby="about-description"
                >
                  I'm passionate about advancing my expertise in JavaScript, React.js,
                  Node.js, and full-stack technologies to build seamless end-to-end
                  solutions.
                </p>
                <div className="grid stat-grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "2.4+", label: "Years Experience" },
                    { value: "8+", label: "Projects Completed" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={childVariants}
                      transition={{ delay: shouldReduceMotion ? 0 : 0.2 + index * 0.2 }}
                    >
                      <Card className="glass-card">
                        <CardContent className="p-4 sm:p-5">
                          <h4 className="font-bold text-2xl sm:text-3xl text-cyan-500 dark:text-cyan-400 mb-1 text-glow">
                            {stat.value}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                            {stat.label}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  variants={childVariants}
                  transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
                >
                  <Link
                    href="https://docs.google.com/document/d/1YFAvQWRH8kqSCOeW4jktfd7GVKAsSDgqufKgb-L_eXs/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-cyan-500 text-xs sm:text-sm px-4 sm:px-6"
                      aria-label="View Pragyesh Chauhan's resume"
                    >
                      <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        View Resume
                      </motion.span>
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
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
              "Software Engineer at Bursys with over 2.4 years of experience specializing in backend development and full-stack technologies.",
            image: "https://your-portfolio.com/profile.jpg",
            worksFor: {
              "@type": "Organization",
              name: "Bursys",
            },
            knowsAbout: [
              "Backend Development",
              "JavaScript",
              "React.js",
              "Node.js",
              "Full-Stack Development",
            ],
          }),
        }}
      />
    </section>
  );
}