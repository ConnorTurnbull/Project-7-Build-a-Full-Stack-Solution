import React, { useEffect, useState } from "react";
import { InputGroup, Form, Button } from 'react-bootstrap';
import { getThreads } from "../../utilities";
import { Search } from "react-bootstrap-icons"

function SearchBar({ setSearchResults }) {
    const [userSearch, setUserSearch] = useState('')
    const [threads, setThreads] = useState([])

    const allThreads = async => {
        fetch("//localhost:4200/api/auth/thread")
            .then(data => {
                return data.json()
            })
        console.log(allThreads)
    }


    return (
        <InputGroup>
            <Form.Control onChange={(e) => setUserSearch(e.target.value)} placeholder="Discover new threads..." />
            <Button size='sm' variant="light" >
                <Search />
            </Button>
        </InputGroup>
    )
}

export default SearchBar