import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#000810",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <p style={{ margin: 0, color: '#ffbb20'}}>
        Developed by Neel Dave for the TechnologyOne Graduate Developer Test
      </p>
    </Container>
  );
};

export default Footer;
