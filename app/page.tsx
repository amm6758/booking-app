"use client";

import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Home() {
  const [search, setSearch] = useState("");
  const categoryRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

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

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryRef.current) {
      const scrollAmount = 200;
      if (direction === "right") {
        categoryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      } else {
        categoryRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }

      setTimeout(() => {
        if (categoryRef.current) {
          setAtStart(categoryRef.current.scrollLeft === 0);
          setAtEnd(categoryRef.current.scrollLeft + categoryRef.current.clientWidth >= categoryRef.current.scrollWidth);
        }
      }, 500);
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
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black" />
        </div>

        {/* Date Picker */}
        <div className="flex gap-2">
          <input type="date" className="p-3 text-black rounded-full border border-gray-400" />
          <input type="date" className="p-3 text-black rounded-full border border-gray-400" />
        </div>
      </div>

      {/* Category Boxes Section */}
      <div className="relative w-full max-w-6xl mt-6 flex items-center">
        {/* Left Arrow */}
        {!atStart && (
          <button
            onClick={() => scrollCategories("left")}
            className="absolute left-0 z-10 text-black text-3xl"
          >
            <IoIosArrowBack />
          </button>
        )}

        {/* Categories Scroll Container */}
        <div
          ref={categoryRef}
          className="flex gap-4 w-full overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="w-[200px] h-[100px] flex flex-col items-center justify-center p-4 border-4 border-black bg-gray-200 rounded-lg transition-transform duration-200 hover:scale-105"
            >
              <span className="text-black text-xl font-semibold">{category.label}</span>
              <span className="text-3xl">{category.emoji}</span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        {!atEnd && (
          <button
            onClick={() => scrollCategories("right")}
            className="absolute right-0 z-10 text-black text-3xl"
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  );
}
