import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from 'react-bootstrap';
import ReadPost from "../ReadPost/ReadPost";
import UnreadPost from "../UnreadPost/UnreadPost";

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

        <UnreadPost
            allPosts={allPosts}
            setPostId={setPostId}
            setPostView={setPostView}
        />

    )
}

export default DefaultView