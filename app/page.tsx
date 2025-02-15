"use client";

import { useState, useRef, useEffect } from "react";
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

  // Function to check visibility of left and right arrows
  const updateArrowVisibility = () => {
    if (categoryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    updateArrowVisibility(); // Run on mount
    window.addEventListener("resize", updateArrowVisibility);
    return () => window.removeEventListener("resize", updateArrowVisibility);
  }, []);

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryRef.current) {
      const scrollAmount = 200;
      categoryRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });

      setTimeout(updateArrowVisibility, 500);
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
            className="absolute left-0 bg-black text-white p-3 rounded-full hover:scale-110 transition-transform"
          >
            <IoIosArrowBack size={20} />
          </button>
        )}

        {/* Categories Container */}
        <div
          ref={categoryRef}
          className="flex overflow-x-auto no-scrollbar gap-4 py-2 px-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth",
          }}
          onScroll={updateArrowVisibility}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-4 text-center border-2 border-black rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer transform transition-transform duration-200 hover:scale-105"
              style={{ boxShadow: "0 0 0 2px black inset" }} // Keeps border on hover
            >
              <span className="text-xl font-semibold text-black">{category.label}</span>
              <div className="text-2xl mt-1 text-black">{category.emoji}</div>
            </div>
          ))}
        </div>

        {/* Right Scroll Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-0 bg-black text-white p-3 rounded-full hover:scale-110 transition-transform"
          >
            <IoIosArrowForward size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
