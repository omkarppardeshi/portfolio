import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { client } from "../src/components/Appwrite";
import { Account } from 'appwrite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const account = new Account(client);

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const router = useRouter();

  useEffect(() => {
    // Check if a session is active on component load
    account.getSession('current')
      .then(response => {
        setIsLoggedIn(true);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
  }, []);

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.warn("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await account.createEmailPasswordSession(email, password);
      toast.success("Login successful.");
      setIsLoggedIn(true); // Update login status
      router.push("/portfolio-dashboard");
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.message || "Failed to log in. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      toast.success("Logged out successfully.");
      setIsLoggedIn(false);
      router.push("/admin-login"); // Redirect to login page
    } catch (err) {
      console.error("Logout error:", err);
      toast.error("Failed to log out. Please try again.");
    }
  };

  return (
    <div className="devman_tm_section" id="CreatePost">
      <div className="devman_tm_blog">
        <div>
          <div className="blog_inner">
            <div className="devman_tm_main_title" data-text-align="left">
              <span>Admin Login</span>
              <h3>Create a portfolio</h3>
            </div>
            <div className="in">
              <div className="left wow fadeInLeft" data-wow-duration="1s">
                <div className="fields">
                  {!isLoggedIn ? (
                    <form
                      className="contact_form"
                      id="contact_form"
                      autoComplete="off"
                      onSubmit={onSubmit}
                    >
                      <div className="first">
                        <ul>
                          <li>
                            <input
                              id="email"
                              name="email"
                              onChange={onChange}
                              value={email}
                              type="email"
                              placeholder="Email"
                              aria-label="Email"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="first">
                        <ul>
                          <li>
                            <input
                              id="password"
                              placeholder="Enter Password"
                              name="password"
                              onChange={onChange}
                              value={password}
                              type="password"
                              aria-label="Enter Password"
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="devman_tm_button" data-position="left">
                        <input type="submit" value={loading ? "Loading..." : "Login"} disabled={loading} />
                      </div>
                    </form>
                  ) : (
                    <button onClick={logout} className="devman_tm_button" data-position="left">
                      Logout
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
