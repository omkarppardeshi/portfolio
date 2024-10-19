import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      setError("Please fill all the required fields.");
      clearError();
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      clearError();
    } else {
      emailjs
        .send(
          "service_cbaaoy9", // service id
          "template_006ps4e", // template id
          mailData,
          "FhPSwRWJLkoRsdMhr" // public api key
        )
        .then(
          (response) => {
            setError(null);
            setSuccess(true);
            clearError();
            setMailData({ name: "", email: "", message: "", owner:"Omkar" });
          },
          (err) => {
            console.error(err.text);
            setError("Failed to send message. Please try again later.");
            clearError();
          }
        );
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="devman_tm_section" id="contact">
      <div className="devman_tm_contact">
        <div className="container">
          <div className="contact_inner">
            <div className="devman_tm_main_title" data-text-align="left">
              <span>Don't be shy</span>
              <h3>Drop Me a Line</h3>
            </div>
            <div className="in">
              <div className="left wow fadeInLeft" data-wow-duration="1s">
                <div className="fields">
                  <form
                    className="contact_form"
                    id="contact_form"
                    autoComplete="off"
                    onSubmit={onSubmit}
                  >
                    <div className="returnmessage" />
                    <div
                      className={
                        error ? "empty_notice" : success ? "returnmessage" : ""
                      }
                      style={{ display: error || success ? "block" : "none" }}
                    >
                      <span>
                        {error
                          ? error
                          : success
                          ? "Your message has been received, We will contact you soon."
                          : ""}
                      </span>
                    </div>
                    <div className="first">
                      <ul>
                        <li>
                          <input
                            id="name"
                            name="name"
                            onChange={onChange}
                            value={name}
                            type="text"
                            placeholder="Name"
                            aria-label="Name"
                          />
                        </li>
                        <li>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            onChange={onChange}
                            value={email}
                            placeholder="Email"
                            aria-label="Email"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea
                        id="message"
                        placeholder="Message"
                        name="message"
                        onChange={onChange}
                        value={message}
                        aria-label="Message"
                      />
                    </div>
                    <div className="devman_tm_button" data-position="left">
                      <input type="submit" value="Submit Message" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="right wow fadeInRight" data-wow-duration="1s">
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>Sukhsagar Nagar, Katraj, Pune: 411046</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="mailto:omkar.17.pardeshi@gmail.com">
                            omkar.17.pardeshi@gmail.com
                          </a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>+91 8421941427</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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

export default Contact;
