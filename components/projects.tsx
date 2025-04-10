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
        "A full-featured field service management platform that streamlines operations, connects field teams with the back office, and enables real-time, data-driven service delivery.",
      image: "/Oilfield-Services-Management-Software.png?height=400&width=600",
      technologies: ["AWS Rekognition", "SpringBoot", "MongoDB", "Java"],
      liveUrl: "https://www.fieldequip.com/field-service-management-software",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Field Ticketing",
      description: "A oil and gas field service management platform that connects operators, suppliers, assets, and field workers in real-time to optimize operations, improve transparency, and drive smarter business decisions.",
      image: "/Digital-Field-Ticketing.png?height=400&width=600",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java" , "Rest APIs" ],
      liveUrl: "https://www.fieldequip.com/field-ticketing-management/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Asset Management",
      description:
        "An comprehensive service management platform that connects assets and field workers to the back office for streamlined and efficient operations." 
        +"Through automation, intelligent scheduling, and seamless integrations with any system"
        +", FieldEquip enables businesses to enhance visibility, boost productivity, and deliver reliable, proactive service",
      image: "/Asset-or-Equipment-Service-Management.png?height=400&width=600",
      technologies: ["SpringBoot", "MongoDB", "Java" , "Spring security" ,"JWT"],
      liveUrl: "https://www.fieldequip.com/asset-service-management/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip -Time Management",
      description: "FieldEquip simplifies time tracking and job costing with a unified time entry system that seamlessly manages labor"+ 
      "hours across field, plant, and shop operations. By consolidating clock-ins, job activity tracking, and timesheet approvals into one "+
      "platform, FieldEquip reduces administrative overhead, ensures accurate payroll processing, and streamlines labor verification for invoicing—all "+
      "in one efficient workflow",
      image: "/Biometric-Scanning-in-the-Plant.png?height=800&width=1200",
      technologies: ["AWS Rekognition", "Java", "Spring-Boot", "MongoDB" ,"Rest API"],
      liveUrl: "https://www.fieldequip.com/field-service-time-tracking-software/",
      githubUrl: "#",
    },
    {
      title: "FieldEquip - Integrations",
      description: "This architectural framework of FieldEquip provides a powerful and flexible API interface that integrates seamlessly with third-party applications.",
      image: "/thridPartyIntregation.png?height=400&width=600",
      technologies: ["AWS S3", "SpringBoot", "MongoDB", "Java" , "Rest APIs" , "SQL" , "MySQL" ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "CADMaster Website",
      description: "A responsive website to showcase CadMaster, can one-stop destination for expert CAD drafting, 3D modeling, and architectural design."+
       "This website showcases professional design services with a clean, responsive interface, ideal for architects, engineers, and designers.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">My Projects</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Here are some of my recent projects. Each one was built to solve a specific problem or explore new
            technologies.
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

