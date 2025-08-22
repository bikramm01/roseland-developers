"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 3]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <main className="bg-black text-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div style={{ scale, opacity }} className="relative z-10 flex flex-col items-center">
          <Image src="/logo.png" alt="Roseland Logo" width={150} height={150} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mt-6">
           <b>ROSELAND</b><br /> DEVELOPERS
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-white font-medium max-w-2xl">
            Building Gurugram’s Future, One Landmark at a Time
          </p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative py-20 bg-black text-center px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 1.2 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/about-building.png"
              alt="About Roseland Developers"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg border border-violet-900/30"
            />
          </motion.div>

          <div className="w-full md:w-1/2 text-center md:text-left max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">Who We Are</h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-300">
              At <span className="text-yellow-400 font-semibold">Roseland Developers</span>, we are shaping the
              future of real estate with innovation, transparency, and excellence. Based in Gurgaon, we
              deliver modern residential and commercial spaces that blend luxury, sustainability, and technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Our Vision", desc: "To redefine urban living with sustainable and world-class real estate developments." },
                { title: "Our Mission", desc: "Deliver high-quality, innovative, and eco-friendly projects built on trust and integrity." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-black/40 p-5 rounded-xl border border-violet-900/30 shadow-md hover:shadow-yellow-500/20 transition"
                >
                  <h3 className="text-xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="/about"
              className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative py-20 bg-black text-center px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Luxury Apartments", desc: "Modern high-rises designed for premium lifestyle.", img: "/project1.jpg", location: "Gurgaon, India" },
            { title: "Office Spaces", desc: "Smart, sustainable, and tech-ready workplaces.", img: "/project2.jpg", location: "Noida, India" },
            { title: "Township Projects", desc: "Integrated communities blending work & life.", img: "/project3.jpg", location: "Delhi NCR" },
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-xl shadow-lg border border-violet-900/30"
            >
              <Image src={proj.img} alt={proj.title} width={500} height={350} className="w-full h-64 object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">{proj.title}</h3>
                <p className="text-gray-300 text-sm">{proj.desc}</p>
                <span className="text-gray-400 text-xs mt-2">{proj.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM SLIDER */}
      <section id="team" className="relative py-20 bg-black text-center px-6 md:px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-12">Meet Our Team</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {[
            { name: "Abisekh Bhati", role: "Architect | Managing Partner", img: "/team1.jpg" },
            { name: "Dharmpal", role: "Manager", img: "/team2.jpg" },
            { name: "Daskh Choudhary", role: "Sales Head", img: "/team3.jpg" },
            { name: "Devinder Singh", role: "Site Supervisor", img: "/team4.jpg" },
            { name: "Raj Kishor", role: "Site Supervisor", img: "/team5.jpg" },
            { name: "Rakesh", role: "Site Supervisor", img: "/team6.jpg" },
          ].map((member, i) => (
            <SwiperSlide key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="bg-gray-900/60 rounded-xl shadow-lg p-8 hover:-translate-y-2 transition duration-300">
                <Image src={member.img} alt={member.name} width={180} height={180} className="rounded-full mx-auto mb-4 object-cover border-4 border-yellow-400/50" />
                <h3 className="text-xl font-semibold text-yellow-400">{member.name}</h3>
                <p className="text-gray-400 mb-3">{member.role}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="swiper-prev bg-yellow-400 p-3 rounded-full shadow-md hover:bg-yellow-500 transition">
            {/* Left Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="swiper-next bg-yellow-400 p-3 rounded-full shadow-md hover:bg-yellow-500 transition">
            {/* Right Arrow SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* CTA */}
<section
  id="cta"
  className="relative py-16 bg-black text-center px-4 sm:px-6 md:px-16"
>
  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('/cta-bg.jpg')] bg-cover bg-center opacity-20"></div>
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  <div className="relative max-w-3xl mx-auto">
    {/* Title */}
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 leading-snug sm:leading-tight">
      Ready to Build Your Dream?
    </h2>

    {/* Subtitle */}
    <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 px-2">
      Partner with{" "}
      <span className="text-yellow-400 font-semibold"><b>ROSELAND</b> DEVELOPERS</span>{" "}
      to craft spaces that inspire, innovate, and last a lifetime.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
      {/* Contact Button */}
      <a
        href="/contact"
        className="flex items-center gap-2 w-full sm:w-auto justify-center bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 transition shadow-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12H8m8-4H8m8 8H8m-2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        Contact Us
      </a>

      {/* WhatsApp Button */}
<a
  href="https://wa.me/919812345678" // ✅ Replace with your actual WhatsApp number
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 w-full sm:w-auto justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-xl hover:bg-green-600 transition shadow-md"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-current"
  >
    <path d="M16 .667C7.64.667.667 7.64.667 16c0 2.84.746 5.616 2.16 8.056L2 32l8.133-2.787A15.26 15.26 0 0016 31.333c8.36 0 15.333-6.973 15.333-15.333C31.333 7.64 24.36.667 16 .667zm0 27.2c-2.62 0-5.18-.707-7.407-2.053l-.533-.32-4.827 1.653 1.613-4.693-.347-.56a12.45 12.45 0 01-1.893-6.647c0-6.867 5.587-12.453 12.454-12.453 3.334 0 6.467 1.3 8.827 3.66a12.42 12.42 0 013.627 8.793c0 6.867-5.587 12.454-12.454 12.454zm7.214-9.293c-.393-.2-2.327-1.147-2.687-1.28-.36-.134-.62-.2-.88.2-.26.393-1.014 1.28-1.247 1.547-.227.26-.46.293-.853.093-.393-.2-1.66-.613-3.166-1.96-1.173-1.047-1.96-2.34-2.187-2.733-.227-.393-.02-.6.173-.8.18-.18.393-.46.587-.693.193-.233.26-.393.393-.66.134-.267.067-.493-.033-.693-.1-.2-.88-2.127-1.207-2.907-.32-.767-.647-.66-.88-.673l-.753-.014c-.26 0-.693.1-1.06.493-.367.393-1.393 1.36-1.393 3.307s1.427 3.833 1.627 4.093c.2.26 2.807 4.293 6.8 6.013.947.407 1.687.647 2.267.833.953.3 1.82.26 2.507.16.767-.114 2.327-.947 2.66-1.86.333-.913.333-1.693.233-1.86-.1-.166-.36-.26-.753-.46z"/>
  </svg>
  WhatsApp Us
</a>

    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
