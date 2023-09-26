import React, { useState } from "react"
import { Button, Image } from 'react-bootstrap';
import NewPostHandler from "../NewPost/NewPostHandler"
import logo from "../../images/icon-black-small.png"

function NewPostPopup({ }) {
    const [popup, setPopup] = useState(false)
    const togglePopup = () => {
        setPopup(!popup)
    }

    return (
        <>
            <Button className='w-100 text-nowrap mobile-font' size='sm' variant="light" onClick={togglePopup}>
                New Post
            </Button>

            {popup && (
                <div>
                    <div className="overlay" onClick={togglePopup}></div>

                    <div className="popup-new-post rounded">
                        <Image className="img-fluid d-block mx-auto" src={logo} alt="Groupomania company logo" />

                        <h3 className="text-center">Create a new post</h3>

                        <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={togglePopup}>
                            X
                        </Button>

                        <NewPostHandler />
                    </div>
                </div>
            )}
        </>
    )
}

export default NewPostPopup


