import { useState } from "react";

const images = [
    'https://picsum.photos/400/300/?image=926',
    'https://picsum.photos/400/300/?image=925',
    'https://picsum.photos/400/300/?image=924',
    'https://picsum.photos/400/300/?image=923',
    'https://picsum.photos/400/300/?image=922',
    'https://picsum.photos/400/300/?image=921',
];
function Carousel(props) {
    // const [showImage, setShowImage] = useState(false);
    const [counter, setCounter] = useState(0);

    const prevContent = () => {
        if(counter <= 0) return false;
        setCounter(counter-1);
    }
    /****
     * @param {Number} 
     * @return {void}
     */
    const nextContent = () => {
        if(counter >= images.length-1) return false;
        setCounter(counter+1);
    }
    
    return (
        <div>
            <img src={images[counter]} style={{
                display: "inline-block",
                transition: "1s"
            }}/>
            <button onClick={prevContent}>Back</button>
            <button onClick={nextContent}>Next</button>
        </div>
    )
}

export default Carousel;