"use client"; // Required for client-side interaction in Next.js App Router

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          MangaVerse
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl focus:outline-none"
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-orange-500">
              products
            </Link>
          </li>
          <li>
            <Link href="/counter" className="hover:text-orange-500">
              counter
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-orange-500">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <li>
            <Link href="/" className="hover:text-orange-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-orange-500">
              About
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-orange-500">
              Dashboard
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
