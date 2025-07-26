import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Spinner,
  Button,
} from "reactstrap";
import { MdDelete } from "react-icons/md";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../src/components/Firebase";
import { useRouter } from "next/router";

const BlogListing = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const blogCollectionRef = collection(db, "blog");
      const blogSnapshot = await getDocs(blogCollectionRef);
      const blogs = blogSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBlogData(blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "blog", id)); // Make sure 'deleteDoc' and 'doc' are imported
      setBlogData((prev) => prev.filter((blog) => blog.id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container className="py-4">
      <Row>
        <Col>
          <Card>
            <CardHeader tag="h4">
              <div className="d-flex justify-content-between align-items-center">
                📝 Blog Listing
                <Button
                  color="primary"
                  onClick={() => router.push("/create-post")}
                >
                  Add Blog
                </Button>
              </div>
            </CardHeader>

            <CardBody>
              {loading ? (
                <div className="text-center py-5">
                  <Spinner color="primary" />
                </div>
              ) : blogData.length > 0 ? (
                blogData.map((blog) => (
                  <Card className="mb-3 shadow-sm" key={blog.id}>
                    <Row noGutters>
                      {blog.image && (
                        <Col md="4">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="img-fluid rounded-start w-100 h-100"
                            style={{ objectFit: "cover", maxHeight: "200px" }}
                          />
                        </Col>
                      )}
                      <Col md={blog.image ? "8" : "12"}>
                        <CardBody>
                          <div className="d-flex justify-content-between">
                            <CardTitle tag="h5" className="mb-2">
                              {blog.title}
                            </CardTitle>
                            <Button
                              color="danger"
                              size="sm"
                              onClick={() => handleDelete(blog.id)}
                              className="ms-2"
                              title="Delete Blog"
                            >
                              <MdDelete />
                            </Button>
                          </div>

                          <CardText className="text-muted">
                            {blog.description}
                          </CardText>
                        </CardBody>
                      </Col>
                    </Row>
                  </Card>
                ))
              ) : (
                <p>No blog posts found.</p>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogListing;
