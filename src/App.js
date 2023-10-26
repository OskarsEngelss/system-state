import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from "./Check.js";
import LabelCheck from "./LabelCheck.js";

function App() {
    const numbers = [7, 43, 101];
    const counterJSX = numbers.map((number, index) => {
        return (
            <Counter key={index} defaultNumber={number} />
        );
    });



    const words = ["Oskars", "Kristaps", "Kristers"];
    const helloJSX = words.map((word, index) => {
        return (
            <Hello key={index} defaultWord={word} />
        );
    });


    const checks = [true, true, false];
    const onlyCheckJSX = checks.map((check, index) => {
        return (
            <Check key={index} checked={check} />
        );
    });


    const labelsWithInputs = 
    [
        {label: "Agree to the Policy", checked: true},
        {label: "Receive Offers", checked: false}
    ];
    const labelCheckJSX = labelsWithInputs.map((singleLableWithInput, index) => {
        return (
            <LabelCheck key={index} label={singleLableWithInput.label} checked={singleLableWithInput.checked} />
        );
    });

    

   return (
       <>
        {counterJSX}
        {helloJSX}
        {onlyCheckJSX}
        {labelCheckJSX}
       </>
   );
}


export default App;