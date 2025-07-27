import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { databases } from "./Appwrite"; // Import the databases instance

const TickerTape = () => {
  const [ticker, setTicker] = useState([]);

  console.log("Ticker", ticker);

  useEffect(() => {
    const fetchTicker = async () => {
      try {
        const response = await databases.listDocuments(
          "672625d20023d54e7812", // Actual database ID
          "6885f197001ec5f8e3b8" // Actual collection ID
        );
        // Sort documents by createdAt timestamp
        const sortedTicker = response.documents.filter(
          (item) => item.status === 1
        );

        setTicker(sortedTicker);
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      }
    };

    fetchTicker();
  }, []);
  const tickerItems = [
    "🔥 Next.js 14 released!",
    "📢 Don’t miss the AI webinar tomorrow!",
    "🚀 Launch your startup with Vercel",
    "💡 JavaScript tips coming soon!",
  ];

  return (
    <div className="devman_tm_ticker">
      <Marquee speed={60} gradient={true} pauseOnHover>
        {ticker.map((item, index) => (
          <span key={index} className="ticker-item">
            {item.ticker_name}
            {/* Add separator if not the last item */}
            {index !== ticker.length - 1 && (
              <span style={{ margin: "0 20px" }}></span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TickerTape;
