import React, { useState } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import { CheckCircleFill } from "react-bootstrap-icons"

const SignUpHandler = ({ setAuthenticated, setSession, setDefaultState }) => {
    const [forename, setForename] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)

    function setAuth() {
        setAuthenticated(true)
        setDefaultState(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        fetch("//localhost:4200/api/auth/signup", {
            method: 'POST',
            body: JSON.stringify({ forename, surname, email, password }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())

            .then(() => { 
                fetch("//localhost:4200/api/auth/login", {
                    method: 'POST',
                    body: JSON.stringify({ email, password }),
                    headers: { 'Content-Type': 'application/json' }
                }).then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }else {
                        throw new Error(res.json())
                    }
                })
                    .then(session => {
                        sessionStorage.setItem('userId', session.userId)
                        setSession(session)
                    })
                    .then(setSuccess(true))
                    .then(setTimeout(setAuth, 2000)
                    ).catch(
                        (error) => {
                            alert(error.error)
                        }
                    )
        
            }).catch(
                (error) => {
                    alert(error.message)
                }
            )
    }

    if (success) return (
        <Col>
            <Row>
                <div className="d-flex justify-content-center my-3"> <CheckCircleFill fill="green" size="32px" /></div>
            </Row>

            <Row>
                <p className="d-flex justify-content-center my-2">Account created!</p>
            </Row>

            <Row>
                <p className="d-flex justify-content-center my-2">Logging you in...</p>
            </Row>
        </Col >
    )

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Forename">

                <Form.Label>Forename</Form.Label>
                <Form.Control type="name" placeholder="Enter forename" onChange={(e) => setForename(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="Surname">

                <Form.Label>Surname</Form.Label>
                <Form.Control type="name" placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="Password">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="Re-enter Password">

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