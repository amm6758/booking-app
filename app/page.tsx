"use client";
import { useState } from "react";

export default function Home() {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            textAlign: "center",
            padding: "20px"
        }}>
            {/* Search Bar */}
            <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="City, State, Country"
                style={{
                    width: "300px",
                    padding: "10px",
                    fontSize: "1rem",
                    border: "2px solid #ccc",
                    borderRadius: "5px",
                    outline: "none",
                    textAlign: "center",
                    transition: "border-color 0.2s ease-in-out"
                }}
                onFocus={(e) => e.target.style.borderColor = "#0070f3"}
                onBlur={(e) => e.target.style.borderColor = "#ccc"}
            />

            {/* Title */}
            <h1 style={{ fontSize: "2.5rem", color: "#333", marginTop: "20px" }}>
                🚀 Welcome to My Booking Site!
            </h1>
            <p style={{ fontSize: "1.2rem", color: "#666" }}>
                Book your dream stay now! 🎉
            </p>

            {/* Browse Listings Button */}
            <button style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "1rem",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
            }}>
                Browse Listings
            </button>
        </div>
    );
}
