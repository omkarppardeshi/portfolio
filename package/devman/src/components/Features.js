import TickerTape from "./Ticker";

const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "I am committed to delivering high-quality code and ensuring that every project meets my clients' expectations and requirements.",
  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "I focus on writing efficient code and implementing best practices to optimize performance and maintainability.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "My approach combines creativity and analytical thinking, enabling me to solve complex problems and deliver innovative solutions.",
  },
];

const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`0.${i * 2}s`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
