import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "../../scss/popup.scss"
import logo from "../../images/icon-black-small.png"
import LoginHandler from "./LoginHandler"

function LoginPopup({ setAuthenticated, setSession, setDefaultState, threads }) {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  }
  
  // // Prevents page scroll while window is open
  if (popup) {
    document.body.classList.add('active-popup')
  } else {
    document.body.classList.remove('active-popup')
  }

  return (
    <>
      <Button className='w-100 text-nowrap' variant="light" size='sm' onClick={togglePopup}>
        Log In
      </Button>

      {popup && (
        <div>
          <div className="overlay" onClick={togglePopup}></div>

          <div className="popup-content rounded">
            <Image className="img-fluid d-block mx-auto" src={logo} alt="Groupomania company logo" />
            
            <h3 className="text-center">Login</h3>
            
            <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={togglePopup}>
              X
            </Button>
            
            <LoginHandler
             
              setAuthenticated={setAuthenticated} 
              setSession={setSession} 
              setDefaultState={setDefaultState}
              threads={threads}
            
            />

          </div>
        </div>
      )}
    </>
  )
}

export default LoginPopup