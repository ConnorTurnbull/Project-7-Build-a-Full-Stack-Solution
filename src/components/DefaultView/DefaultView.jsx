import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import ReadPost from "../ReadPost/ReadPost";
import UnreadPost from "../UnreadPost/UnreadPost";

function DefaultView({
    postId,
    setPostId,
    setPostState,
    setSearchState,
    setDefaultState,
    setThreadState,
    session }) {
    const [allPosts, setAllPosts] = useState([])
    // const [postRead, setPostRead] = useState(session.user.viewedPosts.includes(postId))
    // console.log(postRead)

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

    // if (postRead) {

    //     return (

    //         <ReadPost
    //             allPosts={allPosts}
    //             setPostId={setPostId}
    //             setPostView={setPostView}

    //         />
    //     )
    // }

    return (

        <UnreadPost 
            allPosts={allPosts}
            setPostId={setPostId}
            setPostView={setPostView}
        />
    )


}

export default DefaultView

{/* <UnreadPost 
allPosts={allPosts}
setPostId={setPostId}
setPostView={setPostView}
/> */}
