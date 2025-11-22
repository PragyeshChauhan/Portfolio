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
  // ---------------- Programming Languages ----------------
  {
    title: "Programming Languages",
    icon: <Layout className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Java", proficiency: 92, description: "Primary backend development language" },
      { name: "Python", proficiency: 55, description: "Learning for backend & GenAI development" },
      { name: "SQL", proficiency: 85, description: "Database querying & schema design" },
      { name: "JavaScript", proficiency: 75, description: "Web scripting & application logic" },
    ],
  },

  // ---------------- Java Ecosystem ----------------
  {
    title: "Java Ecosystem",
    icon: <Server className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Spring Boot", proficiency: 92, description: "Production-grade microservices" },
      { name: "Spring MVC", proficiency: 88, description: "REST controllers & web layer" },
      { name: "Spring Security", proficiency: 85, description: "Authentication, JWT & OAuth2" },
      { name: "Hibernate", proficiency: 82, description: "ORM and database operations" },
      { name: "JPA", proficiency: 83, description: "Entity mapping & repository layer" },
      { name: "J2EE", proficiency: 78, description: "Enterprise Java application standards" },
      { name: "RESTful APIs", proficiency: 90, description: "API design, versioning & integration" },
      { name: "SOAP / XML", proficiency: 75, description: "Legacy enterprise services" },
    ],
  },

  // ---------------- Microservices & Architecture ----------------
  {
    title: "Microservices & Architecture",
    icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Microservices Architecture", proficiency: 88, description: "Distributed systems & scalability" },
      { name: "Kafka", proficiency: 75, description: "Event streaming & async messaging" },
      { name: "API Gateway", proficiency: 80, description: "Routing, filtering & authentication" },
      { name: "Design Patterns", proficiency: 85, description: "Reusable system design solutions" },
      { name: "Multithreading", proficiency: 80, description: "Concurrent programming" },
      { name: "Circuit Breakers", proficiency: 70, description: "Fault-tolerant communication" },
    ],
  },

  // ---------------- Databases ----------------
  {
    title: "Databases",
    icon: <Database className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "MySQL", proficiency: 82, description: "Relational database & schema design" },
      { name: "MongoDB", proficiency: 85, description: "NoSQL document database" },
      { name: "JDBC", proficiency: 75, description: "Low-level database programming" },
    ],
  },

  // ---------------- DevOps & Cloud ----------------
  {
    title: "DevOps & Cloud",
    icon: <Code className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Docker", proficiency: 80, description: "Containerization & isolated environments" },
      { name: "Jenkins", proficiency: 75, description: "CI/CD automation pipelines" },
      { name: "AWS", proficiency: 70, description: "Cloud deployments & services" },
      { name: "Git", proficiency: 90, description: "Version control & branching strategies" },
      { name: "GitHub Actions", proficiency: 80, description: "CI/CD workflows" },
    ],
  },

  // ---------------- Testing & Quality ----------------
  {
    title: "Testing & Quality",
    icon: <Server className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "JUnit", proficiency: 80, description: "Unit testing & TDD" },
      { name: "Mockito", proficiency: 75, description: "Mocking & test isolation" },
      { name: "Postman", proficiency: 78, description: "API testing & collections" },
      { name: "Swagger/OpenAPI", proficiency: 82, description: "API documentation & validation" },
    ],
  },

  // ---------------- Software Engineering Fundamentals ----------------
  {
    title: "Software Engineering Fundamentals",
    icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Data Structures & Algorithms", proficiency: 82, description: "Logic building & optimization" },
      { name: "OOP", proficiency: 90, description: "Object-oriented principles & design" },
      { name: "System Design", proficiency: 78, description: "Designing scalable architectures" },
      { name: "SOLID Principles", proficiency: 85, description: "Clean & maintainable code" },
      { name: "Clean Code", proficiency: 88, description: "Readable & maintainable development" },
    ],
  },

  // ---------------- Future Learning: Python & GenAI ----------------
  {
    title: "Future Learning: Python & GenAI",
    icon: <Layout className="h-8 w-8 sm:h-10 sm:w-10 text-gray-800 dark:text-cyan-400" />,
    skills: [
      { name: "Python for Backend", proficiency: 55, description: "Learning FastAPI & automation" },
      { name: "FastAPI", proficiency: 20, description: "High-performance Python API framework" },
      { name: "GenAI Fundamentals", proficiency: 10, description: "Understanding AI tools & LLMs" },
      { name: "AI Automation", proficiency: 5, description: "Using AI to enhance development workflows" },
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
                  tiltEnable={typeof window !== "undefined" && window.innerWidth >= 640}
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={300}
                  glareEnable={false}
                  className="h-full sm:hover:shadow-cyan-500/10"
                // disabled={typeof window !== "undefined" && window.innerWidth < 640}
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