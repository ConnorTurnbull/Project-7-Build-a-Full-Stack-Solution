import React, { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import { CheckCircleFill } from "react-bootstrap-icons"

const LoginHandler = ({ setAuthenticated, setSession, setDefaultState, threads }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    function setAuth() {
        setAuthenticated(true)
        setDefaultState(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/login", {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())

            .then(session => {
                sessionStorage.setItem('userId', session.userId)
                setSession(session)
            })
            .then(setSuccess(true))
            .then(setTimeout(setAuth, 2000))
    }


    if (success) return (
        <Col>
            <Row>
                <div className="d-flex justify-content-center my-3"> <CheckCircleFill fill="green" size="32px" /></div>
            </Row>

            <Row>
                <p className="d-flex justify-content-center my-2">Welcome back!</p>
            </Row>
        </Col >
    )

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>
        </Form>
    )

}

export default LoginHandler