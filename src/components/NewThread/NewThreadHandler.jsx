import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

function NewThreadHandler() {
    const [title, setTitle] = useState('')
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/thread", {
            method: 'POST', 
            body: JSON.stringify({ title }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
        
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter a title" size="sm" onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>
        </Form>
    )
}

export default NewThreadHandler