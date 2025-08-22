"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-black text-white">
      <Header />

     {/* HERO */}
<section className="relative h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden">
  <div className="absolute inset-0 bg-[url('/about-hero.jpg')] bg-cover bg-center opacity-30"></div>
  <div className="absolute inset-0 bg-black/70"></div>
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-400 mb-4">
      About Us
    </h1>
    <p className="text-lg md:text-xl text-gray-300 mb-6">
      Creating Timeless Experiences with Innovation, Integrity & Excellence
    </p>

    {/* 👇 Image after tagline */}
    <div className="flex justify-center">
     <Image
  src="/comingsoon.png"
  alt="About"
  width={800}  // must set width + height
  height={600}
  className="w-full h-auto"
/>
    </div>
  </div>
</section>


      {/* INTRO */}
      <section className="relative py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Roseland Developers
          </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
  Roseland Developers is spearheaded by a dedicated leadership team,
  standing as a beacon of innovation and excellence in the industry. With
  a strong foundation rooted in integrity and teamwork, we specialize in
  delivering exceptional residential spaces.{" "}
  <span className="text-yellow-400 font-semibold">
    Architect Abhishek Bhati
  </span>{" "}
  brings his creative expertise into every project, crafting spaces that
  seamlessly combine functionality with modern aesthetics.
</p>

        </motion.div>
      </section>

      {/* LEADERSHIP */}
      <section className="relative py-20 px-6 md:px-16 bg-gray-900/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400">
            Our Leadership
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
  {
    role: "Visionary Leadership",
    desc: "Driving sustainable practices and advanced technologies that redefine modern living.",
    img: "/team2.jpg",
  },
 
  {
    role: "Design & Architecture",
    desc: "Crafting spaces that are functional, sustainable, and aesthetically pleasing.",
    img: "/team1.jpg",
  },
].map((leader, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.2 }}
    className="bg-black/50 rounded-xl p-8 text-center shadow-lg border border-violet-900/30 hover:-translate-y-2 transition"
  >
    <Image
      src={leader.img}
      alt={leader.role}
      width={200}
      height={200}
      className="rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400/50"
    />
    <h3 className="text-2xl font-bold text-yellow-400 mb-2">
      {leader.role}
    </h3>
    <p className="text-gray-300 text-sm leading-relaxed">{leader.desc}</p>
  </motion.div>
))}

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Our Philosophy
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Together, our team combines creativity with technical proficiency,
            transforming client visions into reality. We pride ourselves on
            adaptability, continuously evolving to meet market demands while
            maintaining a commitment to quality and community enhancement.
            <br />
            <br />
            Our diverse portfolio showcases our dedication to excellence, as we
            strive to create impactful spaces that enrich lives and inspire
            future generations.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-black text-center px-6 md:px-16">
        <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">
            Creating Timeless Experiences
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Partner with <span className="text-yellow-400">Roseland Developers</span>{" "}
            to build sustainable, luxurious, and innovative spaces for the future.
          </p>
          <a
            href="/contact"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
