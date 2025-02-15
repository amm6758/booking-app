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
            width: "100vw",
            backgroundColor: "#f5f5f5",
            padding: "5%",
            boxSizing: "border-box"
        }}>
            {/* Search Bar Container */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                maxWidth: "500px",
                marginBottom: "20px"
            }}>
                {/* Search Label inside Opaque Rectangle */}
                <div style={{
                    width: "100%",
                    height: "44px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "#333",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                }}>
                    Search
                </div>

                {/* Search Bar with Icon */}
                <div style={{
                    position: "relative",
                    width: "100%",
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
                            transition: "border-color 0.2s ease-in-out",
                            boxSizing: "border-box"
                        }}
                        onFocus={(e) => e.target.style.borderColor = "#0070f3"}
                        onBlur={(e) => e.target.style.borderColor = "#ccc"}
                    />

                    {/* Magnifying Glass Icon on the Right */}
                    <span style={{
                        position: "absolute",
                        right: "10px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "1rem",
                        color: "#888",
                        pointerEvents: "none"
                    }}>🔍</span>
                </div>
            </div>

            {/* Category Boxes */}
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",
                width: "100%",
                maxWidth: "500px"
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
                        height: "100px",
                        border: "2px solid black",
                        borderRadius: "10px",
                        backgroundColor: "#eee",
                        fontSize: "1rem",
                        fontWeight: "500",
                        color: "gray",
                        transition: "transform 0.2s ease-in-out",
                        cursor: "pointer",
                        boxSizing: "border-box"
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                        <span>{category.title}</span>
                        <span style={{ fontSize: "0.8rem", marginTop: "5px" }}>{category.emoji}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
