"use client";

import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [search, setSearch] = useState("");
  const categoryRef = useRef(null);

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
    { label: "30 Day Rentals", emoji: "📅" }
  ];

  const scrollCategories = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 150, behavior: "smooth" });
    }
  };

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
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Date Picker */}
        <div className="flex gap-2">
          <input type="date" className="p-3 text-black rounded-full border border-black" />
          <input type="date" className="p-3 text-black rounded-full border border-black" />
        </div>
      </div>

      {/* Category Boxes Section */}
      <div className="relative w-full max-w-6xl mt-6">
        <div
          ref={categoryRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[150px] p-4 border-2 border-black rounded-lg bg-gray-200 transition-transform hover:scale-105"
            >
              <span className="text-lg font-semibold text-black">{category.label}</span>
              <span className="text-2xl">{category.emoji}</span>
            </div>
          ))}
        </div>
        {/* Arrow for Scrolling */}
        <button
          onClick={scrollCategories}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:scale-110 border border-black"
        >
          <IoIosArrowForward className="text-black text-xl" />
        </button>
      </div>
    </div>
  );
}
