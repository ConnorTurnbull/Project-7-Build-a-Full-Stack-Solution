import { React, useState } from "react";
import { Button } from "react-bootstrap"
import { Heart, HeartFill } from "react-bootstrap-icons"

function SubscriptionHandler({ searchResults, thread }) {

    const [subscribe, setSubscribe] = useState(true)
    
    const toggleSub = () => {
        setSubscribe(!subscribe)
        console.log(thread._id)
        console.log(subscribe)

    }

    
    
    return (

        <Button variant="nooutline-primary" size="sm" onClick={toggleSub}>
            {subscribe ? <Heart color='blue' size={24} /> : <HeartFill color='blue' size={24} />}
        </Button>

    )

}

export default SubscriptionHandler