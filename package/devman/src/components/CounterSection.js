import { useEffect, useState } from "react";
import { databases } from "./Appwrite"; // Import the databases instance
import { lineBreak } from "../utilits";
import Counter from "./Counter";

const counterData = [
  { smallVlaue: true, value: 120, name: "Digital\nProducts" },
  { smallVlaue: true, value: 40, name: "Open Source\nProjects" },
  { smallVlaue: false, value: 10, name: "Lines of \nCode" },
];

const CounterSection = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchLatestQuote = async () => {
      try {
        const response = await databases.listDocuments(
          "672625d20023d54e7812", // Actual database ID
          "672625df001d70c05b24" // Actual collection ID
        );

        // Sort documents by createdAt timestamp
        const sortedDocuments = response.documents.sort((a, b) => {
          return new Date(b.$createdAt) - new Date(a.$createdAt);
        });

        // Get the latest document
        if (sortedDocuments.length > 0) {
          const latestDocument = sortedDocuments[0];
          setQuote(latestDocument.quoteText);
          setAuthor(latestDocument.author);
        }
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      }
    };

    fetchLatestQuote();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_counter_section">
        <div className="container">
          {/* <div className="counter_list">
            <ul>
              {counterData.map((counter, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <div className="wrapper">
                      <div className="value">
                        <span className="abs">
                          <Counter end={counter.value} />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big">M</label>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                        ></h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Display fetched quote */}
          <div className="quote_section">
            <p className="quote">
              {`"${
                quote ||
                "Code is not just about solving problems, it's about crafting solutions that last."
              }"`}
            </p>
            <p className="author">{author ? `— ${author}` : "— John Romero"}</p>
          </div>
        </div>
        <div
          className="shape moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default CounterSection;
