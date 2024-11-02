import Accordion from "./Accordion";

const Process = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="left">
              <div className="devman_tm_main_title" data-text-align="left">
                <span>Committed to Excellence</span>
                <h3>Driven to Create Exceptional Software</h3>
                <p>
                  My journey as a developer is fueled by a passion for crafting innovative solutions. I believe in leveraging technology to solve real-world problems and enhance user experiences.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="acc_holder">
                <Accordion />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
