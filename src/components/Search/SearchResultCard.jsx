import React from "react";
import { Row, Col, Card, } from "react-bootstrap"
import { Heart } from "react-bootstrap-icons"

function SearchResultCard({ searchResults }) {

    return (
        <Row className="gy-3 active-popup">
            {Array.isArray(searchResults) ? searchResults.map(thread => (
                <>
                    <Col sm={6} className=" d-flex justify-content-center ">
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Row>

                                    <Col sm={{ span: 9 }}>
                                        <Card.Title>{thread.title}</Card.Title>
                                        <Card.Text>
                                            {thread.description}
                                        </Card.Text>
                                    </Col>

                                    <Col className='d-flex justify-content-center align-items-center' sm={{ span: 3 }}>
                                        <Heart color='blue' size={24} />
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                </>
            )) : <p>{searchResults?.message}</p>}
        </Row>
    )
}

export default SearchResultCard