import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsSlider } from "../sliderProps";
import { dataImage, imgToSVG } from "../utilits";

const Testimonials = () => {
  useEffect(() => {
    dataImage();
    imgToSVG();
  }, []);

  return (
    <div className="devman_tm_section">
      <div className="devman_tm_testimonials">
        <div className="container">
          <div className="devman_tm_main_title" data-text-align="center">
            <span>Testimonial</span>
            <h3>What Clients Say</h3>
            <p>
              Here’s what our clients are saying about our services.
            </p>
          </div>
          <div
            className="testimonials_list wow fadeInUp"
            data-wow-duration="1s"
          >
            <Swiper
              {...testimonialsSlider}
              className="owl-carousel owl-theme owl-loaded"
            >
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    "The team was incredibly professional and responsive. They understood our requirements perfectly and delivered a product that exceeded our expectations."
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person.png"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    "Their attention to detail and commitment to quality is unparalleled. Our project was delivered on time and within budget, and we couldn’t be happier."
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person1.png"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    "Working with this team was a fantastic experience. They brought our vision to life with creativity and professionalism."
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person2.png"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="list_inner">
                  <img className="svg" src="img/svg/quote.svg" alt="" />
                  <p className="text">
                    "We were impressed by the depth of their expertise. They guided us through the entire process and delivered an outstanding end result."
                  </p>
                  <div className="details">
                    <div className="image">
                      <div
                        className="main"
                        data-img-url="img/testimonials/person3.png"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div
              className="shape moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
            <div
              className="shape_2 moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
