"use client";

import type React from "react";
import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, X } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Tilt from "react-parallax-tilt";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const validateForm = useCallback(() => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Name is required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "Valid email is required",
      subject: formData.subject.trim() ? "" : "Subject is required",
      message: formData.message.trim().length >= 10 ? "" : "Message must be at least 10 characters",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  }, [formData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const now = new Date();
      const timestr = now.toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      await emailjs.send(
        "service_30azgx4",
        "template_mv1s8mp",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          title: formData.message,
          time: timestr,
        },
        "itJU_Zxy4NYPaqRPm"
      );
      await emailjs.send(
        "service_30azgx4",
        "template_rnu4xck",
        {
          title: formData.message,
          name: formData.name,
          subject: formData.subject,
          email: formData.email,
          time: timestr,
        },
        "itJU_Zxy4NYPaqRPm"
      );
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 7000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-gray-800 dark:text-cyan-400" />,
      title: "Email",
      value: "pragyeshchauhan26@gmail.com",
      link: "mailto:pragyeshchauhan26@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-gray-800 dark:text-cyan-400" />,
      title: "Phone",
      value: "+919958500643",
      link: "tel:+919958500643",
    },
    {
      icon: <MapPin className="h-6 w-6 text-gray-800 dark:text-cyan-400" />,
      title: "Location",
      value: "Panchkula, Haryana, India",
      link: "https://www.google.com/maps/search/?api=1&query=Panchkula,Haryana,India",
    },
  ];

  return (
    <>
      <section id="contact" className="py-16 md:py-24 bg-transparent relative">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-cyan-300 font-['Orbitron'] tracking-tight">
              Get In Touch
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-['Inter'] text-lg">
              Let’s connect to discuss projects or opportunities!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={300}
                  glareEnable={false}
                  className="h-full"
                >
                  <Card
                    className="h-full relative border-gray-300 dark:border-cyan-500/30 shadow-md group-hover:shadow-lg group-hover:border-cyan-500/50 dark:group-hover:border-cyan-400/70 transition-all duration-300 will-change-transform"
                    role="region"
                    aria-labelledby={`contact-info-${index}`}
                  >
                    <div
                      className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm z-[-1]"
                      aria-hidden="true"
                    />
                    <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                      <motion.div
                        className="p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 dark:from-cyan-500/30 dark:to-purple-500/30 mb-4"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      >
                        {info.icon}
                      </motion.div>
                      <h3
                        id={`contact-info-${index}`}
                        className="text-lg font-semibold text-gray-800 dark:text-cyan-200 font-['Exo_2'] mb-2"
                      >
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors font-['Inter']"
                        aria-label={`${info.title}: ${info.value}`}
                      >
                        {info.value}
                      </a>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="max-w-2xl mx-auto relative border-gray-300 dark:border-cyan-500/30 shadow-lg">
              <div
                className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm z-[-1]"
                aria-hidden="true"
              />
              <CardContent className="p-6 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-1 relative">
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="bg-transparent border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-gray-100 focus:ring-cyan-500 focus:ring-2 focus:ring-offset-1 peer h-12 pt-4"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      <Label
                        htmlFor="name"
                        className="absolute left-3 top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 dark:peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-gray-900 peer-not-placeholder-shown:px-1"
                      >
                        Name
                      </Label>
                      {errors.name && (
                        <p id="name-error" className="text-red-600 dark:text-red-400 text-xs mt-1 absolute top-full left-0">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1 relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="bg-transparent border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-gray-100 focus:ring-cyan-500 focus:ring-2 focus:ring-offset-1 peer h-12 pt-4"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      <Label
                        htmlFor="email"
                        className="absolute left-3 top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 dark:peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-gray-900 peer-not-placeholder-shown:px-1"
                      >
                        Email
                      </Label>
                      {errors.email && (
                        <p id="email-error" className="text-red-600 dark:text-red-400 text-xs mt-1 absolute top-full left-0">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-1 relative">
                    <Input
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder=" "
                      className="bg-transparent border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-gray-100 focus:ring-cyan-500 focus:ring-2 focus:ring-offset-1 peer h-12 pt-4"
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    <Label
                      htmlFor="subject"
                      className="absolute left-3 top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 dark:peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-gray-900 peer-not-placeholder-shown:px-1"
                    >
                      Subject
                    </Label>
                    {errors.subject && (
                      <p id="subject-filter" className="text-red-600 dark:text-red-400 text-xs mt-1 absolute top-full left-0">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1 relative">
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="bg-transparent border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-gray-100 focus:ring-cyan-500 focus:ring-2 focus:ring-offset-1 peer pt-4"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    <Label
                      htmlFor="message"
                      className="absolute left-3 top-3 text-sm text-gray-600 dark:text-gray-400 transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-500 peer-focus:bg-white dark:peer-focus:bg-gray-900 peer-focus:px-1 dark:peer-focus:text-cyan-400 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white dark:peer-not-placeholder-shown:bg-gray-900 peer-not-placeholder-shown:px-1"
                    >
                      Message
                    </Label>
                    {errors.message && (
                      <p id="message-error" className="text-red-600 dark:text-red-400 text-xs mt-1 absolute top-full left-0">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white animate-pulse-glow"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Toast-like Feedback */}
      {submitStatus && (
        <motion.div
          className={`fixed bottom-16 right-6 p-4 rounded-lg flex items-center gap-2 max-w-sm z-[10000] ${
            submitStatus === "success"
              ? "bg-green-600 dark:bg-green-500 text-white"
              : "bg-red-600 dark:bg-red-500 text-white"
          } shadow-2xl border border-white/20`}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="alert"
          aria-live="assertive"
        >
          <p className="text-sm font-medium">
            {submitStatus === "success"
              ? "Message sent successfully!"
              : "Failed to send. Please try again!"}
          </p>
          <button
            onClick={() => setSubmitStatus(null)}
            className="ml-auto p-1 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Dismiss notification"
          >
            <X className="h-5 w-5" />
          </button>
        </motion.div>
      )}

      {/* CSS for Glowing Button and Floating Labels */}
      <style jsx global>{`
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite ease-in-out;
        }
        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.5), 0 0 30px rgba(147, 51, 234, 0.5);
          }
        }
        input,
        textarea {
          color: #1a202c !important;
          caret-color: #0d9488 !important;
        }
        .dark input,
        .dark textarea {
          color: #f3f4f6 !important;
          caret-color: #22d3ee !important;
        }
        input:focus,
        textarea:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.5) !important;
        }
        input + label,
        textarea + label {
          top: 0.75rem;
          font-size: 0.875rem;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        input:focus + label,
        textarea:focus + label,
        input:not(:placeholder-shown) + label,
        textarea:not(:placeholder-shown) + label {
          top: -0.5rem;
          font-size: 0.75rem;
          background-color: white;
          padding-left: 0.25rem;
          padding-right: 0.25rem;
        }
        .dark input:focus + label,
        .dark textarea:focus + label,
        .dark input:not(:placeholder-shown) + label,
        .dark textarea:not(:placeholder-shown) + label {
          background-color: #111827;
        }
        p[id$="-error"] {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.25rem;
        }
        @media (prefers-reduced-motion: reduce) {
          .parallax-tilt {
            transform: none !important;
          }
          .animate-pulse-glow {
            animation: none !important;
            box-shadow: none !important;
          }
          [data-animate] {
            animation: none !important;
            transition: none !important;
          }
          label {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
}