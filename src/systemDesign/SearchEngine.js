import React from "react";
const arr = ["hello","ashish", "siddhu", "how","are", "you"];
export default function App() {
  const [value, setValue] = React.useState(arr);
  const inputRef = React.useRef();

  const handleInput = () => {
    let ref = inputRef.current.value;
    // filter out data 
    let filterContent = arr.filter(str => {
      return str.includes(ref); // this will help to filter substring
    })
    setValue(filterContent);
  }
  
  const table = () => {
    return (
      <table style={{display: "flex",justifyContent:"center",alignItems:"center"}}>
        <tbody>
          {value.map((a,i)=>{
            return( 
              <tr key={i}>
                <td>{a}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <div className="App">
      <input ref={inputRef} onChange={()=>handleInput()}/>
      {table()}
    </div>
  );
}
