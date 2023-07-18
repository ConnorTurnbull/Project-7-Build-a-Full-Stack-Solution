import { React, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap"
import { CheckLg } from "react-bootstrap-icons"

function SubscriptionHandler({ searchResults, thread, session }) {

    const [subscribe, setSubscribe] = useState(true)

    const userId = session.userId
    const threadId = thread._id

    const toggleSub = () => {
        setSubscribe(!subscribe)
    }

    function Subscribe() {
        console.log(session.userId, thread._id)

        fetch("//localhost:4200/api/auth/thread/subscribe", {
            method: 'PATCH', 
            body: JSON.stringify({ threadId, userId }),
            headers: {"Content-Type" : "application/json"}
        })
        .then(res => res.json())

    }

    return (

        <Button variant="nooutline-primary" size="sm"  onClick={toggleSub}>

            {subscribe ?

                <Button variant="primary" size="sm">
                    Subscribe
                </Button>
                :
                <Button className="d-flex justify-content-center align-items-center" as={ButtonGroup} variant="light" size="sm" onClick={Subscribe()} >
                    Subscribed 
                    <CheckLg className="text-success"/>
                </Button>
            
            }

        </Button>

    )

}

export default SubscriptionHandler