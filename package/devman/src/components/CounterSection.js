import { lineBreak } from "../utilits";
import Counter from "./Counter";

const counterData = [
  { smallVlaue: true, value: 120, name: "Digital\nProducts" },
  { smallVlaue: true, value: 40, name: "Open Source\nProjects" },
  { smallVlaue: false, value: 10, name: "Lines of \nCode" },
];

const CounterSection = () => {
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
          
          {/* Add the quote below the counter list */}
          <div className="quote_section">
            <p className="quote">
              "Code is not just about solving problems, it's about crafting solutions that last."
            </p>
            <p className="author">— John Romero</p>
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
