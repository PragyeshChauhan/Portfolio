"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function About() {
  const handleDownloadResume = () => {
    // Create a blob link to download the PDF
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be the path to your resume PDF
    link.setAttribute("download", "PragyeshChauhan_Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/40 dark:bg-muted/10">
      <div className="container">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary profile-ripple">
  <Image
    src="/profile_pic.jpg?height=320&width=320"
    alt="John Doe"
    width={320}
    height={350}
    className="object-contain object-top relative z-10"
  />
</div>



          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-muted-foreground mb-4">
            Hi there! I'm Pragyesh. I'm a Software Engineer with 2+ years of experience, currently working at Bursys . I specialize 
            in  backend development , delivering robust and scalable applications.
            </p>
            <p className="text-muted-foreground mb-6">
            Currently enhancing skills in JavaScript, 
            React.js, Node.js, and other modern technologies to grow as a full-stack developer.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-4xl text-primary mb-1">2.4+</h4>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-bold text-4xl text-primary mb-1">8+</h4>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button size="lg" onClick={handleDownloadResume}>
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

