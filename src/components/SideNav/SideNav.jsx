import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { getThreads } from "../../utilities";


function SideNav({ session, setPosts, threadState, setThreadState, setDefaultState, setSearchResults }) {
    const [threads, setThreads] = useState([])
    const [selectThread, setSelectThread] = useState('')



    //Populate subscribed threads list:

    useEffect(() => {
        getThreads({ setThreads, queryString: "?userId=" + session.userId })
    }, [])

    console.log(threads)
    console.log(selectThread)

    //Fetch posts for individual threads:

    function getPosts() {

        fetch("//localhost:4200/api/auth/post?selectedThread=" + selectThread)
            .then(data => {
                return data.json()
            })
            .then(postData => {
                setPosts(postData)

            })

    }

    useEffect(() => {
        
        if (!!selectThread) {
            getPosts()
            setThreadState(true)
            setDefaultState(false)
            setSearchResults(false)
        }

    }, [selectThread])

    useEffect(() => {

        if (!threadState) {
            setSelectThread('')
        }

    }, [threadState])

    return (

        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-0">

            <h3 className="mt-2 text-light">Threads</h3>

            {Array.isArray(threads) ? threads.map(thread => (

                <Button variant="link" onClick={() => setSelectThread(thread._id)} title={thread.title} value={thread._id} key={thread._id}>
                    {thread.title}
                </Button>

            )) : <p>{threads?.message}</p>}

        </aside>

    )
}

export default SideNav;