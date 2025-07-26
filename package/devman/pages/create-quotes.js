import React, { useState, Fragment } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  Alert,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Spinner,
} from "reactstrap";
import { databases } from "../src/components/Appwrite";

const CreateQuote = () => {
  const [quoteText, setQuoteText] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!quoteText || !author) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      await databases.createDocument(
        "672625d20023d54e7812", // Database ID
        "672625df001d70c05b24", // Collection ID
        "unique()",
        { quoteText, author }
      );

      setSuccess("✅ Quote added successfully!");
      setQuoteText("");
      setAuthor("");

      // Auto-dismiss success message
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      setError("❌ Failed to add quote: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-0">
              <CardHeader >
                <h4 className="mb-0">📝 Add a New Quote</h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="quoteText"
                      id="quoteText"
                      value={quoteText}
                      onChange={(e) => setQuoteText(e.target.value)}
                      placeholder="Write your quote here..."
                      rows="4"
                      className="mb-3"
                    />
                  </FormGroup>

                  <FormGroup>
                    <Input
                      type="text"
                      name="author"
                      id="author"
                      placeholder="Author's name"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="mb-3"
                    />
                  </FormGroup>

                  <div className="d-grid gap-2">
                    <Button color="primary" disabled={loading}>
                      {loading ? (
                        <>
                          <Spinner size="sm" /> Adding...
                        </>
                      ) : (
                        "Add Quote"
                      )}
                    </Button>
                  </div>
                </Form>

                {error && (
                  <Alert color="danger" className="mt-3 text-center">
                    {error}
                  </Alert>
                )}

                {success && (
                  <Alert color="success" className="mt-3 text-center">
                    {success}
                  </Alert>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CreateQuote;
