import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import Post from "../Post/Post";

function DefaultView({
    postId,
    setPostId,
    setPostState,
    setSearchState,
    setDefaultState,
    setThreadState,
    session }) {
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

        <Post 
            allPosts={allPosts}
            setPostId={setPostId}
            setPostView={setPostView}
            postId={postId}
            userId={session.userId}
        />
    )


}

export default DefaultView