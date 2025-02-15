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
                            borderRadius: "10px",
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

            {/* Category Boxes */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginBottom: "20px"
            }}>
                {[
                    { title: "Party House", emoji: "🎉" },
                    { title: "Solo Traveler", emoji: "🎒" },
                    { title: "Luxury Stay", emoji: "🤑" },
                    { title: "On a Budget", emoji: "💸" }
                ].map((category, index) => (
                    <div key={index} style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "150px",
                        height: "100px",
                        border: "2px solid black",
                        borderRadius: "10px",
                        backgroundColor: "#eee",
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: "gray",
                        transition: "transform 0.2s ease-in-out",
                        cursor: "pointer"
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                        <span>{category.title}</span>
                        <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>{category.emoji}</span>
                    </div>
                ))}
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
                borderRadius: "10px",
                cursor: "pointer"
            }}>
                Browse Listings
            </button>
        </div>
    );
}
