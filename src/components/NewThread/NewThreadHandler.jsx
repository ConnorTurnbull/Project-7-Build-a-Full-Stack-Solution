import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function NewThreadHandler() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [confirmation, setConfirmation] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/thread", {
            method: 'POST', 
            body: JSON.stringify({ title, description }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(setConfirmation(true))
        
    }
    
    if (confirmation) {
        return (

            <p className="d-flex justify-content-center">New thread created!</p>

        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter a title" size="sm" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" placeholder="Enter a short description of the thread..." rows={5} size="sm" onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>
        </Form>
    )
}

export default NewThreadHandler