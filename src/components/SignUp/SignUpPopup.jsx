import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "../../scss/popup.scss"
import logo from "../../images/icon-black-small.png"
import SignUpHandler from "./SignUpHandler";


function SignUpPopup({ setAuthenticated, setSession, setDefaultState }) {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  }

  return (
    <>
      <Button className='w-100 text-nowrap mobile-font' size='sm' variant="light" onClick={togglePopup}>
        Sign Up
      </Button>

      {popup && (
        <div>
          <div className="overlay" onClick={togglePopup}></div>
          <div className="popup-content rounded">
            <Image className="img-fluid d-block mx-auto" src= {logo} alt="Groupomania company logo"/>
            <h3 className="text-center">Sign Up</h3>
            <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={togglePopup}>
              X
            </Button>
            
            <SignUpHandler 
              setAuthenticated={setAuthenticated}
              setSession={setSession} 
              setDefaultState={setDefaultState}
            />

          </div>
        </div>
      )}
    </>
  )
}

export default SignUpPopup