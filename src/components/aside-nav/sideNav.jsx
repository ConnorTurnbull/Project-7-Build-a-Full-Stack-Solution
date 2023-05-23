import React, { useState } from "react";
import { Button, Image } from 'react-bootstrap';

import logo from "../login/icon-black-small.png"

function SideNav() {
    const [popup, setPopup] = useState(false)
    const togglePopup = () => {
        setPopup(!popup)
    }

    return (
        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-3">
            <h3 className="mt-2">Threads</h3>
            <a href="#">Thread 1</a>
            <a href="#">Thread 2</a>
            <a href="#">Thread 3</a>
            <a href="#">Thread 4</a>

            <Button size='sm' variant="primary" onClick={togglePopup}>
                New Thread
            </Button>

            {popup && (
                <div>
                    <div className="overlay" onClick={togglePopup}></div>

                    <div className="popup-content rounded">
                        <Image className="img-fluid d-block mx-auto" src={logo} alt="Groupomania company logo" />

                        <h3 className="text-center">Create a new thread</h3>

                        <Button className="close-btn position-absolute top-0 end-0 px-2" variant="danger" size="sm" onClick={togglePopup}>
                            X
                        </Button>

                        {/* <NewThreadForm /> */}
                    </div>
                </div>
            )}
        </aside>
    )
}

export default SideNav;