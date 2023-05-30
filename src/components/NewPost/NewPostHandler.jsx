import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function NewPostHandler() {
    const [thread, setThread] = useState('')
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    const getThreads = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/thread")           
        .then(data => {
            return data.json()
        })
        .then(thread => {
            console.log(thread)
        })
    }
        
    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/post", {
            method: 'POST', 
            body: JSON.stringify({ thread, title, text }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        
    }

    return (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="select">Which thread is this post for?</Form.Label>
                <Form.Select id="select" size="sm" onChange={(e) => setThread(e.target.value)}>
                    <option>Choose a thread</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter a title for your post" size="sm" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            
            <Form.Group className="mb-3">
                <Form.Label>Enter text here</Form.Label>
                <Form.Control as="textarea" placeholder="Enter some text for your post" rows={5} size="sm" onChange={(e) => setText(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Upload media</Form.Label>
                <Form.Control type="file"  size="sm"/>
            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm" onClick={getThreads}>
                Submit
            </Button>

        </Form>
    )
}

export default NewPostHandler;