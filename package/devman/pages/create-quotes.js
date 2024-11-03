import React, { useState, Fragment } from "react";
import { Container, Form, FormGroup, Label, Input, Button, Alert, Row, Col } from "reactstrap";
import { databases } from "../src/components/Appwrite"; // Ensure this path is correct

const CreateQuote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!quoteText || !author) {
      setError("Both fields are required.");
      return;
    }

    try {
      const document = await databases.createDocument(
        "672625d20023d54e7812", // Database ID
        "672625df001d70c05b24", // Collection ID
        "unique()", // Use 'unique()' for generating a unique ID
        {
          quoteText,
          author,
        }
      );
      setSuccess("Quote added successfully!");
      setQuoteText("");
      setAuthor("");
    } catch (error) {
      setError("Failed to add quote: " + error.message);
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0">
        <div className="devman_tm_section" id="Createpost">
          <div className="devman_tm_blog">
            <div className="">
              <div className="blog_inner">
                <div className="devman_tm_main_title" data-text-align="left">
                  <span>Add a Quote</span>
                  <h3>Share Your Thoughts</h3>
                </div>
                {error && <Alert color="danger">{error}</Alert>}
                {success && <Alert color="success">{success}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Row className="text-center">
                    <Col sm='12'>
                      <FormGroup className="mb-3">
                        <Input
                          type="textarea"
                          className="form-control"
                          name="quoteText"
                          id="quoteText"
                          value={quoteText}
                          onChange={(e) => setQuoteText(e.target.value)}
                          placeholder="Quote message"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='12'>
                      <FormGroup>
                        <Input
                          type="text"
                          name="author"
                          id="author"
                          placeholder="Author"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col sm='12'>
                      <Button color="primary">Add Quote</Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default CreateQuote;
