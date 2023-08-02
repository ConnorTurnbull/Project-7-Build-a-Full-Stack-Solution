import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"

const SignUpHandler = () => {
    const [forename, setForename] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/signup", {
            method: 'POST',
            body: JSON.stringify({ forename, surname, email, password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())

            .then(session => { console.log(session) })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Forename</Form.Label>
                <Form.Control type="name" placeholder="Enter forename" onChange={(e) => setForename(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Surname</Form.Label>
                <Form.Control type="name" placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>
        </Form>
    )
}

export default SignUpHandler