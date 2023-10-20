import {useState} from "react";

function Hello(props) {
    const [name, setName] = useState(props.defaultWord);
    
    return (
        <div key={props.index}>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
            <p>Hello {name}</p>
        </div>
    );
}

export default Hello;