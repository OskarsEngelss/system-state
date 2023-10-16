import { useSate, useState } from "react";

function App() {
    const [number, setNumber] = useState(0);
    const [userNumber, setUserNumber] = useState();
    function plusOne() {
        setNumber(number + 1);
    }
    function minusOne() {
        setNumber(number - 1);
    }
    function yourOwn() {
        setNumber(number + userNumber);
    } 
    
    return (
        <div className="App">
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <input type="text" value={userNumber}></input>
            <button onClick={yourOwn}>Add your own number</button>
            <h1>{number}</h1>
        </div>
    );
}


export default App;