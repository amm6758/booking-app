"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  const categories = [
    { label: "Party House", emoji: "🎉" },
    { label: "Solo Traveler", emoji: "🎒" },
    { label: "Luxury Stay", emoji: "🤑" },
    { label: "On a Budget", emoji: "💸" },
    { label: "City", emoji: "🏙️" },
    { label: "Pet Friendly", emoji: "🐶" },
    { label: "By the Beach", emoji: "🏝️" }, 
    { label: "Mexico", emoji: "🇲🇽" },
    { label: "USA", emoji: "🇺🇸" },
    { label: "30 Day Rentals", emoji: "📅" },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100 relative">
      {/* Header with Logo & Profile Icon */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="cursor-pointer" />

        {/* Profile Icon with Dropdown */}
        <div className="relative">
          <FaUser
            className="text-3xl text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Sign Up</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Login</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Search and Date Picker Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 items-center">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="City, State, Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-4 pr-12 text-black rounded-full border border-black"
          />
          {/* Magnifying Glass Icon */}
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        {/* Date Picker */}
        <div className="flex gap-2">
          <input type="date" className="p-3 text-black rounded-full border border-gray-400" />
          <input type="date" className="p-3 text-black rounded-full border border-gray-400" />
        </div>
      </div>

      {/* Category Boxes Section */}
      <div className="relative w-full max-w-6xl mt-6 flex items-center">
        {/* Categories Scroll Container */}
        <div
          ref={categoryRef}
          className="flex gap-2 w-full overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg border-2 border-black transition-all duration-300 hover:scale-105 hover:text-xl hover:border-4"
            >
              <span className="text-black text-sm font-normal">{category.label}</span>
              <span className="text-3xl">{category.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
