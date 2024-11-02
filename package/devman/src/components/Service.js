import { Fragment, useState } from "react";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  // {
  //   name: "Desktop Application",
  //   icon: "img/svg/cpu.svg",
  //   img: "img/service/1.jpg",
  //   description: [
  //     "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  // },
  {
    name: "Website Development",
    icon: "img/svg/web.svg",
    img: "img/service/web-design.jpg",
    description: [
      "Our Website Development service focuses on creating user-friendly, high-performance websites tailored to your business goals. We leverage the latest technologies to ensure that your website is not only visually appealing but also optimized for conversions.",
      "With a team of skilled developers and designers, we create responsive and dynamic web applications that engage users and drive traffic. Our goal is to deliver a product that enhances your online presence and increases your revenue.",
      "Partner with us to elevate your brand with a customized website that meets the demands of your audience and stands out in a competitive market."
    ],
  },
  {
    name: "Mobile Application",
    icon: "img/svg/phone.svg",
    img: "img/service/app-design.jpg",
    description: [
      "Our Mobile Application service is dedicated to building intuitive and innovative mobile solutions that cater to your users' needs. We develop applications for both iOS and Android platforms, ensuring a seamless experience across devices.",
      "By integrating the latest trends in mobile technology, we create apps that are not only functional but also engaging. Our development process emphasizes user experience, ensuring that your application is easy to navigate and visually appealing.",
      "Let us help you reach a wider audience and enhance customer engagement with a mobile app that represents your brand and delivers value."
    ],
  },

  // {
  //   name: "Game Development",
  //   icon: "img/svg/star.svg",
  //   img: "img/service/4.jpg",
  //   description: [
  //     "Devman is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.",
  //     "In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.",
  //     "That’s why more companies are not only reevaluating their website’s design but also partnering with Devman, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.",
  //   ],
  // },
];
const Service = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="devman_tm_section" id="service">
        <div className="devman_tm_service">
          <div className="container">
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li
                    className={`wow ${i % 2 ? "fadeInLeft" : "fadeInRight"}`}
                    data-wow-duration="1s"
                    key={i}
                  >
                    <div className="list_inner">
                      <img className="svg" src={service.icon} alt="" />
                      <h3 className="title">{service.name}</h3>
                      <p className="text">
                        {service.description[0].substring(0, 138)}.
                      </p>
                      <a
                        className="devman_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                        }}
                      />
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            className="shape moving_effect"
            data-direction="y"
            data-reverse="yes"
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
