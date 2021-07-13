import { useEffect, useState } from "react";
import myWorker from './myWorker.js';
import WebWorker from './workerSetup';
import { Button,InputGroup,FormControl  } from 'react-bootstrap';
// export const updateValue = (a=0)=>{
//     return a+1;
// }
let initWorker;
function Child() {
    const [inputVal, setInputVal] = useState(0);
    const [output, setOutput] = useState();
    useEffect(()=>{
        if(window.Worker){
            initWorker = new WebWorker(myWorker);
        }
    },[])

    const fetchData = () => {
        setOutput("Fetching Data from web workers...")
        // sending data to web workers
        initWorker.postMessage(inputVal);
        // Getting data from web workers
        initWorker.addEventListener('message', event => {
			console.log("Get Data",event);
            setOutput(event.data);
		});
    }

    return (
        <div  className="App pt-2" style={{backgroundColor: "darkgray"}}>
            <h4>Web Worker Example</h4>
            <InputGroup className="mb-3 pl-2 pr-2 input-group-sm" onChange={(e)=>setInputVal(e.target.value)}>
                <InputGroup.Text id="inputGroup-sizing-sm" size="sm" style={{fontSize:"0.74rem"}}>Enter Number</InputGroup.Text>
                <FormControl type={"number"} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </InputGroup>
            <Button onClick={()=>fetchData()} size={'sm'}>Square root</Button>
            <p className="pb-3">Sq.root : {output}</p>
        </div >
    )

    

}

export default Child;