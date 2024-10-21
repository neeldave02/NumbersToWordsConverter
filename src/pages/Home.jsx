import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import InputForm from "../components/InputForm";
import DisplayResult from "../components/DisplayResult";
import Footer from "../components/Footer";

function Home() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetches the number conversion from back end and sets the result or error as well as loading
  const getNumberFromWord = async (number) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`http://localhost:5094/api/NumbersToWords/convert?number=${number}`);
      // checks for the bad request first
      if (response.status === 400) {
        const errorMessage = await response.text();
        setError(errorMessage);
      } else {
            // set the result
            const result = await response.text();
            setResult(result);
      }

    } catch (err) {
      setError(`An unexpected error occurred: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  // Handle convert on click
  const handleSubmit = async (number) => {
    setResult("");
    setError("");
    await getNumberFromWord(number);
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col md={8}>
          {/* Heading for the application */}
          <h1 style={{ textAlign: "center" }}>
            <span style={{ color: "#000710" }}>Number</span>{" "}
            <span style={{ color: "#ffbe00" }}>to</span>{" "}
            <span style={{ color: "#000710" }}>Words</span>{" "}
            <span style={{ color: "#ffbe00" }}>Converter</span>
          </h1>
          {/* Input box and button */}
          <InputForm onSubmit={handleSubmit} />
          {/* Display the result of number conversion and handle any errors */}
          <DisplayResult
            result={result}
            error={error}
            loading={loading}
            style={{ marginTop: "20px" }}
          />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
