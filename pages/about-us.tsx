// pages/about-us.tsx
import Link from "next/link"; // ✅ must be at the top

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav className="mt-2">
          {/* Use Next.js Link instead of <a> */}
          <Link href="/" className="mr-4 hover:underline">Home</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
        </nav>
      </header>

      <main className="flex-grow p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! We are a passionate team committed to delivering the best experience for our users.
        </p>
        <p className="text-lg mb-4">
          Our mission is to combine creativity, technology, and innovation to build solutions that make a difference.
        </p>
        <p className="text-lg">
          Thank you for visiting, and we look forward to connecting with you!
        </p>
      </main>

      <footer className="bg-gray-200 text-center p-4">
        © 2025 My Website. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
