import React from "react";
import { Row, Col, Card, } from "react-bootstrap"
import { Heart } from "react-bootstrap-icons"

function SearchResultCard() {

    return (
        <Row className="gy-3 active-popup">
            {Array.from({ length: 4 }).map((_, idx) => (
                <>
                    <Col key={idx} sm={6} className=" d-flex justify-content-center ">
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Row>

                                    <Col sm={{ span: 9}}>
                                        <Card.Title>Thread Title</Card.Title>
                                        <Card.Text>
                                            Description of the thread content.
                                        </Card.Text>
                                    </Col>
                                    
                                    <Col className='d-flex justify-content-center align-items-center' sm={{ span: 3}}>
                                        <Heart color='blue' size={24} />
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </>
            ))}
        </Row>
    )
}

export default SearchResultCard