import { useState } from "react";
import { Button, Image } from "react-bootstrap";
import "../../scss/popup.scss"
import logo from "../../images/icon-black-small.png"
import SignUp from "./SignUpHandler";


function Popup() {
  const [popup, setPopup] = useState(false)
  const togglePopup = () => {
    setPopup(!popup)
  }

  // Prevents page scroll while window is open
  if (Popup) {
    document.body.classList.add('active-popup')
  } else {
    document.body.classList.remove('active-popup')
  }

  return (
    <>
      <Button className='w-100 text-nowrap' size='sm' variant="light" onClick={togglePopup}>
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
            
            <SignUp />

          </div>
        </div>
      )}
    </>
  )
}

export default Popup