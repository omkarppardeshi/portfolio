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
import ProtectedRoute from "./protectedRoute";

const CreateTicker = () => {
  const [ticker, setTicker] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!ticker) {
      setError("Fields are required.");
      setLoading(false);
      return;
    }

    try {
      await databases.createDocument(
        "672625d20023d54e7812", // Database ID
        "6885f197001ec5f8e3b8", // Collection ID
        "unique()",
        { ticker_name: ticker }
      );

      setSuccess("✅ Ticker added successfully!");
      setTicker("");

      // Auto-dismiss success message
      setTimeout(() => setSuccess(""), 3000);
    } catch (error) {
      setError("❌ Failed to add ticker: " + error.message);
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
                <h4 className="mb-0">📝 Add a New Ticker</h4>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>                  
                  <FormGroup>
                    <Input
                      type="text"
                      name="ticker_name"
                      id="ticker_name"
                      placeholder="Ticker name"
                      value={ticker}
                      onChange={(e) => setTicker(e.target.value)}
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
                        "Add Ticker"
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

export default ProtectedRoute(CreateTicker);
