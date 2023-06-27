import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';

function NewPostHandler() {
    const [selectedThread, setSelectedThread] = useState('')
    const [postTitle, setPostTitle] = useState('')
    const [text, setText] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [confirmation, setConfirmation] = useState(false)

    const [threads, setThreads] = useState([])

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

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/post", {
            method: 'POST',
            body: JSON.stringify({ selectedThread, postTitle, text, imageUrl }),
            headers: { 'Content-Type': 'application/json' }
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
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="select">Which thread is this post for?</Form.Label>
                <Form.Select id="select" size="sm" onChange={(e) => setSelectedThread(e.target.value)}>
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
                <Form.Control as="textarea" placeholder="Enter some text for your post" rows={5} size="sm" onChange={(e) => setText(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upload image</Form.Label>
                <Form.Control type="file" size="sm" onChange={(e) => setImageUrl(e.target.value)} />
            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>

        </Form>
    )
}

export default NewPostHandler;