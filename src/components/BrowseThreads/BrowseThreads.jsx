import React from "react";
import { Button } from 'react-bootstrap'

function BrowseThreads({ setSearchResults, setDefaultState, setSearchState }) {

    const queryThreads = async => {
        fetch("//localhost:4200/api/auth/thread")
            .then(data => {
                return data.json()
            })
            .then(threadData => {
                console.log(threadData)
                setSearchResults(threadData)
                setSearchState(true)
                setDefaultState(false)
            })
    }

    return (
        <Button  variant="light" onClick={queryThreads}>
            Browse Threads
        </Button>
    )
}

export default BrowseThreads