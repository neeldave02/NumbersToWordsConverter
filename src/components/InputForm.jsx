import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const InputForm = ({ onSubmit }) => {
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(number); // Pass the number to the parent onSubmit handler
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
      />
      <Button
        type="submit"
        style={{
          backgroundColor: "#ffbc18",
          border: "None",
          fontWeight: "bold",
          color: "black",
          width: "100%",
          marginTop: "20px",
        }}
      >
        Convert
      </Button>
    </Form>
  );
};

export default InputForm;
