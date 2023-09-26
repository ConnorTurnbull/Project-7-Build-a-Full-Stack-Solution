import React, { useState } from "react"
import { Button, Image } from 'react-bootstrap';
import NewThreadHandler from "../NewThread/NewThreadHandler"
import logo from "../../images/icon-black-small.png"

function NewThreadPopup() {
    const [popup, setPopup] = useState(false)
    const togglePopup = () => {
        setPopup(!popup)
    }

    return (
        <>
            <Button className='w-100 text-nowrap mobile-font' size='sm' variant="light" onClick={togglePopup}>
                New Thread
            </Button>

            {popup && (
                <div>
                    <div className="overlay" onClick={togglePopup}></div>

                    <div className="popup-new-post rounded">
                        <Image className="img-fluid d-block mx-auto" src={logo} alt="Groupomania company logo" />

                        <h3 className="text-center">Create a new thread</h3>

                        <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={togglePopup}>
                            X
                        </Button>

                        <NewThreadHandler />
                    </div>
                </div>
            )}
        </>
    )
}

export default NewThreadPopup
