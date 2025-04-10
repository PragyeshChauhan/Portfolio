"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  // Handle hash navigation on page load
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1)
      const element = document.getElementById(id)
      if (element) {
        // Add a small delay to ensure all elements are rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

