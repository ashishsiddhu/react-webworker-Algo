import { useRef, useReducer, useState } from "react";

const reducer = (state,action) => {

    // switch(action.type){
    //     case ("INCREASE"): 
    //         return {count: state.count+action.data};
    //     case ("DECREASE"): 
    //         return {count: state.count-action.data};
    //     case ("CLEAR"):
    //         return {count: 0};
    //     default:
    //         throw new Error("This is error for "+action.type);
    // }
    switch (action.type) {
        case ("ADD"):
            return [...state, { 
                    id: state.length, 
                    data: action.response 
                }]
        case ("CLEAR"):
            return [{ 
                    id: 0, 
                    data: action.response 
                }]
        default:
            throw new Error(`This is error for ${action.type}`);
    }
}

const ReducerExample = () => {
    // const [count, dispatch] = useReducer((state,action)=>{
    //     return state+action.count
    // }, 0)
    //const [state, dispatch] = useReducer(reducer, {count:0})
    const [arr, setArr] = useReducer(reducer,[{id:0,data:""}])
    const inputVal = useRef();
    const dateVal = useRef();
    const [date,setDate] = useState("");
    
    return (
        <div>
            {/* <button onClick={()=>dispatch({type:'INCREASE',data:1})}>Add </button>
            <button onClick={()=>dispatch({type:'DECREASE',data:1})}>Subtract </button>
            <button onClick={()=>dispatch({type:'CLEAR',data:0})}>Clear</button>
            Count:  {state.count} */}
            <input ref={inputVal} />
            <button onClick={()=> setArr({ type: "ADD", response: inputVal.current.value })}>Add Array</button>
            <button onClick={()=> setArr({ type: "CLEAR", response: "" })}>Clear</button>
            {arr.map((val) => {
                return (<>  <div>{val.id}</div>
                            <div>{val.data}</div></>)
            })}
        </div>
    )
}

export default ReducerExample;