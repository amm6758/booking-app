"use client";

import { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  const [search, setSearch] = useState("");
  const categories = [
    { label: "Party House", emoji: "🎉" },
    { label: "Solo Traveler", emoji: "🎒" },
    { label: "Luxury Stay", emoji: "🤑" },
    { label: "On a Budget", emoji: "💸" },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      {/* Search and Date Picker Section */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
        {/* Search Bar */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="City, State, Country"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 pl-4 pr-12 text-black rounded-full border border-gray-400 placeholder-gray-500"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
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
      <div className="relative w-full max-w-4xl flex items-center mt-6 overflow-hidden">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar">
          {categories.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-36 h-24 bg-gray-200 border border-black rounded-lg p-3 text-black text-lg font-medium transition-transform duration-200 hover:scale-105"
            >
              {item.label}
              <span className="text-2xl mt-2">{item.emoji}</span>
            </div>
          ))}
        </div>

        {/* Scroll Arrow */}
        <IoIosArrowForward className="absolute right-0 text-3xl text-gray-600 cursor-pointer transition-transform duration-200 hover:scale-110" />
      </div>
    </div>
  );
}
