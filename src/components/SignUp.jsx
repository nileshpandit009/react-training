import React from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Row } from "reactstrap";
import FormInput from "./FormInput";

function SignUp({
  handleChange,
  errors,
  handleSubmit,
  submitError,
  submitSuccess,
}) {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row xs="1" className="justify-content-center">
        <Col xs="8">
          <Alert hidden={submitError === ""} color="danger">
            {submitError}
          </Alert>
        </Col>
        <Col xs="8">
          <Alert hidden={submitSuccess === ""} color="success">
            {submitSuccess}
          </Alert>
        </Col>
        <Col xs="8">
          <Form
            onSubmit={handleSubmit}
            className="p-3 border border-3 border-light rounded-3"
          >
            <FormInput
              id="fullname"
              name="fullname"
              label="Full Name"
              placeholder="Ex. Joe Wilson"
              onChange={handleChange}
              invalid={errors.fullname !== ""}
              errorMessage={errors.fullname}
            />
            <FormInput
              id="email"
              name="email"
              label="Email"
              placeholder="Ex. jwilson@example.com"
              onChange={handleChange}
              invalid={errors.email !== ""}
              errorMessage={errors.email}
            />
            <FormInput
              id="username"
              name="username"
              label="Username"
              placeholder="Ex. jwilson123"
              onChange={handleChange}
              invalid={errors.username !== ""}
              errorMessage={errors.username}
            />
            <FormInput
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Ex. Joe Wilson"
              onChange={handleChange}
              invalid={errors.password !== ""}
              errorMessage={errors.password}
            />
            <FormInput
              id="type"
              name="type"
              label="Account Type"
              type="select"
              onChange={handleChange}
              invalid={errors.type !== ""}
              errorMessage={errors.type}
            >
              <option value="">Select account type</option>
              <option value="public">Public</option>
              <option value="private">Private</option>
            </FormInput>
            <FormInput
              id="acceptTerms"
              name="acceptTerms"
              label={
                <>
                  <span>I Accept the </span>
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </>
              }
              type="checkbox"
              onChange={handleChange}
              invalid={errors.acceptTerms !== ""}
              errorMessage={errors.acceptTerms}
            />
            <Button type="submit" color="primary" className="mt-2">
              Sign Up
            </Button>
          </Form>
        </Col>
        <Col xs="8">
          <span className="p-2">
            Already have an account? <Link to="/login">Login.</Link>
          </span>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
