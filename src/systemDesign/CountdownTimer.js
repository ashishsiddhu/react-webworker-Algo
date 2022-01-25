import { useEffect, useState } from "react";

let timer;
function CountdownTimer (props) {
    const [counter, setCounter] = useState(100);

    useEffect(()=>{
        if(counter === 0) clearTimeout(timer);
        timer = setTimeout(()=>{
            setCounter(counter-1);
        },1000)
    },[counter])

    const stopTimer = () => {
        clearTimeout(timer);
    }
    return (
        <div>
            Timer: {counter}
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )

}

export default CountdownTimer;