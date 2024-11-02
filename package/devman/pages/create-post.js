import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../src/components/Firebase";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  Popover,
  PopoverBody,
} from "reactstrap";

const Createpost = () => {
  const [postData, setPostData] = useState({
    name: "",
    message: "",
    image: null,
    imagePreview: null, // New state for image preview
  });
  const { name, message, image, imagePreview } = postData;
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false); // State to manage popover visibility

  const postCollectionRef = collection(db, "blog");
  const storage = getStorage();

  const togglePopover = () => {
    setPopoverOpen(!popoverOpen);
  };

  const uploadImage = async (imageFile) => {
    if (!imageFile) return null;

    const storageRef = ref(storage, `blogImg/${imageFile.name}`);
    const snapshot = await uploadBytes(storageRef, imageFile);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  };

  const createBlog = async () => {
    try {
      const imageUrl = await uploadImage(image);
      await addDoc(postCollectionRef, {
        title: name,
        description: message,
        img: imageUrl,
      });

      setSuccess(true);
      clearNotification();
      setPostData({ name: "", message: "", image: null, imagePreview: null });
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to submit post. Please try again.");
      clearNotification();
    }
  };

  const onChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file); // Create a URL for the preview
        setPostData({ ...postData, image: file, imagePreview: fileUrl });
      }
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
                      className={
                        error ? "empty_notice" : success ? "returnmessage" : ""
                      }
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
                    <FormGroup>
                      <Button
                        color="primary"
                        tag="label"
                        className="custom-file-upload"
                      >
                        <Input
                          type="file"
                          name="image"
                          id="image"
                          accept="image/*"
                          onChange={onChange}
                          hidden
                        />
                        Select Image
                      </Button>
                      {imagePreview && (
                        <div style={{ marginTop: "10px" }}>
                          <span
                            id="previewImageText" // Assign an ID for the popover target
                            style={{
                              color: "white",
                              cursor: "pointer",
                              textDecoration: "none",
                            }}
                          >
                            Preview Image
                          </span>
                          <Popover
                            placement="right"
                            isOpen={popoverOpen}
                            target="previewImageText"
                            toggle={togglePopover}
                            trigger="hover"
                          >
                            <PopoverBody>
                              <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ width: "200px", height: "auto" }}
                              />
                            </PopoverBody>
                          </Popover>
                        </div>
                      )}
                    </FormGroup>
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
