import React from "react";
import { Row, Col, Card, } from "react-bootstrap"

function ContentCard({ posts }) {

    return (
        <Row className="gy-3 active-popup">
            <p className="text-center m-0">Thread title placeholder</p>
            <div className="nav-divider d-flex mt-2"></div>
            
            {Array.isArray(posts) ? posts.map(posts => (
                <Col sm={6} className=" d-flex justify-content-center g-5">
                    <Card border='secondary' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" style={{ height: '75%' }} variant="top" src={posts.imageUrl}/>
                        <Card.Body>
                            <Card.Title>{posts.postTitle}</Card.Title>
                            <Card.Text>
                                {posts.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            )) : <p>{posts?.message}</p>}
        </Row>
    )
}

export default ContentCard