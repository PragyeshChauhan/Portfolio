"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useMemo } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  docUrl: string;
}

export function Projects() {
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const projects: Project[] = [
    {
      title: "Field Equip - Field Service",
      description:
        "A full-featured field service management platform that streamlines operations, connects field teams with the back office, and enables real-time, data-driven service delivery.",
      image: "/Oilfield-Services-Management-Software.png",
      technologies: ["AWS Rekognition", "SpringBoot", "MongoDB", "Java"],
      liveUrl: "https://www.fieldequip.com/",
      githubUrl: "#",
      docUrl: "https://www.fieldequip.com/field-service-management-software",
    },
    {
      title: "FieldEquip - Field Ticketing",
      description:
        "An oil and gas field service platform that connects operators and suppliers, listing logistics for crude oil transportation in real-time for improved transparency and efficiency.",
      image: "/Digital-Field-Ticketing.png",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java", "Rest APIs"],
      liveUrl: "https://www.fieldequip.com/",
      githubUrl: "#",
      docUrl: "https://www.fieldequip.com/field-ticketing-management/",
    },
    {
      title: "FieldEquip - Asset Management",
      description:
        "A system that connects assets and field workers with the back office, streamlining service, installation, and asset pickup via automation and smart scheduling.",
      image: "/Asset-or-Equipment-Service-Management.png",
      technologies: ["SpringBoot", "MongoDB", "Java", "Spring Security", "JWT"],
      liveUrl: "https://www.fieldequip.com/",
      githubUrl: "#",
      docUrl: "https://www.fieldequip.com/asset-management",
    },
    {
      title: "FieldEquip - Time Management",
      description:
        "Unifies time tracking and job costing across operations, simplifying payroll, approvals, and invoicing in one streamlined workflow.",
      image: "/Biometric-Scanning-in-the-Plant.png",
      technologies: ["AWS Rekognition", "Java", "Spring-Boot", "MongoDB", "Rest API"],
      liveUrl: "https://www.fieldequip.com/",
      githubUrl: "#",
      docUrl: "https://www.fieldequip.com/time-management",
    },
    {
      title: "FieldEquip - Integrations",
      description:
        "An architectural framework for seamless, flexible third-party API integration, enabling efficient external customer data processing.",
      image: "/thridPartyIntregation.png",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java", "Rest APIs", "SQL", "MySQL"],
      liveUrl: "https://www.fieldequip.com/",
      githubUrl: "#",
      docUrl: "https://www.fieldequip.com/integrations/",
    },
    {
      title: "CADMaster Website",
      description:
        "A responsive site for CadMaster—your destination for expert CAD drafting, 3D modeling, and architectural design services.",
      image: "/cadMaster.png",
      technologies: ["React.js", "Tailwind CSS", "HTML", "JavaScript", "TypeScript"],
      liveUrl: "https://cadmaster.netlify.app/",
      githubUrl: "#",
      docUrl: "#",
    },
  ];

  const technologies = useMemo(
    () => ["All", ...new Set(projects.flatMap((p) => p.technologies))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          (selectedTech === "All" || project.technologies.includes(selectedTech)) &&
          project.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [selectedTech, searchQuery]
  );

  return (
    <section
      id="projects"
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
          My Projects
        </motion.h2>
        <motion.p
          className="text-gray-500 dark:text-gray-300 text-center max-w-3xl mx-auto mb-8 sm:mb-12 font-['Inter'] text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore a collection of projects showcasing innovative solutions and cutting-edge technologies.
        </motion.p>

        {/* Search and Filter Dropdown */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 justify-center items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-1/2 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/20 focus:ring-cyan-500 focus:border-cyan-500 text-sm sm:text-base"
            aria-label="Search projects"
          />
          <Select value={selectedTech} onValueChange={setSelectedTech}>
            <SelectTrigger
              className="w-full sm:w-1/3 md:w-1/4 bg-white/20 dark:bg-gray-800/20 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/20 focus:ring-cyan-500 focus:border-cyan-500 text-sm sm:text-base"
              aria-label="Filter projects by technology"
            >
              <SelectValue placeholder="Filter by Skill" />
            </SelectTrigger>
            <SelectContent className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/50 max-h-60 overflow-y-auto">
              {technologies.map((tech) => (
                <SelectItem
                  key={tech}
                  value={tech}
                  className="hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 text-sm sm:text-base"
                >
                  {tech}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500 dark:text-gray-300 text-sm sm:text-base">
              No projects found. Try adjusting your filters.
            </p>
          )}
        </div>

        {/* Explore GitHub Button */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-['Orbitron'] tracking-wide shadow-lg hover:shadow-cyan-500/50 text-sm sm:text-base"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              <Link
                href="https://github.com/PragyeshChauhan"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore GitHub
              </Link>
            </motion.div>
          </Button>
        </motion.div>
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
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
          className="overflow-hidden h-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/20 shadow-md group-hover:shadow-lg group-hover:border-cyan-500/30 dark:group-hover:border-cyan-400/40 transition-all duration-300"
          role="article"
          aria-labelledby={`project-title-${index}`}
        >
          <div className="relative w-full h-48 sm:h-64 bg-white dark:bg-gray-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "contain", padding: "1rem" }}
              className="transition-transform duration-500 group-hover:scale-105"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPpDDQ+AAAAABJRU5ErkJggg=="
              loading="lazy"
            />
          </div>
          <CardContent className="p-4 sm:p-6 flex flex-col flex-grow">
            <h3
              id={`project-title-${index}`}
              className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-cyan-200 font-['Exo_2'] line-clamp-1"
            >
              {project.title}
            </h3>
            <TooltipProvider>
              <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Tooltip key={`${tech}-${techIndex}`}>
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
                        {tech}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 text-xs sm:text-sm max-w-xs">
                      <p>{tech}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </TooltipProvider>
            <p className="text-gray-500 dark:text-gray-300 mb-4 font-['Inter'] text-sm sm:text-base line-clamp-2">
              {project.description}
            </p>
            <div className="mt-auto flex gap-2 sm:gap-3 flex-wrap">
              <Button
                size="sm"
                variant="outline"
                asChild
                className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-600 dark:hover:text-white transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4"
                disabled={project.liveUrl === "#"}
              >
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                  Visit Site
                </Link>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-600 dark:hover:text-white transition-all duration-200 text-xs sm:text-sm px-3 sm:px-4"
                  >
                    Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] sm:max-w-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-gray-300/50 dark:border-cyan-500/50">
                  <DialogHeader>
                    <DialogTitle className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-cyan-200 font-['Exo_2']">
                      {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="mt-4">
                    <div className="relative w-full h-40 sm:h-64 mb-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectFit: "contain", padding: "0.5rem sm:1rem" }}
                        className="rounded-lg"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <p className="text-gray-500 dark:text-gray-300 mb-4 font-['Inter'] text-sm sm:text-base">
                      {project.description}
                    </p>
                    <TooltipProvider>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Tooltip key={`${tech}-${techIndex}-dialog`}>
                            <TooltipTrigger asChild>
                              <Badge
                                className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-200 font-['Inter'] rounded-md border-gray-300/50 dark:border-cyan-500/20 text-xs sm:text-sm cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 text-xs sm:text-sm max-w-xs">
                              <p>{tech}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    </TooltipProvider>
                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-cyan-500 text-cyan-600 hover:bg-cyan-500 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-600 dark:hover:text-white text-xs sm:text-sm px-3 sm:px-4"
                        disabled={project.liveUrl === "#"}
                      >
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Visit Site
                        </Link>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-600 dark:hover:text-white text-xs sm:text-sm px-3 sm:px-4"
                        disabled={project.docUrl === "#"}
                      >
                        <Link href={project.docUrl} target="_blank" rel="noopener noreferrer">
                          Documentation
                        </Link>
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </Tilt>
    </motion.div>
  );
}