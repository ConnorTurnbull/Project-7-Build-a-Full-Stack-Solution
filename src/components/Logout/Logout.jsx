import React from "react";
import { Button } from "react-bootstrap";

const Logout = ({ setAuthenticated, setSearchResults, searchResults }) => {

    function LogoutHander() {
        setAuthenticated(false)
        sessionStorage.clear()
    }

    return (
        <Button onClick={LogoutHander} className=' w-100 text-nowrap ' size='sm' variant="light">
            Log Out
        </Button>
    )
}

export default Logout