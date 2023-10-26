import { useSate, useState } from "react";

function Counter(props) {
    const [number, setNumber] = useState(props.defaultNumber);
    const [ratioChange, setRatioChange] = useState(1);

    function addRatio() {
        setNumber(number + parseInt(ratioChange));
    }
    function subtractRatio() {
        setNumber(number - ratioChange);
    }
    
    return (
        <div key={props.index}>
            <input type="number" value={ratioChange} onChange={(event) => {setRatioChange(event.target.value)}} />
            <button onClick={addRatio}>+</button>
            <button onClick={subtractRatio}>-</button>
            <h1>{number}</h1>
        </div>
    );
}

export default Counter;