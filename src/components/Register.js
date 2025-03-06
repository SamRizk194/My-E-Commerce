import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [messageStatus, setMessageStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessageStatus("Registration successful!");
    setFormData({ username: "", email: "", password: "" });
  };

  return (
    <div className="register-section">
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col xs={12}>
            <h1 className="display-4 mb-4">Register</h1>
            <p className="lead">Create a new account.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant=""
                type="submit"
                className="btn btn-outline-dark w-100"
              >
                Register
              </Button>
            </Form>

            {messageStatus && (
              <div className="mt-4 alert alert-success">{messageStatus}</div>
            )}

            <div className="mt-4">
              <p className="text-center">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login here
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
