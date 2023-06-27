import { React, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"
import { Heart, HeartFill } from "react-bootstrap-icons"
import SubscriptionHandler from "../Subscribe/SubscriptionHandler"

function SearchResultCard({ searchResults }) {

    console.log(searchResults)

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

                                        <SubscriptionHandler thread={thread} searchResults={searchResults} />
                                            
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