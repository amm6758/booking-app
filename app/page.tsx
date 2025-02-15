"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [search, setSearch] = useState("");
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
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      {/* Search and Date Picker Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
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
      <div className="w-full max-w-6xl flex overflow-x-auto space-x-4 pb-2">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 w-40 h-24 border border-black bg-gray-200 rounded-lg text-black text-lg font-medium hover:scale-105 transition-transform cursor-pointer"
          >
            {category.label}
            <span className="text-xl">{category.emoji}</span>
          </div>
        ))}
        <IoIosArrowForward className="self-center text-2xl text-gray-600 hover:scale-110 transition-transform cursor-pointer" />
      </div>
    </div>
  );
}

