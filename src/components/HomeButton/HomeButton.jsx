import React from "react";
import { Button } from "react-bootstrap";
import { House } from "react-bootstrap-icons"

function HomeButton({ setDefaultState, setThreadState, setSearchState, setPostState, setSelectThread }) {

    function Home() {
        setDefaultState(true)
        setThreadState(false)
        setSearchState(false)
        setPostState(false)
        setSelectThread("")
    }

    return (
        <div className="d-flex justify-content-center m-3">
            <Button className="browse-button mobile-font d-flex align-items-center" variant="light" size="sm" onClick={Home}>
                <House /> Home
            </Button>
        </div>
    )
}

export default HomeButton