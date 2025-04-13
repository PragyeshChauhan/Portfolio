"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Tilt from "react-parallax-tilt";

// Define types for better TypeScript support
interface Skill {
  name: string;
  proficiency: number;
  description: string;
}

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: Skill[];
}

export function Skills() {
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
      skills: [
        { name: "React.js", proficiency: 90, description: "Building dynamic UIs with React" },
        { name: "JavaScript", proficiency: 85, description: "Core scripting for web apps" },
        { name: "TypeScript", proficiency: 80, description: "Typed JavaScript for scalability" },
        { name: "HTML5", proficiency: 95, description: "Semantic markup for web" },
        { name: "CSS3", proficiency: 90, description: "Modern styling and animations" },
        { name: "Tailwind CSS", proficiency: 85, description: "Utility-first CSS framework" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
      skills: [
        { name: "Java", proficiency: 90, description: "Robust backend development" },
        { name: "Spring-Boot", proficiency: 85, description: "Microservices with Spring" },
        { name: "RESTful APIs", proficiency: 88, description: "API design and integration" },
        {
          name: "Microservices Architecture",
          proficiency: 80,
          description: "Scalable system design",
        },
        { name: "Python", proficiency: 75, description: "Versatile scripting and backend" },
        { name: "Django", proficiency: 70, description: "Python web framework" },
        { name: "SQL", proficiency: 85, description: "Database querying and design" },
      ],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
      skills: [
        { name: "MongoDB", proficiency: 85, description: "NoSQL database management" },
        { name: "PostgreSQL", proficiency: 80, description: "Relational database expertise" },
        { name: "MySQL", proficiency: 82, description: "Widely-used SQL database" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
      skills: [
        { name: "Git", proficiency: 90, description: "Version control mastery" },
        { name: "GitHub", proficiency: 88, description: "Collaboration and CI/CD" },
        { name: "Docker", proficiency: 80, description: "Containerization for apps" },
        { name: "CI/CD Pipelines", proficiency: 78, description: "Automated deployments" },
        { name: "AWS", proficiency: 75, description: "Cloud infrastructure" },
        { name: "Netlify", proficiency: 80, description: "Static site deployment" },
      ],
    },
    {
      title: "Other",
      icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
      skills: [
        {
          name: "External API Integration",
          proficiency: 85,
          description: "Seamless third-party APIs",
        },
        { name: "Agile Methodology", proficiency: 90, description: "Iterative development" },
        {
          name: "API Testing & Documentation (Swagger)",
          proficiency: 80,
          description: "API validation",
        },
        { name: "System Design", proficiency: 78, description: "Scalable architectures" },
        {
          name: "Performance Optimization",
          proficiency: 82,
          description: "App efficiency",
        },
        {
          name: "Code Review & Collaboration",
          proficiency: 88,
          description: "Team workflows",
        },
      ],
    },
  ];

  const filteredCategories = useMemo(
    () =>
      skillCategories
        .map((category) => ({
          ...category,
          skills: category.skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
          ),
        }))
        .filter((category) => category.skills.length > 0),
    [searchQuery]
  );

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-24 bg-transparent relative overflow-hidden"
    >
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-800 dark:text-cyan-300 font-['Orbitron'] tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Skills
        </motion.h2>
        <motion.p
          className="text-gray-500 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8 sm:mb-12 font-['Inter'] text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A showcase of my technical expertise across development, tools, and methodologies.
        </motion.p>

        {/* Search Input */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            placeholder="Search skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/20 focus:ring-cyan-500 focus:border-cyan-500 text-sm sm:text-base"
            aria-label="Search skills"
          />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group h-full"
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={300}
                  glareEnable={false}
                  className="h-full sm:hover:shadow-cyan-500/10"
                  disabled={typeof window !== "undefined" && window.innerWidth < 640}
                >
                  <Card
                    className="h-full relative bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/20 shadow-md group-hover:shadow-lg group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/40 transition-all duration-300"
                    role="region"
                    aria-labelledby={`skill-category-${index}`}
                  >
                    <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center relative z-10">
                      <motion.div
                        className="mb-3 sm:mb-4 p-3 sm:p-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/30 dark:to-purple-500/30"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        {category.icon}
                      </motion.div>
                      <h3
                        id={`skill-category-${index}`}
                        className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800 dark:text-cyan-200 font-['Exo_2']"
                      >
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                        <TooltipProvider>
                          {category.skills.map((skill, skillIndex) => (
                            <Tooltip key={`${skill.name}-${skillIndex}`}>
                              <TooltipTrigger asChild>
                                <Badge
                                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 font-['Inter'] rounded-md border-gray-300/50 dark:border-cyan-500/20 hover:bg-cyan-500/30 dark:hover:bg-cyan-500/40 transition-all duration-200 text-xs sm:text-sm cursor-pointer"
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      e.currentTarget.focus();
                                    }
                                  }}
                                >
                                  {skill.name}
                                </Badge>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 text-xs sm:text-sm max-w-xs">
                                <p>{skill.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </TooltipProvider>
                      </div>
                      <div className="w-full space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={`${skill.name}-${skillIndex}`} className="text-left">
                            <div className="flex justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-1">
                              <span>{skill.name}</span>
                              <span>{skill.proficiency}%</span>
                            </div>
                            <div className="w-full bg-gray-200/50 dark:bg-gray-700/50 rounded-full h-2">
                              <motion.div
                                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.proficiency}%` }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 1,
                                  delay: skillIndex * 0.1,
                                  type: "spring",
                                  stiffness: 100,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-300 text-sm sm:text-base">
              No skills found. Try adjusting your search.
            </p>
          )}
        </div>
      </div>

      {/* Reduced Motion and Mobile Styles */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          .parallax-tilt {
            transform: none !important;
          }
          .group:hover {
            box-shadow: none !important;
            border-color: inherit !important;
          }
          [data-animate] {
            animation: none !important;
            transition: none !important;
          }
        }
        @media (max-width: 640px) {
          .parallax-tilt {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}