"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t py-12 bg-muted/40 dark:bg-muted/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-bold text-xl mb-2">DevShowcase</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
            Crafting exceptional digital experiences through powerful backend systems and engaging, user-friendly interfaces.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex gap-4 mb-4">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://github.com/PragyeshChauhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.linkedin.com/in/pragyesh-chauhan01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </motion.div>
              {/* <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:text-primary transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </motion.div> */}
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="mailto:pragyeshchauhan26@gmail.com"
                  className="p-2 rounded-full bg-muted hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </motion.div>
            </div>
            <p className="text-sm text-muted-foreground">© {currentYear} Pragyesh Singh Chauhan. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

