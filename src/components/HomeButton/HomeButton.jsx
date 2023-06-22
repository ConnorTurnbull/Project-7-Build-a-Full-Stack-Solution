import React from "react";
import { Button } from "react-bootstrap";
import { House } from "react-bootstrap-icons"

function HomeButton({ setDefaultState, setThreadState, setSearchState }) {

    function Home() {
        setDefaultState(true)
        setThreadState(false)
        setSearchState(false)
    }

    return (
        <div className="d-flex justify-content-center m-3">
            <Button className="d-flex align-items-center" variant="light" size="sm" onClick={Home}>
                <House /> Home
            </Button>
        </div>
    )
}

export default HomeButton