"use client";

import { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaSearch } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {
  const [search, setSearch] = useState("");
  const categoryRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

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
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100">
      {/* Header Section */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        {/* Logo */}
        <img src="/logo.png" alt="Logo" className="w-12 h-12" />

        {/* Profile & Hamburger Menu */}
        <div className="relative flex items-center space-x-4">
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          <IoPersonCircleSharp
            className="text-4xl cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          />

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg w-40 p-2 z-10">
              <p className="text-black p-2 cursor-pointer hover:bg-gray-200">Sign Up</p>
              <p className="text-black p-2 cursor-pointer hover:bg-gray-200">Login</p>
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
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
        </div>

        {/* Check-in / Check-out */}
        <div className="flex gap-2">
          <button
            className="p-3 text-black rounded-full border border-gray-400"
            onClick={() => setShowCalendar(true)}
          >
            Select Dates
          </button>
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

      {/* Pop-up Calendar */}
      {showCalendar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold text-center mb-4">Select Dates</h2>
            <Calendar
              onChange={(value) => setSelectedDate(value as Date)}
              value={selectedDate}
              className="w-full text-lg"
            />
            <button
              className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-lg"
              onClick={() => setShowCalendar(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
