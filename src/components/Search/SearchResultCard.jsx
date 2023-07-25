import { React, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"
import { Heart, HeartFill } from "react-bootstrap-icons"
import SubscriptionHandler from "../Subscribe/SubscriptionHandler"

function SearchResultCard({ searchResults, session, setSession }) {

    console.log(searchResults)

    return (
        <Row className="gy-3 active-popup">
            <p className="text-center m-0">Search Results</p>
            <div className='nav-divider d-flex mt-2'></div>

            {Array.isArray(searchResults) ? searchResults.map(thread => (
                <>
                    <Col sm={6} className=" d-flex justify-content-center ">
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                                <Row>

                                    <Col sm={{ span: 8 }} className="h-100">
                                        <Card.Title>{thread.title}</Card.Title>
                                        <Card.Text>
                                            {thread.description}
                                        </Card.Text>
                                    </Col>

                                    <Col sm={{ span: 4 }} className='d-flex justify-content-center align-items-center' >

                                        <SubscriptionHandler thread={thread} searchResults={searchResults} session={session} setSession={setSession} />

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