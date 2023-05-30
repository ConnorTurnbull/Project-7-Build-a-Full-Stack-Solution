import React from "react";
import { Row, Col, Card, } from "react-bootstrap"

function ContentCard() {

    return (
        <Row className="gy-3 active-popup">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx} sm={6} className=" d-flex justify-content-center ">
                    <Card  style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="data:image/png;base64,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" />
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