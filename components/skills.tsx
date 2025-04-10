"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: [ "Java", "Spring-Boot", "RESTful APIs" ,"Microservices Architecture","Python", "Django","SQL"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    // {
    //   title: "Mobile Development",
    //   icon: <Smartphone className="h-8 w-8 text-primary" />,
    //   skills: ["React Native", "Flutter", "iOS", "Android"],
    // },
    {
      title: "DevOps & Tools",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD Pipelines", "AWS", "Netlify"],
    },
    {
      title: "Other",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["External API Integration", "Agile Methodology", "API Testing & Documentation (Swagger)" ,"System Design" ,"Performance Optimization","Code Review & Collaboration" ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full transition-all hover:shadow-lg dark:hover:shadow-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

