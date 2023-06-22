import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { getThreads } from "../../utilities";


function SideNav({ session, setThreadState, setPosts, setDefaultState }) {
    const [threads, setThreads] = useState([])
    const [selectThread, setSelectThread] = useState('')

    // console.log(selectThread)

    useEffect(() => {
        getThreads({ setThreads, queryString: "?userId=" + session.userId })
    }, [])

    function getPosts() {
        fetch("//localhost:4200/api/auth/post?selectedthread=" + selectThread)
            .then(data => {
                return data.json()
            })
            .then(postData => {
                console.log(postData)
                console.log(selectThread)
                setPosts(postData)
            })
    }
    
    useEffect(() => {
        getPosts()
    }, [selectThread])
    
    function displayThread(e) {
        e.preventDefault()
        setSelectThread(threads._id)
        setDefaultState(false)
        setThreadState(true)
    }

    return (

        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-3">

            <h3 className="mt-2 text-light">Threads</h3>
            {Array.isArray(threads) ? threads.map(thread => (
                <a onClick={displayThread}
                    href='#'
                    title={thread.title}
                    value={thread._id}
                    key={thread._id}>
                    {thread.title}
                </a>
            )) : <p>{threads?.message}</p>}

        </aside>

    )
}

export default SideNav;