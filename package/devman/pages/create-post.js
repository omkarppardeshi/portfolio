import { useState, Fragment } from "react";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../src/components/Firebase";
import {
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Alert,
  Tooltip,
} from "reactstrap";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [postData, setPostData] = useState({
    name: "",
    message: "",
    image: null,
    imagePreview: null,
  });
  const { name, message, image, imagePreview } = postData;

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const router = useRouter();

  const postCollectionRef = collection(db, "blog");
  const storage = getStorage();

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

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
      router.push('admin-dashboard');
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
        const fileUrl = URL.createObjectURL(file);
        setPostData({ ...postData, image: file, imagePreview: fileUrl });
      }
    } else {
      setPostData({ ...postData, [e.target.name]: e.target.value });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !message || !image) {
      setError("Please fill all fields and upload an image.");
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
    <Fragment>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm">
              <CardHeader>
                <h4 className="mb-0">📝 Create a Blog Post</h4>
              </CardHeader>
              <CardBody>
                {error && <Alert color="danger">{error}</Alert>}
                {success && (
                  <Alert color="success">
                    ✅ Post created successfully!
                  </Alert>
                )}
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="name">Title</Label>
                    <Input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter post title"
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                      type="textarea"
                      name="message"
                      id="message"
                      placeholder="Write your post content..."
                      value={message}
                      onChange={onChange}
                      rows="4"
                      required
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label for="image">Upload Image</Label>
                    <Input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={onChange}
                      required
                    />
                    {imagePreview && (
                      <div className="mt-3">
                        <span
                          href="#"
                          id="TooltipImagePreview"
                          style={{ textDecoration: "underline", cursor: "pointer" }}
                        >
                          Hover to Preview
                        </span>
                        <Tooltip
                          placement="right"
                          isOpen={tooltipOpen}
                          target="TooltipImagePreview"
                          toggle={toggleTooltip}
                        >
                          <img
                            src={imagePreview}
                            alt="Preview"
                            style={{ width: "200px", height: "auto", borderRadius: 5 }}
                          />
                        </Tooltip>
                      </div>
                    )}
                  </FormGroup>

                  <div className="text-end">
                    <Button color="primary" type="submit">
                      Submit Post
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreatePost;
