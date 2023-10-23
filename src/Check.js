import {useState} from "react";

function Check(props) {
    const [check, setCheck] = useState(props.checked);

    return (
        <div key={props.index}>
            <input type="checkbox" checked={check} onChange={(event) => {setCheck(event.target.checked)}} />
        </div>
    )
}

export default Check;