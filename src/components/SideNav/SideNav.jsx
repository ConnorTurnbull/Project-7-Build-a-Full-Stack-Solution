import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { getThreads } from "../../utilities";


function SideNav({ session, setPosts, setSearchResults, threadState, setThreadState, setDefaultState, setSearchState, setPostState }) {
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

        fetch("//localhost:4200/api/auth/posts?selectedThread=" + selectThread)
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
            setSearchState(false)
            setPostState(false)
        }

    }, [selectThread])

    useEffect(() => {

        if (!threadState) {
            setSelectThread('')
        }

    }, [threadState])

    return (

        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-2">

            <h3 className="mt-2 text-light">Threads</h3>

            {Array.isArray(threads) ? threads.map(thread => (


                    <Button
                        variant="light"
                        onClick={() => setSelectThread(thread._id)}
                        title={thread.title}
                        value={thread._id}
                        key={thread._id}
                    >

                        {thread.title}
                    </Button>


            )) : <p>{threads?.message}</p>}

        </aside>

    )
}

export default SideNav;