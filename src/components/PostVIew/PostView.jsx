import { React, useEffect, useState, useRef } from "react";
import { Row, Col, Card, InputGroup, Form, Button } from 'react-bootstrap';

function PostView({ postId, session }) {
    const [singlePost, setSinglePost] = useState({})
    const [text, setText] = useState("")
    const forename = session.user.forename
    const surname = session.user.surname
    const userId = session.userId
    let [comments, setComments] = useState([])
    const blank = useRef("")



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

    //Set post as read:

    function readPost() {

        fetch("//localhost:4200/api/auth/user/read", {
            method: "PATCH",
            body: JSON.stringify({ userId, postId }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
    }

    useEffect(() => {

        getPost()
        getComments()
        readPost()

    }, [])



    //Comment submit handler:

    const submitComment = async (e) => {
        e.preventDefault()
        blank.current.value = ""

        if (!text) {
            return
        }

        const formData = new FormData()
        formData.append("text", text)
        formData.append("postId", postId)
        formData.append("userId", userId)
        formData.append("forename", forename)
        formData.append("surname", surname)

        fetch("//localhost:4200/api/auth/comment", {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(setComments(comments => [...comments, { text, postId, userId, forename, surname }]))
            .then(setText(""))
    }

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
                        <Form.Control
                            type="text"
                            onChange={(e) => { setText(e.target.value); }}
                            placeholder="Write your comment here..."
                            as="textarea"
                            ref={blank}
                        />
                        <Button onClick={submitComment}>Submit</Button>

                    </InputGroup>
                </Col>
            </Row>

            <Row className="mt-3 justify-content-center">
                <Col sm={10} className="d-flex justify-content-center">
                    <Card className="p-2" border='secondary' style={{ width: '30rem' }}>
                        {Array.isArray(comments) ? comments.map(comment => (
                            <Card className="d-flex m-1 p-2 bg-light">
                                <p className="fw-light">{comment.forename} {comment.surname} commented:</p>
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