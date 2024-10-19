import Popup from "./Popup";

const BlogPopup = ({ data, open, close }) => {

  console.log("DATA", data);
  return (
    <Popup open={open} close={close}>
      <div className="news_popup_informations">
        <div className="image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={data.img}
            style={{ backgroundImage: `url(${data.img})` }}
          />
        </div>
        <div className="details">
          <h3>{data.title}</h3>
          <span>
            <a href="#">{data.category}</a>
          </span>
          <div />
        </div>
        <div className="text">
          <p>{data.description}</p> {/* Directly render the description as it's a string */}
        </div>
      </div>
    </Popup>
  );
};
export default BlogPopup;
