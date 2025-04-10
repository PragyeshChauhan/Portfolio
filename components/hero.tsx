"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Twitter ,Facebook } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container flex flex-col items-center text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="text-primary">Pragyesh Chauhan</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className="max-w-[600px] text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          I engineer accessible and high-performance digital solutions, combining scalable software architecture with intuitive user interfaces. 
          My passion lies in building systems that are both technically robust and elegantly designed..
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
            Contact Me
          </Button>
        </motion.div>
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/PragyeshChauhan" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/pragyesh-chauhan01/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.facebook.com/pragyesh.chauhan/" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </Button>
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <button onClick={() => scrollToSection("about")}>
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

