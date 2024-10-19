import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage functions
import { db } from "../src/components/Firebase"; // Ensure this path is correct for your project

const Createpost = () => {
  const [postData, setPostData] = useState({
    name: "",
    message: "",
    image: null, // Add image to postData
  });
  const { name, message, image } = postData;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postCollectionRef = collection(db, "blog");
  const storage = getStorage(); // Initialize storage

  // Function to upload the image to Firebase Storage and return the download URL
  const uploadImage = async (imageFile) => {
    if (!imageFile) return null;

    const storageRef = ref(storage, `blogImg/${imageFile.name}`); // Reference to where the image will be stored
    const snapshot = await uploadBytes(storageRef, imageFile); // Upload the image
    const downloadURL = await getDownloadURL(snapshot.ref); // Get the image download URL
    return downloadURL; // Return the URL
  };

  const createBlog = async () => {
    try {
      const imageUrl = await uploadImage(image); // Upload the image and get the URL

      // Save the post along with the image URL
      await addDoc(postCollectionRef, {
        title: name, // Map `name` to `title`
        description: message, // Map `message` to `description`
        img: imageUrl, // Save the image URL as `img` in Firestore
      });

      setSuccess(true);
      clearNotification();
      setPostData({ name: "", message: "", image: null }); // Reset form after submission
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to submit post. Please try again.");
      clearNotification();
    }
  };

  const onChange = (e) => {
    if (e.target.name === "image") {
      setPostData({ ...postData, image: e.target.files[0] }); // Handle file input change
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || message === "" || !image) {
      setError("Please fill all the required fields and upload an image.");
      clearNotification();
    } else {
      createBlog();
    }
  };

  const clearNotification = () => {
    setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 4000);
  };

  return (
    <div className="devman_tm_section" id="Createpost">
      <div className="devman_tm_blog">
        <div className="">
          <div className="blog_inner">
            <div className="devman_tm_main_title" data-text-align="left">
              <span>Firebase 🔥</span>
              <h3>Create a blog</h3>
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
                      className={error ? "empty_notice" : success ? "returnmessage" : ""}
                      style={{ display: error || success ? "block" : "none" }}
                    >
                      <span>
                        {error
                          ? error
                          : success
                          ? "Your post has been created successfully."
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
                            placeholder="Title"
                            aria-label="Title"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="last">
                      <textarea
                        id="message"
                        placeholder="Post message"
                        name="message"
                        onChange={onChange}
                        value={message}
                        aria-label="Post message"
                      />
                    </div>
                    <div className="last">
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={onChange}
                        aria-label="Upload Image"
                      />
                    </div>
                    <div className="devman_tm_button" data-position="left">
                      <input type="submit" value="Submit Post" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createpost;
