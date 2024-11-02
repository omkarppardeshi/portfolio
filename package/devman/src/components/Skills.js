import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const skillsData = [
  { name: "React.js", value: 90, color: "#61dafb" },
  { name: "JavaScript (ES6+)", value: 85, color: "#f7df1e" },
  { name: "TypeScript", value: 75, color: "#007acc" },
  { name: "HTML & CSS", value: 95, color: "#e34f26" },
  { name: "Redux & Zustand", value: 80, color: "#764abc" },
  { name: "Node.js & Express", value: 70, color: "#68a063" },
  { name: "Next.js", value: 80, color: "#000000" },
  // { name: "GraphQL & Apollo", value: 65, color: "#e10098" },
  // { name: "Testing (Jest, Cypress)", value: 75, color: "#99425b" },
];

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
    return () => {
      window.removeEventListener("scroll", activeSkillProgress);
    };
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_skills">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>My Skills</span>
            <h3>I Develop Skills Regularly</h3>
            <p>
              Dliquip ex ea commo do conse namber onequa ute irure dolor in
              reprehen derit in voluptate
            </p>
          </div>
          <div className="skills_wrapper">
            <div className="dodo_progress">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="skillsInner___ progress_inner"
                  data-value={skill.value}
                  data-color={skill.color}
                >
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{
                          width: `${skill.value}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
