import React, { useEffect, useState, Suspense } from "react";
// import Child  from "./Child";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Button, Toast, Jumbotron, Container, Alert } from 'react-bootstrap';
// import Carousel from "./systemDesign/Carousel"
import CountdownTimer from "./systemDesign/CountdownTimer"
import ReducerExample from "./systemDesign/ReducerExample"
import Accordion from "./systemDesign/Accordion"
let response = {};

const ShowTost = ({ myData }) => {
    const [showData, setShowData] = useState(false);
    return (<Container>
        <Button onClick={() => setShowData(true)} size={'sm'}>Show Toast</Button>
        {showData &&
            <Toast onClose={() => setShowData(false)} style={{ margin: "auto" }} className={"mt-2"}>
                <Toast.Header>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Toast.Header>
                <Toast.Body>{myData}</Toast.Body>
            </Toast>
        }
    </Container>
    )
}

const ShowAlert = ({ myData }) => {
    const [showData, setShowData] = useState(false);
    return (<Container>
        <Button onClick={() => setShowData(true)} size={"sm"} className={"mt-2"}>Show Alert</Button>
        {showData &&
            <Alert style={{ margin: "auto" }} variant="success" className={"mt-2"}>
                <Alert.Heading>
                    <strong className="mr-auto">React-Bootstrap</strong>
                </Alert.Heading>
                <p>{myData}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShowData(false)} variant="outline-success">
                        Close me y'all!
                </Button>
                </div>
            </Alert>
        }
    </Container>
    )
}

function StarSVGIcon({style,onClick, onMouseEnter, onMouseLeave}) {
    return (
    <>
        <svg height="25" width="23" className="star rating" data-rating="1" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" fill={style.color || "red"}/>
        </svg>
        {/* <svg height="30" width="30" onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <circle cx="10" cy="10" r="10" fill={style.color || "red"}></circle>
        
        </svg> */}
    </>
     );
}

function Star() {
    const [count, setCount] = useState(0);
    const [hoverCount, setHoverCount] = useState(0);
    const [showData, setShowData] = useState([]);
    const [currentId, setCurrentId] = useState(1);

    useEffect(() => {
        fetchData();

    }, [count])
    const fetchData = async () => {
        // import("./ThreadComponent").then((result)=>{
        //     console.log(result.updateValue(1));
        // })
        try {
            let myData = await fetch("https://jsonplaceholder.typicode.com/todos/" + currentId);
            if (myData.ok) {
                response = await myData.json();
                console.log("response>>", response);
                setShowData([...showData, response]);
                setCurrentId(c => c + 1);
            } else {
                console.log("eeee>>", myData.status);
            }
        } catch (e) {
            console.log("Error>>", e)
        }
    }
    const getColor = (i) => {
        if (count > i || hoverCount > i) {
            return "yellow"
        } else {
            return "grey"
        }
    }

    const starData = () => {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            arr.push(
                <StarSVGIcon 
                    style={{color:getColor(i)}}
                    onClick={(e) => setCount(i + 1)}
                    onMouseEnter={(e)=>setHoverCount(i + 1)}
                    onMouseLeave={(e) => setHoverCount(0)}
                    key={i}
                    />
            )
        }
        return arr;
    }
    


    return (
        <>
            <div id="myStar" style={{ cursor: "pointer" }}>
                {starData()}
            </div>
            {count}
            {/* <Carousel /> */}
            {/* <CountdownTimer /> */}
            {/* <ReducerExample/> */}
            {/* <Accordion/> */}
            <ShowTost myData={"This is my Tost data from Star.js"}></ShowTost>
            <ShowAlert myData={"This is my Alert data from Star.js"}></ShowAlert>
            <p className={"mt-3 mb-1"}>
                <Button onClick={() => fetchData()} variant="danger" size={'sm'}>Fetch Random Data</Button>
            </p>
            <h3>MyData: </h3>
            {showData.length &&
                <table>
                    <tbody>
                        {showData.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td style={{ padding: "0 4rem" }}>{a.id}</td>
                                    <td style={{ textAlign: "left" }}>{a.title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </>
    )
}


// Star.propTypes = {
//     count: PropTypes.number,
//     rating: PropTypes.number,
// }
// Star.defaultProps = {
//     count: 5,
//     rating: 0
// }

export default Star;