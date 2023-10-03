import { React, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap"


function ThreadView({ session, posts, setPostState, setDefaultState, setSearchState, threadState, setThreadState, selectThread, setSelectThread, setPosts, setPostId, threads }) {
    
    //Set Individual Post View:

    function setPostView() {

        setPostState(true)
        setSearchState(false)
        setDefaultState(false)
        setThreadState(false)

    }

    //Fetch posts for individual threads:

    function getPosts() {

        fetch("//localhost:4200/api/auth/posts?selectedThread=" + selectThread.id)
            .then(data => {
                return data.json()
            })
            .then(postData => {
                setPosts(postData)

            })

    }

    useEffect(() => {

        getPosts()
        

    }, [selectThread])

  
    return (
        <Row className="gy-3 active-popup">
        <p className="text-center m-0">{selectThread.title}</p>
        <div className="nav-divider d-flex mt-2"></div>
        
        {Array.isArray(posts) ? posts.map(posts => (
                        
            <Col sm={6} className=" d-flex justify-content-center g-5">
                <Card border='secondary' style={{ height: '30rem', width: '22rem' }}>
                    <Card.Img className="img-fluid card-img" style={{ height: '75%' }} variant="top" src={posts.imageUrl} />
                    {!session.user.viewedPosts.includes(posts.id) &&
                            (<Card.ImgOverlay style={{ height: '75%' }}>
                                <Button variant="primary" >
                                    New!
                                </Button>
                            </Card.ImgOverlay>)
                        }
                    <Card.Body style={{ height: '25%' }}>
                        <Card.Title>{posts.postTitle}</Card.Title>
                        <Card.Text>
                            {posts.text}
                        </Card.Text>
                        <Button variant="link" className="p-0" size="sm" onClick={() => { setPostId(posts.id); setPostView(); }}>
                            View Post
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            
        )) : null}
    </Row>
)
    
}

export default ThreadView