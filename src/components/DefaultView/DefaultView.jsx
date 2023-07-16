import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';

function DefaultView({ setPostId, setPostState, setSearchState, setDefaultState, setThreadState }) {
    const [allPosts, setAllPosts] = useState([])

    const getAllPosts = async => {
        fetch("//localhost:4200/api/auth/posts/all")
            .then(data => {
                return data.json()
            })
            .then(postData => {
                console.log(postData)
                setAllPosts(postData)
            })
    }

    useEffect(() => {

        getAllPosts()

    }, [])

    function setPostView() {
        
        setPostState(true)
        setSearchState(false)
        setDefaultState(false)
        setThreadState(false)
        
    }

    return (
        <Row className="gy-3 active-popup w-100">

            <p className="text-center m-0">Home</p>
            <div className="nav-divider d-flex mt-2"></div>

            {Array.isArray(allPosts) ? allPosts.map(post => (
                <Col sm={6} className=" d-flex justify-content-center g-5">
                    <Card border='secondary' style={{ width: '20rem' }}>
                        <Card.Img className="img-fluid" style={{ height: '75%' }} variant="top" src={post.imageUrl} />
                        <Card.Body>
                            <Card.Title>{post.postTitle}</Card.Title>
                            <Card.Text>
                                {post.text}
                            </Card.Text>
                            <Button variant="link" className="p-0" size="sm" onClick={() => { setPostId(post._id); setPostView() }}>
                                View Post
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>)) : <p className="d-flex justify-content-center">No posts found!</p>}

        </Row>
    )
}

export default DefaultView