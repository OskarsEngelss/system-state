import {useState} from "react";

function LabelCheck(props) {
    const [check, setCheck] = useState(props.checked);

    return (
        <div key={props.index}>
            <label>
                {props.label}
                <input type="checkbox" checked={check} onChange={() => {setCheck(!check)}} />
            </label>
        </div>
    )
}

export default LabelCheck;