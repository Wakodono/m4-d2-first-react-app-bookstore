import React from 'react'
import { Jumbotron, Button, Row, Col } from 'react-bootstrap'

export default function MyJumbotron() {
    return (
    
       <Row className ="d-flex justify-content-center text-center mt-3">
            <Col>
                <Jumbotron>
                    <h1>WAKOSTONES!</h1>
                    <p>
                        Non finction and a little manga.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Col>
       </Row>
    )
}