import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roseland Developers | Sector 70 Gurugram Apartments",
  description:
    "Premium residential apartments by Roseland Developers in Sector 70, Gurugram. Modern designs, smart amenities, and prime location.",
};

export default function Sector70Page() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-25">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center">
          Roseland Developers – Sector 70, Gurugram
        </h1>
        <p className="mb-12 text-center text-gray-300">
          Discover our luxury apartments in Sector 70, Gurugram. Modern living spaces designed for convenience, comfort, and style.
        </p>

        {/* Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 1" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Modern Residences – Sector 70</h3>
              <p className="text-gray-400">Perfectly located with all modern amenities and green surroundings.</p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 2" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Green Heights – Sector 70</h3>
              <p className="text-gray-400">Spacious apartments with smart interiors and modern facilities.</p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 3" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Skyline Residency – Sector 70</h3>
              <p className="text-gray-400">Luxury apartments with premium amenities and green surroundings.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
