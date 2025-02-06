"use client"; // Required for client-side interaction in Next.js App Router

import { useState } from "react";
import Link from "next/link";
import { FaBox, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-5 w-64 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 fixed md:relative`}
      >
        <h2 className="text-xl font-bold mb-6">MangaVerse</h2>

        <ul className="space-y-4">
          <li>
            <Link
              href="/profile"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <FaBox /> profile
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <FaUser /> settings
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-orange-500"
            >
              <FaShoppingCart /> home
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 bg-gray-800 text-white p-2 rounded"
      >
        <FaBars size={20} />
      </button>
    </div>
  );
};

export default Sidebar;
