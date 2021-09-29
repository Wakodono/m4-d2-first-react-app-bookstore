import React from "react";
import { Card } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import { Row, Col } from "react-bootstrap";

const LatestRelease = () => (
    <Row>
        {fantasy.map((book) => (
      <Col sm={12} md={3} className="mb-3">
          <Card style={{ height: '400px' }}>
            <Card.Img className="img-fluid" variant="top" src={book.img} />
            {/* <Card.Body>
              <Card.Title>{book.title}</Card.Title>
            </Card.Body> */}
          </Card>
      </Col>
        ))}
    </Row>
);

export default LatestRelease;
