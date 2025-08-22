import Image from "next/image";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          
          {/* Brand + Logo */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Roseland Logo"
                width={50}
                height={50}
                className="rounded"
              />
              <h3 className="text-yellow-400 font-bold text-xl">
                Roseland Developers
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              Building the future with innovation, transparency, 
              and excellence in real estate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="/#projects" className="hover:text-yellow-400 transition">Projects</a></li>
              <li><a href="/#team" className="hover:text-yellow-400 transition">Team</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info with SVGs */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} className="text-yellow-400" /> Gurgaon, India
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={16} className="text-yellow-400" /> +91 98765 43210
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <Mail size={16} className="text-yellow-400" /> info@roseland.com
              </li>
            </ul>
          </div>

          {/* Social Media with SVGs */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/roseland-developers-028199380/" className="hover:text-yellow-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://www.facebook.com/roselanddevelopers/" className="hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/roselanddevelopers/" className="hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} Roseland Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
