import { React, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap"
import { CheckLg } from "react-bootstrap-icons"

function SubscriptionHandler({ searchResults, thread, threads, setThreads, session, setSession }) {
    const userId = session.userId
    const threadId = thread._id

    const [subscribe, setSubscribe] = useState(session.user.threads.includes(threadId))

    //Subscription toggle:

    const toggleSub = () => {
        setSubscribe(!subscribe)
    }

    //Subscribe function:

    function Subscribe() {
        toggleSub()
        console.log('Subscribed!')

        fetch("//localhost:4200/api/auth/thread/subscribe", {
            method: 'PATCH',
            body: JSON.stringify({ threadId, userId }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(setThreads(threads => [...threads, thread]))

    }

    //Unsubscribe function:

    function Unsubscribe() {
        toggleSub()
        console.log('Unsubscribed!')

        const newThreads = threads.filter((threads) => {
            return threads !== thread
        })

        fetch("//localhost:4200/api/auth/thread/unsubscribe", {
            method: 'PATCH',
            body: JSON.stringify({ threadId, userId }),
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(setThreads(newThreads))
            console.log(threads)
    }

    return (
        <>
            {subscribe ?

                <Button className="d-flex justify-content-center align-items-center" variant="light" size="sm" onClick={Unsubscribe}>
                    Subscribed
                    <CheckLg className="text-success" />
                </Button>
                :
                <Button variant="primary" size="sm" onClick={Subscribe}>
                    Subscribe
                </Button>
                
            }
        </>
    )

}

export default SubscriptionHandler