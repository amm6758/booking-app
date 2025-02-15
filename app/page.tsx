export default function Home() {
    return (
        <div style={{
            display: "flex", 
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#f5f5f5",
            textAlign: "center"
        }}>
            <h1 style={{ fontSize: "2.5rem", color: "#333" }}>🚀 Welcome to My Booking Site!</h1>
            <p style={{ fontSize: "1.2rem", color: "#666" }}>Book your dream stay now! 🎉</p>
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
