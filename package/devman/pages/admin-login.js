import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Button, Label, Card, CardBody, CardHeader, Spinner } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { client } from "../src/components/Appwrite";
import { Account } from "appwrite";
import { useRouter } from "next/router";

const account = new Account(client);

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const { email, password } = userData;
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    account.getSession('current')
      .then(() => setIsLoggedIn(true))
      .catch(() => {
        setIsLoggedIn(false);
        // toast.info("Session expired or not logged in.");
      });
  }, []);

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      toast.warn("Please fill all fields.");
      return;
    }

    setLoading(true);
    try {
      await account.createEmailPasswordSession(email, password);
      toast.success("Login successful.");
      setIsLoggedIn(true);
      router.push("/Admin-dashboard");
    } catch (err) {
      toast.error(err.message || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession('current');
      toast.success("Logged out successfully.");
      setIsLoggedIn(false);
      router.push("/admin-login");
    } catch (err) {
      toast.error("Logout failed.");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow">
            <CardHeader className="bg-warning text-white text-center">
              <h4 className="mb-0">{isLoggedIn ? "You're logged in" : "Admin Login"}</h4>
            </CardHeader>
            <CardBody>
              {!isLoggedIn ? (
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={onChange}
                      required
                    />
                  </FormGroup>
                  <Button color="warning" type="submit" block disabled={loading}>
                    {loading ? <Spinner size="sm" /> : "Login"}
                  </Button>
                </Form>
              ) : (
                <div className="text-center">
                  <Button color="danger" onClick={logout} block>
                    Logout
                  </Button>
                </div>
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ToastContainer position="top-center" />
    </Container>
  );
};

export default Login;
