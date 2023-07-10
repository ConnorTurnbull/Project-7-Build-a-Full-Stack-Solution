import React from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

const Logout = ({
    setAuthenticated,
    setSearchResults,
    setSearchState,
    setThreadState,
    setDefaultState,
    session }) => {

    function LogoutHandler() {
        setAuthenticated(false)
        setSearchState(false)
        setThreadState(false)
        setDefaultState(true)
        setSearchResults('')
        sessionStorage.clear()
    }

    function DeleteHandler(e) {
        e.preventDefault()
        const userId = session.userId

        fetch("//localhost:4200/api/auth/delete", {
            method: 'DELETE',
            body: JSON.stringify({ userId }),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())

        // .then(
        //     LogoutHandler
        // )
    }

    return (
        <Dropdown as={ButtonGroup} >

            <Button onClick={LogoutHandler} className=' w-100 text-nowrap ' size='sm' variant="light">
                Log Out
            </Button>

            <Dropdown.Toggle split variant="light" id="dropdown-split-basic"></Dropdown.Toggle>

            <Dropdown.Menu className="p-0 d-flex justify-content-center">

                <Button className="w-100" variant="light" onClick={DeleteHandler}>
                    Delete Account
                </Button>

            </Dropdown.Menu>

        </Dropdown>

    )
}

export default Logout