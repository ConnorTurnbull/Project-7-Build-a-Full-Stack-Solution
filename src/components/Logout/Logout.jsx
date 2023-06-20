import React from "react";
import { Button } from "react-bootstrap";

const Logout = ({ setAuthenticated, setSearchResults }) => {

    function LogoutHander() {
        setAuthenticated(false)
        setSearchResults('')
        sessionStorage.clear()
    }

    return (
        <Button onClick={LogoutHander} className=' w-100 text-nowrap ' size='sm' variant="light">
            Log Out
        </Button>
    )
}

export default Logout