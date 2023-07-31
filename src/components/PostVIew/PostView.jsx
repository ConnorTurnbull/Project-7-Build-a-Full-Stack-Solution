import { React, useEffect, useState } from "react";
import { Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';



function PostView({ postId, session }) {
    const [singlePost, setSinglePost] = useState({})
    const [text, setText] = useState("")
    const [userId, setUserId] = useState("")
    const [comments, setComments] = useState([])

    //Get post:

    function getPost() {
        fetch("//localhost:4200/api/auth/post?id=" + postId)
            .then(data => {
                return data.json()
            })
            .then(postData => {
                setSinglePost(postData)
                console.log(postData)
            })
    }

    //Get comments:

    const getComments = async () => {

        fetch("//localhost:4200/api/auth/comments?postId=" + postId)
            .then(data => {
                return data.json()
            })
            .then(comments => {
                setComments(comments)
            })
    }

    useEffect(() => {

        getPost()
        getComments()

    }, [])

    //Comment submit handler:

    const submitComment = async (e) => {
        e.preventDefault()
        

        const formData = new FormData()
        formData.append("text", text)
        formData.append("postId", postId)
        formData.append("userId", userId)

        fetch("//localhost:4200/api/auth/comment", {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
       
    }

    console.log(comments) 


    return (
        <>
            <Row className="gy-3 justify-content-center">

                <p className="text-center m-0 fw-bold">{singlePost.postTitle}</p>
                <div className="nav-divider d-flex mt-2"></div>

                <Col sm={10} className="d-flex justify-content-center">
                    <Card className="mb-3" border='secondary' style={{ width: '30rem', height: '20rem' }}>
                        <Card.Img fluid style={{ height: '100%' }} src={singlePost.imageUrl} />
                    </Card>
                </Col>

            </Row>

            <Row className="justify-content-center">
                <Col sm={10} className="d-flex justify-content-center">
                    <Card className="p-2" border='secondary' style={{ width: '30rem' }}>
                        <Card.Text className="m-0">{singlePost.text} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cumque, ut officiis molestias asperiores corporis eos illo unde sit fugiat repellat odio voluptate laborum dolores velit a ipsam sed dolorum corrupti. Debitis quo omnis enim rerum ut molestiae beatae dicta odio deleniti rem repellat itaque, minus aperiam delectus, porro assumenda?</Card.Text>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-3 justify-content-center">
                <Col sm={10} className="d-flex justify-content-center">
                    <InputGroup border='secondary' style={{ width: '30rem' }}>
                        <Form.Control onChange={(e) => { setText(e.target.value); setUserId(session.userId) }} placeholder="Write your comment here..." as="textarea" aria-label="Submit button" />
                        <Button onClick={submitComment}>Submit</Button>
                    </InputGroup>
                </Col>
            </Row>

            <Row className="mt-3 justify-content-center">
                <Col sm={10} className="d-flex justify-content-center">
                    <Card className="p-2" border='secondary' style={{ width: '30rem' }}>
                        {Array.isArray(comments) ? comments.map(comment => (
                            <Card className="d-flex m-1 p-2 bg-light">
                                <p className="m-0">{comment.text}</p>
                            </Card>
                        )) :
                            <p className="d-flex justify-content-center">
                                Be the first to comment!
                            </p>}
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PostView