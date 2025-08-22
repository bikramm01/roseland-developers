"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // ✅ Icons for hamburger and close

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-black/80 via-violet-950/70 to-black/80 backdrop-blur-lg border-b border-violet-800/30 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
         <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Roseland Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-xl font-bold text-yellow-400 tracking-wide">
            ROSELAND DEVELOPERS
          </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-lg font-medium text-gray-200">
          <Link href="/#hero" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-yellow-400 transition-colors">About</Link>
          <Link href="/#projects" className="hover:text-yellow-400 transition-colors">Projects</Link>
          <Link href="/#team" className="hover:text-yellow-400 transition-colors">Team</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact Us</Link>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/#cta"
            className="bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-500 transition duration-300 shadow-md hover:shadow-yellow-500/40"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-yellow-400 focus:outline-none"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
{/* Mobile Menu Drawer */}
{isMenuOpen && (
  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 z-40 w-[90%] max-w-sm bg-black/70 backdrop-blur-lg rounded-2xl shadow-xl border border-yellow-400/20 transition-all duration-500">
    <ul className="flex flex-col gap-6 text-lg font-medium text-center py-6">
      <li>
        <Link
          href="/#hero"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/#about"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/#projects"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          href="/#team"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          Team
        </Link>
      </li>
      <li>
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="hover:text-yellow-400 transition"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          href="/#cta"
          onClick={() => setIsMenuOpen(false)}
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Get Started
        </Link>
      </li>
    </ul>
  </div>
      )}
    </header>
  );
}
