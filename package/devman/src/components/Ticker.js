import Marquee from "react-fast-marquee";

const TickerTape = () => {
  const tickerItems = [
    "🔥 Next.js 14 released!",
    "📢 Don’t miss the AI webinar tomorrow!",
    "🚀 Launch your startup with Vercel",
    "💡 JavaScript tips coming soon!",
  ];

  return (
    <div className="devman_tm_ticker">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {tickerItems.map((item, index) => (
          <span
            key={index} className="ticker-item"
          >
            {item}
            {/* Add separator if not the last item */}
            {index !== tickerItems.length - 1 && (
              <span style={{ margin: "0 20px" }}>|</span>
            )}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default TickerTape;
