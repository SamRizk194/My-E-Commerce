import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <div className="about-section">
      <Container className="py-5">
        <Row className="text-center">
          <Col md={12}>
            <h1 className="display-4 mb-4">About Us</h1>
            <p className="lead">
              We are a passionate team dedicated to bringing you the finest
              collection of products. Our aim is to provide quality,
              convenience, and satisfaction through our carefully curated
              selection.
            </p>
            <p>
              Our store offers a wide range of products to suit all needs,
              whether you are looking for the latest trends, high-quality
              essentials, or something unique. We believe in exceptional
              customer service and strive to provide an enjoyable shopping
              experience.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h3 className="text-center">Our Mission</h3>
            <p className="text-center">
              To offer an unbeatable selection of top-quality products at
              competitive prices, with excellent customer service that ensures
              an exceptional shopping experience for all our customers.
            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h3 className="text-center">Why Choose Us?</h3>
            <ul className="text-center list-unstyled">
              <li>Wide variety of products for every need.</li>
              <li>High-quality customer service and support.</li>
              <li>Competitive prices on all items.</li>
              <li>Fast and reliable shipping.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
