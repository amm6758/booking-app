"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      {/* Search Bar and Date Picker Section */}
      <div className="flex flex-col items-center w-full max-w-2xl gap-4 sm:flex-row">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="City, State, Country"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full p-3 text-black bg-white border border-gray-300 rounded-full shadow-md focus:outline-none"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Check-in / Check-out Fields */}
        <div className="flex gap-2">
          <input
            type="date"
            className="p-3 text-black bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none"
          />
          <input
            type="date"
            className="p-3 text-black bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Category Boxes Section */}
      <div className="flex items-center gap-4 mt-6 overflow-x-auto">
        {[
          { label: "Party House", emoji: "🎉" },
          { label: "Solo Traveler", emoji: "🎒" },
          { label: "Luxury Stay", emoji: "🤑" },
          { label: "On a Budget", emoji: "💸" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-40 h-24 text-black bg-gray-200 border border-black rounded-lg shadow-md hover:scale-105 transition-transform"
          >
            <p className="text-lg font-medium">{item.label}</p>
            <span className="text-2xl">{item.emoji}</span>
          </div>
        ))}
        {/* Scroll Arrow */}
        <IoIosArrowForward className="text-3xl text-gray-600 cursor-pointer hover:scale-105" />
      </div>
    </div>
  );
}
