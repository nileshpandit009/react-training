import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Alert,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

function Login({
  email,
  password,
  handleEmailChange,
  handlePasswordChange,
  handleSubmit,
  emailErr,
  passwordErr,
  loginErr,
}) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 ">
      <Row xs="1" className="justify-content-center">
        <Col xs="12">
          <div className="p-2">
            <Alert hidden={loginErr === ""} color="danger">
              {loginErr}
            </Alert>
          </div>
          <Form /* onSubmit={handleSubmit} */ className="p-2">
            <FormGroup className="pb-2">
              <Label for="exampleEmail">Email</Label>
              <Input
                type="text"
                name="email"
                id="exampleEmail"
                placeholder="ex. jwilson@example.com"
                value={email}
                onChange={handleEmailChange}
                invalid={emailErr !== ""}
              />
              <FormFeedback>{emailErr}</FormFeedback>
            </FormGroup>
            <FormGroup className="pb-2">
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                invalid={passwordErr !== ""}
              />
              <FormFeedback>{passwordErr}</FormFeedback>
            </FormGroup>
            <Button
              data-testid="login-button"
              type="button"
              onClick={handleSubmit}
              color="primary"
            >
              Login
            </Button>
          </Form>
          <div>
            <span className="p-2">
              Don't have an account? <Link to="/signup">Sign up.</Link>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
