"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    // Create a blob link to download the PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be the path to your resume PDF
    link.setAttribute("download", "PragyeshChauhan_Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        scrolled ? "bg-background/95" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="font-bold text-xl">
          DevShowcase
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Skills
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Projects
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Button onClick={handleDownloadResume}>Resume</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
            <ThemeToggle />
          </motion.div>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 bg-background border-b md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col p-4">
              <button
                onClick={() => scrollToSection("about")}
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="py-2 text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button className="mt-2" onClick={handleDownloadResume}>
                Resume
              </Button>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

