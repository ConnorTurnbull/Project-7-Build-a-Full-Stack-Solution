import React from "react";
import { Button } from "react-bootstrap";

const Logout = ({ 
    setAuthenticated, 
    setSearchResults, 
    setSearchState, 
    setThreadState,
    setDefaultState }) => {

    function LogoutHander() {
        setAuthenticated(false)
        setSearchState(false)
        setThreadState(false)
        setDefaultState(true)
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