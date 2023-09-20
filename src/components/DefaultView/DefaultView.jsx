import React, { useEffect, useState } from "react";
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
    const userId = session.userId
    console.log("DefaultView")




    useEffect(() => {

        getAllPosts()

    }, [])


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
            session={session}

        />
    )
}

export default DefaultView