import React, { useState } from "react"
import { Form, Button, Container } from "react-bootstrap"
import Popup from "./loginPopup"

const LoginHandler = ({ setAuthenticated, setSession }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


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
            setAuthenticated(true)
            
        })
           
    }

    // if (authenticated) {
    //     console.log(authenticated)
        
    //     return (
            
    //         <Container fluid className="text-center">
    //             <p>Welcome Back!</p>
    //         </Container>
            
    //     )
    // }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

            </Form.Group>

            <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
            </Button>
        </Form>
    )
}

export default LoginHandler