"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [unsubmitSuccess, setunSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const now = new Date();
      const timestr = now.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      const result = await emailjs.send("service_30azgx4","template_mv1s8mp",{
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        title: formData.message,
        time : timestr,
        }
        ,"itJU_Zxy4NYPaqRPm");
      try{
        const systemMail =  await emailjs.send("service_30azgx4","template_rnu4xck",{
          title: formData.message,
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          time : timestr,
          },"itJU_Zxy4NYPaqRPm");

          console.log("Email sent:", systemMail.text);
        }catch (error) {
          console.error("EmailJS error: systemMail ", error);
        }
      // console.log("Email sent:", result.text);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setunSubmitSuccess(true)
      console.error("EmailJS error:", error);
    }
  
    setIsSubmitting(false);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };
  

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "pragyeshchauhan26@gmail.com",
      link: "mailto:pragyeshchauhan26@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+919958500643",
      link: "tel:+919958500643",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Panchkula, Haryana, India",
      link: "https://www.google.com/maps/search/?api=1&query=Panchkula,Haryana,India",
    },
  ]

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full transition-all hover:shadow-lg dark:hover:shadow-primary/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">{info.icon}</div>
                  <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {info.value}
                  </a>
                  ) : (
                    <p className="text-muted-foreground">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Pragyesh Chauhan"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="pragyeshchauhan26@gmail.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
                {submitSuccess && (
                  <motion.p
                    className="text-green-600 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.p>
                )}
                {unsubmitSuccess && (
                  <motion.p
                    className="text-red-600 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    oops ! Your message has not  sent Try Again !!.
                  </motion.p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

