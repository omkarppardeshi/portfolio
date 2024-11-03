import Popup from "./Popup";
const DetailsPopup = ({ open, close }) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url="img/service/shark-header.png"
            style={{ backgroundImage: 'url("img/portfolio/4.jpg")' }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>Shark Tank 🦈</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project - 
              for instance when {`you're`} trying to figure out your user flows 
              or the proper visual hierarchy - and the production phase when 
              they will represent the target product. Building mockups strikes 
              the ideal balance ease of modification.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Sharks</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">Static</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>March 1, 2023</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="additional_images">
          <ul>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/shark-header.png" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/shark-price.png" />
                </div>
              </div>
            </li>
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <img src="img/thumbs/4-2.jpg" alt="" />
                  <div className="main" data-img-url="img/service/shark.png" />
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Add Visit button */}
        <div className="visit_button">
          <a href="https://sharktankk.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button>Visit</button>
          </a>
        </div>
      </div>
    </Popup>
  );
};

export default DetailsPopup;
