import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <Container className="py-5">
        <Row className="text-center mb-5">
          <Col xs={12}>
            <h1 className="display-4 mb-4">Contact Us</h1>
            <p className="lead">
              If you have any questions or need further information, feel free
              to contact us. We are here to help!
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
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

              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button
                variant=""
                type="submit"
                className="btn btn-outline-dark w-100"
              >
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col xs={12}>
            <h3 className="text-center mb-4">Our Contact Information</h3>
            <ul className="list-unstyled text-center">
              <li>
                <strong>Address:</strong> 123 Street, City, Country
              </li>
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Phone:</strong> +1 234 567 890
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
