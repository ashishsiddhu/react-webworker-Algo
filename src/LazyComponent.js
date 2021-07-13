import React, { useEffect } from "react";
import { useHistory,useLocation } from "react-router-dom";
import { Button } from 'react-bootstrap';
function LazyComponent () {
    const history = useHistory();
    const location = useLocation();
    useEffect(()=>{
    },[])

    
    function handleClick() {
        console.log("location>",location)
        history.push("/star");
    }
    
    return (
        <div>
            {<h2>Lazy component</h2>}
            <p>
                <Button onClick={handleClick} size={"sm"}>
                    Star Compoent
                </Button>
            </p>
            <Button size={"sm"} onClick={()=>history.push("/")}>
                Go Home
            </Button>
        </div>
        )

}

export default LazyComponent;