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
            {/* Search Bar Container */}
            <div style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px"
            }}>
                {/* Search Label inside Opaque Rectangle */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100px",
                    height: "44px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // Opaque background
                    borderRadius: "10px", // Rounded edges
                    textAlign: "center"
                }}>
                    Search
                </div>

                {/* Search Bar with Icon */}
                <div style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    width: "300px"
                }}>
                    {/* Search Input */}
                    <input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="City, State, Country"
                        style={{
                            width: "100%",
                            padding: "10px 40px 10px 10px",
                            fontSize: "1rem",
                            border: "2px solid #ccc",
                            borderRadius: "10px", // Rounded edges
                            outline: "none",
                            textAlign: "left",
                            transition: "border-color 0.2s ease-in-out"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#0070f3"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />

                    {/* Magnifying Glass Icon on the Right */}
                    <span style={{
                        position: "absolute",
                        right: "10px",
                        fontSize: "1rem",
                        color: "#888",
                        pointerEvents: "none"
                    }}>🔍</span>
                </div>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: "2.5rem", color: "#333" }}>
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
                borderRadius: "10px", // Rounded edges
                cursor: "pointer"
            }}>
                Browse Listings
            </button>
        </div>
    );
}
