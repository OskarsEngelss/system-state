import { useSate, useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    const [ratioChange, setRatioChange] = useState(1);

    function addRatio() {
        setNumber(number + parseInt(ratioChange));
    }
    function subtractRatio() {
        setNumber(number - ratioChange);
    }
    
    return (
        <div className="App">
            <input type="number" value={ratioChange} onChange={(event) => {setRatioChange(event.target.value)}} />
            <button onClick={addRatio}>+</button>
            <button onClick={subtractRatio}>-</button>
            <h1>{number}</h1>
        </div>
    );
}

export default Counter;