import React, { useEffect, useState } from "react";


function SideNav() {
    const [threads, setThreads] = useState([])
    const [threadID, setThreadID] = useState('')

    const getThreads = async () => {

        fetch("//localhost:4200/api/auth/thread")
            .then(data => {
                return data.json()
            })
            .then(threadData => {
                console.log(threadData)
                setThreads(threadData)
            })
    }

    useEffect(() => {
        getThreads()
    }, [])
    
   
    // const getPosts = async () => {
        
    //     fetch("//localhost:4200/api/auth/post")           
    //     .then(data => {
    //         return data.json()
    //     })
    //     .then(postData => {
    //         console.log(postData)
    //     })

    // }

    return (
        <aside className="sideNav d-flex align-items-center justify-content-center vstack gap-3">
            
            <h3 className="mt-2 text-light">Threads</h3>
            {threads.map(thread => (
                <a href='#' value={thread._id} key={thread._id}>{thread.title}</a>
            ))}

        </aside>
    )
}

export default SideNav;