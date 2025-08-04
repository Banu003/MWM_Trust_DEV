import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to MWM Trust</h1>
        <p className="text-lg max-w-2xl mx-auto text-black-900">
          Empowering communities through health, education, and social welfare programs.
        </p>
      </section>

      {/* Info Blocks */}
      <section className="flex flex-col sm:flex-row justify-center gap-6 p-8 bg-white">
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full sm:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            To serve underprivileged communities with sustainable and impactful initiatives.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full sm:w-1/3">
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <p>
            Education, healthcare camps, food programs, women empowerment, and more.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg shadow w-full sm:w-1/3">
          <h2 className="text-xl font-semibold mb-2">Get Involved</h2>
          <p>
            Volunteer, partner with us, or donate to make a lasting difference.
          </p>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="bg-gray-100 p-6 text-center">
        <p className="text-md mb-4 font-medium">Explore more:</p>
        <div className="flex justify-center gap-6 flex-wrap text-blue-600 underline font-medium">
          <Link href="/about">About Us</Link>
          <Link href="/projects">Our Projects</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-black text-white text-sm py-4 text-center">
        © {new Date().getFullYear()} MWM Trust. All rights reserved.
      </footer>
    </div>
  );
}
