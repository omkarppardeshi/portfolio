import { Fragment, useState, useEffect } from "react";
import BlogPopup from "./popup/BlogPopup";
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import { db } from "../components/Firebase"; // Ensure the path to Firebase config is correct

const Data = [
  {
    title: "Jim Morisson Says when the musics over turn off the light",
    category: "Web Development",
    date: "02 June, 2022",
    author: "John Smith",
    img: "https://firebasestorage.googleapis.com/v0/b/portfolioblog-f6a2b.appspot.com/o/blogImg%2Freact-4.png?alt=media&token=10d08ac4-df86-490c-b597-5eb5fdaa53e0",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Jim Morisson Says when the musics over turn off the light",
    category: "Web Development",
    date: "02 June, 2022",
    author: "John Smith",
    img: "img/news/2.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
  {
    title: "Jim Morisson Says when the musics over turn off the light",
    category: "Web Development",
    date: "02 June, 2022",
    author: "John Smith",
    img: "img/news/3.jpg",
    description: [
      "Orido is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
      "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
      "That’s why more companies are not only reevaluating their website’s design but also partnering with Orido, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
    ],
  },
];

console.log("Data:", Data);

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const [blogData, setBlogData] = useState([]); // State to hold blog posts

  console.log("BlogData", blogData);

  // Fetch blog posts from Firestore
  const fetchBlogs = async () => {
    const blogCollectionRef = collection(db, "blog");
    const blogSnapshot = await getDocs(blogCollectionRef);
    const blogs = blogSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setBlogData(blogs); // Set fetched data into state
  };

  useEffect(() => {
    fetchBlogs(); // Call the function when the component is mounted
  }, []);

  const onClick = (e, blog) => {
    e.preventDefault();
    setOpen(true);
    setActiveData(blog);
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="devman_tm_section" id="blog">
        <div className="devman_tm_news">
          <div className="container">
            <div className="devman_tm_main_title" data-text-align="center">
              <span>Latest Tech</span>
              <h3>Checkout My Recent Blogs</h3>
              <p>
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehen derit in voluptate
              </p>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li
                    key={i}
                    className="wow fadeInUp"
                    data-wow-duration="1s"
                    data-wow-delay={`0.${i * 2}s`}
                  >
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/react.png" alt="" />
                        {/* <div className="main" data-img-url={blog.img} /> */}
                        <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        />
                        <a
                          className="devman_tm_full_link"
                          href="#"
                          onClick={(e) => onClick(e, blog)}
                        />
                      </div>
                      <div className="details">
                        <span className="category">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.category || "React"}
                          </a>
                        </span>
                        <h3 className="title">
                          <a href="#" onClick={(e) => onClick(e, blog)}>
                            {blog.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
