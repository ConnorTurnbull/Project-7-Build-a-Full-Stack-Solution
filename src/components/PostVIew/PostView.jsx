import { React, useEffect, useState } from "react";
import { Row, Col, Card } from 'react-bootstrap';



function PostView({ postId }) {
    const [singlePost, setSinglePost] = useState({})

    console.log(postId)

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

    useEffect(() => {

        getPost()

    }, [])

    return (
        <>
            <Row className="gy-3 active-popup justify-content-center">

                <p className="text-center m-0 fw-bold">{singlePost.postTitle}</p>
                <div className="nav-divider d-flex mt-2"></div>

                <Col sm={6} className="d-flex justify-content-center">
                    <Card className="mb-3" border='secondary' style={{ width: '30rem', height: '20rem' }}>
                        <Card.Img className="img-fluid" style={{ height: '100%' }} src={singlePost.imageUrl} />
                    </Card>
                </Col>

            </Row>

            <Row className="gy-3 active-popup justify-content-center">
                <Col sm={10} className="d-flex justify-content-center">
                    <Card border='secondary' style={{ width: '30rem' }}>
                        <Card.Text>{singlePost.text} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis cumque, ut officiis molestias asperiores corporis eos illo unde sit fugiat repellat odio voluptate laborum dolores velit a ipsam sed dolorum corrupti. Debitis quo omnis enim rerum ut molestiae beatae dicta odio deleniti rem repellat itaque, minus aperiam delectus, porro assumenda?</Card.Text>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PostView