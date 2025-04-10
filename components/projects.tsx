"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "FieldEquip - Field Service",
      description:
        "A full-featured field service management platform that streamlines operations,"+ 
        "connects field teams with the back office, and enables real-time, data-driven service delivery.",
      image: "/Oilfield-Services-Management-Software.png?height=400&width=600",
      technologies: ["AWS Rekognition", "SpringBoot", "MongoDB", "Java"],
      liveUrl: "https://www.fieldequip.com/field-service-management-software",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Field Ticketing",
      description: "A oil and gas field service management platform that connects operators, suppliers, and listing of all logistic crud oil transpotation  in real-time to optimize operations, improve transparency, and drive smarter business decisions.",
      image: "/Digital-Field-Ticketing.png?height=400&width=600",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java" , "Rest APIs" ],
      liveUrl: "https://www.fieldequip.com/field-ticketing-management/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Asset Management",
      description:
        "A platform that connects assets and field workers to the back office—streamlining service, installation, and asset pickup with automation, smart scheduling, and system integrations to boost efficiency and service delivery",
      image: "/Asset-or-Equipment-Service-Management.png?height=400&width=600",
      technologies: ["SpringBoot", "MongoDB", "Java" , "Spring security" ,"JWT"],
      liveUrl: "https://www.fieldequip.com/asset-service-management/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip -Time Management",
      description: "FieldEquip unifies time tracking and job costing across operations, simplifying payroll, approvals, and invoicing in one streamlined workflow.",
      image: "/Biometric-Scanning-in-the-Plant.png?height=800&width=1200",
      technologies: ["AWS Rekognition", "Java", "Spring-Boot", "MongoDB" ,"Rest API"],
      liveUrl: "https://www.fieldequip.com/field-service-time-tracking-software/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Integrations",
      description: "FieldEquip's architectural framework enables seamless and flexible third-party API integration, allowing efficient processing of customer data from external applications.",
      image: "/thridPartyIntregation.png?height=400&width=600",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java" , "Rest APIs" , "SQL" , "MySQL" ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "CADMaster Website",
      description: "A responsive website for CadMaster—your one-stop destination for expert CAD drafting, 3D modeling, and architectural design services.",
      image: "/cadMaster.png?height=400&width=600",
      technologies: ["React.js", "Tailwind CSS", "HTML" , "Java Script" , "TypeScript"],
      liveUrl: "https://cadmaster.netlify.app/",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/40 dark:bg-muted/10">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Projects</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Here are some recent projects I worked on, both personally and with the companies 
          I’ve been part of, built to solve real-world problems and explore new technologies.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full group">
              <div className="relative w-full h-60 bg-white pt-6">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title || "Project image"}
                 fill
               style={{ objectFit: 'contain' , padding: '2rem' }}
               className="transition-transform duration-500 group-hover:scale-105"
              />
              </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="https://github.com/PragyeshChauhan" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

