import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import "./popup.css"
import logo from "./icon-black-small.png"

function Signup() {
  const [signup, setSignup] = useState(false)

  const toggleSignup = () => {
    setSignup(!signup)
  }

  // Prevents page scroll while window is open
  if (Signup) {
    document.body.classList.add('active-popup')
  } else {
    document.body.classList.remove('active-popup')
  }

  return (
    <>
      <Button className='signup-button px-3 text-nowrap' size='sm' variant="light" onClick={toggleSignup}>
        Sign Up
      </Button>

      {signup && (
        <div>
          <div className="overlay" onClick={toggleSignup}></div>
          <div className="popup-content rounded">
            <Image className="img-fluid d-block mx-auto" src= {logo} alt="Groupomania company logo"/>
            <h3 className="text-center">Sign Up</h3>
            <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={toggleSignup}>
              X
            </Button>
            
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicPassword">
                
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />

              </Form.Group>

              <Button className="d-grid mx-auto" variant="primary" type="submit" size="sm">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      )}
    </>
  )
}

export default Signup