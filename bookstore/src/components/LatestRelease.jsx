import React from "react";
import { Card } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import { Container, Row, Col } from "react-bootstrap";

const LatestRelease = () => (
  <Container>
    <Row>
        {fantasy.map((book) => (
      <Col sm={12} md={3}>
          <Card>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body>
          </Card>
      </Col>
        ))}
    </Row>
  </Container>
);

export default LatestRelease;
