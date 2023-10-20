import Counter from "./Counter.js";
import Hello from "./Hello.js";

function App() {
    const words = ["Oskars", "Kristaps", "Kristers"];
    const wordsJSX = words.map((word, index) => {
        return (
            <Hello key={index} defaultWord={word} />
        );
    });

   return (
       <>
        <Counter />
        {wordsJSX}
       </>
   );
}


export default App;