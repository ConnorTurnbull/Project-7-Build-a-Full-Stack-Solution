import React from "react";
import { Row, Col, Card, } from "react-bootstrap"

function ContentCard() {

    return (
        <Row className="gy-3">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx} sm={6} className=" d-flex justify-content-center ">
                    <Card  style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default ContentCard