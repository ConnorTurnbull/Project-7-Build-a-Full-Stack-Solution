import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from 'react-bootstrap';
import { getThreads } from "../../utilities";
import { Search } from "react-bootstrap-icons"

function SearchBar({ setSearchResults, setSearchState, setDefaultState }) {
    const [userSearch, setUserSearch] = useState('')

    const queryThreads = async => {
        fetch("//localhost:4200/api/auth/thread?title=" + userSearch)
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
    <Form>
        <InputGroup>
            <Form.Control name='Search Bar' onChange={(e) => setUserSearch(e.target.value)} placeholder="Discover new threads..." />
            <Button title='Search submit button' onClick={queryThreads} size='sm' variant="light" >
                <Search aria-hidden="true" />
            </Button>
        </InputGroup>
    </Form>

)
}

export default SearchBar