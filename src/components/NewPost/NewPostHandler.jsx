import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';

function NewPostHandler() {
    
    const [selectedThread, setSelectedThread] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [postText, setPostText] = useState('')
    const [imageUrl, setImageUrl] = useState({})


    const [confirmation, setConfirmation] = useState(false)

    const [threads, setThreads] = useState([])


    //Get all threads for drop-down menu

    const getThreads = async () => {

        fetch("//localhost:4200/api/auth/thread")
            .then(data => {
                return data.json()
            })
            .then(threadData => {
                console.log(threadData)
                setThreads(threadData)
            })
    }


    useEffect(() => {
        getThreads()
    }, [])


    //New post submission handler

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const formData = new FormData()
        formData.append("selectedThread", selectedThread)
        formData.append("postTitle", postTitle)
        formData.append("postText", postText)
        formData.append("imageUrl", imageUrl)
        
        fetch("//localhost:4200/api/auth/post", {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(setConfirmation(true))

    }


    if (confirmation) {
        return (

            <p className="d-flex justify-content-center">New post created!</p>

        )
    }

    return (
        <Form id="form" onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label htmlFor="selectedThread">Which thread is this post for?</Form.Label>
                <Form.Select id="selectedThread" size="sm" onChange={(e) => setSelectedThread(e.target.value)}>
                    <option>Choose a thread</option>
                    {threads.map(thread => (
                        <option value={thread._id} key={thread._id}>{thread.title}</option>
                    ))}
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter a title for your post" size="sm" onChange={(e) => setPostTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Enter text here</Form.Label>
                <Form.Control as="textarea" placeholder="Enter some text for your post" rows={5} size="sm" onChange={(e) => setPostText(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upload image</Form.Label>
                <Form.Control type="file" size="sm" onChange={(e) => setImageUrl(e.target.files[0])} />
            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>

        </Form>
    )
}

export default NewPostHandler;