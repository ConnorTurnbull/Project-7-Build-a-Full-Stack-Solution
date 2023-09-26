 import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

function SideNav({ 
    session,
    setPosts,
    setSearchResults,
    threadState,
    setThreadState,
    setDefaultState,
    setSearchState,
    setPostState,
    threads,
    setThreads,
    selectThread,
    setSelectThread
}) 

{
    
    //Populate subscribed threads list:

    const getThreads = async ({ setThreads, queryString }) => {

        fetch("//localhost:4200/api/auth/thread" + (queryString ||""))
            .then(data => {
                return data.json()
            })
            .then(threadData => {
                setThreads(threadData)
            })
    }
    
    useEffect(() => {
        getThreads({ setThreads, queryString: "?userId=" + session.userId })
    }, [])
    
    useEffect(() => {

        if (!!selectThread) {
            
            setThreadState(true)
            setDefaultState(false)
            setSearchState(false)
            setPostState(false)

        }

    }, [selectThread])

         return (

        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-2">

            <h3 className="mt-2 text-light">Threads</h3>

            {Array.isArray(threads) ? threads.map(thread => (


                    <Button
                        variant="light"
                        onClick={() => {setSelectThread(thread.id); console.log(selectThread)}}
                        title={thread.title}
                        value={thread.id}
                        key={thread.id}
                    >

                        {thread.title}
                    </Button>


            )) : <p>{threads?.message}</p>}

        </aside>

    )
}

export default SideNav;