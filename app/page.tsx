"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";

export default function Home() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen p-6 bg-gray-100 relative">
      {/* Header with Logo & Profile Icon */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4 px-4">
        {/* Logo */}
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="cursor-pointer" />

        {/* Profile Icon with Dropdown */}
        <div ref={menuRef} className="relative flex flex-col items-center mr-4">
          <div className="flex items-center gap-2 cursor-pointer">
            <FaBars className="text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)} />
            <FaUser className="text-3xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
          {menuOpen && (
            <div className="absolute top-full mt-2 w-40 bg-white border rounded-lg shadow-lg">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">Sign Up</li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-black">Login</li>
              </ul>
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

        {/* Date Picker */}
        <div className="flex gap-2">
          <button className="p-3 text-black rounded-full border border-gray-400" onClick={() => setCalendarOpen(true)}>
            Check In / Check Out
          </button>
        </div>
      </div>

      {/* Category Boxes Section (Fixed Background) */}
      <div className="relative w-full max-w-6xl mt-6 flex items-center bg-gray-100">
        <div
          ref={categoryRef}
          className="flex gap-2 w-full no-scrollbar bg-gray-100 py-4 px-2"
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

      {/* Calendar Pop-up */}
      {calendarOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div ref={calendarRef} className="bg-white p-6 rounded-lg shadow-xl w-[450px] h-[400px] flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4 text-black">Select Dates</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
              <input type="date" className="p-3 text-black rounded-lg border border-gray-400 w-full text-lg" />
              <input type="date" className="p-3 text-black rounded-lg border border-gray-400 w-full text-lg" />
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600" onClick={() => setCalendarOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
