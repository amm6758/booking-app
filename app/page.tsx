"use client";

import { useState, useRef } from "react";

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
    { label: "Beach Side", emoji: "🏝️" },
    { label: "Mexico", emoji: "🇲🇽" },
    { label: "USA", emoji: "🇺🇸" },
    { label: "30 Day Rentals", emoji: "📅" },
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
            className="w-full p-3 pl-4 pr-12 text-black rounded-full border border-black"
          />
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
              className="w-[200px] h-[100px] flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg border-[3px] border-black"
            >
              <span className="text-black text-lg font-semibold">{category.label}</span>
              <span className="text-2xl">{category.emoji}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
