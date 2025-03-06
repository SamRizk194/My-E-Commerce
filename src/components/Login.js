import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Login() {
  const [formData, setFormData] = useState({
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

    setMessageStatus("Login successful!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="login-section">
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col xs={12}>
            <h1 className="display-4 mb-4">Login</h1>
            <p className="lead">Please enter your login details.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
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
                Login
              </Button>
            </Form>

            {messageStatus && (
              <div className="mt-4 alert alert-success">{messageStatus}</div>
            )}

            <div className="mt-4">
              <p className="text-center">
                Don't have an account?{" "}
                <a href="/register" className="text-decoration-none">
                  Register Now
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
