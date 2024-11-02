import { Fragment, useEffect, useRef, useState } from "react";

const accordionData = [
  {
    title: "My Skills",
    details:
      "I specialize in web development using technologies like React.js, Node.js, and more. My proficiency in front-end and back-end development allows me to create robust applications.",
  },
  {
    title: "Projects I’ve Worked On",
    details:
      "I have worked on several projects ranging from personal portfolios to full-stack applications. Each project showcases my ability to solve problems and implement user-friendly designs.",
  },
  {
    title: "Development Process",
    details:
      "My development process involves gathering requirements, designing solutions, writing code, and conducting testing to ensure high-quality software delivery. I adhere to agile methodologies for efficient project management.",
  },
  {
    title: "Collaboration & Teamwork",
    details:
      "I believe in the power of collaboration. I enjoy working in teams and value open communication to enhance productivity and achieve shared goals.",
  },
];

const Accordion = () => {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  
  useEffect(() => {
    setActive(0); // Optionally start with the first accordion item open
  }, [contentEl.current]);

  const onClick = (value) =>
    value === active ? setActive(null) : setActive(value);

  return (
    <Fragment>
      <div
        className="devman_tm_accordion"
        data-active={1}
        data-type="accordion"
      >
        {accordionData.map((accordion, i) => (
          <div
            className={`accordion_in ${active === i ? "acc_active" : ""}`}
            key={i}
          >
            <div className="acc_head" onClick={() => onClick(i)}>
              <span className="plus" />
              <p>{accordion.title}</p>
            </div>
            <div
              className={`acc_content d-block`}
              ref={contentEl}
              style={{
                height: active === i ? contentEl.current.scrollHeight : "0px",
              }}
            >
              <div className="acc_content_in">
                <p>{accordion.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Accordion;
