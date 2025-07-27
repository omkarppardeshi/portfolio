import React, { useState, useEffect } from "react";
import { client, databases, deleteDoc, doc } from "../src/components/Appwrite"; // Import the databases instance
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Card,
  CardBody,
  CardHeader,
  Spinner,
  Table,
} from "reactstrap";
import { MdDelete } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useRouter } from "next/navigation";

const QuoteListing = () => {
  const [quote, setQuote] = useState([]);
  const [author, setAuthor] = useState("");
  const router = useRouter();

  console.log("Qoutes", quote);

  useEffect(() => {
    const fetchLatestQuote = async () => {
      try {
        const response = await databases.listDocuments(
          "672625d20023d54e7812", // Actual database ID
          "672625df001d70c05b24" // Actual collection ID
        );

        setQuote(response.documents);
      } catch (error) {
        console.error("Failed to fetch documents:", error);
      }
    };

    fetchLatestQuote();
  }, []);

  const handleDelete = async (id) => {
    if (!id) {
      console.error("Invalid document ID:", id);
      return;
    }

    try {
      await databases.deleteDocument(
        "672625d20023d54e7812", // database ID
        "672625df001d70c05b24", // collection ID
        id // document ID (e.g., item.$id)
      );

      setQuote((prev) => prev.filter((quote) => quote.$id !== id));
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between align-items-center">
            📝 Quote Listing
            <Button color="primary" onClick={() => router.push("/create-quote")}>
              Add Quote
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Table>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Quote text</th>
                <th>Author</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {quote.map((item, index) => (
                <tr key={item.$id}>
                  <td>{index + 1}</td>
                  <td>{item.quoteText}</td>
                  <td>{item.author}</td>
                  <td className="text-center">
                    <GoDotFill
                      color={item.status ? "green" : "red"}
                      size={20}
                    />
                  </td>
                  <td>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(item.$id)}
                    >
                      <MdDelete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default QuoteListing;
