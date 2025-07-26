import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { MdLogout, MdDarkMode, MdLightMode } from "react-icons/md";
import { useRouter } from "next/router";
import { Account } from "appwrite";
import { client } from "../src/components/Appwrite";
import BlogListing from "./blog-listing";
import QuoteListing from "./quote-listing";

const account = new Account(client);

const AdminDashboard = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("quotes");
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const router = useRouter();

  useEffect(() => {
    account
      .getSession("current")
      .then(() => setIsAuthenticated(true))
      .catch(() => router.push("/admin-login"));
  }, []);

  const handleLogout = async () => {
    await account.deleteSession("current");
    router.push("/admin-login");
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      document.body.classList.toggle("dark-mode", !prev);
      return !prev;
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case "quotes":
        return <QuoteListing/>
      case "blogs":
        return <BlogListing />;
      default:
        return <p>Select a tab.</p>;
    }
  };

  if (isAuthenticated === null) return null;

  return (
    <div className={`admin-dashboard ${isDarkMode ? "dark" : ""}`}>
      <Navbar color="dark" dark expand="md" className="mb-4">
        <NavbarBrand href="/">Admin Dashboard</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Button color="danger" onClick={handleLogout}>
              <MdLogout /> Logout
            </Button>
          </NavItem>
        </Nav>
      </Navbar>

      <Container fluid>
        <Row>
          <Col md="2" className="bg-light p-3 border-end min-vh-100">
            <Nav vertical pills>
              <NavItem>
                <NavLink
                  href="#"
                  active={activeTab === "quotes"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("quotes");
                  }}
                >
                  Quotes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  active={activeTab === "blogs"}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab("blogs");
                  }}
                >
                  Blog Posts
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="10">{renderContent()}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminDashboard;
