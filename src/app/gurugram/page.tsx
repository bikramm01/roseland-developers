import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roseland Developers | Residential Projects in Gurugram",
  description:
    "Discover premium residential projects by Roseland Developers in Gurugram. Modern apartments with smart designs, prime locations, and excellent amenities.",
};

export default function GurugramPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 min-h-screen">
      {/* Header */}
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-25">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6 text-center">
          Roseland Developers – Gurugram
        </h1>
        <p className="mb-12 text-center text-gray-300">
          Explore our modern and sustainable residential projects in Gurugram, designed for comfort, style, and luxury living.
        </p>

        {/* Projects Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 1" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Luxury Apartments – MG Road</h3>
              <p className="text-gray-400">Prime location with modern amenities and excellent connectivity.</p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 2" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Skyline Residences – Sohna Road</h3>
              <p className="text-gray-400">Modern apartments with smart layouts and green surroundings.</p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <Image src="/comingsoon.png" alt="Project 3" width={400} height={250} className="rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-yellow-400 mb-2">Signature Towers – Golf Course Road</h3>
              <p className="text-gray-400">Luxury living spaces with premium amenities and design.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
