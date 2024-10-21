import React from "react";
import { Alert, Spinner } from "react-bootstrap";

const DisplayResult = ({ result, error, loading, style }) => {
  if (loading) {
    return (
      <div>
        <Spinner animation="border" role="status" style={style}>
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="danger" style={style}>
        {error}
      </Alert>
    );
  }

  if (result) {
    return (
      <Alert variant="success" style={style}>
        {result}
      </Alert>
    );
  }

  return null;
};

export default DisplayResult;
