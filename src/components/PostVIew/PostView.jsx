import React from "react";
import { Row, Col, Card } from 'react-bootstrap';

function PostView({ singlePost }) {

    return (

        <Row className="gy-3 active-popup justify-content-center">
            
            <p className="text-center m-0">Post view placeholder</p>
            <div className="nav-divider d-flex mt-2"></div>

            <Col sm={6} className=" d-flex justify-content-center g-5">
                <Card border='secondary' style={{ width: '20rem' }}>
                    <Card.Img className="img-fluid" style={{ height: '75%' }} variant="top" src='' />
                    <Card.Body>
                        <Card.Title>{singlePost.title}</Card.Title>
                        <Card.Text>
                            {singlePost.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        
        </Row>
    )
}

export default PostView