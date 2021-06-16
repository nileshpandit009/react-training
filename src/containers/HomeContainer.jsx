import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

function HomeContainer() {
  return (
    <Container className="d-flex justify-content-center p-5 fs-4">
      <Row xs="12">
        <Col xs="12">
          <Link to="/login">Login</Link>
        </Col>
        <Col xs="12">
          <Link to="/signup">Sign up</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContainer;
