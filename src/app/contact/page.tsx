"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, User, MessageSquare } from "lucide-react";

// ✅ Framer-motion variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "",   // ✅ Added phone field
    message: "" 
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-neutral-950 text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-25 md:py-20 px-6 bg-gradient-to-br from-purple-900 via-neutral-900 to-black">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-xl text-gray-300 max-w-2xl"
        >
          We’d love to hear from you. Reach out for collaborations, queries, or
          support.
        </motion.p>
      </section>

      {/* Contact Info + Form */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 gap-8 md:gap-12 px-6 md:px-16 flex-grow"
      >
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeUp}
          className="bg-neutral-900 p-6 md:p-8 rounded-2xl shadow-lg space-y-6 order-1 md:order-2"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-neutral-800 text-white px-10 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-neutral-800 text-white px-10 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Your Email"
            />
          </div>

          {/* Phone ✅ New Field */}
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}" // ✅ Basic validation for 10-digit numbers
              className="w-full bg-neutral-800 text-white px-10 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-neutral-800 text-white px-10 py-3 rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              rows={5}
              placeholder="Write your message..."
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all disabled:opacity-50"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-center">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">❌ Something went wrong. Try again.</p>
          )}
        </motion.form>

        {/* Contact Info */}
        <div className="space-y-6 md:space-y-8 order-2 md:order-1">
          <motion.div
            variants={fadeUp}
            className="flex items-center space-x-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
          >
            <Mail className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-400">info@roseland.com</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center space-x-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
          >
            <Phone className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-400">+91 98765 43210</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex items-center space-x-4 bg-neutral-900 p-6 rounded-2xl shadow-lg"
          >
            <MapPin className="w-8 h-8 text-purple-400" />
            <div>
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="text-gray-400">Gurugram, India</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
