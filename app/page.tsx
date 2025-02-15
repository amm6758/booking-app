"use client";

import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Home() {
  const [search, setSearch] = useState("");
  const categoryRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryRef.current) {
      const scrollAmount = 200;
      if (direction === "left") {
        categoryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        categoryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }

      setTimeout(() => {
        if (categoryRef.current) {
          setShowLeftArrow(categoryRef.current.scrollLeft > 0);
          setShowRightArrow(
            categoryRef.current.scrollLeft + categoryRef.current.clientWidth <
            categoryRef.current.scrollWidth
          );
        }
      }, 300);
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
            className="w-full p-3 pl-4 pr-12 text-black rounded-full border border-gray-400"
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
      <div className="relative w-full max-w-6xl mt-6 flex items-center">
        {/* Left Scroll Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-2 z-10 bg-black text-white p-3 rounded-full hover:scale-110 transition-transform shadow-md"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <IoIosArrowBack size={20} />
          </button>
        )}

        {/* Scrollable Category Container */}
        <div
          ref={categoryRef}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth w-full px-6"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="min-w-[120px] flex flex-col items-center justify-center p-4 border border-black bg-gray-200 rounded-lg cursor-pointer transform transition-transform hover:scale-105"
            >
              <span className="text-xl">{category.emoji}</span>
              <span className="text-black font-semibold">{category.label}</span>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-2 z-10 bg-black text-white p-3 rounded-full hover:scale-110 transition-transform shadow-md"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <IoIosArrowForward size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
