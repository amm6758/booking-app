"use client";
import { useState, useRef } from "react";

export default function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    // Scroll function for category box container
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

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

            {/* Check-in & Check-out Section */}
            <div style={{
                display: "flex",
                gap: "10px",
                marginBottom: "20px"
            }}>
                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "1rem",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        outline: "none",
                        textAlign: "center",
                        cursor: "pointer"
                    }}
                />
                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{
                        padding: "10px",
                        fontSize: "1rem",
                        border: "2px solid #ccc",
                        borderRadius: "10px",
                        outline: "none",
                        textAlign: "center",
                        cursor: "pointer"
                    }}
                />
            </div>

            {/* Category Boxes Scrollable Row */}
            <div style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                maxWidth: "600px",
                overflowX: "hidden",
                position: "relative"
            }}>
                {/* Scrollable Category Boxes */}
                <div ref={scrollRef} style={{
                    display: "flex",
                    gap: "10px",
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    scrollBehavior: "smooth"
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
                            minWidth: "150px",
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

                {/* Scroll Right Arrow */}
                <button onClick={scrollRight} style={{
                    position: "absolute",
                    right: "-30px",
                    background: "none",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "#333",
                    transition: "transform 0.2s ease-in-out"
                }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.2)"}
                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
                    ➡️
                </button>
            </div>
        </div>
    );
}
