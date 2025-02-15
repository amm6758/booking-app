"use client";

import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");
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
    { label: "30 Day Rentals", emoji: "📅" }
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      
      {/* Search and Date Picker Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 items-center">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="City, State, Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-4 pr-12 text-black rounded-full border border-gray-400"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Date Picker */}
        <div className="flex gap-2">
          <input
            type="date"
            className="p-3 text-black rounded-full border border-gray-400"
          />
          <input
            type="date"
            className="p-3 text-black rounded-full border border-gray-400"
          />
        </div>
      </div>

      {/* Category Boxes Section */}
      <div className="w-full max-w-6xl mt-6 overflow-hidden">
        <div
          ref={categoryRef}
          className="flex gap-4 w-full overflow-x-auto no-scrollbar"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-48 h-24 bg-white border-2 border-black rounded-lg text-black text-lg font-medium hover:scale-105 transition-transform"
            >
              <span>{category.label}</span>
              <span className="text-2xl">{category.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
